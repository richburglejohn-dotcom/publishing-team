# Episode 1 Launch — Posting Checklist
### Created: 2026-08-24
### Everything needed is already in `outputs/` and already sent to you — this is just the map: which file, which platform, which caption.
### Status (2026-09-09): Staged for Koda handoff. None of these three platforms have a direct-API path from Claude — Bayoubeaux1070's Instagram isn't a connected account, Facebook has no organic-post API, TikTok never has one (see `references/pipeline-tool-capabilities.md`). Koda has real Graph API access to Bayoubeaux1070's Facebook and IG; TikTok still needs Lejohn's manual file-attach step even via Koda.

---

## Status check-in log
### (append-only — every time this doc is checked, log it here, so staleness is visible instead of silent. Koda: log your progress here too — check off a Day-0/3/5 row above and add an entry here when you actually post a clip, so Claude isn't guessing your status from silence.)

- **2026-09-11 (Claude, daily check):** Re-checked. No commits to this doc or the captions doc since original staging (`b520e4b`, 2026-09-09). No Koda-side activity logged anywhere in the repo touching this cascade. Nothing posted yet — all three Day-0 prerequisites (IG bio link, TikTok bio link, Facebook destination confirmation) still unconfirmed as far as the repo shows. Flagging the silence itself as the gap, not assuming it means "not started" vs. "started but not logged" — Lejohn/Koda should confirm status the next time either touches this.

---

## ✅ Already done
- [x] Podbean episode published: https://bayoubeaux1070.podbean.com/

## Before you post anything
- [ ] Set your Instagram bio link to `https://bayoubeaux1070.podbean.com/`
- [ ] Set your TikTok bio link to `https://bayoubeaux1070.podbean.com/`
- [ ] Confirm the Facebook destination is actually where you want this (the "TikTok" option inside Meta Business Suite is really a Facebook Group, not TikTok — see prior conversation)

---

## Day 0 — Launch day

| Platform | File | Direct URL | Caption |
|---|---|---|---|
| Instagram (Feed/Reel) | `podcast-ep1-clipA-coldopen.mp4` (9:16) | https://raw.githubusercontent.com/richburglejohn-dotcom/publishing-team/main/outputs/podcast-ep1-clipA-coldopen.mp4 | **Clip A** caption — `podcast-ep1-social-captions-v1.md` |
| TikTok | `podcast-ep1-clipA-coldopen.mp4` (9:16) | same as above | Same **Clip A** caption |
| Facebook (Feed/Group) | `podcast-ep1-clipA-coldopen-4x5.mp4` (4:5) | https://raw.githubusercontent.com/richburglejohn-dotcom/publishing-team/main/outputs/podcast-ep1-clipA-coldopen-4x5.mp4 | Same **Clip A** caption (link is clickable directly in the Facebook text) |

## Day 3 — Mid-week

| Platform | File | Direct URL | Caption |
|---|---|---|---|
| Instagram (Feed/Reel) | `podcast-ep1-clipB-lesson.mp4` (9:16) | https://raw.githubusercontent.com/richburglejohn-dotcom/publishing-team/main/outputs/podcast-ep1-clipB-lesson.mp4 | **Clip B** caption |
| TikTok | `podcast-ep1-clipB-lesson.mp4` (9:16) | same as above | Same **Clip B** caption |
| Facebook (Feed/Group) | `podcast-ep1-clipB-lesson-4x5.mp4` (4:5) | https://raw.githubusercontent.com/richburglejohn-dotcom/publishing-team/main/outputs/podcast-ep1-clipB-lesson-4x5.mp4 | Same **Clip B** caption |

## Day 5 — Weekend close

| Platform | File | Direct URL | Caption |
|---|---|---|---|
| Instagram (Feed/Reel) | `podcast-ep1-clipC-cta.mp4` (9:16) | https://raw.githubusercontent.com/richburglejohn-dotcom/publishing-team/main/outputs/podcast-ep1-clipC-cta.mp4 | **Clip C** caption |
| TikTok | `podcast-ep1-clipC-cta.mp4` (9:16) | same as above | Same **Clip C** caption |
| Facebook (Feed/Group) | `podcast-ep1-clipC-cta-4x5.mp4` (4:5) | https://raw.githubusercontent.com/richburglejohn-dotcom/publishing-team/main/outputs/podcast-ep1-clipC-cta-4x5.mp4 | Same **Clip C** caption |

---

## Publish checklist (Koda)
1. Facebook and Instagram: use the direct URLs above (or Koda's own `media.base44.com` re-host, whichever its posting flow expects) — no manual download/re-upload needed.
2. TikTok: Koda can stage caption/hashtags/settings same as the other two, but per the standing TikTok limitation, Lejohn still has to do the actual file-attach + publish step himself.
3. Stagger by day (0 → 3 → 5) as laid out above — don't post all three clips same-day.
4. Reconfirm the Day-0 prerequisites (bio links, Facebook destination) are actually done before the first post goes out — they were still open items as of this doc's creation.

## Reference
- All captions + hashtags, in full: `outputs/podcast-ep1-social-captions-v1.md`
- Podcast cover art (if not already uploaded to Podbean): `outputs/podcast-apothecary-sessions-cover-art-v1.png`
- Show description text (if not already set on Podbean): `outputs/podcast-show-description-v1.md`
- This cascade matches the pattern already planned in `outputs/podcast-clip-posting-calendar-plan-v1.md`

## Notes
- Same-day posting across all three platforms per clip keeps the launch tight — no need to stagger platforms within a day, only stagger clips across days (0 → 3 → 5) so the content doesn't all land at once.
- Rechecked 2026-09-09: still no direct-API path for any of these three platforms for this specific account set (Bayoubeaux1070 IG isn't connected via Windsor.ai — only Baron.Vieux and FuturIQ are; Facebook has no organic-post API on any connector; TikTok has none at all) — this checklist remains the hand-off, now with direct URLs added so Koda doesn't need a separate file-fetch step.
