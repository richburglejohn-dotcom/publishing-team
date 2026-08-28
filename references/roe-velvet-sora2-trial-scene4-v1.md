# Roe Velvet — Sora 2 Trial (ElevenLabs Creative Studio)
### Created: 2026-08-28
### Purpose: single-scene test of Sora 2 (via ElevenLabs Creative Studio) against the same scene Flow struggled with, before committing to a full 8-scene run

**Why Scene 4:** it's the most information-dense single shot in the script — both characters, the locked cake reference, and a verbatim dialogue line all in one take. If Sora 2 holds up here, the rest of the script is a reasonable bet. If it drifts the same way Flow did, that tells us the problem isn't model-specific.

**This is one attempt, not a batch.** Same discipline as the Flow rules: one take, no variations to pick from.

---

### Reference images to attach (same three locked assets, if Sora 2's ElevenLabs integration supports image references)
- Baron Vieux → `references/baron-vieux-scarlett-notext-v1.jpg`
- Olivia Marigny → `references/olivia-marigny-headshot-v1.jpg`
- The cake → `references/roe-velvet-cake-reference-v1.jpg`

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
