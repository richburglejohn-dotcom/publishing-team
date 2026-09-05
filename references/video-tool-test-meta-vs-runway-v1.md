# Video Tool Test: Meta AI vs. Runway Gen-4
### Created: 2026-09-05
### Purpose: controlled back-to-back comparison against Google Flow's known drift issues (wrong-age Baron, garbled embroidery text, extra unscripted characters) — same scene, same reference image, same prompt content, only the generation tool changes.

**This is a test, not production content.** Neither output gets filed or posted until it passes the verification checklist below and gets an explicit go-ahead — same discipline as every other character-art/video drop.

---

## Test scene: "The Cake at the Pass" (single character, single shot)

Chosen deliberately narrow — one character, one prop, one close-up — because it's the exact shot type that broke on Flow before (Scene 2 of the Roe Velvet package triggered the known garbled-embroidery-on-the-coat failure in close-up). If a tool can't hold this, it can't hold anything harder.

**Visual:** Close-up, Baron's hands placing a finished two-layer orange velvet cake on a stand at the kitchen pass. Pale cream cheese frosting, smooth sides, single mound of glossy orange roe on top, candied orange peel at the base. He adjusts the plate a half-inch, exhales, composes himself. ~5-8 seconds.

**Mood/Lighting:** Warm kitchen light, shallow depth of field, steam and heat-lamp glow in the background.

**Character:** Baron Vieux — lean, deliberate build, dark-skinned, sharp-featured, looks younger than he is until you see his eyes. Square-framed black glasses. Gray chef's coat embroidered "Baron Vieux" on the left chest, "Bayouboujee" on the right. Worn leather apron tied at the waist.

**No dialogue, no other characters.** Silence except kitchen ambiance — keeps the test isolated to visual consistency, not audio/lip-sync.

## Reference images (identical for both tools)

- **Baron → `references/baron-vieux-scarlett-notext-v1.jpg`** — the cropped headshot-only version. Use this one specifically, not `docs/media/baron-vieux-scarlett.jpg` (that one triggers Flow's "prominent person" block due to legible name text in frame — worth testing whether Meta AI or Runway have the same restriction, but don't burn the test on finding out; start with the safe crop).
- **Cake → `references/roe-velvet-cake-reference-v1.jpg`** — same cake asset used throughout the Roe Velvet package.

## Running it in each tool

**Meta AI:** Prompt with the Visual/Mood/Character text above. If the interface allows attaching/referencing a photo for video generation, attach the Baron reference image the same way you would for an image generation — unconfirmed going in whether Meta AI's video feature supports this the way Flow's "Ingredients" do, so note whether that option exists at all as part of the result.

**Runway Gen-4:** Use the References feature — upload `baron-vieux-scarlett-notext-v1.jpg` and `roe-velvet-cake-reference-v1.jpg` as tagged references (e.g. `@Baron`, `@Cake`), then write the prompt referencing them by tag plus the Visual/Mood text above.

## Verification checklist (same as the Roe Velvet protocol — apply to both outputs)

1. Baron matches the reference — same age, same face, same coat/apron. Not "close enough."
2. Embroidery text on the coat/apron is legible in the close-up, not garbled — this is the specific failure Flow had.
3. The cake matches its reference — same tier count, same roe garnish, same candied orange peel.
4. No extra characters or hands wander into frame.
5. No unrequested camera moves beyond what's specified.

## What happens with results

Drop both output files into the repo (or Drive, same as any other generation) and flag which is which. I'll check both against this list frame-by-frame the same way the Roe Velvet cuts were verified, and report which one (if either) held up — that's what decides whether either tool becomes part of the actual pipeline.
