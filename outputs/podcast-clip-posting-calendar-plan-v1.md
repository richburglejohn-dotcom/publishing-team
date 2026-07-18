# Podcast → Posting Calendar Integration Plan
### "The Apothecary Sessions" — feeds `outputs/scheduled-posting-lookup.csv`
### Created: 2026-07-18

Companion to `outputs/culinary-crescendo-podcast-concept-v1.md`. This is the repeatable pattern for turning **one Baron-voiced episode** into a week of social content, using the same CSV schema already in use (`date,platform,file,heading,note`) and the same "note explains what actually happened" convention set by the 2026-07-16 Instagram row.

**Nothing in this doc is added to the live CSV yet.** No episode has been recorded — there's no TTS/voice-clone tool picked, no audio file, no clips. This is the template to fill in once Episode 1 exists, so the calendar update takes minutes, not a re-think.

---

## The weekly cascade (per episode)

One episode = one full-length audio file + 3 short vertical clips, all in Baron's voice, released across 6 days:

| Day | Platform | What posts | Purpose |
|---|---|---|---|
| Day 0 (Mon) | Podcast host | Full episode | The actual release |
| Day 0 (Mon) | Instagram / TikTok | **Clip A — Cold open** (15–20 sec): Baron's opening hook line for the episode | Drive same-day traffic to the full episode |
| Day 1 (Tue) | X | **Quote card or audiogram**: one sharp line from the episode, text-first | Cheap, fast, no video-editing dependency |
| Day 3 (Thu) | Instagram / TikTok | **Clip B — The lesson** (20–30 sec): the craft/ownership takeaway, mid-episode | Reaches people who missed Day 0, gives standalone value |
| Day 5 (Sat) | Facebook | **Clip C — CTA close** (15–20 sec): Baron's closing line + "here's where you meet them for real" + book link | Weekend traffic, direct sales push |

This mirrors the existing pattern already in the CSV (Facebook/Instagram/TikTok/X each carrying a themed post on a shared date, e.g. the 2026-07-16 "Origin" cluster) — the podcast just adds a longer anchor piece underneath that week's cluster instead of a single video.

---

## Clip-chopping spec (for whoever cuts the 3 clips from the full episode)

- **Format:** 9:16 vertical for Instagram/TikTok (reuse the blurred-background-fill reformat technique already used for Baron's other verticals), 1:1 or 16:9 for X/Facebook
- **Visual:** since this is audio-only content (no new video generated for the podcast itself), pair each clip with a static or lightly-animated visual — Baron's existing portrait/kitchen stills, or a simple waveform/audiogram treatment (same style already possible with the ffmpeg `showwavespic` approach used for audio inspection this session, styled up rather than just diagnostic)
- **Captions:** burned-in captions on every clip — standing rule already established for Baron's video content, since most viewers watch muted
- **Title card:** episode number + character name, same gold Playfair Display treatment as the Elixir/Origin videos, so the podcast reads as part of the same visual brand

---

## Worked example — Episode 1 (Baron)

Using the Season 1 order from the concept doc, Episode 1 is Baron's own origin — natural fit since it's the same material already covered in the Origin TikTok video, so the clip cut can reuse footage/beats the audience has partly seen and build on it rather than starting cold.

Once Episode 1's audio and clips exist, the CSV rows to add (adjust the date to the actual release Monday):

```
2026-MM-DD,Podcast,outputs/podcast-ep1-baron-origin-FULL.mp3,Episode 1 — Baron Vieux: The Origin (full episode),"Baron-voiced AI narration, first Apothecary Sessions episode"
2026-MM-DD,Instagram,outputs/podcast-ep1-clipA-coldopen.mp4,Episode 1 cold-open clip — Baron's hook line,"Same-day companion to full episode drop"
2026-MM-DD,TikTok,outputs/podcast-ep1-clipA-coldopen.mp4,Episode 1 cold-open clip — Baron's hook line,"Same-day companion to full episode drop"
2026-MM-DD+1,X,outputs/podcast-ep1-quote-card.md,Episode 1 quote card — text/audiogram,"Day-after cheap-content follow-up"
2026-MM-DD+3,Instagram,outputs/podcast-ep1-clipB-lesson.mp4,Episode 1 lesson clip — the systems-thinking takeaway,"Mid-week reach for people who missed the drop"
2026-MM-DD+3,TikTok,outputs/podcast-ep1-clipB-lesson.mp4,Episode 1 lesson clip — the systems-thinking takeaway,"Mid-week reach for people who missed the drop"
2026-MM-DD+5,Facebook,outputs/podcast-ep1-clipC-cta.mp4,Episode 1 CTA clip — closing line + book link,"Weekend sales-driving close"
```

(Column order and quoting match the existing file exactly — `note` only gets quoted when it contains a comma, same as the current file's convention.)

---

## Sequencing note

Once a release cadence is picked (concept doc suggests biweekly), each new episode just repeats this same 6-day cascade starting from its own Monday — no new planning needed per episode, just new dates and new filenames. The existing scheduled content in the CSV runs through 2026-08-31; first realistic podcast slot is whatever week Episode 1 is actually ready, dropped alongside (not replacing) what's already scheduled there.

## Still blocking actual rows going in
1. Pick a voice-cloning/TTS tool and produce Episode 1's audio
2. Cut the 3 clips + quote card from that audio
3. Then this doc's template rows get filled in with real dates/filenames and copied into `scheduled-posting-lookup.csv`
