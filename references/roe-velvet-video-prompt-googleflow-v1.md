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
- **v6 (2026-09-02) — missing Rampart reference.** This is a two-hander scene (Baron **and** Rampart talking) and the doc never cited a Rampart likeness reference at all — a real gap, not just an oversight in the Scene 1 take. `references/rampart-portrait-v1.jpg` exists and matches the character description (bald, dark-skinned, faint scar on the cheek, gray beard, sheen of kitchen sweat, cream chef shirt, dark waist apron) — now the locked reference. Upload it as a Flow Ingredient alongside Baron's and Calliope's for every scene Rampart appears in (Scene 1 only). Do not use `references/rampart-portrait-v1-titlecard.jpg` or `references/rampart-portrait-wallup-v1-titlecard.jpg` — same portrait but with title-card text baked in.
- **Scene 1 keeper confirmed (2026-09-02):** `references/roe-velvet-scene1-taste-test-v1.mp4` — glasses and waist apron both present in every frame checked, dish correct, Rampart consistent with his reference in the blurred foreground. Move on to Scene 2 using the same three Ingredients (Baron, Rampart is done, Calliope, cake) as needed per scene.
- **v7 (2026-09-02) — cake Ingredient dropped on first Scene 2 attempt.** First take had no cake in frame at all because the cake reference (`references/roe-velvet-cake-on-stand-v1.mp4`) wasn't uploaded as a Flow Ingredient — Baron's portrait was the only one attached. Regenerated with the cake Ingredient added and it came back correct (visible mid-shot, dark red/dark tone, on the stand). **Rule going forward: upload the cake reference as an Ingredient for every scene 1–6, every time, even shots not primarily about the dish (walking/transition shots included) — not just the close-up scenes.** Scene 1's visual line restates the dish colors explicitly; Scene 2's did not, which likely contributed. **Scene 2 keeper confirmed:** `references/roe-velvet-scene2-walkout-v1.mp4`.
- **Scene 3 keeper confirmed (2026-09-02):** `references/roe-velvet-scene3-reveal-v1.mp4` — dish, glasses, Calliope likeness/tattoos, and bar setting all correct. Waist apron not visible in the one wide establishing shot (out of frame in the closer shots after) — accepted as-is per Lejohn, not treated as a hard-fail repeat since it's a single background moment, not a running miss.
- **Scene 4 REJECTED, dish texture drift.** Glasses and apron both correct this time, Calliope on-model — but the caviar quenelle rendered as a smooth glossy dark blob (single truffle/olive-like shape) instead of the beaded roe texture confirmed in Scenes 1–3. Regenerating for texture. **Separately noted (not a blocker, not retroactive):** the apron material itself has drifted scene to scene — Scene 1 rendered a visibly leather-textured apron (matches `baron-portrait-apron-kitchen-v1.jpeg`), Scenes 3–4 rendered a plain black fabric apron. Lejohn's preference is leather throughout, but this isn't worth regenerating 2/3 over. Calling it out explicitly for Scenes 5–7 going forward — see character reference below.
- **Scene 4 keeper confirmed (2026-09-02):** `references/roe-velvet-scene4-destiny-v1.mp4` — regenerated with explicit beaded-roe texture callout; quenelle now shows individual glossy pearls, not a smooth blob. Apron rendered leather this time, styled with cross-straps/rivets/tool pockets — a different specific pattern than the kitchen reference photo, but still leather, which was the actual ask. Accepted per Lejohn (plausible he owns more than one).
- **Scene 5 keeper confirmed (2026-09-02):** `references/roe-velvet-scene5-quenelle-v1.mp4` — beaded roe texture and colors correct. Both takes actually opened on Baron, in the kitchen, wearing a tall white chef's toque — not in the prompt (Scene 5 has no characters) and not part of his established likeness (no hat anywhere in his reference art). What looked like an "unscripted blurred food plate" in the background of later frames was actually his blurred head/hat receding as the push-in continued. An attempted Flow edit to remove the hat instead distorted his hairline, so the fix was to trim the clip instead: cut to start at 0:00.6, after the push-in fully clears him from frame and before he's identifiable — original untrimmed take was 8s, filed version is 7.42s. No regeneration needed.

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
5. **Rampart's likeness — check against `references/rampart-portrait-v1.jpg`** (Scene 1 only): bald, dark-skinned, faint scar on the cheek, gray beard, sheen of kitchen sweat, cream chef shirt, dark waist apron. Never had a cited reference before v6 — treat this as a fresh check, not a re-check.
6. **Check every clip before moving to the next**, not after the whole batch is stitched. Catching this after a 64-second cut is already assembled wastes an entire regeneration pass.

