# Baron Vieux — Master Voice Reference
### Created: 2026-08-22

**Purpose:** one canonical, consistent voice for Baron Vieux wherever he appears on camera in Flow-generated video (TikTok, Instagram, YouTube) — instead of each new clip re-deriving "what he sounds like." Also documents the separate, unrelated ElevenLabs voice-clone setup for the author's own voice (podcast hosting/narration) so the two don't get conflated. Point every future voice-generation task here rather than duplicating instructions elsewhere.

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
| `baron-vieux-voice-sample-2026-08-24.mp3` | 30.1 sec | Uploaded directly 2026-08-24, purpose-made clean sample |
| **`baron-vieux-voice-master-v1.mp3`** | **90.8 sec** | **The original five, concatenated** — not yet regenerated to include the 2026-08-24 sample; do that before any future clone/reference use if the full set is needed in one file |

**Ruled out during this pass:** `outputs/yt-ep2-trailer.mp4` and `yt-ep3-trailer.mp4` have no audio track at all (silent trailers). `outputs/baron-flashback-kaldis-titlecard-v1.mp4` is ambient-only per its own posting notes — no dialogue, so it's not usable as a voice sample despite featuring Baron on screen.

**~121 seconds total** across six individual samples. Since Baron's only remaining voice use case is Flow's `@Voice: Charon` for on-camera video (not a standalone clone — see below), this bank now mainly serves as reference material for writing consistent `@Voice: Charon` performance descriptors, rather than clone-training input.

---

## Google Flow's native voice tags (for Flow-generated video specifically)

**Added 2026-08-22, via Gemini** (see the shared "Gemini to Claude Strategy & Ideas Hub" Drive doc and its linked "Google Flow Voice Reference & Character Audio Guide"). This refines, rather than replaces, the "no callable ID" note below — Flow does have named base voice presets selectable by prompt tag; what it doesn't have is a *custom clone of Baron specifically* with a persistent ID the way ElevenLabs would produce.

- **Baron Vieux → `@Voice: Charon`** — deep, steady, resonant baritone. Performance descriptor: *"Speak in a calm, steady baritone. Deliberate pacing, confident, devoid of panic, subtle warmth."*
- **Olivia Marigny → `@Voice: Aoede`** (or `Lyra`) — warm, expressive, melodic. Performance descriptor: *"Smooth, relaxed blues-singer cadence, warm tone, expressive and engaging."*
- Full 30-voice system library (all named after stars/constellations, matches known Gemini TTS voice architecture): Achernar, Achird, Algenib, Algieba, Alnilam, Aoede, Autonoe, Callirrhoe, Charon, Despina, Enceladus, Erinome, Fenrir, Gacrux, Iapetus, Kore, Laomedeia, Leda, Orus, Puck, Pulcherrima, Rasalgethi, Sadachbia, Sadaltager, Schedar, Sulafat, Umbriel, Vindemiatrix, Zephyr, Zubenelgenubi.

**Flagging one part as unverified rather than settled fact:** the source doc also claims an "Orbit / Eclipse / Lyra / Vega / Dipper / Pegasus / Ursa / Nova" generation replaced the original 5 voices. Those names don't match the star/constellation naming convention of the other 30 (real Gemini TTS voices), so this may be Gemini extrapolating rather than confirmed — test before relying on it. Same caution applies to the exact `@Voice: Charon` prompt syntax itself: added to `baron-origin-tiktok-prompt-googleflow.md` and `scarlet-elixir-website-video-prompt-v2-googleflow.md` as of this update, but not yet confirmed working in an actual Flow generation.

**Practical split, finalized 2026-08-22:** use `@Voice: Charon` directly in Flow prompts for anything generated *as new Flow video* — that's the complete answer for Baron appearing on camera in TikTok/Instagram clips. **ElevenLabs is not for Baron.** Per your direction, the podcast is now hosted by real people (you, possibly guests), not Baron — so the ElevenLabs clone below is of **your own voice**, for author-voice narration/hosting convenience, not a second Baron voice. Baron has no standalone-audio need left uncovered: his only voice use case is Flow video, which `@Voice: Charon` already handles.

---

## ElevenLabs — this is for the author's voice, not Baron's

**Scope correction (2026-08-22):** everything below originally assumed Baron needed a portable voice clone for hosting the podcast. That's no longer the case — see `culinary-crescendo-podcast-concept-v1.md`'s reversal. The voice bank above stays useful as Flow prompt reference material (matching Baron's established tone/performance descriptor when writing new `@Voice: Charon` scenes), but it's not going into an ElevenLabs clone anymore.

If you want an ElevenLabs clone of your own voice (for podcast narration/hosting without re-recording every episode, or other author-voice content):

1. **Record or gather ~30–90 seconds of your own clean speech** the same way this doc's voice bank was built for Baron — a few clean clips is enough for a solid instant clone.
2. **Create one voice profile**, named clearly (suggest: `Lejohn Richburg III — Author Voice`), seeded with that audio.
3. **Record the Voice ID here** once created:

   ```
   Tool: [ElevenLabs / other]
   Voice ID: [fill in once created]
   Created: [date]
   Used for: author narration / podcast hosting (not Baron)
   ```

## Disclosure

- **Baron in Flow video (`@Voice: Charon`):** still a fictional AI-voiced character — keep using the existing disclosure pattern (`outputs/baron-vieux-ai-disclosure-v1.md`, platform-native "AI info" labels).
- **Author narration via an ElevenLabs clone of your own voice:** much lighter bar — a real person's own voice, AI-generated. A simple one-time note in show notes/description ("some narration uses an AI voice model of the host's own voice") is good practice, not the heavier fictional-character disclosure this doc originally planned around.

## What still has to happen outside this repo
I don't have a voice-cloning/TTS tool available to me — I can consolidate source material and write scripts, but I can't create the actual voice profile or generate audio. Once you've created an ElevenLabs profile of your own voice and have a Voice ID, tell me and I'll fill in the block above.
