# Google Flow Video Prompt Package
## "Roe Velvet" — Baron & Olivia's First Real Meeting (Chapter 9)
### Updated 2026-08-24: locked to strict generation — see rules below before running any scene

Structured for sequential scene-by-scene input into Google Flow. Each scene is written as a self-contained ~8-second clip. Character reference blocks are repeated in each prompt to help maintain visual consistency across generations.

---

### LOCKED REFERENCE IMAGES — required Ingredients, not text descriptions

Text-only character descriptions have not held up across scenes (confirmed 2026-08-24 on the v2 draft: wrong-age Baron, an Olivia who didn't match her reference at all, and an extra unscripted woman appearing before Olivia). Before generating any scene, upload these as Flow "Ingredients" and reference them directly instead of re-typing the character description:

- **Baron Vieux → `docs/media/baron-vieux-scarlett.jpg`** — photoreal, correct age/look, correct "Baron Vieux" / "Bayouboujee" coat embroidery, black canvas apron with utility pockets. This is the canonical look from the videos that got him right. Do NOT use `references/baron-vieux-noir-portrait-v1.jpg` as a reference for video generation — that's a stylized illustrated brand portrait (different art style, younger face), not the photoreal video canon.
- **Olivia Marigny → `references/olivia-marigny-headshot-v1.jpg`** — photoreal, wavy dark hair with a warm blonde streak, matches her full contact sheet (`references/olivia-marigny-contact-sheet-v1.jpg`) for cross-checking additional angles/expressions if Flow supports multiple reference images per character. Do NOT use `references/olivia-marigny-portrait-v1.png` for video generation — same issue, illustrated noir style, not the photoreal canon.
- **Only one woman in this script.** Olivia is the only female character in all 8 scenes. If a take introduces any other woman before or instead of her, that take is wrong — regenerate rather than keep it.

### STRICT GENERATION RULES — apply to every scene, no exceptions

- **One take per scene.** Generate each scene individually, one at a time, in order 1→8. Do not batch-generate or generate variations to pick from — the take you get is the take that's used. This is what keeps continuity tight across 8 separately-generated clips.
- **Dialogue is verbatim.** The lines in Scenes 4, 6, and 7 are pulled directly from the Chapter 9 manuscript. Do not let Flow paraphrase, shorten, or ad-lib them. If a take changes the wording, regenerate that scene rather than keep a close-enough version.
- **Character reference blocks are locked.** Paste the full CHARACTER REFERENCE section fresh into every scene's prompt exactly as written below — same wording every time, not a summary or a memory of the last scene. Do not add, remove, or alter any wardrobe, physical, or personality detail.
- **No added characters, no added dialogue.** Only the people named in a scene's Visual/Dialogue lines should appear or speak. No background extras with lines, no narrator voiceover unless a scene explicitly calls for one.
- **No camera moves beyond what's specified.** If a scene says "wide shot" or "camera slowly pushes in," that's the full extent of the camera direction — no additional pans, zooms, or cuts within the clip.
- **If a take drifts, regenerate — don't edit the prompt to match what came out.** The known failure mode from prior Flow videos is garbled embroidery text on Baron's chef coat/apron in close-up. If a take shows illegible text where the coat/apron is prominent in frame, regenerate that take rather than accept it; do not loosen the wardrobe description to explain away the drift.
- **Mood/lighting/audio lines are directions, not suggestions.** Treat every Mood/Lighting and Audio line the same as the Visual line — locked, not a starting point to riff from.

---

### CHARACTER REFERENCE (reuse across all scenes)

**Baron Vieux** — Lean, deliberate build, dark-skinned, sharp-featured, looks younger than he is until you see his eyes. Square-framed black glasses. Gray chef's coat embroidered "Baron Vieux" on the left chest, "Bayouboujee" on the right. Worn leather apron tied at the waist. Calm, theatrical confidence in his movements — a man who treats plating like a stage entrance. **Voice tag:** `@Voice: Charon` (per `references/baron-vieux-voice-reference-master-v1.md`).

**Olivia Marigny** — Jazz and blues singer, late twenties, warm brown skin, natural curls pulled back loosely, the relaxed self-possession of a performer off the clock. Simple dark top, small gold hoop earrings. Expressive face — she reacts with her whole body, not just her eyes. **Voice tag:** `@Voice: Aoede`.

**Rampart** — Lead cook, built broad like a shipping container, bald, dark-skinned, deep sheen of kitchen sweat. Economical movements. Dry, unimpressed energy that masks real affection for Baron.

**Setting** — The Apothecary, a New Orleans restaurant kitchen and bar, late at night after the dinner rush. Warm low light, exposed brick, the glow of pass-through heat lamps, soft jazz bleeding faintly from the dining room.

---

### SCENE 1 — The Quiet Bar
**Visual:** Wide shot, dim warm restaurant interior late at night. Olivia sits alone at the end of the bar facing the kitchen pass, a half-finished plate in front of her. Steam rises faintly from the kitchen window behind her. Camera slowly pushes in.
**Mood/Lighting:** Low amber light, intimate, jazz-club warmth.
**Audio:** Soft ambient restaurant murmur, distant clinking of dishes, a low blues melody under the scene.

---

### SCENE 2 — The Cake at the Pass
**Visual:** Close-up, Baron's hands placing a finished two-layer orange velvet cake on a stand at the kitchen pass. Pale cream cheese frosting, smooth sides. He adjusts the plate a half-inch, exhales, composes himself.
**Mood/Lighting:** Warm kitchen light, shallow depth of field, steam and heat-lamp glow in the background.
**Audio:** Kitchen ambiance, the clink of the cake stand on stainless steel.

---

### SCENE 3 — The Walk-Out
**Visual:** Tracking shot from behind Baron as he carries the cake stand out of the kitchen and across the dining room toward Olivia, chin slightly raised, walking like a man making an entrance.
**Mood/Lighting:** Transition from cool kitchen light to warmer dining room ambiance.
**Audio:** Footsteps, room noise fading up.

---

### SCENE 4 — The Reveal
**Visual:** Medium shot, Baron sets the cake down in front of Olivia, lifting both hands theatrically as he presents it, leaning in slightly on the pause.
**Dialogue (Baron, voiceover or lip-sync):** "You will notice that I have done the unthinkable. I have made the roe... wait."
**Mood/Lighting:** Warm spotlight feel on the cake and Baron's face.
**Audio:** Room hush, dialogue line, a faint suppressed laugh from off-camera (Rampart).

---

### SCENE 5 — The Quenelle, Close-Up
**Visual:** Extreme close-up, slow push-in on the single glossy orange roe quenelle at the center of the white-frosted cake, candied orange peel scattered at the base catching the light.
**Mood/Lighting:** High detail, warm key light, slight glisten on the roe.
**Audio:** Quiet musical sting or single sustained low note.

---

### SCENE 6 — Rampart's Dry Reaction
**Visual:** Medium shot, Rampart at the kitchen line in the background, not looking up, wiping a knife, the faintest smirk.
**Dialogue (Rampart):** "Destiny. Last week it was the bisque."
**Mood/Lighting:** Cooler kitchen light, contrasted against the warm dining room in the foreground blur.
**Audio:** Kitchen clatter under the line.

---

### SCENE 7 — Olivia's First Bite
**Visual:** Close-up on Olivia's face as she takes the bite — cake, frosting, and roe together. Her expression shifts through surprise, then something more delighted. She sets the fork down slowly.
**Dialogue (Olivia):** "Okay. That's a whole bit."
**Mood/Lighting:** Soft warm light on her face, shallow focus, background softly blurred.
**Audio:** Light room ambiance, her line, a small laugh.

---

### SCENE 8 — The Walk Back
**Visual:** Wide shot, Baron walking back toward the kitchen, lighter in his step than when he walked out, a small private smile forming. He starts humming, almost inaudibly.
**Mood/Lighting:** Warm light fading toward the cooler kitchen glow as he exits frame.
**Audio:** Faint hum from Baron, ambient restaurant sound swelling slightly as the scene closes.

---

### Production Notes
- Recommend generating in order 1→8 for continuity momentum, even though Flow treats each as independent — visual consistency holds up better when character descriptions are pasted fresh each time rather than relied on from memory.
- For the post-production pass: your established `delogo` watermark removal and per-clip `loudnorm` pipeline should apply the same way as the Baron cooking video. Scene 5 (the quenelle close-up) is a good candidate for a slight slow-motion stretch in the edit.
- Scene 4's dialogue and Scene 6/7 reactions are pulled directly from the Chapter 9 draft for continuity with the manuscript.
