# Google Flow Prompt Package — TikTok Character Spotlight: "Ghost"
### Created: 2026-08-21 · Unscheduled (not yet slotted in outputs/scheduled-posting-lookup.csv)

New character-spotlight concept, not pulled from an existing script — built from the series bible's one-line description of Ghost: *"White. Dishwasher. Kid from Gentilly. Kept the dish pit from becoming a graveyard."* (`references/series-bible.md`, Ch. 1 Supporting Cast) and his established look in `references/ghost-portrait-v1.jpg` / `references/supporting-cast-image-prompts-googleflow-v1.md`.

**Written strict, on purpose.** Every Flow-specific rule below comes from a documented failure this project has already hit — not a hypothetical. Deviating from these has cost regenerations every time.

---

### THE FLOW RULES (read before writing or editing any scene below)

1. **One continuous ~8-second shot per prompt.** Flow does not reliably execute multi-cut or timecoded instructions inside a single prompt — write plain cinematic prose describing one shot, not a sequence.
2. **Do not ask Flow to render legible on-screen text of any kind** — not title cards, not signage, not labels, not embroidery. It fails at this reliably in video mode. All text (hook line, name card, CTA) is added in post.
3. **Do not request text/embroidery on any fabric** — shirt, apron, anything. This project has a live, unresolved bug where apron pocket text renders as garbled nonsense ("YELEGAI") and it is now propagating across unrelated generations. Ghost wears a plain gray t-shirt with no text in the reference art — keep it that way in every prompt; do not describe or imply a logo, print, or lettering on it.
4. **Camera direction must be concrete, not intent-based.** "Camera favors Ghost" has failed before; "close-up, camera positioned at counter height, Ghost's hands and forearms filling the lower third of frame" works. Every scene below is written this way — keep new scenes to the same standard.
5. **No real-world trademarked business names, brands, or product labels in any prop** (cans, boxes, equipment). Generic/unbranded only.
6. **No invented specific dates, venues, or event details** — this has leaked into unrelated posters twice already this project. This is a character piece, not an event announcement; nothing in it should read as a date or a place beyond "the Apothecary."
7. **Paste the character reference block fresh into every single scene prompt.** Do not rely on Flow carrying details forward from a shared block or a prior scene — it drifts. If a generation drifts on Ghost's face/hair/build, paste `references/ghost-portrait-v1.jpg`'s description back in as a corrective.

---

### CHARACTER REFERENCE (reuse verbatim in every scene)

**Ghost** — Young white man, early-to-mid 20s, tousled dirty-blond/light-brown hair, average build, quiet and watchful rather than expressive — someone used to not being looked at. Plain solid gray crew-neck t-shirt, slightly worn, no text or graphic on it. Not in kitchen whites — he doesn't wear the line's uniform. Series bible calls him "kid from Gentilly."

**Setting — the Apothecary dish pit / back hallway** — Cramped, low-contrast, half in shadow. Stacked cardboard boxes, industrial metal shelving lined with plain unlabeled cans and stockpots, a single warm light source spilling in from a doorway to the working kitchen beyond. This is the unglamorous side of the restaurant — no dining room, no plating, no polish.

**Baron Vieux (Scene 5 only)** — Lean, deliberate build, dark-skinned, sharp-featured, square-framed black glasses, short hair. Charcoal-gray chef's coat, plain — no embroidery or text requested.

---

### SCENE 1 — The Hook
**Visual:** Wide shot, the dish pit at the height of dinner rush, seen from the doorway looking in — steam, clattering plates, motion blur of kitchen staff passing back and forth in the foreground, all slightly out of focus. In the back, sharply in focus, Ghost stands at the sink, sleeves pushed up, working through a towering stack of dishes, alone, not looking up.
**Mood/Lighting:** Harsh overhead fluorescent on Ghost, warm blur of kitchen light and motion around the edges of frame.
**Audio:** Dish clatter, running water, distant kitchen noise — no dialogue.
**Note:** Hook text ("Nobody claps for the dishwasher.") is added in post, not requested from Flow.

---

### SCENE 2 — The Invisible Work
**Visual:** Close-up, camera positioned directly above the sink looking down, Ghost's hands and forearms filling the frame — scrubbing, rinsing, stacking, fast and practiced. Steam rising off the hot water. His face is not in this shot.
**Mood/Lighting:** Steam-diffused overhead light, high detail on hands and water.
**Audio:** Water running, plates clinking, steady rhythm — no dialogue.

---

