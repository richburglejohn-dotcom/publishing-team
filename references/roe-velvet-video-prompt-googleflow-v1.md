# Google Flow Video Prompt Package
## "Roe Velvet" — Baron Tests the Dish on Calliope (Chapter 9)
### Created: 2026-08-08 · Revised: 2026-08-08 (v2 — correct cast) · Revised: 2026-08-21 (v3 — REJECTED batch, regeneration brief) · Revised: 2026-09-02 (v4 — Calliope redesign + doc cleanup)

Structured for sequential scene-by-scene input into Google Flow. Each scene is written as a self-contained ~8-second clip. Character reference blocks are repeated in each prompt to help maintain visual consistency across generations — adjust freely if Flow drifts on a feature.

**Revision history:**
- v1 had two things wrong and has been superseded: it put the wrong dish in frame (orange velvet cake / cream-cheese frosting / orange salmon roe instead of the dark red velvet / chocolate frosting / black caviar established in the approved key art), and it put the wrong character in the bar. **Olivia does not appear in Chapter 9.** The manuscript actually merged into the book (`outputs/Scarlet_Foundation_FULL_DRAFT_v1.md`) and the series bible's own chapter outline ("Calliope pushes him forward") both confirm it's **Calliope**, at **her own bar**, who tastes the cake. Olivia is only the unnamed voice Baron hums on the walk back — still unmet at this point in the story.
- This version (v2) rebuilds the scene list around Calliope and folds in the background details from the approved "ROE VELVET" still (Sazerac Rye bottles, dark wood bar counter, candle, string lights, blurred arched doorway) so the video reads as the same room as the poster.
- **v3 (2026-08-21) — REJECTED, do not post any cut built from this batch.** The stitched `roe_velvet_full_v1.mp4` (filed 8/19) and the later `Roe_Velvet_TikTok_32s_9x16.mp4` / `Roe_Velvet_-_Calliope's_Bar_...mp4` clips all share the **same v1 dish error again** — plain cake, wrong color, no caviar — plus two new failures: **some shots have no cake on the stand at all**, and **Baron's face/likeness drifts off-model** in multiple shots. Whoever generated this batch was not working from this file, or drifted badly mid-batch. See the checklist below before regenerating.
- **v4 (2026-09-02) — Calliope redesign applied; wrong-cast doc removed.** A duplicate file (`references/roe-velvet-video-prompts-googleflow.md`, no version suffix) existed alongside this one and directly contradicted the manuscript — it cast Olivia instead of Calliope and locked in the wrong orange-roe/cream-cheese cake as its reference image. That file and its wrong cake reference (`references/roe-velvet-cake-reference-v1.jpg`) have been deleted from the repo; this is now the only Roe Velvet video prompt doc. Separately, Calliope's design has since been updated (tattooed forearms, apothecary/tincture bar) per `references/calliope-solo-portraits-prompt-googleflow-v1.md` — this is treated as retroactive canon, so her likeness anchor and the bar setting below have been updated to match. **`references/calliope-portrait-v1.jpg` is now superseded — do not use it for this scene or any other.**
- **v5 (2026-09-02) — Scene 1 REJECTED, Baron likeness failure.** First real Scene 1 take (`Baron_and_Rampart_tasting_cake_202609021420.mp4`) got the dish right (dark red velvet, dark chocolate frosting, black caviar quenelle, rosemary — confirmed on-model across the whole clip) but failed Baron's likeness in every single frame checked: **no glasses at all**, and **no waist apron** — just a plain gray shirt, nothing else. He also reads noticeably older/heavier than his reference photos, not the lean, younger-than-he-looks build. Also found in this pass: `references/scarlet-foundation-front-cover-v1.jpg`, cited below as one of two valid likeness-check images, **does not exist anywhere in this repo** — removed from the checklist; `references/baron-portrait-apron-kitchen-v1.jpeg` is the only confirmed-existing Baron reference and should be uploaded as a Flow Ingredient, not just cited in text. Glasses and apron are now hard-fail checks, same tier as the dish.