---

### CHARACTER REFERENCE (reuse across all scenes)

**Baron Vieux** — Lean, deliberate build, dark-skinned, sharp-featured, looks younger than he is until you see his eyes. **ALWAYS WEARING square-framed black glasses — non-negotiable, reject any frame where his face is visible and the glasses are not.** His chef's coat is **charcoal gray, not white** — a distinct medium-gray fabric, double-breasted, not the standard white chef's whites. **ALWAYS WEARING a dark/black leather waist apron tied at the waist, visible over the coat — reject any frame where it's missing** (confirmed failure mode, 2026-09-02 Scene 1 take: coat with no apron at all). **Material must read as leather** (matches `baron-portrait-apron-kitchen-v1.jpeg`) — later takes drifted to a plain black fabric apron; not a hard reject on its own, but call out "leather" explicitly in each scene's prompt text, not just this shared block. Calm, theatrical confidence in his movements — a man who treats plating like a stage entrance. **Do not attempt to render embroidered text on the coat** ("Baron Vieux" / "Bayouboujee") — small cursive lettering on fabric has repeatedly come out garbled in Flow generations; leave the coat plain and add any lettering in post if needed.

**Calliope** — Black woman, dark skin, sharp-eyed and steady, unhurried, freckles across nose/cheeks, small nose ring and hoop earrings — the kind of presence that watches people reveal what their faces work to conceal. Extensive tattoo work on both forearms (florals, rose, snake/dagger, skull, fine linework). Dark button-up shirt (olive-green or black) with rolled sleeves, sometimes a brown waist apron, a rag over one shoulder or in hand from wiping down the counter. **Reference art: `references/calliope-bartender-portrait-v2-bun.webp`** (curly bun, olive shirt) or **`references/calliope-bartender-portrait-v2-braids.webp`** (braids, black shirt) — either hair variant is valid, match likeness/tattoos to these directly rather than generating from description alone.

**Rampart** — Lead cook, built broad like a shipping container, bald, dark-skinned, deep sheen of kitchen sweat, gray beard, a faint scar on the cheek. Cream/off-white chef shirt, sleeves rolled, dark waist apron. Economical movements. Dry, unimpressed energy that masks real affection for Baron. **Reference art: `references/rampart-portrait-v1.jpg`** — match likeness directly rather than generating from description alone (not the titlecard variants, which have text baked in). Appears only in Scene 1 (the kitchen) — he does not go to Calliope's bar.

**The dish (Roe Velvet)** — A dense, dark red velvet cake, glossy dark chocolate frosting, a single quenelle of black caviar centered on top, a small rosemary sprig beside it. Served on a dark wooden cake stand. Match the approved "ROE VELVET" key art exactly — not a lighter cake, not cream-cheese frosting, not orange roe.

**Setting — the Apothecary kitchen** — French Quarter restaurant kitchen, exposed brick, stainless steel pass, late at night after the dinner rush, cooler and harsher light than the bar.

**Setting — Calliope's bar** — A separate, smaller neighboring bar Baron walks to: her apothecary-style tincture bar (per the 2026-09-02 redesign), not a generic whiskey bar. Dim, warm amber light. Dark wood counter, exposed bulb pendant lights, glass jars of dried botanicals, "Scarlet Elixir" bottles on the back shelf, hand-painted "Apothecary" signage. A candle burning in a glass holder near where the cake will sit. Soft string lights and a few blurred regulars/an arched doorway or window in the background, out of focus. Quiet at this hour — the post-rush lull before last call.

---