### SCENE 3 — Unseen
**Visual:** Medium shot, static camera in the back hallway. Two line cooks pass directly in front of the lens, mid-conversation, close enough to blur the foreground — neither one looks toward Ghost, visible sharply in the background still working the sink. The moment reads as him being physically stepped around, not acknowledged.
**Mood/Lighting:** Cooler, dimmer light on Ghost in the background; warmer light on the cooks passing through foreground.
**Audio:** Fragments of unrelated kitchen chatter passing by, no clear dialogue, water still running underneath.

---

### SCENE 4 — What He Actually Holds Together
**Visual:** Wide shot, the dish pit now cleared — every rack empty, every pan stacked and put away, the counter wiped down. Ghost leans back against the shelving for a beat, catching his breath, surrounded by the order he just made out of the night's chaos.
**Mood/Lighting:** Quieter, warmer light now that the rush has passed; the mess from Scene 1 is visibly gone.
**Audio:** Near silence, a tap dripping once, his breathing.

---

### SCENE 5 — Seen
**Visual:** Medium two-shot, Baron appears in the doorway to the dish pit holding two battered metal bowls of family-meal grits — creamy, flecked with visible red-orange pepper and a pat of butter melting on top, nothing plated or fussy, obviously shared crew food, not a menu dish — and holds one out toward Ghost. Ghost looks up, genuinely caught off guard. Baron's expression is plain and unceremonious — not a speech, just an offer.
**Mood/Lighting:** Warm kitchen light spilling through the doorway now reaches into the dish pit for the first time in the sequence.
**Audio:** Quiet kitchen ambiance, no dialogue — this beat plays on narration, not spoken lines.
**Canon note:** This is the manuscript's own beat, not invented — `outputs/Scarlet_Foundation_FULL_DRAFT_v1.md`: "Ghost was quietly invited to join the crew for post-shift food, an honor he didn't yet understand the full weight of."

---

### SCENE 6 — The Close
**Visual:** Close-up on Ghost, plate in hand now, a small, real, unguarded almost-smile — the first clear expression on his face in the whole sequence.
**Mood/Lighting:** Warm, soft, matching Scene 5.
**Audio:** Near silence.
**Note:** Closing text (name card "GHOST," title card, CTA) is added in post, not requested from Flow.

---

### THE DISH — "Ghost Pepper Grits"

No dish is tied to Ghost anywhere in the manuscript — this is new, invented for this piece, not established canon. Naming it plainly so it isn't mistaken for a Chapter reference later: it's a family-meal dish, not a menu item, built to carry the pun (ghost pepper) and the moment (the crew's food, offered without ceremony) at once.

**Concept:** Stone-ground grits, slow-cooked, finished with sharp white cheddar and a small amount of fresh or dried ghost pepper for real heat — not a garnish amount, enough that it's clearly a kitchen-crew dish and not a customer-facing one. Served family-style in battered metal bowls, not plated. Butter melting on top per Scene 5. No garnish, no plating flourish — the entire point is that it's humble.

**Why it works for this piece:** it's the first time in the sequence food appears that isn't part of the dining room's polish — it's kitchen food, made for the person who keeps the kitchen running, named after him without saying so out loud.

---

### Voiceover / narration script (for recording — no VO exists yet)

Measured, plain-spoken — this is an observation, not a pitch.

1. "Nobody claps for the dishwasher."
2. "He's in by four. Last one out, most nights."
3. "The kitchen falls apart without him. Nobody tells him that."
4. "He's not on the line. Not in the whites. Just — there. Or not, depending who you ask."
5. **[BEAT]**
6. "Then one night, somebody finally hands him a bowl of grits."
7. "Turns out the kid from Gentilly was never actually invisible. Just never asked."

Once recorded, save as `tiktok-ghost-spotlight-voiceover-v1.mp3` and I'll sync text cards and Flow clips to it, same process as the other voiceover-driven builds.

---

### Production Notes
- Generate in order 1→6; paste the character reference block fresh each time per Rule 7 above.
- **Face/build check on every clip before moving to the next scene** — Ghost has one prior reference image only (`references/ghost-portrait-v1.jpg`); if a generation drifts, paste that image's description back in immediately rather than continuing and hoping later scenes correct it.
- **Shirt check on every clip** — plain gray, no text, no graphic. This is the one wardrobe detail most likely to attract an unwanted logo/text attempt from Flow; watch for it specifically given the current embroidery-contamination issue.
- Not yet added to `outputs/scheduled-posting-lookup.csv` — say the word on a date and I'll slot it in.
