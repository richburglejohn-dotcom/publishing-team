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

**Practical split, updated 2026-09-12 (full reversal back to Baron-AI-hosted podcast):** use `@Voice: Charon` in Flow prompts for anything generated *as new Flow video* (TikTok/Instagram on-camera clips) — that hasn't changed. **ElevenLabs is for Baron again.** The 2026-08-22 note below ("ElevenLabs is not for Baron") is superseded — Lejohn added a new ElevenLabs clone, "Baron Vieux American," specifically for podcast hosting, and confirmed the full reversal after trialing it on the Dark Roux interlude. Two separate Baron voices now exist for two separate media: Flow's `@Voice: Charon` for on-camera video, ElevenLabs "Baron Vieux American" for podcast audio. Don't conflate them or swap one in for the other.

```
Tool: ElevenLabs
Voice ID: 4gMxHJqo0nJJd3aeKX6z
Name: Baron Vieux American
Created: 2026-09-12 (by Lejohn, in ElevenLabs directly)
Category: cloned
Accent/age/gender: American, middle-aged, male
Used for: The Apothecary Sessions podcast hosting (Baron, in-character) — episodes and interludes alike
```

---

## ElevenLabs — history (superseded 2026-09-12)

**2026-08-22 scope correction, no longer current:** the section below originally assumed Baron needed a portable voice clone for hosting the podcast, then that was reversed (real people host instead), then reversed back again 2026-09-12 — see above for the current state. Kept for history rather than deleted.

~~If you want an ElevenLabs clone of your own voice (for podcast narration/hosting without re-recording every episode, or other author-voice content):~~

~~1. Record or gather ~30–90 seconds of your own clean speech the same way this doc's voice bank was built for Baron — a few clean clips is enough for a solid instant clone.~~
~~2. Create one voice profile, named clearly (suggest: `Lejohn Richburg III — Author Voice`), seeded with that audio.~~
~~3. Record the Voice ID here once created.~~

**Note:** an author-voice clone is still relevant for one thing under the current reversal — the spoken disclosure that opens Episode 1 needs to be Lejohn's own real voice (live or a clone of his own voice specifically), not Baron's. See `outputs/podcast-disclosure-spoken-script-v1.md`. If Lejohn wants to avoid re-recording that live, the steps above for a personal ElevenLabs clone still apply — just for that one narrow use, not general podcast hosting.

## Disclosure

- **Baron in Flow video (`@Voice: Charon`):** still a fictional AI-voiced character — keep using the existing disclosure pattern (`outputs/baron-vieux-ai-disclosure-v1.md`, platform-native "AI info" labels).
- **Baron hosting the podcast (ElevenLabs "Baron Vieux American"), as of the 2026-09-12 reversal:** back to the heavy bar — an AI-voiced fictional character as the entire host of a long-form show has no platform-native toggle to lean on. Needs a spoken disclosure at the top of Episode 1 in Lejohn's real voice (`outputs/podcast-disclosure-spoken-script-v1.md`) plus a plain statement in the show description that Baron is fictional and AI-voiced. See the Status note at the top of `outputs/culinary-crescendo-podcast-concept-v1.md` for the full requirement.