---

### STOP — before regenerating, read this

This is the **third** time this exact dish has come back wrong. Do not free-hand the dish description from memory — copy it from this file verbatim, every single time.

1. **The dish is not optional set dressing — it must be visible, in frame, on the stand, in every scene that includes the cake stand, EXCEPT Scene 7** (Baron carrying the stand back empty is correct there — Calliope already ate it). In Scenes 1–6, an empty stand or bare plate is an automatic reject.
2. **Dish color/style, copied exactly:** dense **dark red** velvet cake, glossy **dark chocolate** frosting, one quenelle of **black** caviar centered on top, small rosemary sprig beside it. Not orange. Not pale. Not cream-cheese frosting. Not empty.
3. **Baron's likeness — check against `references/baron-portrait-apron-kitchen-v1.jpeg`** (the only confirmed-existing reference; `references/scarlet-foundation-front-cover-v1.jpg` was cited here previously but does not exist in this repo — do not chase it). Upload this image as a Flow "Ingredient" for every scene, not just a text description. Two items are now **hard-fail, non-negotiable checks, same tier as the dish** — reject on sight, no exceptions:
   - **Square-framed black glasses, visible on his face in every frame where his face is on camera.** A take with no glasses (confirmed failure mode, 2026-09-02 Scene 1 take) is an automatic reject.
   - **A dark/black waist apron, visible at all times.** A take with just a bare chef's coat and no apron (same 2026-09-02 failure) is an automatic reject.
   - Softer but still check: lean, deliberate build reading younger than his age until you see his eyes — not a heavyset or notably older look.
4. **Calliope's current design (2026-09-02 redesign) — use `references/calliope-bartender-portrait-v2-bun.webp` or `-braids.webp` as the reference art.** `references/calliope-portrait-v1.jpg` (short natural afro, no tattoos, whiskey bar) is superseded — do not use it. Match her tattooed forearms, nose ring, and hoop earrings in every shot.
5. **Check every clip before moving to the next**, not after the whole batch is stitched. Catching this after a 64-second cut is already assembled wastes an entire regeneration pass.

---

### CHARACTER REFERENCE (reuse across all scenes)

**Baron Vieux** — Lean, deliberate build, dark-skinned, sharp-featured, looks younger than he is until you see his eyes. **ALWAYS WEARING square-framed black glasses — non-negotiable, reject any frame where his face is visible and the glasses are not.** His chef's coat is **charcoal gray, not white** — a distinct medium-gray fabric, double-breasted, not the standard white chef's whites. **ALWAYS WEARING a dark/black leather waist apron tied at the waist, visible over the coat — reject any frame where it's missing** (confirmed failure mode, 2026-09-02 Scene 1 take: coat with no apron at all). Calm, theatrical confidence in his movements — a man who treats plating like a stage entrance. **Do not attempt to render embroidered text on the coat** ("Baron Vieux" / "Bayouboujee") — small cursive lettering on fabric has repeatedly come out garbled in Flow generations; leave the coat plain and add any lettering in post if needed.

**Calliope** — Black woman, dark skin, sharp-eyed and steady, unhurried, freckles across nose/cheeks, small nose ring and hoop earrings — the kind of presence that watches people reveal what their faces work to conceal. Extensive tattoo work on both forearms (florals, rose, snake/dagger, skull, fine linework). Dark button-up shirt (olive-green or black) with rolled sleeves, sometimes a brown waist apron, a rag over one shoulder or in hand from wiping down the counter. **Reference art: `references/calliope-bartender-portrait-v2-bun.webp`** (curly bun, olive shirt) or **`references/calliope-bartender-portrait-v2-braids.webp`** (braids, black shirt) — either hair variant is valid, match likeness/tattoos to these directly rather than generating from description alone.

**Rampart** — Lead cook, built broad like a shipping container, bald, dark-skinned, deep sheen of kitchen sweat, gray beard, a faint scar on the cheek. Economical movements. Dry, unimpressed energy that masks real affection for Baron. Appears only in Scene 1 (the kitchen) — he does not go to Calliope's bar.

