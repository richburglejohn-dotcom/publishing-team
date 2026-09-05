# Video Tool Test: Meta AI vs. Runway Gen-4
### Created: 2026-09-05
### Purpose: controlled back-to-back comparison against Google Flow's known drift issues (wrong-age Baron, garbled embroidery text, extra unscripted characters, and continuity breaks between separately-generated clips) — same two connecting scenes, same reference image, same prompt content, only the generation tool changes.

**This is a test, not production content.** Neither output gets filed or posted until it passes the verification checklist below and gets an explicit go-ahead — same discipline as every other character-art/video drop.

**Why two connecting scenes, not one:** a single isolated shot only tests whether a tool can render Baron once. The real risk on Flow was continuity breaking *between* separately-generated clips (wardrobe/face/prop drifting from one scene to the next when they're meant to cut together). Two scenes that have to stitch into one continuous moment is the actual test.

---

## Test scenes: "The Cake at the Pass" → "The Walk-Out" (single character, two connecting shots)

Reused from the original Roe Velvet shot list (Scenes 2 and 3) — chosen because they're a real cut point that has to hold: same character, same prop, a location and lighting change mid-sequence. Generate both scenes in the same tool, in order, then check whether they cut together as one continuous moment.

**Scene A — "The Cake at the Pass":** Close-up, Baron's hands placing a finished two-layer orange velvet cake on a stand at the kitchen pass. Pale cream cheese frosting, smooth sides, single mound of glossy orange roe on top, candied orange peel at the base. He adjusts the plate a half-inch, exhales, composes himself. ~5-8 seconds. Warm kitchen light, shallow depth of field, steam and heat-lamp glow in the background.

**Scene B — "The Walk-Out":** Tracking shot from behind Baron as he carries the same cake stand out of the kitchen and across the dining room, chin slightly raised, walking like a man making an entrance. ~5-8 seconds. Transitions from cool kitchen light to warmer dining-room ambiance as he moves.

**Character:** Baron Vieux — lean, deliberate build, dark-skinned, sharp-featured, looks younger than he is until you see his eyes. Square-framed black glasses. Gray chef's coat embroidered "Baron Vieux" on the left chest, "Bayouboujee" on the right. Worn leather apron tied at the waist. **Identical in both scenes — same coat, same cake, same physical state (nothing changes between them).**

**No dialogue, no other characters in either scene.** Silence except ambiance — keeps the test isolated to visual/continuity consistency, not audio/lip-sync.

## Reference images (identical for both tools)

- **Baron → `references/baron-vieux-scarlett-notext-v1.jpg`** — the cropped headshot-only version. Use this one specifically, not `docs/media/baron-vieux-scarlett.jpg` (that one triggers Flow's "prominent person" block due to legible name text in frame — worth testing whether Meta AI or Runway have the same restriction, but don't burn the test on finding out; start with the safe crop).
- **Cake → `references/roe-velvet-cake-reference-v1.jpg`** — same cake asset used throughout the Roe Velvet package.

## Running it in each tool

Generate Scene A, then Scene B, in the same tool, using the same reference images for both — don't let the tool "remember" from Scene A, repaste the reference the same way each time (same discipline as the Flow rule: locked references pasted fresh per generation, not relied on from memory).

**Meta AI:** Prompt each scene with its Visual/Mood/Character text above. If the interface allows attaching/referencing a photo for video generation, attach the Baron reference image the same way you would for an image generation — unconfirmed going in whether Meta AI's video feature supports this the way Flow's "Ingredients" do, so note whether that option exists at all as part of the result.

**Runway Gen-4:** Use the References feature — upload `baron-vieux-scarlett-notext-v1.jpg` and `roe-velvet-cake-reference-v1.jpg` as tagged references (e.g. `@Baron`, `@Cake`), then write each scene's prompt referencing them by tag plus its Visual/Mood text above.

## Verification checklist (same as the Roe Velvet protocol, plus the stitch check — apply to both scenes in both tools)

1. Baron matches the reference in both scenes — same age, same face, same coat/apron. Not "close enough."
2. Embroidery text on the coat/apron is legible in both scenes, not garbled — this is the specific failure Flow had.
3. The cake matches its reference in both scenes — same tier count, same roe garnish, same candied orange peel.
4. No extra characters or hands wander into frame in either scene.
5. No unrequested camera moves beyond what's specified.
6. **Stitch check:** cut Scene A directly into Scene B (even a rough concat, doesn't need to be a polished edit) and watch it as one clip. Does Baron look like the same person, same coat, same cake, one continuous moment — or is there a visible jump (face, wardrobe, cake, lighting mismatch) at the cut? This is the one Flow couldn't reliably pass and is the actual point of this test.

## What happens with results

Drop both scenes from each tool into the repo (or Drive, same as any other generation) and flag which is which. I'll check all four clips against this list frame-by-frame the same way the Roe Velvet cuts were verified, including the stitched cut point, and report which tool (if either) held up — that's what decides whether either becomes part of the actual pipeline.

---

## Results: Meta AI — 2026-09-05 — FAILS the checklist, not usable as generated

Files: `chef_cake_placement.mp4` (Scene A) and `chef_cake_entrance.mp4` (Scene B), both 1280x720, 10.24s, 24fps. Verified by extracting frames at 1fps plus a zoomed crop on the chest embroidery. **Not filed to the repo** — test output, not production content, and it doesn't pass.

**Scene A ("Cake at the Pass") — mostly holds up on its own:**
- Face/glasses/build match `baron-vieux-scarlett-notext-v1.jpg` well.
- Cake matches `roe-velvet-cake-reference-v1.jpg` throughout — same two-layer build, frosting, roe, candied orange.
- Background ("RATIONAL" combi oven) stays consistent across the whole shot — no internal set-swap.
- **Fails item 2 (embroidery):** zoomed the exact chest spot where "Baron Vieux" should read — illegible cursive scrawl, not text. Same failure mode as Flow.

**Scene B ("The Walk-Out") — doesn't match the brief:**
- **Fails item 1 (character match) — unverifiable, not just imperfect.** Shot entirely from behind for all 10 seconds; face never shown, so there's no way to confirm it's even the same person as Scene A.
- **Not in the brief at all:** he's empty-handed the whole clip — no cake, no cake stand. The scene's entire point (carrying the cake out) didn't generate.
- **Wrong setting:** a generic wood-paneled, chandeliered dining room with real-looking seated diners — nothing like The Apothecary's established look (exposed brick, low light, heat lamps), and no visual throughline from Scene A's steel kitchen.

**Item 6 (stitch check): fails.** Cutting A into B doesn't read as one restaurant or one continuous moment — different architecture, different lighting language, no cake carrying across the cut to anchor it.

**Verdict:** Meta AI solved zero of Flow's known failure modes in this run — embroidery drift persists, and it introduced new problems (no cake, no face, wrong location) rather than fixing continuity. Runway Gen-4 still untested — pending that before drawing a comparative conclusion.
