# Baron Vieux — Master Voice Reference
### Created: 2026-08-22

**Purpose:** one canonical, consistent voice for Baron Vieux across every format — podcast, TikTok, Instagram, YouTube — instead of each new piece of content re-deriving "what he sounds like" from whatever clip is closest at hand. This doc is the single source of truth. Point every future voice-generation task here rather than duplicating instructions elsewhere.

---

## The voice bank

`references/baron-vieux-voice-bank/` holds every clean sample of Baron's established AI voice pulled from existing, already-published content — no new generation, all sourced from clips that already exist and are already public-facing:

| File | Length | Source |
|---|---|---|
| `making-an-exception.mp3` | 10.0 sec | `docs/media/baron-vieux-making-an-exception.mp4` — his page-launch line ("I don't usually explain myself... making an exception") |
| `origin-tiktok-final-v3.mp3` | 23.1 sec | `outputs/Baron_Origin_TikTok_FINAL_v3.mp4` — the Origin video, longest single continuous sample |
| `scarlet-elixir-clip3-speaking-v2.mp3` | 8.0 sec | `outputs/Scarlet_Elixir_Clip3_Baron_speaking_v2.mp4` |
| `dedicated-reference-sample.mp3` | 8.0 sec | Filed directly from Drive 2026-08-21, purpose-built reference sample |
| `tiktok-book1-voiceover.mp3` | 41.8 sec | `outputs/tiktok_book1_voiceover_v1.mp3` — voiceover from an already-published TikTok post |
| **`baron-vieux-voice-master-v1.mp3`** | **90.8 sec** | **All five, concatenated into one file** — use this one if a tool wants a single upload |

**Ruled out during this pass:** `outputs/yt-ep2-trailer.mp4` and `yt-ep3-trailer.mp4` have no audio track at all (silent trailers). `outputs/baron-flashback-kaldis-titlecard-v1.mp4` is ambient-only per its own posting notes — no dialogue, so it's not usable as a voice sample despite featuring Baron on screen.

**90.8 seconds total** is comfortably past the minimum most voice-cloning tools want for a stable instant clone (ElevenLabs' own guidance is as little as ~30 seconds of clean audio for a good instant clone), and easily enough for anything TikTok/Instagram-length (15–60 sec clips). It's still on the thinner side for a stable 20+ minute podcast episode without some iteration — see `culinary-crescendo-podcast-concept-v1.md` for that specific caveat.

---

## The standard to lock in

1. **Pick one tool and stay on it.** ElevenLabs is the one referenced throughout this project's planning docs and is the standard route for this kind of instant voice cloning — recommended default unless there's a reason to use something else.
2. **Create exactly one voice profile**, named consistently (suggest: `Baron Vieux — Official`), seeded with `baron-vieux-voice-master-v1.mp3` (or all five files individually, if the tool accepts multiple reference uploads — that's usually the higher-quality path since the tool can weight across genuinely different line readings rather than one concatenated file).
3. **Record the Voice ID here** once created, so every future generation — podcast episodes, TikTok scripts, anything — references this same ID instead of a new tool/voice each time:

   ```
   Tool: [ElevenLabs / other]
   Voice ID: [fill in once created]
   Created: [date]
   ```

4. **Every future script** written for Baron (podcast episodes, TikTok scripts, Reels) should note at the top which voice profile/ID it's meant to be generated with, the same way `podcast-episode-1-baron-script-v1.md` already notes it's for "Baron's AI voice."

## Disclosure — non-negotiable, not optional

Every piece of content using this cloned voice needs the same AI-voice disclosure already established for this project (see `outputs/baron-vieux-ai-disclosure-v1.md` and the disclosure section of `culinary-crescendo-podcast-concept-v1.md`):
- Short-form (TikTok/Reels): platform-native "AI info" labels where available, plus the disclosure already baked into the pinned posts.
- Long-form (podcast): a spoken disclosure in the author's real voice, once, at the top of Episode 1, referenced in every episode's show notes.

This doesn't change with a "designated consistent voice" — if anything it matters more, since one identifiable voice profile used everywhere makes the AI-generated nature of the character more consistent to disclose, not less.

## What still has to happen outside this repo
I don't have a voice-cloning/TTS tool available to me — I can consolidate source material and write scripts, but I can't create the actual voice profile or generate audio. Once you've created the profile and have a Voice ID, tell me and I'll fill in the block above and update every script doc to reference it explicitly.
