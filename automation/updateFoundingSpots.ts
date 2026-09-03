// updateFoundingSpots v1.1 — computes the CONFIRMED founding-spot count and
// pushes it into Kit Email 4 ("Is this AI slop? No.", sequence 2882178,
// email 10268390) via the Kit v4 API.
//
// CLAIM RULES (deliberate, not defaults):
//  1. Only Co-Pilot applicants count:  query filters path === 'Co-Pilot $2,500 founding'
//     (the exact <option> value from docs/formulary.html). Blueprint $397 buyers
//     and Signature leads never consume founding spots.
//  2. Raw submissions do NOT count as claimed. A record only counts after
//     foundingStatus === 'accepted' — which is set manually when Baron (the
//     owner) confirms acceptance in chat/call/email. formularyLead writes
//     applications WITHOUT foundingStatus, so a fresh form submission has
//     zero effect on this count until a human accepts it.
//  3. Trigger: manual, on Baron's explicit confirmation ("accept X as founding
//     member") — Koda sets foundingStatus='accepted' on the record, then runs
//     this function. No entity-change automation fires it automatically.
//
// Guard: requires the scoped proxy token (header x-proxy-key or body.key)
// matching KIT_PROXY_KEY — same guard pattern as kitApi. The master Kit key
// (KIT_V4_API_KEY) is read from Base44's backend env only.

