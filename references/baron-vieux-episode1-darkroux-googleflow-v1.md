# Google Flow Video Prompt Package
## Baron Vieux Cooking Series — Episode 1 (Tightened): "The Secret to a True New Orleans Dark Roux"
### Created: 2026-09-05
### Status: PILOT — first attempt at proving the cooking series is producible before committing to a weekly schedule. Not yet generated.

## Why this is shorter than Gemini's original script

Gemini's original Episode 1 (`Base44 Content Review: Baron Vieux Scripts & Future IQ Copy`) is 5 scenes, 4-6 minutes — that needs 15-25+ separately-generated ~8-second clips stitched into one continuous scene. Today's testing (`references/video-tool-test-meta-vs-runway-v1.md`) showed even a **2-clip** stitch breaking continuity on both Google Flow and Meta AI. The one video this pipeline has actually shipped successfully — Roe Velvet — was **8 clips, ~63 seconds total**. That's the proven scale, not 4-12 minutes.

This is that same scale applied to Episode 1: **7 clips, ~56 seconds**, condensed to the hook, the two most visually dramatic technique beats (the color turn, the trinity drop), and the payoff — cutting the slower explanatory beats rather than trying to compress everything. **Recommendation for Lejohn to relay to Gemini: target ~55-65 seconds (6-8 clips) per episode going forward, not 4-12 minutes**, until/unless the pipeline proves it can reliably hold longer stitches.

---

## LOCKED REFERENCE IMAGES

- **Baron Vieux + kitchen setting → `references/baron-portrait-apron-kitchen-v1.jpeg`** — clean stainless-steel professional kitchen (exposed hood/exhaust, combi oven, hanging pots), Baron in gray chef's coat and black tool-apron (phone pocket, wooden spatula/spoon, leather strap details). Use this as the Ingredient for **both** character and location — this episode's kitchen should look like this shot throughout, not invented per-scene. This is a deliberate departure from the Roe Velvet references (different apron, different kitchen) — this is the cooking-series' own locked look, not the narrative-fiction Apothecary-bar look. Don't mix the two.
- **Embroidery/apron detail reference → `references/baron-mentoring-kitchen-v1.webp`** — same apron style, and the clearest existing reference for how "Baron Vieux" / "Bayouboujee" should actually render legibly on the coat sleeve. (This image has a second person in it — Baron is the one on the right, holding the clipboard; use this only for the embroidery/apron detail, not as a two-person reference — this episode is Baron alone.)

## VERIFICATION PROTOCOL — same discipline as Roe Velvet, apply to every clip before accepting it

1. Baron matches `baron-portrait-apron-kitchen-v1.jpeg` — same face, same age, same glasses, same coat/apron. Not "close enough."
2. Kitchen matches the same reference in every scene — same stainless steel, same hood, same equipment. No scene invents a different kitchen.
3. Embroidery text, if in frame, is legible — check against `baron-mentoring-kitchen-v1.webp`. If it renders garbled, regenerate; don't accept it and don't frame around it as a workaround without flagging.
4. No extra characters in frame — this episode is Baron alone.
5. **Stitch check after all 7 are generated:** cut them in order and watch as one clip. Does it read as one continuous kitchen moment, or is there a visible jump at any cut? This determines whether the pilot passes, same bar as today's test.

## STRICT GENERATION RULES (same as established elsewhere in this repo)

One take per scene, generated in order 1→7, no batching. Dialogue/narration is used close to verbatim from Gemini's original script (trimmed for length, not reworded). Reference image pasted fresh into every scene's prompt. If a take drifts, regenerate — don't loosen the prompt to match what came out.

---

### SCENE 1 — The Hook
**Visual:** Cinematic close-up, warm overhead lighting. A seasoned cast-iron skillet heating on a gas stove, oil shimmering. Flour gently raining down into the pan with a soft sizzle. Camera pulls back to reveal Baron's hands in the black tool-apron, whisk in motion.
**Narration:** "If you don't have patience, you don't have flavor. Today, we're breaking down the dark roux — the heartbeat of every real gumbo."
**Audio:** Soft sizzle, kitchen ambiance.

### SCENE 2 — Equal Parts
**Visual:** Overhead flat-lay, oil and flour combining into a smooth, bubbling golden paste in the skillet. Steam rising.
**Narration:** "Equal parts oil and flour. Medium-low heat. That's where every real gumbo starts."
**Audio:** Steady bubbling, whisk against iron.

### SCENE 3 — The Color Turn
**Visual:** Time-lapse macro sequence — roux shifting from golden blonde to peanut butter to milk chocolate to deep mahogany. Wooden spoon stirring in slow, rhythmic circles.
**Narration:** "Watch the color turn — blonde, peanut butter, mahogany. That aroma right there is the soul of the dish."
**Audio:** Low sizzle building under the narration.

### SCENE 4 — Dropping the Trinity
**Visual:** Dramatic slow-motion side angle — diced onion, celery, and green bell pepper dropping into the dark bubbling roux. Loud hiss, burst of aromatic steam.
**Narration:** "Onion, celery, bell pepper — the Holy Trinity. Listen to that. That's New Orleans in a pan."
**Audio:** Sharp sizzle/hiss on impact, steam.

