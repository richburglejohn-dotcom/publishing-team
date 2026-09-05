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

## What happens after generation

Run all 7 through Google Flow (the one tool proven at this clip count), verify against the checklist above including the stitch check, and report back the same way as every other test today. If it passes: this becomes the template for Episodes 2-4 at the same tightened length, and only then does Assignment #4 (Base44 ScheduledPost ingestion across YouTube/TikTok/IG/FB) make sense to act on. If it doesn't pass: the finding goes back into `references/video-tool-test-meta-vs-runway-v1.md`'s ongoing tool comparison rather than being treated as a dead end.
