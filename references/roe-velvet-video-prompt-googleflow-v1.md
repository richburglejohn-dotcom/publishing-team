# Google Flow Video Prompt Package
## "Roe Velvet" — Baron & Olivia's First Real Meeting (Chapter 9)
### Created: 2026-08-08

Structured for sequential scene-by-scene input into Google Flow. Each scene is written as a self-contained ~8-second clip. Character reference blocks are repeated in each prompt to help maintain visual consistency across generations — adjust freely if Flow drifts on a feature.

**Revision note:** this replaces an earlier draft of this prompt package that specified the wrong dish — an orange velvet cake with cream-cheese frosting and orange salmon roe. The clips generated from it were trashed (wrong cake, wrong room — see notes below). This version corrects the dish to match Chapter 9 and the approved "Roe Velvet" key art: dark red velvet cake, dark chocolate frosting, black caviar. It also corrects the setting: Baron carries the cake **out of the Apothecary's kitchen and into Calliope's bar next door** — these are two separate, adjoining locations per the series bible, not one restaurant with a dining room.

---

### CHARACTER REFERENCE (reuse across all scenes)

**Baron Vieux** — Lean, deliberate build, dark-skinned, sharp-featured, looks younger than he is until you see his eyes. Square-framed black glasses. Gray chef's coat, worn leather apron tied at the waist. Calm, theatrical confidence in his movements — a man who treats plating like a stage entrance. **Do not attempt to render embroidered text on the coat** ("Baron Vieux" / "Bayouboujee") — small cursive lettering on fabric has repeatedly come out garbled in Flow generations; leave the coat plain and add any lettering in post if needed.

**Olivia Marigny** — Jazz and blues singer, late twenties, warm brown skin, natural curls pulled back loosely, the relaxed self-possession of a performer off the clock. Simple dark top, small gold hoop earrings. Expressive face — she reacts with her whole body, not just her eyes.

**Rampart** — Lead cook, built broad like a shipping container, bald, dark-skinned, deep sheen of kitchen sweat, gray beard, a faint scar on the cheek. Economical movements. Dry, unimpressed energy that masks real affection for Baron.

**The dish (Roe Velvet)** — A dense, dark red velvet cake, glossy dark chocolate frosting, a single quenelle of black caviar centered on top, a small rosemary sprig beside it. Served on a dark wooden cake stand. This is the same dish shown in the approved "ROE VELVET" key art — match its color and styling exactly, not a lighter cake, not cream-cheese frosting, not orange roe.

**Setting** — The Apothecary, a French Quarter restaurant kitchen, exposed brick, late at night after the dinner rush, the crew mostly cleared out. Calliope's bar, a separate, smaller neighboring bar Baron walks to next door — warm low amber light, jazz-club intimacy, a handful of regulars, string lights, bottles of rye behind the bar. The two locations should read as distinct: cooler, harsher kitchen light vs. warm, dim bar light.

---

### SCENE 1 — The Quiet Bar
**Visual:** Wide shot, dim warm bar interior late at night — Calliope's, not the Apothecary's dining room. Olivia sits alone at the end of the bar, a candle and a half-finished drink in front of her. Camera slowly pushes in.
**Mood/Lighting:** Low amber light, intimate, jazz-club warmth.
**Audio:** Soft ambient bar murmur, distant clinking of glasses, a low blues melody under the scene.

---

### SCENE 2 — The Cake at the Pass
**Visual:** Close-up, Baron's hands placing the finished Roe Velvet cake — dark red velvet, dark chocolate frosting, black caviar quenelle, rosemary sprig — on a dark wooden stand at the kitchen pass. He adjusts the plate a half-inch, exhales, composes himself.
**Mood/Lighting:** Cooler kitchen light, shallow depth of field, steel and heat-lamp glow in the background.
**Audio:** Kitchen ambiance, the clink of the cake stand on stainless steel.

---

### SCENE 3 — The Walk-Out
**Visual:** Tracking shot from behind Baron as he carries the cake stand out of the kitchen's back door and down the sidewalk to the bar next door, chin slightly raised, walking like a man making an entrance.
**Mood/Lighting:** Transition from cool kitchen light, briefly outside under a streetlamp, into the warm amber glow of the bar doorway.
**Audio:** Footsteps, night street ambiance, bar noise fading up as he reaches the door.

---

### SCENE 4 — The Reveal
**Visual:** Medium shot, Baron sets the cake down in front of Olivia at the bar, lifting both hands theatrically as he presents it, leaning in slightly on the pause.
**Dialogue (Baron, voiceover or lip-sync):** "You will notice that I have done the unthinkable. I have made the roe... wait."
**Mood/Lighting:** Warm spotlight feel on the cake and Baron's face.
**Audio:** Room hush, dialogue line, a faint suppressed laugh from off-camera (Rampart, who followed him over).

---

### SCENE 5 — The Quenelle, Close-Up
**Visual:** Extreme close-up, slow push-in on the single glossy black caviar quenelle centered on the dark chocolate frosting, the rosemary sprig catching the candlelight beside it.
**Mood/Lighting:** High detail, warm key light, slight glisten on the caviar.
**Audio:** Quiet musical sting or single sustained low note.

---

### SCENE 6 — Rampart's Dry Reaction
**Visual:** Medium shot, Rampart leaning in the bar doorway behind Baron, arms crossed, not looking up, the faintest smirk.
**Dialogue (Rampart):** "Destiny. Last week it was the bisque."
**Mood/Lighting:** Cooler light from the street/doorway behind him, contrasted against the warm bar glow in the foreground blur.
**Audio:** Faint street noise under the line.

---

### SCENE 7 — Olivia's First Bite
**Visual:** Close-up on Olivia's face as she takes the bite — cake, frosting, and caviar together. Her expression shifts through surprise, then something more delighted. She sets the fork down slowly.
**Dialogue (Olivia):** "Okay. That's a whole bit."
**Mood/Lighting:** Soft warm light on her face, shallow focus, background softly blurred.
**Audio:** Light room ambiance, her line, a small laugh.

---

### SCENE 8 — The Walk Back
**Visual:** Wide shot, Baron walking back down the sidewalk toward the kitchen door, lighter in his step than when he walked out, a small private smile forming. He starts humming, almost inaudibly.
**Mood/Lighting:** Warm bar light behind him fading toward the cooler kitchen glow as he exits frame.
**Audio:** Faint hum from Baron, ambient street sound as the scene closes.

---

### Production Notes
- Recommend generating in order 1→8 for continuity momentum, even though Flow treats each as independent — visual consistency holds up better when character and dish descriptions are pasted fresh each time rather than relied on from memory.
- **Dish color/style is the thing to check first on every generated clip** before moving on — dark red velvet crumb, dark chocolate frosting, black caviar. If Flow drifts back toward a pale cake or orange roe, regenerate that scene immediately rather than continuing the batch.
- Coat embroidery: left plain in the prompt on purpose (see character reference above) — do not ask Flow to render "Baron Vieux" / "Bayouboujee" text on fabric.
- For the post-production pass: the established `delogo` watermark removal and per-clip `loudnorm` pipeline apply the same way as prior videos. Scene 5 (the quenelle close-up) is a good candidate for a slight slow-motion stretch in the edit.
- Scene 4's dialogue and Scene 6/7 reactions are pulled directly from the Chapter 9 draft for continuity with the manuscript.
- Setting is two locations, not one: the Apothecary's kitchen (Baron's workplace) and Calliope's bar next door (where Olivia is). Keep the lighting distinct between them so Scene 3's walk reads as a real transition.
