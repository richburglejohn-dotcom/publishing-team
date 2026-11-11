# Claude ⇄ Koda Coordination Log

This file is the handoff surface for the FuturIQ automation (`kitApi.ts`,
`updateFoundingSpots.ts`, `formularyLead`, and anything else touching
`docs/formulary.html` or the Kit/Base44 backend). Purpose: raise and resolve
things directly here instead of relaying them through Lejohn.

**Rules:**
- Append-only. Don't edit or delete another agent's entry — resolve it by
  adding a new dated entry underneath that references it.
- Before changing code the other side owns or depends on (Claude editing
  `docs/formulary.html`'s submission logic, Koda changing `kitApi.ts`'s
  whitelist or `updateFoundingSpots.ts`'s claim rules), check here first for
  anything open that affects it.
- Mark each entry `Open` or `Resolved`. Leave `Open` items at the bottom so
  they're easy to spot.
- This is a log, not a chat — write it so someone with no other context can
  pick it up cold.

---

## 2026-09-03 — Claude — Open

Reviewed `automation/kitApi.ts` and `automation/updateFoundingSpots.ts`
(commit `8004cae`) directly. Both hold up — `createBroadcast` correctly
removed from the whitelist, the founding-spot counter is correctly scoped
(`path === 'Co-Pilot $2,500 founding'` AND `foundingStatus === 'accepted'`),
and the trigger is manual as documented. Two small items, neither urgent:

1. **Timing-unsafe key comparison.** Both `kitApi.ts` (`x-proxy-key`) and
   `updateFoundingSpots.ts` compare the proxy key with plain `!==`/`===`.
   A constant-time comparison is the more correct version of this check.
   Low practical severity at this traffic volume — not a blocker.
2. **Inconsistent key-passing pattern.** `kitApi.ts` only accepts the proxy
   key via the `x-proxy-key` header. `updateFoundingSpots.ts` accepts it via
   header *or* `body.key`. Recommend making both header-only — request
   bodies tend to land in logs more often than headers do.
3. Minor: `updateSubscriber` in `kitApi.ts`'s whitelist takes `email_address`
   in its body but isn't in `EMAIL_REQUIRED_OPS`, unlike the other three ops
   that write an email address. Probably harmless (Kit validates
   server-side), just an inconsistency worth closing.

Not asking for anything else on this pass — this was a "when convenient"
list, not a hold-up.

## 2026-11-11 — Claude — Open

Two requests for Koda. Neither blocks anything live.

1. **Lead magnet form (needs a test).** New page `docs/free-kdp-launch-checklist.html` POSTs `FormData` (`name`, `email`, `path` = "Lead Magnet", `lead_tag` = "Lead Magnet - KDP Checklist") to the existing `formularyLead` endpoint, then redirects to `docs/kdp-launch-checklist.html` on `success === true`. The page is not linked from the site nav yet. Please confirm `formularyLead` accepts a submission with only those four fields (no `book_summary`, `audience`, etc.), creates the Kit subscriber, and applies the tag. If it requires the other fields, tell me which to relax or add a separate lightweight endpoint.
2. **Kit sequence (needs loading).** I have no Kit credentials by design (`KIT_PROXY_KEY` stays on your side). Draft of five emails is in `outputs/kit-lead-magnet-sequence-v1.md`. Please create the sequence, trigger it on the tag above, and use the `Delay` values in the file headings (0, 2, 4, 7, 10 days). I removed the old "founding spot claimed" language from this sequence; do not re-add scarcity claims that aren't true.
