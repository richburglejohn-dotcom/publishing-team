// v4 — Lead Magnet support: applies the Kit tag from lead_tag, and routes
// lead-magnet signups to the checklist sequence instead of the founding-application
// launch sequence. Founding paths keep the original Blueprint behavior.
// NOTE: env is baked at deploy time — redeploy after any secret change.
import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

const BLUEPRINT_SEQUENCE_ID = '2882178'; // FuturIQ Blueprint Launch (founding applications)
const LEAD_MAGNET_SEQUENCE_ID = ''; // <-- set to the Kit sequence id after creating it; blank = enroll by tag only

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS_HEADERS });
  if (req.method !== 'POST') return json({ success: false, error: 'Method not allowed' }, 405);

  // ---- Parse the form (multipart or JSON) ----
  const contentType = req.headers.get('content-type') || '';
  let f: Record<string, string> = {};
  let attachmentName = '';
  try {
    if (contentType.includes('multipart/form-data')) {
      const fd = await req.formData();
      for (const [key, value] of fd.entries()) {
        if (typeof value === 'string') {
          if (key !== 'attachment') f[key] = value;
        } else if (value && typeof value === 'object' && 'name' in value) {
          if (value.name) attachmentName = String(value.name);
        }
      }
    } else {
      const body = await req.json();
      f = typeof body === 'object' && body !== null ? (body as Record<string, string>) : {};
    }
  } catch (e) {
    return json({ success: false, error: 'Could not parse submission' }, 400);
  }
  if (attachmentName) f['attachmentName'] = attachmentName;

  const name = (f['name'] || '').trim();
  const email = (f['email'] || '').trim().toLowerCase();
  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, error: 'Name and a valid email are required' }, 400);
  }

  const firstName = name.split(/\s+/)[0];
  const path = (f['path'] || '').trim();
  const leadTag = (f['lead_tag'] || f['leadTag'] || '').trim();
  // Lead-magnet submissions go to the checklist funnel, not the founding-application funnel.
  const isLeadMagnet = path === 'Lead Magnet' || /^Lead Magnet/i.test(leadTag);

  const results = {
    savedRecord: false,
    subscriberRecord: false,
    kitSubscriber: false,
    kitTag: false,
    kitSequence: false,
    tag: leadTag || null,
    sequenceId: isLeadMagnet ? (LEAD_MAGNET_SEQUENCE_ID || null) : BLUEPRINT_SEQUENCE_ID,
  };

  // ---- 1. Save the lead as an entity record (service role — anonymous form submitter) ----
  let base44: ReturnType<typeof createClientFromRequest> | null = null;
  try {
    base44 = createClientFromRequest(req);
    await base44.asServiceRole.entities.FormularyApplication.create({
      name,
      email,
      path,
      bookSummary: f['book_summary'] || '',
      audience: f['audience'] || '',
      publishedBefore: f['published_before'] || '',
      biggestBlocker: f['biggest_blocker'] || '',
      timeline: f['timeline'] || '',
      manuscriptNotes: f['manuscript_notes'] || '',
      website: f['website'] || '',
      heardAbout: f['heard_about'] || '',
      aiDisclosureConsent: (f['ai_disclosure_consent'] || '') === 'yes',
      attachmentName: f['attachmentName'] || '',
      leadTag,
    });
    results.savedRecord = true;

    const existing = await base44.asServiceRole.entities.Subscriber.filter({ email });
    if (existing && existing.length > 0) {
      await base44.asServiceRole.entities.Subscriber.update(existing[0].id, {
        name,
        source: isLeadMagnet ? 'lead-magnet' : 'formulary',
        status: 'subscribed',
      });
    } else {
      await base44.asServiceRole.entities.Subscriber.create({
        name,
        email,
        source: isLeadMagnet ? 'lead-magnet' : 'formulary',
        status: 'subscribed',
        emails_sent: 0,
      });
    }
    results.subscriberRecord = true;
  } catch (e) {
    console.log('Entity write failed:', JSON.stringify(e));
  }

  // ---- 2. Kit: subscriber, tag, then the right sequence ----
  // Trim: a trailing space in the stored secret breaks the X-Kit-Api-Key header (401).
  const KIT_KEY = (Deno.env.get('KIT_V4_API_KEY') || '').trim();
  if (KIT_KEY) {
    const kitHeaders = {
      'Content-Type': 'application/json',
      'X-Kit-Api-Key': KIT_KEY,
    };

    // 2a. Create the subscriber
    try {
      const subRes = await fetch('https://api.kit.com/v4/subscribers', {
        method: 'POST',
        headers: kitHeaders,
        body: JSON.stringify({ email_address: email, first_name: firstName }),
      });
      results.kitSubscriber = subRes.ok;
    } catch (e) {
      console.log('Kit subscriber failed:', String(e));
    }

    // 2b. Apply the tag named in lead_tag (create it if it does not exist yet)
    if (leadTag) {
      try {
        let tagId: number | null = null;
        const createRes = await fetch('https://api.kit.com/v4/tags', {
          method: 'POST',
          headers: kitHeaders,
          body: JSON.stringify({ name: leadTag }),
        });
        if (createRes.ok) {
          const payload = await createRes.json();
          tagId = payload?.tag?.id ?? null;
        }
        if (!tagId) {
          // Fall back to looking it up (tag already existed and create refused)
          const listRes = await fetch('https://api.kit.com/v4/tags?per_page=1000', { headers: kitHeaders });
          if (listRes.ok) {
            const payload = await listRes.json();
            const found = (payload?.tags ?? []).find(
              (t: { name?: string }) => String(t.name || '').trim().toLowerCase() === leadTag.toLowerCase(),
            );
            tagId = found?.id ?? null;
          }
        }
        if (tagId) {
          const tagRes = await fetch(`https://api.kit.com/v4/tags/${tagId}/subscribers`, {
            method: 'POST',
            headers: kitHeaders,
            body: JSON.stringify({ email_address: email }),
          });
          results.kitTag = tagRes.ok;
        }
      } catch (e) {
        console.log('Kit tag failed:', String(e));
      }
    }

    // 2c. Enroll in the funnel-appropriate sequence.
    // Lead-magnet sequences are plan-gated in Kit (a second sequence needs a paid plan),
    // so until LEAD_MAGNET_SEQUENCE_ID is set this runs in tag-only mode: the lead is
    // tagged and stored, and no enrollment failure is reported.
    const sequenceId = isLeadMagnet ? LEAD_MAGNET_SEQUENCE_ID : BLUEPRINT_SEQUENCE_ID;
    if (sequenceId) {
      try {
        const seqRes = await fetch(`https://api.kit.com/v4/sequences/${sequenceId}/subscribers`, {
          method: 'POST',
          headers: kitHeaders,
          body: JSON.stringify({ email_address: email }),
        });
        results.kitSequence = seqRes.ok;
      } catch (e) {
        console.log('Kit sequence failed:', String(e));
      }
    }
  }

  if (!results.savedRecord && !results.kitSubscriber) {
    return json({ success: false, error: 'Lead could not be stored — please email bayoubeaux1070@gmail.com directly.' }, 500);
  }

  const sequenceExpected = isLeadMagnet ? Boolean(LEAD_MAGNET_SEQUENCE_ID) : Boolean(BLUEPRINT_SEQUENCE_ID);
  if ((sequenceExpected && !results.kitSequence) || (leadTag && !results.kitTag)) {
    console.log('Kit steps incomplete:', JSON.stringify(results));
  }

  return json({ success: true, ...results });
});
