# ElevenLabs Voiceover Package — Episode 1: "The Secret to a True New Orleans Dark Roux"
### Created: 2026-09-07
### Companion to `references/baron-vieux-episode1-darkroux-googleflow-v1.md` — same 7-scene tightened episode, this is just the narration track generated separately via ElevenLabs instead of relying on whatever voice the video tool renders in-clip.

## Voice setup — two options

**Option A: Clone Baron's actual voice (recommended for consistency).** This project already has a locked voice reference file: `baron_vieux_hook_voice_reference.mp3` (referenced in `references/` via the "Google Flow Voice Reference & Character Audio Guide" doc — Drive link: https://drive.google.com/file/d/1r2GN9YxBbSoQSDdpgsru0GZWaT-H6qwx/view). Use ElevenLabs' Instant Voice Cloning with that file as the sample — it gives you a real, reusable "Baron Vieux" voice instead of picking a stock voice that only approximates him, and it'll be consistent across every future episode.

**Option B: Pick a stock ElevenLabs voice** if cloning isn't set up yet. Match this project's established performance descriptor for Baron (same one used for the Google Flow `@Voice: Charon` tag): **"Deep, calm, resonant baritone with a steady New Orleans cadence — deliberate pacing, confident, devoid of panic, subtle warmth."** Look for a deep male voice in ElevenLabs' library described as warm/authoritative/baritone, not bright or fast-paced.

**Suggested settings either way:** Stability ~40-50% (too high reads flat/robotic, too low drifts off-character line to line), Similarity Boost ~75%+, Style ~20-30% (a little, not a lot — Baron's controlled, not theatrical), Speaker Boost on. Model: Eleven Multilingual v2 or the current flagship model for the best quality on a real production narration track.

## Script — scene-by-scene (recommended: generate each separately)

Matches the 7 video clips 1:1 so each line drops directly onto its corresponding ~8-second scene instead of needing to be cut apart from one continuous track afterward.

1. "If you don't have patience, you don't have flavor. Today, we're breaking down the dark roux — the heartbeat of every real gumbo."
2. "Equal parts oil and flour. Medium-low heat. That's where every real gumbo starts."
3. "Watch the color turn — blonde, peanut butter, mahogany. That aroma right there is the soul of the dish."
4. "Onion, celery, bell pepper — the Holy Trinity. Listen to that. That's New Orleans in a pan."
5. "Let it settle in. This is where the flavor locks."
6. "Master this, and you can cook anything in our playbook."
7. "Hit subscribe, drop your gumbo base in the comments — see y'all on the next one."

## Script — single continuous read (alternative, if you'd rather generate one track and cut it yourself)

```
If you don't have patience, you don't have flavor. Today, we're breaking down the dark roux — the heartbeat of every real gumbo.

Equal parts oil and flour. Medium-low heat. That's where every real gumbo starts.

Watch the color turn — blonde, peanut butter, mahogany. That aroma right there is the soul of the dish.

Onion, celery, bell pepper — the Holy Trinity. Listen to that. That's New Orleans in a pan.

Let it settle in. This is where the flavor locks.

Master this, and you can cook anything in our playbook.

Hit subscribe, drop your gumbo base in the comments — see y'all on the next one.
```

## What happens after generation

Same discipline as everything else here — drop the audio files back and I'll check them against the tone/pacing described above before they're treated as final. If you generate video and audio separately (this ElevenLabs track plus whatever comes out of Meta AI/Flow), the two need to actually be synced/mixed together in an edit pass afterward — flag if that's a step you want scoped out too, since nothing in the pipeline currently handles audio/video merging.