import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const KIT = 'https://api.kit.com/v4';
const SEQUENCE_ID = '2882178';
const EMAIL_ID = '10268390';
const TOTAL_SPOTS = 5;
const CO_PILOT_PATH = 'Co-Pilot $2,500 founding'; // exact value from formulary.html
const FORM_URL = 'https://www.bayoubeauxllc.com/formulary.html';

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ success: false, error: 'Method not allowed' }, 405);

  const proxyKey = Deno.env.get('KIT_PROXY_KEY');
  if (!proxyKey) return json({ success: false, error: 'Proxy key not configured' }, 500);

  let body: Record<string, any> = {};
  try { body = await req.json(); } catch { /* allow empty body */ }

  // ---- Guard: scoped proxy token (header preferred, body fallback) ----
  const supplied = req.headers.get('x-proxy-key') || body.key || '';
  if (supplied !== proxyKey) return json({ success: false, error: 'Unauthorized' }, 401);

  const kitKey = Deno.env.get('KIT_V4_API_KEY');
  if (!kitKey) return json({ success: false, error: 'Kit API key not configured' }, 500);

  // ---- 1. Count CONFIRMED founding claims (not raw submissions) ----
  let claimed = 0;
  let applicants: any[] = [];
  try {
    const base44 = createClientFromRequest(req);
    applicants = await base44.asServiceRole.entities.FormularyApplication.filter({
      path: CO_PILOT_PATH,
      foundingStatus: 'accepted',
    });
    claimed = (applicants || []).length;
  } catch (e) {
    return json({ success: false, error: 'Entity query failed', detail: String(e) }, 500);
  }

  if (claimed > TOTAL_SPOTS) {
    return json({ success: false, error: `claimed (${claimed}) exceeds TOTAL_SPOTS (${TOTAL_SPOTS}) — refusing to publish` }, 409);
  }
  const remaining = TOTAL_SPOTS - claimed;

  // ---- 2. Sentence variants (live in Email 4, never fake scarcity) ----
  const statusP = claimed === 0
    ? '<p>&gt;&gt; All 5 founding spots are still open — the doors just opened. &lt;&lt;</p>'
    : `<p>&gt;&gt; ${claimed} founding spot${claimed === 1 ? '' : 's'} already claimed from early replies. &lt;&lt;</p>`;
  const ctaP = remaining > 0
    ? `<p>If you want one of the remaining ${remaining}: <a href="${FORM_URL}">${FORM_URL}</a></p>`
    : `<p>All 5 founding spots are claimed — get on the waitlist: <a href="${FORM_URL}">${FORM_URL}</a></p>`;

  // ---- 3. Fetch current Email 4 and rewrite the two owned paragraphs ----
  const kitHeaders = { 'Content-Type': 'application/json', 'X-Kit-Api-Key': kitKey };
  let content = '';
  const wasPublishedRef = { v: false };
  try {
    const getRes = await fetch(`${KIT}/sequences/${SEQUENCE_ID}/emails/${EMAIL_ID}`, { headers: kitHeaders });
    if (!getRes.ok) return json({ success: false, error: 'Kit fetch failed', status: getRes.status }, 502);
    const email = ((await getRes.json()) as any).email;
    content = email?.content ?? '';
    wasPublishedRef.v = email?.published === true;
  } catch (e) {
    return json({ success: false, error: 'Kit fetch failed', detail: String(e) }, 502);
  }

  // The status paragraph is the one wrapped in >> ... << (HTML-escaped).
  // The CTA paragraph is the one starting "If you want". Both are fully owned
  // by this function — anything else in the email is never touched.
  const statusRe = /<p>[^<]*&gt;&gt;[^<]*&lt;&lt;\s*<\/p>/;
  const ctaRe = /<p>If you want[^]*?<\/p>/;

  if (!statusRe.test(content) || !ctaRe.test(content)) {
    return json({
      success: false,
      error: 'Email 4 paragraphs not found in expected shape — refusing to write rather than corrupt content',
      statusFound: statusRe.test(content),
      ctaFound: ctaRe.test(content),
    }, 409);
  }

  const updated = content.replace(statusRe, statusP).replace(ctaRe, ctaP);
  const changed = updated !== content;
  const wasPublished = wasPublishedRef.v;

  // ---- 4. Push ----
  // Kit quirk: a content-only PUT on a PUBLISHED sequence email returns 200
  // but silently drops the change. Content edits only persist when
  // published:false rides along. So for published emails we do a verified
  // two-step: write content unpublished -> verify it stuck -> republish.
  // The email is never left unpublished, and a failed verify restores the
  // original content. The final published state always equals the original.
  if (changed) {
    try {
      // Step 1: write content (with published:false if it was published)
      const writeRes = await fetch(`${KIT}/sequences/${SEQUENCE_ID}/emails/${EMAIL_ID}`, {
        method: 'PUT',
        headers: kitHeaders,
        body: JSON.stringify(wasPublished ? { content: updated, published: false } : { content: updated }),
      });
      if (!writeRes.ok) return json({ success: false, error: 'Kit write failed', status: writeRes.status }, 502);

      // Step 2: verify the content actually persisted
      const verifyRes = await fetch(`${KIT}/sequences/${SEQUENCE_ID}/emails/${EMAIL_ID}`, { headers: kitHeaders });
      const verifyContent = verifyRes.ok ? (((await verifyRes.json()) as any).email?.content ?? '') : '';
      if (verifyContent !== updated) {
        // restore original content + publish state, then report failure
        await fetch(`${KIT}/sequences/${SEQUENCE_ID}/emails/${EMAIL_ID}`, {
          method: 'PUT',
          headers: kitHeaders,
          body: JSON.stringify(wasPublished ? { content, published: true } : { content }),
        });
        return json({ success: false, error: 'Kit accepted the write but did not persist it — original content restored', kitPushed: false }, 502);
      }

      // Step 3: restore the original published state
      if (wasPublished) {
        const repubRes = await fetch(`${KIT}/sequences/${SEQUENCE_ID}/emails/${EMAIL_ID}`, {
          method: 'PUT',
          headers: kitHeaders,
          body: JSON.stringify({ published: true }),
        });
        if (!repubRes.ok) return json({ success: false, error: 'Content updated but republish failed — re-run this function or publish Email 4 in Kit', status: repubRes.status }, 502);
      }
    } catch (e) {
      return json({ success: false, error: 'Kit update failed', detail: String(e) }, 502);
    }
  }

  return json({
    success: true,
    claimed,
    remaining,
    acceptedApplicants: applicants.map((a: any) => ({ id: a.id, name: a.name, email: a.email })),
    sentence: statusP.replace(/<\/?p>/g, ''),
    kitPushed: changed,
    publishedAfter: wasPublishedRef.v,
  });
});
