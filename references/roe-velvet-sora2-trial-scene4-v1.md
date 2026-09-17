# Roe Velvet — Sora 2 Trial (ElevenLabs Creative Studio)
### Created: 2026-08-28
### Purpose: single-scene test of Sora 2 (via ElevenLabs Creative Studio) against the same scene Flow struggled with, before committing to a full 8-scene run

## RESULT (2026-09-17): PASS — this is the winning approach

Ran this for real via the ElevenLabs MCP connector. **Text-to-video alone was not the fix — a two-stage pipeline was:**

1. **Compose a still frame first** (`flux-2-pro`, ~$0.12/attempt) combining all 4 locked references (Baron, Olivia, cake, Apothecary setting) into one accurate starting image. Took 3 attempts to get right — attempt 1 had a duplicated cake and a brown leather apron instead of the locked black canvas one; attempt 2 fixed those but duplicated Olivia into two women; attempt 3 (saved as `references/roe-velvet-sora2-scene4-startframe-v1.png`) passed every check.
2. **Animate that still with `sora-2`** (non-pro — `sora-2-pro` cost ~$2.64/8s and exceeded the account's remaining quota; `sora-2` cost ~$0.88/8s) using it as `start_frame`, not a blind text-only generation.

Final video saved as `references/roe-velvet-sora2-scene4-result-v1.mp4` — 8.3 seconds, passed all 5 checklist items with zero drift across the full clip (Baron, Olivia, the cake, and the setting all held consistent frame to frame). Audio/dialogue content not verified here (no transcription capability) — confirm by listening.

**Defect found after initial review (caught by Lejohn, missed on first pass):** Baron's coat sleeve is correctly short (matches the reference — bare forearm), but a disconnected gray cuff-band floats around his wrist with no fabric connecting it back to the sleeve at the elbow. Not in the reference at all — a fabricated fragment, not a rolled-up long sleeve as first assumed. Present in the start frame and carried through the whole video (consistent, at least, but consistently wrong). Worth an explicit negative instruction next time: "bare forearm from elbow to wrist, nothing around the wrist" — don't just trust that a correct reference image prevents an invented extra garment piece.

**Fixed (2026-09-17):** rather than recompose the whole still from scratch, used `creative_edit_image` (flux-1-kontext, ~$0.04) as a targeted single-instruction edit on the approved still — "remove the wrist cuff, bare forearm, don't change anything else." Worked cleanly on the first try: `references/roe-velvet-sora2-scene4-startframe-v2.jpg`. Re-animated with sora-2 from that corrected frame (~$0.88): `references/roe-velvet-sora2-scene4-result-v2.mp4`, 8.3s. Checked frames at start/middle/end of the clip — bare forearm held consistently the whole way through, defect fully gone. **v2 is the final reference result; v1 files are kept for the history of what the defect looked like, not for reuse.**

**Added lesson:** a small, isolated flaw in an otherwise-good generation doesn't need a full regenerate — `creative_edit_image` with a single clear instruction against the existing node is far cheaper (~$0.04 vs ~$0.12 for a still, ~$0.88 vs another full video) and keeps everything that was already correct untouched.

**Cost lesson:** video generation runs ~20x the cost of a still (turn a $2.64 blind video gamble into ~$0.35 of cheap still-image iteration + $0.88 video, one variable locked in before the expensive step). Apply this same compose-still-then-animate pattern to Scenes 1-3 and 5-8 rather than generating any of them as text-only video directly.

**Why Scene 4:** it's the most information-dense single shot in the script — both characters, the locked cake reference, and a verbatim dialogue line all in one take. If Sora 2 holds up here, the rest of the script is a reasonable bet. If it drifts the same way Flow did, that tells us the problem isn't model-specific.

**This is one attempt, not a batch.** Same discipline as the Flow rules: one take, no variations to pick from.

---

### Reference images to attach (if Sora 2's ElevenLabs integration supports image references)
- Baron Vieux → `references/baron-vieux-scarlett-notext-v1.jpg`
- Olivia Marigny → `references/olivia-marigny-headshot-v1.jpg`
- The cake → `references/roe-velvet-cake-reference-v1.jpg`
- The Apothecary (setting) → `outputs/apothecary-family-meal-anchor-v1.png` — the setting has only ever been described in text ("exposed brick, warm low light"), never locked visually, same gap that caused the character/cake drift. This is the closest real shot of the restaurant's actual look (brick, copper pendant lights, warm kitchen glow) — not an exact framing match to Scene 4, but useful for mood/lighting consistency.

If ElevenLabs' Sora 2 integration does **not** support attaching reference images the way Flow's Ingredients did, run it as a text-only prompt anyway — that's a useful data point on its own (text-only was also Flow's original failure mode, so this tells us whether Sora 2 is more reliable on likeness from description alone).

---

### Scene 4 — The Reveal

**Prompt:**

Photoreal video, ~8 seconds, medium shot. Interior of The Apothecary, a New Orleans restaurant kitchen and bar, late at night after the dinner rush. Warm spotlight feel on the cake and on Baron's face.

Baron Vieux — lean, deliberate build, dark-skinned, sharp-featured, looks younger than he is until you see his eyes, square-framed black glasses, gray chef's coat, worn leather apron tied at the waist, calm theatrical confidence — sets a round two-layer orange velvet cake down in front of Olivia Marigny. White frosting, a single mound of glossy orange roe on top, candied orange peel scattered at the base. He lifts both hands theatrically as he presents it, leaning in slightly on the pause.

Olivia Marigny — jazz and blues singer, late twenties, warm brown skin, natural curls pulled back loosely, simple dark top, small gold hoop earrings, the relaxed self-possession of a performer off the clock — sits at the table watching him, amused and waiting.

Baron speaks, verbatim, no paraphrasing: "You will notice that I have done the unthinkable. I have made the roe... wait."

Room hush during the line. A faint suppressed laugh from off-camera.

No other characters in frame. No camera movement beyond the static medium shot described above.

---

### After the trial — checklist before deciding anything
1. Does Baron match the reference image (age, face, coat/apron)? Not "close enough."
2. Does Olivia match her reference image?
3. Is the cake the same object as the reference (two-layer, roe mound, candied peel)?
4. Is the dialogue verbatim and audible?
5. Did anything unscripted show up (extra people, wrong setting)?

Save the actual output file here once generated, alongside notes on which items above passed or failed — that's the reference for deciding whether to run the rest of the script on Sora 2, stick with Flow, or fall back to the ElevenLabs-narration-plus-silent-visuals approach already documented in `references/roe-velvet-video-prompts-googleflow.md`.
