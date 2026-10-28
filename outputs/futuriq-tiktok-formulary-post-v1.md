# FuturIQ TikTok — Formulary/Launch Post (STAGED, ready for Lejohn)
### Created: 2026-09-04 by Koda (assignment: take over FuturIQ TikTok posting)
### Status: STAGED in the managed browser at tiktok.com/tiktokstudio/upload → Photos tab, logged in as @futur.iq (verified Sep 4 2026).

**NEW STANDING WORKFLOW (Lejohn's decision, Sep 4 2026):** Koda preps and stages every FuturIQ TikTok post — correct account verified, upload page open on the right tab, caption + hashtags drafted, image prepared with a download link — and Lejohn personally attaches the media file and hits publish. The managed-browser toolset cannot attach files (hidden file input unreachable, no JS injection, no file-upload tool), so the attach-and-publish step is Lejohn's by design. Buffer is NOT used for FuturIQ TikTok (Baron Vieux TikTok stays in Buffer).

---

## Image for this post (download to attach)
**File:** `outputs/futuriq-tiktok-titlecard-v1.png` (1080x1920 — TikTok's max, photo-post safe)
**Download:** https://media.base44.com/images/public/6a59d641bd5b07278467f2a4/fe15acba9_futuriq-tiktok-titlecard-v1.png

## Caption (paste as-is)

People keep asking if my books are AI-written.

No. But every part of getting them made — edited, planned, launched — I do with AI. Out loud. On purpose.

That's FuturIQ. Two books. One pipeline. Built in public.

Right now I'm taking 5 founding authors through the same pipeline — hands on, with me, start to launch. Applications close November 10 at midnight. Link in bio.

**Hashtags:** #FuturIQ #AIAssistedPublishing #IndieAuthor #BookTok #PublishingJourney #WritingCommunity

---

## Publish checklist (Lejohn)
1. Browser is on TikTok Studio → Upload → Photos tab, logged in as @futur.iq
2. Download the title card from the link above (or pull from the repo)
3. Attach it via "Select photos"
4. Paste the caption + hashtags into the description
5. Bio link check: point it at https://www.bayoubeauxllc.com/formulary.html before publishing ("link in bio" CTA)
6. Publish

## Notes
- Voice matches `futuriq-tiktok-launch-post-v1.md` Script 1 (author-voice "both, at the same time" hook); CTA updated to the live formulary campaign (5 founding spots, Nov 10 close) since the launch post was written Aug 21, pre-formulary.
- Image post (not video): repo Scripts 1/2 are direct-to-camera video scripts that need Lejohn filming; the title card is the immediate traffic driver while videos wait.

## Backlog after this post (from `social-posting-calendar-v1.md` + launch-post scripts)
1. Script 2 — "Nobody's Selling You a Template" (needs screen-record montage or video from Lejohn)
2. Formulary countdown posts as Nov 10 approaches ("final week", "72 hours", "last day") — Koda stages each, Lejohn attaches + publishes
3. Founding-spot claimed updates if spots get accepted (mirrors Kit Email 4 copy — always truthful counts)

---

## UPDATE — Sep 12 2026 (Koda): publish attempt status

**Local browser staging unreachable** (extension dropped; no local-browser toolset in current session). Attempted alternate routes:

1. **Buffer API** — FuturIQ TikTok channel `6a975ca4065799be466e2a04` returns `Channel not found`; the channel is NO LONGER CONNECTED in Buffer (org `6a973236300e4dcba76f07e0` only has baronvieux TikTok + Baron Vieux YouTube). Needs Lejohn to reconnect in Buffer (Settings → Channels) before API publishing works.
2. **TikTok Content Posting API directly** ($TIKTOK_ACCESS_TOKEN, bound to @futur.iq) — token is read-only: `scope_not_authorized` on publish scopes. Dead end.
3. **Bio check (cloud browser, public profile)** — @futur.iq bio has NO link. Caption's "Link in bio" CTA is currently dead. Add https://www.bayoubeauxllc.com/formulary.html to the bio (Business account required for the website field).

**Backup asset created:** `outputs/futuriq-tiktok-formulary-video-v1.mp4` — 6s 1080x1920 h264 (533KB) rendered from the title card with a slow zoom, ready if a video post is preferred or needed for API upload. The PNG title card remains the primary asset for the photo post.

**Next step to unblock:** Lejohn reconnects FuturIQ TikTok in Buffer → Koda publishes immediately via Buffer GraphQL (mutation already validated).

---

## UPDATE — 2026-10-28 (Claude): caption date refresh, blockers re-checked, still open

The Sep 13 close date had already lapsed (checked, nothing newer anywhere in the repo or formulary page). Lejohn confirmed the new close date directly: **caption's "Applications close" line, the Notes line, and the Backlog line above are now November 10** (was Sep 13). The formulary page (`docs/formulary.html`) and the email drafts still say Sep 13 as of this check — those need the same fix, not yet done here.

Re-verified today's Buffer state directly (`list_channels`, org `6a973236300e4dcba76f07e0`): still only 2 channels connected — `baronvieux` (TikTok) and the YouTube channel. **FuturIQ's `@futur.iq` is still not connected.** The read-only API token and missing bio link were not re-checked (no reason to expect either changed). This post remains **STAGED, not published** — none of the three Sep 12 blockers have moved.

Separate from this post but worth flagging: `baronvieux`'s own TikTok (the one channel that *is* connected) is logged elsewhere in `outputs/scheduled-posting-lookup.csv` as account-level spam-blocked by TikTok as of 2026-10-08 (4/4 retried posts failed identically). Even once `@futur.iq` is reconnected, that's a separate account, so this specific block shouldn't carry over — noted only because it means TikTok via Buffer is currently non-functional for *both* accounts, not just this one.
