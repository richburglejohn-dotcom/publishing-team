// kitApi v1.3 — guarded, whitelisted proxy to the Kit (ConvertKit) v4 API.
// The master KIT_V4_API_KEY stays in Base44's backend env — it never reaches
// the agent sandbox. Callers authenticate with the x-proxy-key header
// (KIT_PROXY_KEY) and may only run the operations whitelisted below.

const KIT = 'https://api.kit.com/v4';

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

const num = (v: unknown): string | null => {
  const s = String(v ?? '').trim();
  return /^\d+$/.test(s) ? s : null;
};
const emailOk = (v: unknown) =>
  typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

// ---- Guard helper: constant-time, length-agnostic key comparison ----
// Both inputs are hashed to a fixed 32-byte SHA-256 digest before comparison, so
// the loop below always runs a constant number of byte comparisons and reveals
// nothing about input length. A missing header returns false without throwing.
const guardEncoder = new TextEncoder();
async function constantTimeEquals(supplied: string, expected: string): Promise<boolean> {
  const [a, b] = await Promise.all([
    crypto.subtle.digest('SHA-256', guardEncoder.encode(supplied)),
    crypto.subtle.digest('SHA-256', guardEncoder.encode(expected)),
  ]);
  const av = new Uint8Array(a);
  const bv = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < av.length; i += 1) diff |= av[i] ^ bv[i];
  return diff === 0;
}

type OpDef = {
  method: string;
  path: (a: Record<string, any>) => string | null;
  bodyKeys?: string[];
};

const OPS: Record<string, OpDef> = {
  // Account
  account: { method: 'GET', path: () => '/account' },

  // Subscribers
  listSubscribers: {
    method: 'GET',
    path: (a) => {
      const q = new URLSearchParams();
      const allowed = ['per_page', 'page', 'email_address', 'sort', 'status', 'from', 'to'];
      const query = (a.query ?? {}) as Record<string, unknown>;
      for (const k of allowed) if (query[k] != null) q.set(k, String(query[k]));
      const qs = q.toString();
      return '/subscribers' + (qs ? `?${qs}` : '');
    },
  },
  getSubscriber: {
    method: 'GET',
    path: (a) => { const id = num(a.id); return id ? `/subscribers/${id}` : null; },
  },
  createSubscriber: {
    method: 'POST',
    path: () => '/subscribers',
    bodyKeys: ['email_address', 'first_name', 'fields'],
  },
  updateSubscriber: {
    method: 'PUT',
    path: (a) => { const id = num(a.id); return id ? `/subscribers/${id}` : null; },
    bodyKeys: ['email_address', 'first_name', 'fields'],
  },
  unsubscribeSubscriber: {
    method: 'POST',
    path: (a) => { const id = num(a.id); return id ? `/subscribers/${id}/unsubscribe` : null; },
  },

  // Sequences
  listSequences: { method: 'GET', path: () => '/sequences' },
  getSequence: {
    method: 'GET',
    path: (a) => { const id = num(a.id); return id ? `/sequences/${id}` : null; },
  },
  listSequenceEmails: {
    method: 'GET',
    path: (a) => { const id = num(a.id); return id ? `/sequences/${id}/emails` : null; },
  },
  getSequenceEmail: {
    method: 'GET',
    path: (a) => {
      const s = num(a.sequence_id), e = num(a.email_id);
      return s && e ? `/sequences/${s}/emails/${e}` : null;
    },
  },
  updateSequenceEmail: {
    method: 'PUT',
    path: (a) => {
      const s = num(a.sequence_id), e = num(a.email_id);
      return s && e ? `/sequences/${s}/emails/${e}` : null;
    },
    bodyKeys: ['subject', 'preview_text', 'content', 'published', 'delay_value', 'delay_unit', 'position', 'send_days'],
  },
  addSubscriberToSequence: {
    method: 'POST',
    path: (a) => { const id = num(a.sequence_id); return id ? `/sequences/${id}/subscribers` : null; },
    bodyKeys: ['email_address'],
  },

  // Broadcasts
  listBroadcasts: { method: 'GET', path: () => '/broadcasts' },

  // Tags
  listTags: { method: 'GET', path: () => '/tags' },
  createTag: { method: 'POST', path: () => '/tags', bodyKeys: ['name'] },
  tagSubscriber: {
    method: 'POST',
    path: (a) => { const id = num(a.tag_id); return id ? `/tags/${id}/subscribers` : null; },
    bodyKeys: ['email_address'],
  },
};

const EMAIL_REQUIRED_OPS = new Set(['createSubscriber', 'updateSubscriber', 'addSubscriberToSequence', 'tagSubscriber']);

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ success: false, error: 'Method not allowed' }, 405);

  // ---- Guard: scoped proxy token (not the Kit master key) ----
  const proxyKey = Deno.env.get('KIT_PROXY_KEY');
  if (!proxyKey) return json({ success: false, error: 'Proxy key not configured' }, 500);
  const suppliedProxyKey = req.headers.get('x-proxy-key');
  if (suppliedProxyKey === null || !(await constantTimeEquals(suppliedProxyKey, proxyKey))) {
    return json({ success: false, error: 'Unauthorized' }, 401);
  }

  const kitKey = (Deno.env.get('KIT_V4_API_KEY') || '').trim(); // stored secret may have trailing whitespace
  if (!kitKey) return json({ success: false, error: 'Kit API key not configured' }, 500);

  let body: Record<string, any>;
  try {
    body = await req.json();
  } catch {
    return json({ success: false, error: 'Invalid JSON body' }, 400);
  }

  const opName = String(body.op || '');
  const op = OPS[opName];
  if (!op) {
    return json({ success: false, error: `Unknown op "${opName}". Allowed: ${Object.keys(OPS).join(', ')}` }, 400);
  }
  if (EMAIL_REQUIRED_OPS.has(opName) && !emailOk(body.email_address)) {
    return json({ success: false, error: 'A valid email_address is required' }, 400);
  }

  const path = op.path(body);
  if (!path) return json({ success: false, error: 'Missing or invalid id(s)' }, 400);

  const kitBody: Record<string, any> = {};
  if (op.bodyKeys) for (const k of op.bodyKeys) if (body[k] !== undefined) kitBody[k] = body[k];

  try {
    const res = await fetch(KIT + path, {
      method: op.method,
      headers: { 'Content-Type': 'application/json', 'X-Kit-Api-Key': kitKey },
      ...(op.method === 'GET' ? {} : { body: JSON.stringify(kitBody) }),
    });
    const text = await res.text();
    let data: unknown = text;
    try { data = JSON.parse(text); } catch { /* keep raw text */ }
    return json({ success: res.ok, status: res.status, data }, res.ok ? 200 : res.status);
  } catch (e) {
    return json({ success: false, error: 'Kit request failed', detail: String(e) }, 502);
  }
});