### SCENE 1 — The Taste Test
**Visual:** Close-up, camera positioned just behind Rampart's shoulder, looking past him at Baron. Rampart — bald, dark-skinned, gray beard, faint scar on the cheek, cream chef shirt — has his shoulder and the back/side of his head filling the near foreground, out of focus and dim. Baron's face fills the center of frame, sharp focus, well-lit, watching intently, hands still half-raised from setting the plate down, wearing his charcoal-gray chef's coat, **square-framed black glasses on his face and a dark leather waist apron visible over the coat — both required, not optional**. Low in frame, blurred but still identifiable: a slice of dense dark red velvet cake with glossy dark chocolate frosting, topped with a quenelle of black caviar and a small rosemary sprig — not a plain cake, not a pale crumb, not a berry garnish. Rampart's knife is visible near the plate. This is a shot of Baron's face, seen past Rampart — not a shot of Rampart eating.
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
**REJECTED twice (2026-09-02), split into 6A/6B.** Take 1 (8s): Calliope's closing line was cut off mid-sentence — three dialogue lines plus the bite/reaction action is too much for one clip. Take 2, regenerated at 10s to buy room: still didn't fit, and her wardrobe drifted (olive-green button-up shirt replaced with bare shoulders, no visible shirt at all). Splitting into two ~8s clips instead of fighting duration further; wardrobe locked explicitly in both halves below since it drifted once already.

**Scene 6A keeper confirmed (2026-09-02):** `references/roe-velvet-scene6a-bite-v1.mp4` — dialogue completed cleanly, olive shirt correct, loose curly hair down (not pulled back), dish visible, ends on a genuine finished smile.
**Scene 6B note:** first split take (2026-09-02) got dialogue, wardrobe, dish, and camera discipline all correct — but her hair came out pulled back into a bun instead of the loose curls established in 6A and every other Calliope shot in this sequence. An attempted Flow edit to fix it didn't work. Regenerating with hair explicitly locked (see below) rather than re-editing — same lesson as the Scene 5 hat: regenerate with an explicit callout, don't fight the edit tool. **Hairstyle rule going forward: loose curly hair down is the sequence-wide choice for all of Calliope's Roe Velvet shots — the "either bun or braids is valid" note in the portrait-prompt doc applies to standalone portraits only, not this continuous scene.**
**Second 6B take (2026-09-02) REJECTED — worse, not better.** Hair and wardrobe were fixed, but the dish fully regressed to the original debunked v1 error (plain red velvet, white cream-cheese frosting, a strawberry — no chocolate frosting, no caviar, no rosemary) and she was shown taking another unscripted bite, contradicting 6B's script (fork already down, no bite in this half). Pattern noted: fixing one locked detail in isolation let another one drift. **Going forward, every 6B regen must restate ALL locked details together in one prompt — dish, hair, wardrobe, and action — not just whichever one broke last time.**
**Third 6B take — dish/action fixed by removing the cake from frame entirely (tighter crop, since 6B is a reaction shot and the dish already got its confirmed close-up in 6A), but introduced a new problem: an unidentified second person's head/shoulder visible at the extreme left edge of frame throughout, despite the "Baron heard off-camera, not shown" instruction. Fixed in post rather than regenerating again — cropped the left ~140px and rescaled to 1280x720, which removes the intruder cleanly at every checked timestamp without cutting into Calliope. Dialogue completed, hair/wardrobe correct.**
**Scene 6B keeper confirmed (2026-09-02):** `references/roe-velvet-scene6b-rebuttal-v1.mp4` (post-crop).

#### SCENE 6A — The Bite
**Visual:** Close-up on Calliope's face — curly hair, nose ring, tattooed forearms, **wearing her olive-green button-up shirt (do not omit or replace with bare shoulders)** — as she takes the bite, fork visibly holding a piece of dark red velvet cake with dark chocolate frosting and beaded black caviar together. Her expression shifts through surprise into something more complicated and pleased. **Camera stays on Calliope throughout — do not cut to Baron.**
**Dialogue (Calliope):** "Okay. That's — that's actually a bit. That's a whole bit."
**Mood/Lighting:** Soft warm candlelight on her face, shallow focus, the bar softly blurred behind her.
**Audio:** Light bar ambiance, dialogue line.

#### SCENE 6B — The Rebuttal
**Visual:** Close-up on Calliope's face, continuing from 6A — same olive-green button-up shirt, same tattoos/nose ring, **same loose curly hair down as in 6A (not pulled back, not in a bun or updo)**, fork now set down. The cake remains visible on the stand in soft focus in front of her. **Camera stays on Calliope throughout — Baron is heard off-camera, not shown.**
**Dialogue (Baron, off-camera):** "It is a dish."
**Dialogue (Calliope):** "No. I've watched you run this exact routine on me for two years, Baron. I know a bit when I'm being handed one. You should be charging cover."
**Mood/Lighting:** Soft warm candlelight on her face, shallow focus, the bar softly blurred behind her.
**Audio:** Light bar ambiance, dialogue lines.

