// Guard tests for kitApi v1.3 and updateFoundingSpots v1.2.
// Runs the EXACT helper block from the two function sources (type annotations
// stripped only), so a drift between the deployed code and this test fails loudly.
//
// Run: node --test automation/tests/proxyGuard.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, '..', '..');
const FILES = {
  kitApi: join(repo, 'automation', 'kitApi.ts'),
  updateFoundingSpots: join(repo, 'automation', 'updateFoundingSpots.ts'),
};

function helperBlock(path) {
  const src = readFileSync(path, 'utf8');
  const start = src.indexOf('const guardEncoder');
  const end = src.indexOf('type OpDef = {') !== -1 ? src.indexOf('type OpDef = {') : src.indexOf('Deno.serve(');
  assert.ok(start > -1 && end > start, `helper block not found in ${path}`);
  return src.slice(start, end).trim();
}

function stripTypes(ts) {
  // Only the annotations used in this block; anything else fails the test loudly.
  return ts
    .replace(/\(supplied: string, expected: string\): Promise<boolean>/,
             '(supplied, expected)')
    .replace(/const guardEncoder: TextEncoder/, 'const guardEncoder');
}

async function loadHelper(path) {
  const js = stripTypes(helperBlock(path));
  assert.ok(!/: (string|boolean|Promise|TextEncoder)/.test(js), `types not fully stripped for ${path}`);
  const dir = mkdtempSync(join(tmpdir(), 'guard-'));
  const file = join(dir, 'guard.mjs');
  writeFileSync(file, js + '\nexport { constantTimeEquals };\n');
  return import('file://' + file);
}

// Mirrors the guard exactly as written in both functions.
async function authorized(ctEq, req, expectedKey) {
  const supplied = req.headers.get('x-proxy-key');
  if (expectedKey === undefined || expectedKey === '') return false;
  if (supplied === null) return false;
  return ctEq(supplied, expectedKey);
}

const reqOf = (headers) => ({
  headers: { get: (k) => (k.toLowerCase() in headers ? headers[k.toLowerCase()] : null) },
});

for (const [name, path] of Object.entries(FILES)) {
  test(`${name}: correct key in header is accepted`, async () => {
    const { constantTimeEquals } = await loadHelper(path);
    assert.equal(await authorized(constantTimeEquals, reqOf({ 'x-proxy-key': 'good-key-123' }), 'good-key-123'), true);
  });

  test(`${name}: wrong key in header is rejected`, async () => {
    const { constantTimeEquals } = await loadHelper(path);
    assert.equal(await authorized(constantTimeEquals, reqOf({ 'x-proxy-key': 'bad-key' }), 'good-key-123'), false);
  });

  test(`${name}: missing header rejects without throwing`, async () => {
    const { constantTimeEquals } = await loadHelper(path);
    await assert.doesNotReject(async () => {
      const r = await authorized(constantTimeEquals, reqOf({}), 'good-key-123');
      assert.equal(r, false);
    });
  });

  test(`${name}: key supplied only in the body is rejected (header-only guard)`, async () => {
    const { constantTimeEquals } = await loadHelper(path);
    // request carries the correct key in the body but no header, as the old fallback allowed
    const req = Object.assign(reqOf({}), { json: async () => ({ key: 'good-key-123' }) });
    assert.equal(await authorized(constantTimeEquals, req, 'good-key-123'), false);
  });

  test(`${name}: keys of different lengths compare false without throwing`, async () => {
    const { constantTimeEquals } = await loadHelper(path);
    assert.equal(await constantTimeEquals('short', 'a-much-longer-expected-key'), false);
    assert.equal(await constantTimeEquals('', 'expected'), false);
  });

  test(`${name}: comparison hashes to a fixed-length digest before looping`, () => {
    const block = helperBlock(path);
    assert.match(block, /crypto\.subtle\.digest\('SHA-256'/, 'must hash inputs');
    assert.match(block, /for \(let i = 0; i < av\.length; i \+= 1\) diff \|= av\[i\] \^ bv\[i\];/,
      'must XOR the full fixed-length digest, not short-circuit');
    assert.doesNotMatch(block, /\.length !== .*\.length/, 'must not branch on input length');
  });
}

test('both functions carry a byte-identical guard helper', () => {
  const a = helperBlock(FILES.kitApi);
  const b = helperBlock(FILES.updateFoundingSpots);
  assert.equal(a, b, 'helper copies have drifted');
});

test('updateFoundingSpots no longer accepts a key from the request body', () => {
  const src = readFileSync(FILES.updateFoundingSpots, 'utf8');
  assert.doesNotMatch(src, /body\.key/, 'body.key fallback still present');
  assert.match(src, /const suppliedProxyKey = req\.headers\.get\('x-proxy-key'\);/);
});

test('kitApi guard is header-only and constant-time', () => {
  const src = readFileSync(FILES.kitApi, 'utf8');
  assert.doesNotMatch(src, /req\.headers\.get\('x-proxy-key'\) !== proxyKey/, 'plain !== comparison still present');
  assert.match(src, /await constantTimeEquals\(suppliedProxyKey, proxyKey\)/);
});

test('updateSubscriber requires a valid email_address', () => {
  const src = readFileSync(FILES.kitApi, 'utf8');
  const m = src.match(/const EMAIL_REQUIRED_OPS = new Set\(\[([^\]]+)\]\);/);
  assert.ok(m, 'EMAIL_REQUIRED_OPS not found');
  for (const op of ['createSubscriber', 'updateSubscriber', 'addSubscriberToSequence', 'tagSubscriber']) {
    assert.match(m[1], new RegExp(`'${op}'`), `${op} missing from EMAIL_REQUIRED_OPS`);
  }
});
