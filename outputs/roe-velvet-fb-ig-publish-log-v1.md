# Roe Velvet FB/IG — Publish Log (EXECUTED)
### Executed: 2026-09-04 ~03:56 CT by Koda
### Source package: `outputs/roe-velvet-fb-ig-post-package-v1.md` (branch `claude/book-amazon-upload-s9hppz`) — published as-is, no changes

## Results — all three targets PUBLISHED

| Target | Status | Reference |
|---|---|---|
| Facebook — Bayoubeaux1070 page | ✅ published (FB Reel) | id `1517614440050379` — facebook.com/reel/1517614440050379/ |
| Facebook — Baron Vieux page | ✅ published (FB Reel) | id `2961016744244984` — facebook.com/reel/2961016744244984/ |
| Instagram — @baron.vieux | ✅ published (Reel) | id `17991411833843530` — instagram.com/reel/Dc3AiUfIEuM/ |

## How
- Video: `outputs/roe-velvet-youtube-v1-vertical.mp4` (23.6MB, 1080x1920, 63.46s) — re-hosted publicly at https://media.base44.com/videos/public/6a59d641bd5b07278467f2a4/d051401e8_roe-velvet-youtube-v1-vertical.mp4
- Both FB pages: Graph API page-video upload (multipart `source`) with fresh page tokens minted from the facebook_pages connector → auto-published as Reels once processing finished
- IG: container flow on graph.instagram.com (media_type=REELS, video_url → poll FINISHED → media_publish) via the Instagram connector bound to @baron.vieux
- Caption: package copy verbatim, all three destinations (as instructed)

## One flag for Lejohn — AI-content label
The package checklist says to set each platform's native "AI-generated content" label on, matching the YouTube/TikTok posts. The Graph/IG APIs don't expose that toggle, so the three FB/IG posts are live WITHOUT the label set. If it matters (YouTube/TikTok versions have it on), flip it manually in Meta Business Suite → each post → edit → AI-generated content label. Nothing else deviated.

## FuturIQ IG — correctly skipped
Per the package's own call: Baron Vieux book content stays off the FuturIQ account (separate publishing stream). No FuturIQ IG post made.