---

### SCENE 7 — The Walk Back
**First take REJECTED (2026-09-04):** wardrobe (glasses, apron), likeness, and path/setting were all correct, but the prop was wrong — Baron carried two stacked drinking glasses instead of the empty cake stand. Regenerating with the stand described explicitly and anchored to the same dark wooden stand seen in Scenes 1-6, not left to a bare "carrying [something]" description. **Low on Flow generation budget (228 tokens remaining as of 2026-09-04) — this regen consolidates every hard-fail rule from the whole sequence into one prompt (see below) rather than fixing the prop in isolation, since isolated fixes have repeatedly let other locked details drift (see Scene 6B history above).**
**Correction on the first take:** on closer look, the object he carried was a single glass cake stand (round glass plate on a glass pedestal), not two drinking glasses as first assessed — a material variance from the established dark wood stand, not a wrong object. Filed under the same "acceptable variance" precedent as Baron's alternate leather apron style in Scene 4. This correction came in after the second take had already been generated.
**Scene 7 keeper confirmed (2026-09-04):** `references/roe-velvet-scene7-walkback-v1.mp4` — second take, correct dark wood cake stand (empty, single-hand carry), glasses and apron visible throughout, correct path back toward the kitchen block. One anonymous background pedestrian at the very end, not a named character — acceptable.
**Visual:** Wide shot, Baron carrying the empty cake stand back down the sidewalk toward the kitchen, lighter in his step than when he walked out, a small private smile forming. He starts humming, almost inaudibly.
**Mood/Lighting:** Warm bar light behind him fading toward the cooler kitchen glow as he exits frame.
**Audio:** Faint hum from Baron, ambient street sound as the scene closes.

---

### Production Notes
- Recommend generating in order 1→7 for continuity momentum, even though Flow treats each as independent — visual consistency holds up better when character and dish descriptions are pasted fresh each time rather than relied on from memory.
- **Dish color/style is the thing to check first on every generated clip** before moving on — dark red velvet crumb, dark chocolate frosting, black caviar, actually present in frame (Scenes 1–6). If Flow drifts back toward a pale/orange cake, no caviar, or an empty stand, regenerate that scene immediately — do not carry a bad clip into the stitched cut hoping it reads fine at speed.
- **Baron likeness check on every clip too, same as the dish** — compare against `references/baron-portrait-apron-kitchen-v1.jpeg` (the only confirmed-existing reference — `scarlet-foundation-front-cover-v1.jpg` does not exist in this repo, don't cite it). This has now failed twice (the 2026-08-21 batch, and the 2026-09-02 Scene 1 take — missing glasses, missing apron both times); treat glasses and apron as hard-fail checks, same tier as the dish, going forward.
- **Calliope reference art** (`references/calliope-bartender-portrait-v2-bun.webp` or `-braids.webp`) — paste it in directly rather than relying on her first in-sequence generation as the reference. Do not use the superseded `calliope-portrait-v1.jpg`.
- **Rampart reference art** (`references/rampart-portrait-v1.jpg`, Scene 1 only) — paste it in directly. Do not use `rampart-portrait-v1-titlecard.jpg` or `rampart-portrait-wallup-v1-titlecard.jpg` (same portrait, text baked in).
- Coat embroidery: left plain in the prompt on purpose (see character reference above) — do not ask Flow to render "Baron Vieux" / "Bayouboujee" text on fabric.
- For the post-production pass: the established `delogo` watermark removal and per-clip `loudnorm` pipeline apply the same way as prior videos. Scene 5 (the quenelle close-up) is a good candidate for a slight slow-motion stretch in the edit.
- All dialogue is pulled directly from the Chapter 9 draft (`outputs/Scarlet_Foundation_FULL_DRAFT_v1.md`) for continuity with the manuscript.
- Rampart appears only in Scene 1 (the kitchen) — do not carry him over to the bar scenes; he isn't in that part of the chapter.
- Olivia does not appear anywhere in this scene — do not include her. She's introduced elsewhere in the story.
- **Character-free close-ups (Scene 5) can still open on a full character shot before the push-in settles** (confirmed 2026-09-02: Baron appeared in a chef's hat never established anywhere in his reference art). Trimming the opening seconds is the fix, not a prompt edit or regen — Flow's inpainting/edit tool distorted his hairline when asked to just remove the hat.
