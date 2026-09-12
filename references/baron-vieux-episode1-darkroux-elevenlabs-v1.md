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

---

## Results: direct API generation via ElevenLabs connector — 2026-09-08 — best result of the whole week

Update: ElevenLabs connected as a live MCP tool in this session, with real `creative_generate_video`/`creative_generate_speech` API access (not just the manual "ElevenLabs Flow" UI Lejohn was testing by hand) — see `references/pipeline-tool-capabilities.md` for the capability writeup. Used this to generate the episode directly instead of handing off copy-paste prompts.

**All 7 narration lines generated** with the cloned "Baron Vieux (Voice Bank 2026-08-24)" voice (`1xE006SCsREhx83KAUYI`) — genuinely his voice, not an approximation. Total cost ~$0.11.

**3 of 7 scene videos generated** (Scenes 1-3) via `gemini-omni-1.1-flash`, wired to `baron-portrait-apron-kitchen-v1.jpeg` as an image reference on a shared ElevenLabs Flow canvas (flow id `u4hdBzjeexgptHk76hDh`). **This is the best result the whole pipeline has produced this week** — verified by extracting frames and checking against the reference:
- Scene 1's final frame matches the reference photo almost exactly: same face, glasses, apron with the phone/tools in the pockets, same stainless-steel kitchen with hood and combi oven.
- Scenes 2 and 3 hold the same kitchen, skillet, and wooden spoon consistently, and Scene 3's color-turn actually progresses from pale to deep reddish-brown across the clip, matching the script.
- No character drift, no setting drift, no extra people — the three failure modes that broke every other tool's attempt this week (Flow, Meta AI Rounds 1 and 2) did not show up here.

**Scenes 4-7 blocked — ElevenLabs workspace quota exhausted, not a Claude-side limit.** Each video costs ~6,105 credits (~$1.11); the workspace had only 4,620 left after scene 3, against a 130,810 total quota — meaning most of the quota was already used before this session started (Lejohn's own testing this week: the food-image generations, the manual Flow session, etc.), not by this run alone. Total spend this session: ~$3.44 (3 videos + 7 narration lines).

**Next step:** once quota resets or more credits are added, resume with Scene 4 using the same flow id and reference node (`Apsxmy1LeGLUop6yJaoS`) so it stays on the same canvas — prompts for Scenes 4-7 are already written in `references/baron-vieux-episode1-darkroux-googleflow-v1.md`'s copy-paste section, adaptable to gemini-omni-1.1-flash's shorter intent-based style the same way Scenes 1-3 were.

**Update 2026-09-11 — still blocked, credits not actually topped up.** The scheduled Friday check-in assumed Lejohn would have added credits by now, so this session attempted to resume Scene 4. The flow's Scene 4-7 nodes were already pre-built and wired to the reference image (`gdZc1jDo16NySfFpzb8R` / `KIkvu64zSvka58RvTrKk` / `uayPpkrmPy50MfCzvE2N` / `Muz4AnIGptYlsrk4fZhn`, on flow `u4hdBzjeexgptHk76hDh`) — no new prompt-writing needed, just running them. An `estimate_only` check came back clean (no blocking error), but the actual generation call failed: `quota_exceeded` — **4,161 credits remaining, 6,105 required**. So the workspace pool has barely moved since the 4,620 remaining noted on 2026-09-08 (the ~460-credit difference is likely other testing elsewhere in the shared workspace, not a top-up). Not retrying — the tool's own instructions warn a second call starts and charges a second generation, and repeated failed attempts against an unchanged quota won't help. **Holding here; needs an actual credit top-up before Scene 4 can run.** Nothing generated, nothing charged (the failed call errored before creating a billable job).

**Retried same day on Lejohn's go-ahead ("complete elevenlabs") — identical result.** Quota still reads exactly **4,161 credits remaining, 6,105 required** — no movement at all from the first attempt a few hours earlier. Whatever top-up was expected hasn't actually landed on ElevenLabs' side yet. Not retrying again until Lejohn confirms the top-up actually went through — a third identical attempt against an unchanged balance won't produce a different result.

**Update 2026-09-12 — top-up confirmed, Scenes 4-7 completed.** On "Try now," the generation succeeded — credits had actually landed by then. Scenes 4, 5, and 6 each generated clean on the first take, verified against the reference (same kitchen, same skillet, no character/setting drift) and committed to `outputs/baron-vieux-darkroux-scene{4,5,6}-v1.mp4`.

Scene 7's **first take was rejected**: the lower-third CTA graphic rendered "Subscribe to Baron **View** Vieux" instead of "Subscribe to Baron Vieux" — an inserted extra word, same category of AI text-rendering defect that hit the Jambalaya and chefjacket embroidery. Per the standing discipline, not saved. Strengthened the node's prompt via `creative_update_node` with explicit repeated anti-defect language naming the exact wrong output, then regenerated. The retake reads correctly — confirmed "Subscribe to Baron Vieux" legible across its full on-screen window (t=6-7.5s of the clip), with a normal wipe-out transition afterward (briefly showed partial text like "ub" as it slid off-frame — not a defect, just the exit animation). Saved to `outputs/baron-vieux-darkroux-scene7-v1.mp4`.

**Gap found: Scenes 1-3 (generated 2026-09-08) were never saved to the repo** — they existed only as completed nodes on the flow canvas, and no session_id was ever logged anywhere to retrieve that original run's media. Flagged to Lejohn rather than silently either accepting a regenerate or declaring the episode blocked; he chose to regenerate. Re-running the same existing flow nodes (`2wLfoFaoU6AB5Tol7dxD` Scene 1, `bGIuIzJJLqZYBMuQCRfu` Scene 2, `WYeuzMNzgmKRWy8eIw1o` Scene 3) with their original prompts intact — same setup that produced "the best result of the whole week," but necessarily a new take each, not the literal original clips. In progress.
