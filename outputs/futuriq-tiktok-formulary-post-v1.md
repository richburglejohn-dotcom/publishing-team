# FuturIQ TikTok — Formulary/Launch Post (ready to fire)
### Created: 2026-09-04 by Koda (assignment: take over FuturIQ TikTok posting)
### Status: BLOCKED — FuturIQ TikTok channel not connected in Buffer (as of Sep 4, 2026). Baron Vieux TikTok + YouTube are connected; FuturIQ TikTok is not. Needs Lejohn to reconnect it in Buffer's dashboard, then Koda posts via the Buffer GraphQL API.

**Asset:** `outputs/futuriq-tiktok-titlecard-v1.png` (1080x1920 — exactly TikTok's 2,073,600-pixel image max)
**Direct media URL (Buffer-safe, no 302):** https://media.base44.com/images/public/6a59d641bd5b07278467f2a4/fe15acba9_futuriq-tiktok-titlecard-v1.png

---

## Caption (posting this)

People keep asking if my books are AI-written.

No. But every part of getting them made — edited, planned, launched — I do with AI. Out loud. On purpose.

That's FuturIQ. Two books. One pipeline. Built in public.

Right now I'm taking 5 founding authors through the same pipeline — hands on, with me, start to launch. Applications close September 13 at midnight. Link in bio.

**Hashtags:** #FuturIQ #AIAssistedPublishing #IndieAuthor #BookTok #PublishingJourney #WritingCommunity

---

## Notes
- Voice matches `futuriq-tiktok-launch-post-v1.md` Script 1 (author-voice "both, at the same time" hook) but the CTA is updated to the live formulary campaign (5 founding spots, Sep 13 close) instead of the pre-launch "follow" CTA — the launch post was written Aug 21, before the formulary went live.
- "Link in bio" refers to the FuturIQ TikTok bio link — confirm it points at https://www.bayoubeauxllc.com/formulary.html (or the FuturIQ section) before/after connecting the channel.
- Image post (not video): the repo's Script 1/2 are direct-to-camera video scripts that need Lejohn filming; the title card image post is the immediate traffic driver while videos wait.
- Execution: Buffer GraphQL `createPost` mutation, image:{url} asset, FuturIQ TikTok channel — per standing rule, Koda posts directly without asking.

## Backlog after this post (from `social-posting-calendar-v1.md` + launch-post scripts)
1. Script 2 — "Nobody's Selling You a Template" (needs screen-record montage or video from Lejohn)
2. Formulary countdown posts as Sep 13 approaches ("final week", "72 hours", "last day")
3. Founding-spot claimed updates if spots get accepted (mirrors Kit Email 4 copy — always truthful counts)
