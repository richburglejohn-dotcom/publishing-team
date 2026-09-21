# Deep Dive — The Website Itself ("...independent culinary fiction blueprint")
### Created: 2026-09-21
### Source: Maya/Marcus NotebookLM Deep Dive about bayoubeauxllc.com, surfaced from the Turn folder 2026-09-17, uploaded directly by Lejohn 2026-09-21 (too large for the Drive tool's 10MB cap).

**What this is:** unlike Deep Dive Ep. 1 (Book 1) and Ep. 2 (The Scarlet Foundation), this episode isn't about a book — it's two AI hosts walking through the author's own website: the homepage tagline, Baron/Olivia setup, the Culinary Crescendo series structure, the FuturIQ publishing project, and the "Join the Table" newsletter.

## Edit
Original file: 31:12 (1872s), 320x240 video at ~1fps (NotebookLM's native slideshow-style output) + AAC audio. Trimmed to the series' established 12-14 min comfortable-length target (per `deep-dive-video-strategy-book1.md` and the Ep2 doc):

| Segment | Source range | Duration |
|---|---|---|
| A — opening | 0:00–2:29.8 | 149.8s |
| B — middle | 11:21.1–19:49.9 | 510.9s |
| C — closing | 29:13.2–30:18.2 | 65.0s |
| **Total** | | **723.7s (12.06 min)** |

Cut points snapped to nearest silence boundary (ffmpeg `silencedetect`, -30dB/0.4s) to avoid mid-word cuts. Edge-checked clean (no clipping/corruption, `volumedetect` mean -27.9dB / max -5.9dB, normal speech levels).

**Visual:** the source video track is NotebookLM's own low-res (320x240) auto-slideshow and doesn't survive a clean re-encode across the cut boundaries (video stream decode failure at the seg B/C join). Rather than fight a visual that was never real production value, followed the same pattern as Deep Dive Ep. 1/Ep. 2: audio-only cut paired with an existing, already-approved static image — `references/baron-vieux-storefront-exterior-v1.jpg` (real-world brand imagery, no character likeness involved), scaled/cropped to 1280x720. Final: `outputs/deepdive-website-blueprint-edited-v1.mp4`.

## ⚠️ Verification gap — flagging per the standing CLAUDE.md rule
**Only Segment A's content is fact-checked against the live site.** The original ~500-word outline doc (Drive, surfaced 2026-09-17) was spot-checked against `docs/index.html`/`docs/books.html` and confirmed accurate (see `references/turn-folder-briefing-log.md`, 2026-09-17 entry) — but that outline is far shorter than the actual 31-minute conversation, and maps most plausibly to the opening minutes only.

**Segments B and C were selected by silence/timing only, with no transcript** — both ElevenLabs (out of transcription quota, 411 credits vs 10,000 needed) and local Whisper (blocked: model download requires huggingface.co, which this environment's org network policy denies) were unavailable. Lejohn explicitly chose to proceed on a timing-only cut knowing this risk. **What this means in practice: the middle and closing 9+ minutes of this edit have not been checked against the site for factual accuracy.** Recommend a listen-through before or shortly after posting — if anything in Segments B/C sounds off (misstated feature, wrong link, a claim the site doesn't actually support), flag it and this gets pulled/re-cut like any other continuity issue.

## Title
**"The Website Behind the Books — Two AI Hosts Take a Deep Dive (FuturIQ / Culinary Crescendo)"**

## Description
Two AI hosts (Maya & Marcus) walk through bayoubeauxllc.com — Baron Vieux's "Victorian-noir soul," Olivia Marigny, the Culinary Crescendo series structure (The Scarlet Foundation → A Symphony of Love in the Big Easy), and FuturIQ, the author's AI-assisted publishing practice built in public. Same honest "two AI's, no script" format as the book Deep Dives — this one's just about the platform itself.

Read the books, join the newsletter: bayoubeauxllc.com

#DeepDive #FuturIQ #CulinaryCrescendo #BaronVieux #IndieAuthor #AIAssistedPublishing #NewOrleansFiction

## Posting
YouTube only for now (12 min, landscape — matches Dark Roux/Jambalaya/Redfish full-episode pattern via Metricool, `youtubeData.type="video"`, not a Short). Not cut for social clips — this is about the site/business, not a scene, so no natural cutdown moments the way podcast/book content has.