**The dish (Roe Velvet)** — A dense, dark red velvet cake, glossy dark chocolate frosting, a single quenelle of black caviar centered on top, a small rosemary sprig beside it. Served on a dark wooden cake stand. Match the approved "ROE VELVET" key art exactly — not a lighter cake, not cream-cheese frosting, not orange roe.

**Setting — the Apothecary kitchen** — French Quarter restaurant kitchen, exposed brick, stainless steel pass, late at night after the dinner rush, cooler and harsher light than the bar.

**Setting — Calliope's bar** — A separate, smaller neighboring bar Baron walks to: her apothecary-style tincture bar (per the 2026-09-02 redesign), not a generic whiskey bar. Dim, warm amber light. Dark wood counter, exposed bulb pendant lights, glass jars of dried botanicals, "Scarlet Elixir" bottles on the back shelf, hand-painted "Apothecary" signage. A candle burning in a glass holder near where the cake will sit. Soft string lights and a few blurred regulars/an arched doorway or window in the background, out of focus. Quiet at this hour — the post-rush lull before last call.

---

### SCENE 1 — The Taste Test
**Visual:** Close-up, camera positioned just behind Rampart's shoulder, looking past him at Baron. Rampart's shoulder and the back/side of his head fill the near foreground, out of focus and dim. Baron's face fills the center of frame, sharp focus, well-lit, watching intently, hands still half-raised from setting the plate down, wearing his charcoal-gray chef's coat, **square-framed black glasses on his face and a dark leather waist apron visible over the coat — both required, not optional**. Low in frame, blurred but still identifiable: a slice of dense dark red velvet cake with glossy dark chocolate frosting, topped with a quenelle of black caviar and a small rosemary sprig — not a plain cake, not a pale crumb, not a berry garnish. Rampart's knife is visible near the plate. This is a shot of Baron's face, seen past Rampart — not a shot of Rampart eating.
**Dialogue (Baron):** "Well?"
**Dialogue (Rampart):** "It's good."
**Dialogue (Baron):** "That's it? 'It's good'?"
**Dialogue (Rampart):** "You want a parade, take it to Calliope. She'll give you the parade. Or she won't, and you'll know it's actually good."
**Mood/Lighting:** Cooler kitchen light, shallow depth of field, steel and heat-lamp glow in the background.
**Audio:** Kitchen ambiance, the clink of a plate, dialogue lines.

---

### SCENE 2 — The Walk-Out
**Visual:** Tracking shot from behind Baron as he carries the cake stand out of the kitchen's back door and down the sidewalk into the French Quarter night, toward the bar next door, chin slightly raised, walking like a man carrying something fragile and important.
**Mood/Lighting:** Transition from cool kitchen light, briefly outside under a streetlamp, into the warm amber glow of the bar doorway ahead.
**Audio:** Footsteps, night street ambiance, bar noise fading up as he reaches the door.

---

### SCENE 3 — The Reveal
**Visual:** Wide-to-medium shot as Baron pushes through the door into Calliope's apothecary-style tincture bar — dark wood counter, glass jars of dried botanicals and "Scarlet Elixir" bottles on the shelf behind, candlelight, string lights and a blurred doorway/window in the background. Calliope is behind the bar wiping it down, doesn't look up right away — tattooed forearms visible. Baron sets the cake stand down and lifts both hands theatrically, presenting it.
**Dialogue (Calliope):** "You didn't call ahead."
**Dialogue (Baron):** "Can't call ahead to something I didn't schedule."
**Dialogue (Baron):** "You will notice that I have done the unthinkable. I have made the roe... wait."
**Mood/Lighting:** Warm spotlight feel on the cake and Baron's face against the dim bar.
**Audio:** Room hush, dialogue lines, the quiet clink of the cake stand on the wood counter.

---