### SCENE 5 — The Settle
**Visual:** Close stir, aromatics softening into the roux, steam thinning, color deepening slightly further.
**Narration:** "Let it settle in. This is where the flavor locks."
**Audio:** Gentle simmer.

### SCENE 6 — Beauty Shot
**Visual:** Clean beauty shot — finished dark, glossy roux base holding in the skillet, fresh thyme sprig on the cutting board beside it, subtle smoke drift.
**Narration:** "Master this, and you can cook anything in our playbook."
**Audio:** Quiet ambiance, no dialogue over the visual beat.

### SCENE 7 — Outro & CTA
**Visual:** Same beauty shot holds, lower-third graphic: "Subscribe to Baron Vieux."
**Narration:** "Hit subscribe, drop your gumbo base in the comments — see y'all on the next one."
**Audio:** Ambiance fades under a light musical sting.

---

## COPY-PASTE PROMPTS FOR META AI

Attach `references/baron-portrait-apron-kitchen-v1.jpeg` fresh before each scene — don't rely on it carrying over from the previous one. Paste only the text inside the box for each scene; the "ATTACH" line above each box is an instruction to you, not part of the prompt.

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux, a lean, sharp-featured chef with square black glasses, wearing a gray chef's coat and a black tool-apron (phone pocket, wooden spatula, leather straps), in a stainless-steel professional kitchen with an exposed hood and combi oven — same face, coat, apron, and kitchen as the attached reference image, not a different one.

Cinematic close-up, warm overhead lighting. A seasoned cast-iron skillet heating on a gas stove, oil shimmering. Flour gently raining down into the pan with a soft sizzle. Camera pulls back to reveal Baron's hands in the black tool-apron, whisk in motion. No other people in frame.

Dialogue (Baron): "If you don't have patience, you don't have flavor. Today, we're breaking down the dark roux — the heartbeat of every real gumbo."

Audio: soft sizzle, kitchen ambiance.

If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, gray coat, black tool-apron, same stainless-steel kitchen with exposed hood and combi oven visible in the background.

Overhead flat-lay shot. Oil and flour combining into a smooth, bubbling golden paste in the skillet. Steam rising. No other people in frame.

Dialogue (Baron): "Equal parts oil and flour. Medium-low heat. That's where every real gumbo starts."

Audio: steady bubbling, whisk against iron.

If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, gray coat, black tool-apron, same stainless-steel kitchen with exposed hood and combi oven visible in the background.

Time-lapse macro sequence. The roux in the skillet shifting in color from golden blonde to peanut butter to milk chocolate to deep mahogany. A wooden spoon stirring in slow, rhythmic circles. No other people in frame.

Dialogue (Baron): "Watch the color turn — blonde, peanut butter, mahogany. That aroma right there is the soul of the dish."

Audio: low sizzle building under the narration.

If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, gray coat, black tool-apron, same stainless-steel kitchen with exposed hood and combi oven visible in the background.

Dramatic slow-motion side angle. Diced onion, celery, and green bell pepper dropping into the dark, bubbling roux in the skillet. A loud hiss and a burst of aromatic steam on impact. No other people in frame.

Dialogue (Baron): "Onion, celery, bell pepper — the Holy Trinity. Listen to that. That's New Orleans in a pan."

Audio: sharp sizzle/hiss on impact, steam.

If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, gray coat, black tool-apron, same stainless-steel kitchen with exposed hood and combi oven visible in the background.

Close stir on the skillet. The dropped vegetables softening into the dark roux, steam thinning, color deepening slightly further. No other people in frame.

Dialogue (Baron): "Let it settle in. This is where the flavor locks."

Audio: gentle simmer.

If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux's kitchen, same stainless-steel professional kitchen as the attached reference image — same hood, same combi oven, same equipment.

Clean beauty shot. The finished dark, glossy roux base holding in the skillet, a fresh thyme sprig on the cutting board beside it, subtle smoke drift. No people in frame.

Dialogue (Baron, voiceover): "Master this, and you can cook anything in our playbook."

Audio: quiet ambiance, no other sound over the narration.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Same beauty shot as the previous scene — the finished dark, glossy roux base holding in the skillet, fresh thyme sprig beside it, subtle smoke drift, same stainless-steel kitchen.

Add a clean lower-third graphic reading: "Subscribe to Baron Vieux."

Dialogue (Baron, voiceover): "Hit subscribe, drop your gumbo base in the comments — see y'all on the next one."

Audio: ambiance fading under a light musical sting.
```

---

## What happens after generation

**Update 2026-09-05: running this through Meta AI first, not Flow** — Lejohn's call, since Meta AI's video generation is currently free and this is exactly the kind of controlled test where that matters before spending Flow tokens on a 4-episode series. Run all 7 copy-paste prompts above through Meta AI in order, drop the clips back, and I'll verify against the checklist including the stitch check — same as every other test today, and log the result in `references/meta-ai-prompt-technique-v1.md` either way (confirms or revises the in-progress rules there). If it passes: this becomes the template for Episodes 2-4, and only then does Assignment #4 (Base44 ScheduledPost ingestion across YouTube/TikTok/IG/FB) make sense to act on. If it doesn't pass: the finding goes back into the tool comparison, and Flow (the one tool actually proven at this clip count via Roe Velvet) becomes the fallback for production even with its token cost.
