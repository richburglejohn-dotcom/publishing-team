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

---

## Round 2: Meta AI retry with targeted prompt fixes — 2026-09-05

Lejohn's call: try fixing the prompt before switching tools. Scene A mostly worked, so leave it close to as-is with one addition; Scene B needs the three specific gaps closed. These are deliberate rewrites of the original prompts above, not a new scene.

**Scene A — "The Cake at the Pass" (revised, embroidery emphasis added):**
> Close-up, Baron's hands placing a finished two-layer orange velvet cake on a stand at the kitchen pass. Pale cream cheese frosting, smooth sides, single mound of glossy orange roe on top, candied orange peel at the base. He adjusts the plate a half-inch, exhales, composes himself. The embroidered text on his coat — "Baron Vieux" on the left chest — is in **plain, blocky, sans-serif lettering, large and clearly legible**, not script or cursive. Warm kitchen light, shallow depth of field, steam and heat-lamp glow in the background. ~5-8 seconds.

*Note: the embroidery drift showed up on a cursive-style render neither prompt actually requested — worth testing whether specifying a plainer typeface holds up better, but this may be a hard limit of current video generation on small legible text regardless of font choice. Don't burn more than one retry on this specific fix before accepting it as a known limitation to shoot around (e.g., no extreme close-ups on the chest text).*

**Scene B — "The Walk-Out" (revised — fixes all three Round 1 failures):**
> Baron walks out of the kitchen carrying the finished cake stand **visibly in both hands, held out in front of him at chest height, cake clearly in frame the entire shot** — this is the point of the scene, not incidental. Camera starts behind him as he exits the kitchen, then **arcs around to a 3/4 front angle within the first 2-3 seconds so his face is visible** as he crosses the dining room, chin slightly raised, walking like a man making an entrance. Setting is **The Apothecary** — the same restaurant as the kitchen in Scene A, not a generic dining room: exposed brick walls, warm low amber light, the glow of heat lamps and pass-through window visible behind him as he moves away from it, jazz bleeding faintly from the dining room. Transitions from the kitchen's cooler light to the dining room's warmer ambiance as he walks. ~5-8 seconds.

**What changed and why:**
1. **Cake explicitly required in frame** — Round 1 generated him empty-handed despite the scene being about carrying the cake. Made it unambiguous rather than assumed.
2. **Camera angle changed from pure behind-shot to an arc that reveals his face** — Round 1's from-behind-only framing made character verification impossible. This is a deliberate departure from the original Roe Velvet shot list (which was intentionally behind-only) for testing purposes — if this round passes otherwise, decide separately whether the final production version keeps the reveal or goes back to behind-only now that the tool's been proven on this shot type.
3. **Setting pinned to "The Apothecary" explicitly, tied back to Scene A** — Round 1 invented an unrelated wood-paneled dining room. Naming the location and referencing Scene A's kitchen directly is meant to stop that.

Same reference images, same verification checklist (including the stitch check) apply to this round. Run Scene A and Scene B again with these prompts, drop the results back, and I'll re-verify.

---

## Round 2 Results: Meta AI — 2026-09-05 — improved, still fails the checklist

Files: `chef_cake_presentation_2.mp4` (Scene A) and `to_chef_carry_cake_walkthrough.mp4` (Scene B), both 1280x720, ~10s, 24fps. Verified the same way — 1fps frame extraction plus zoomed crops. **Not filed to the repo** — still doesn't pass.

**What the prompt fix actually solved:**
1. **Embroidery legibility — fixed.** Zoomed crop on Scene A's chest text clearly reads "Baron..." (cut off at frame edge, but legible, not a scrawl). Scene B is even better — "Baron Vieux" and "Bayouboujee" are both fully legible in red/gold script across multiple frames. Real fix, not a fluke — it holds across both scenes.
2. **Cake-in-hand — fixed.** Scene B now shows him visibly carrying the cake on a stand the entire clip, exactly as required. Round 1's biggest miss is resolved.
3. **Face visibility — partially fixed.** Scene B's opening frame shows a 3/4 side profile (glasses, side of face visible) before the camera settles back to a behind-shot for the rest of the clip. Better than Round 1's zero visibility, but it's a glimpse, not a clean identity-confirming angle.

**What's still broken:**
- **Fails item 5 (setting) — still doesn't match The Apothecary, and now inconsistent with itself too.** Three different, mutually inconsistent environments appear across ~20 seconds: Scene A's kitchen (warm amber light, exposed copper pots, rustic), Scene B's opening kitchen shot (cool blue light, sleek modern stainless steel — doesn't match Scene A's kitchen at all), and Scene B's ending dining room (ornate red-and-gold brasserie with tufted booths and chandeliers — not the brick/heat-lamp Apothecary described, and doesn't connect to either kitchen shot).
- **New failure — fails item 3 (cake consistency) between scenes.** Scene A's cake has a flat, pale disc top (doesn't match the reference's rounded frosted dome either). Scene B's cake has a rounded frosted dome top that matches the reference well — but the two scenes' cakes don't match *each other*. This is the same class of problem as Flow's original failures, just landed on the cake instead of the character.
- **Fails item 6 (stitch check).** Cutting Scene A's ending into Scene B's opening doesn't read as continuous — different kitchen, different lighting temperature, right at the cut.
- **Item 1 (character/age) still soft.** Hair still reads grayer and balder than the reference's short dark cropped hair, consistent within this round but still a drift from the locked reference.

**Verdict:** genuine progress — the two things the Round 2 prompt explicitly targeted (embroidery, cake-in-hand) both improved, which says the tool responds to specific, explicit instructions rather than being randomly unreliable. But new problems appeared in exchange (cake now inconsistent *across* scenes, three mismatched environments instead of one wrong one), and the core stitch-continuity failure is still there. Not ready to use as-is. Worth one more targeted round — pin the environment as tightly as the embroidery fix worked (maybe a locked kitchen reference image rather than just text description, same "Ingredients not descriptions" lesson from Flow) and lock the cake presentation style explicitly — before deciding whether this is fixable via prompting or a hard tool limit.