### SCENE 4 — Destiny
**Visual:** Medium shot, Calliope leans both forearms on the bar, studying the cake the way she studies Baron — steady, unhurried. Baron gestures at the quenelle.
**Dialogue (Baron):** "This is not fusion. This is destiny."
**Dialogue (Calliope):** "Destiny. Last week it was the bisque."
**Dialogue (Baron):** "The bisque was a different chapter of destiny."
**Mood/Lighting:** Warm amber bar light, candle glow catching both faces.
**Audio:** Quiet bar ambiance under the dialogue.

---

### SCENE 5 — The Quenelle, Close-Up
**Visual:** Extreme close-up, slow push-in on the single glossy black caviar quenelle centered on the dark chocolate frosting, the rosemary sprig and candlelight catching beside it.
**Mood/Lighting:** High detail, warm key light from the nearby candle, slight glisten on the caviar.
**Audio:** Quiet musical sting or single sustained low note.

---

### SCENE 6 — Calliope's Bite
**Visual:** Close-up on Calliope's face as she finally takes the bite — cake, frosting, caviar together. Her expression shifts through surprise into something more complicated and pleased. She sets the fork down slowly.
**Dialogue (Calliope):** "Okay. That's — that's actually a bit. That's a whole bit."
**Dialogue (Baron):** "It is a dish."
**Dialogue (Calliope):** "No. I've watched you run this exact routine on me for two years, Baron. I know a bit when I'm being handed one. You should be charging cover."
**Mood/Lighting:** Soft warm candlelight on her face, shallow focus, the bar softly blurred behind her.
**Audio:** Light bar ambiance, dialogue lines.

---

### SCENE 7 — The Walk Back
**Visual:** Wide shot, Baron carrying the empty cake stand back down the sidewalk toward the kitchen, lighter in his step than when he walked out, a small private smile forming. He starts humming, almost inaudibly.
**Mood/Lighting:** Warm bar light behind him fading toward the cooler kitchen glow as he exits frame.
**Audio:** Faint hum from Baron, ambient street sound as the scene closes.

---

### Production Notes
- Recommend generating in order 1→7 for continuity momentum, even though Flow treats each as independent — visual consistency holds up better when character and dish descriptions are pasted fresh each time rather than relied on from memory.
- **Dish color/style is the thing to check first on every generated clip** before moving on — dark red velvet crumb, dark chocolate frosting, black caviar, actually present in frame (Scenes 1–6). If Flow drifts back toward a pale/orange cake, no caviar, or an empty stand, regenerate that scene immediately — do not carry a bad clip into the stitched cut hoping it reads fine at speed.
- **Baron likeness check on every clip too, same as the dish** — compare against `references/baron-portrait-apron-kitchen-v1.jpeg` (the only confirmed-existing reference — `scarlet-foundation-front-cover-v1.jpg` does not exist in this repo, don't cite it). This has now failed twice (the 2026-08-21 batch, and the 2026-09-02 Scene 1 take — missing glasses, missing apron both times); treat glasses and apron as hard-fail checks, same tier as the dish, going forward.
- **Calliope reference art** (`references/calliope-bartender-portrait-v2-bun.webp` or `-braids.webp`) — paste it in directly rather than relying on her first in-sequence generation as the reference. Do not use the superseded `calliope-portrait-v1.jpg`.
- Coat embroidery: left plain in the prompt on purpose (see character reference above) — do not ask Flow to render "Baron Vieux" / "Bayouboujee" text on fabric.
- For the post-production pass: the established `delogo` watermark removal and per-clip `loudnorm` pipeline apply the same way as prior videos. Scene 5 (the quenelle close-up) is a good candidate for a slight slow-motion stretch in the edit.
- All dialogue is pulled directly from the Chapter 9 draft (`outputs/Scarlet_Foundation_FULL_DRAFT_v1.md`) for continuity with the manuscript.
- Rampart appears only in Scene 1 (the kitchen) — do not carry him over to the bar scenes; he isn't in that part of the chapter.
- Olivia does not appear anywhere in this scene — do not include her. She's introduced elsewhere in the story.
