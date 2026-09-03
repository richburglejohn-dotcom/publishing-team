# FuturIQ Kit Automation — source of truth

Deployed Base44 backend functions for the FuturIQ launch email machine. These
copies in the repo are the reference source; the live deployments live in the
Base44 app (agent id `6a59d641bd5b07278467f2a4`).

## kitApi.ts — guarded Kit (ConvertKit) v4 proxy

The master Kit API key never leaves Base44's backend env. Callers POST JSON
`{"op": "..."}` with the scoped `x-proxy-key` header (`KIT_PROXY_KEY` — a
proxy token, rotatable independently of the real Kit key).

- **v1.2 decision (owner-approved): `createBroadcast` was REMOVED from the
  whitelist.** Whole-list sends now require the human-approval surface of
  Kit's own UI. `listBroadcasts` remains, read-only.
- Every op is a path template with numeric-validated IDs — there is no raw
  path passthrough, and unlisted body keys are dropped before forwarding.
- Whitelist: account, listSubscribers, getSubscriber, createSubscriber,
  updateSubscriber, unsubscribeSubscriber, listSequences, getSequence,
  listSequenceEmails, getSequenceEmail, updateSequenceEmail,
  addSubscriberToSequence, listBroadcasts, listTags, createTag, tagSubscriber.

## updateFoundingSpots.ts — Email 4 claimed-spots push

Computes the founding-spot count for Kit Email 4 ("Is this AI slop? No.",
sequence 2882178, email 10268390) and pushes the live sentence. Claim rules:

1. **Only Co-Pilot applicants count.** Query filters
   `path === 'Co-Pilot $2,500 founding'` (the exact `<option>` value from
   `docs/formulary.html`). Blueprint $397 buyers and Signature leads never
   consume founding spots.
2. **Raw submissions do NOT count as claimed.** A record counts only after
   `foundingStatus === 'accepted'` — set manually when Baron confirms
   acceptance. `formularyLead` writes new applications with no
   `foundingStatus`, so a fresh form submission changes nothing until a
   human accepts it. (Entity: `FormularyApplication`; enum:
   applied / accepted / declined.)
3. **Trigger: manual, on Baron's explicit confirmation.** Koda sets
   `foundingStatus='accepted'` on the record, then runs this function. No
   entity-change automation fires it automatically.

Safety behavior:
- Refuses to write if `claimed > 5`, or if the two owned paragraphs
  (`>> ... <<` status line, `If you want ...` CTA line) aren't found in the
  expected shape — it never touches anything else in the email.
- **Kit quirk handled (v1.1):** a content-only PUT on a PUBLISHED sequence
  email returns 200 but silently drops the change. Content edits only
  persist when `published:false` rides along. The function does a verified
  two-step (write unpublished → verify persisted → republish), restores the
  original content on verify failure, and never leaves the email
  unpublished.
- Copy variants, never fake scarcity:
  - `claimed = 0` → "All 5 founding spots are still open — the doors just opened."
  - `claimed > 0` → "N founding spot(s) already claimed from early replies."
  - `remaining = 0` → CTA switches to the waitlist phrasing.

## formularyLead.ts

Not in this folder — its reference source lives with the site code (see
commit "formulary: submit leads to Base44 endpoint"). It saves each
formulary submission to the `FormularyApplication` + `Subscriber` entities,
creates the Kit subscriber, and enrolls them in sequence 2882178.
