# Google Flow Regeneration Package
## "Books Like This" (Chef's Jacket cut) — Fixing the Embroidery Defect
### Created: 2026-09-11
### Status: PILOT REGENERATION — fixes the flag in `outputs/baron-tiktok-bookslikethis-chefjacket-post-copy-v1.md`. Held, not posted (`outputs/baron-tiktok-bookslikethis-v5.mp4` — the other cut of this same script — is already live instead).

## Why this exists

`outputs/baron-tiktok-bookslikethis-chefjacket-v2.mp4` is otherwise a clean, usable cut — good pacing, clean native audio/captions — but the jacket embroidery is garbled in every one of the 5 clips: left chest reads "Bacon Vieux" (should be "Baron Vieux"), right chest reads "BayouBayoolage" / "BayorBayoolage" (garbled letter-for-letter differently in different clips — should be "Bayouboujee", confirmed against `references/series-bible.md` line 69: *"Gray chef's coat embroidered: Baron Vieux on left chest, Bayouboujee on right."*). Two direct patch-and-redraw attempts on the existing footage already failed (visible artifacts — the text is tiny, cursive, and on moving fabric) per the post-copy doc's notes — so this needs a source regenerate, not another patch attempt.

**Second, smaller flag in the same doc, not addressed by this package:** the CTA clip's own native auto-caption reads "Read it. **Rean it.** Then tell me you're okay." — an extra garbled word from Google Flow's own captioning. Worth fixing in the same regeneration pass if you're already re-running Scene 5 — just don't let Flow auto-caption it again; specify the exact line as on-screen text instead (see Scene 5 below).

**No individual source clips remain in the repo** — only the compiled `v1`/`v2` cut. The 5 reference stills below were extracted directly from `v2` itself (one per scene) purely for pose/setting/character continuity — each one still has the garbled embroidery on it, which is exactly what the explicit font-fix instruction in each prompt overrides.

**Caption/dialogue note:** the original clips carry Google Flow's own native audio and captions (not a script we wrote and not something we can specify exactly). The scene descriptions below are reconstructed from what's actually visible on screen in the current defective cut (verified directly, not from the post-copy doc's clip-order notes, which don't fully match what's on screen — see the discrepancy flagged at Scene 3 below). This is a reconstruction to match the same beats, not a verbatim script.

---

## LOCKED REFERENCE IMAGES

Five references, one per scene — extracted from the current defective cut, each showing the correct pose/setting/framing for that beat. **Ignore the chest embroidery in every one of these — that's the defect being fixed, not something to match.**

- `references/baron-tiktok-bookslikethis-chefjacket-scene1-reference-v1.jpg` — Hook, arms crossed, direct to camera
- `references/baron-tiktok-bookslikethis-chefjacket-scene2-reference-v1.jpg` — connective/build beat, arms crossed, slight head tilt
- `references/baron-tiktok-bookslikethis-chefjacket-scene3-reference-v1.jpg` — hands clasped on the bar, close framing, chest not visible in this shot (embroidery risk is low here, but keep the instruction anyway in case it drifts into frame)
- `references/baron-tiktok-bookslikethis-chefjacket-scene4-reference-v1.jpg` — title-card beat, holding the book up
- `references/baron-tiktok-bookslikethis-chefjacket-scene5-reference-v1.jpg` — CTA, holding the book toward camera

Setting across all 5 (consistent in the current cut, keep it consistent here too): dim New Orleans bar interior, exposed brick wall, lit taper candles, shelves of wine/spirit bottles behind the bar, dark wood bar counter/top edge visible in frame. Baron in a plain gray chef's coat (no apron, no tool pockets — distinct from the kitchen-set locked references used elsewhere in this repo).

## VERIFICATION PROTOCOL

Same discipline as every other regeneration this week (see `outputs/baron-jambalaya-vs-paella-regeneration-googleflow-v1.md` for the full precedent, including the lesson that a 3-4 frame spot-check is not reliable):
1. Baron matches the locked reference — same face, glasses, build.
2. Setting matches — same bar, brick wall, candles, bottles across all 5 scenes.
3. **Embroidery text is legible and correct on both sides of the chest, in every scene where the chest is in frame** — "Baron Vieux" left, "Bayouboujee" right. This is the specific defect being fixed; if it renders garbled again, regenerate, don't accept it.
4. No extra characters in frame.
5. Dense full-timeline check after reassembly (every ~1s, not just cut boundaries) before this replaces v2 — two separate clips in this same project were mis-declared "clean" off a sparse spot-check this week alone.

## STRICT GENERATION RULES

One take per scene, generated in order 1→5, no batching. Reference image pasted fresh into every scene's prompt. If a take drifts, regenerate — don't loosen the prompt to match what came out.

---

### SCENE 1 — Hook
**Visual:** Baron at the bar, arms crossed, confident, direct to camera.
**On-screen text (added in edit or specified below, not left to auto-caption):** "A sous chef. A blues singer. A shipping container."

**ATTACH:** `baron-tiktok-bookslikethis-chefjacket-scene1-reference-v1.jpg`
```
Baron Vieux, a lean, sharp-featured Black chef with square black glasses, wearing a plain gray chef's coat (no apron), standing arms crossed at a dark wood bar counter — exposed brick wall behind him, lit taper candles and shelves of wine/spirit bottles in the background. Same face, coat, and bar setting as the attached reference image, not a different one.

Medium shot, confident energy, direct to camera. No other people in frame.

On-screen text: "A sous chef. A blues singer. A shipping container."

The jacket has embroidered text on both sides of the chest. Render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive: "Baron Vieux" on the left chest, "Bayouboujee" on the right chest. This is the single most important instruction in this prompt — the previous take rendered this as garbled cursive ("Bacon Vieux", "BayouBayoolage").
```

---

### SCENE 2 — Connective / Build beat
**Visual:** Baron at the same bar, arms crossed, slight head tilt, warm energy.
**On-screen text:** "They fall in love. They build the dream."

**ATTACH:** `baron-tiktok-bookslikethis-chefjacket-scene2-reference-v1.jpg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, plain gray chef's coat, same dark-wood bar with exposed brick wall, candles, and bottle shelves in the background.

Medium shot, arms crossed, warm and reflective energy, direct to camera. No other people in frame.

On-screen text: "They fall in love. They build the dream."

The jacket has embroidered text on both sides of the chest. Render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive: "Baron Vieux" on the left chest, "Bayouboujee" on the right chest.
```

---

### SCENE 3 — The Turn
**Visual:** Baron leaning on the bar, hands clasped, closer framing, more subdued.
**On-screen text:** "Then the dream almost destroys them. Burnout. Addiction. A business on the edge of collapse."

**Flag — doc mismatch, not silently resolved:** `outputs/baron-tiktok-bookslikethis-chefjacket-post-copy-v1.md`'s clip-order notes say this position's native caption is "Then their friends refuse to let it die" (attributed to "Src clip 5"). What's actually on screen in the current `v2.mp4` at this position is "Then the dream almost destroys them. Burnout. Addiction. A business on the edge of collapse." — matching the vest cut's 4th beat instead. Going with what's actually in the current video (the thing being replaced beat-for-beat), not the doc's notes, but flagging the discrepancy rather than quietly picking one.

**ATTACH:** `baron-tiktok-bookslikethis-chefjacket-scene3-reference-v1.jpg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, plain gray chef's coat, same dark-wood bar with exposed brick wall and a lit candle visible in the background.

Close medium shot, leaning on the bar, hands clasped together, more subdued and reflective energy, direct to camera. No other people in frame.

On-screen text: "Then the dream almost destroys them. Burnout. Addiction. A business on the edge of collapse."

If the jacket's chest embroidery is visible in this shot, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive: "Baron Vieux" on the left chest, "Bayouboujee" on the right chest.
```

---

### SCENE 4 — Title Card beat
**Visual:** Baron holding up the "Culinary Crescendo" book toward camera, bar counter edge visible in foreground.
**On-screen text:** none needed — the book cover itself carries the title (already correct in the current cut: "Culinary Crescendo: A Symphony of Love in the Big Easy" / "Lejohn Richburg").

**ATTACH:** `baron-tiktok-bookslikethis-chefjacket-scene4-reference-v1.jpg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, plain gray chef's coat, same dark-wood bar with exposed brick wall, a menu board, and bottle shelves in the background.

Medium shot, holding up a paperback book toward camera with both hands so the cover reads clearly: "Culinary Crescendo: A Symphony of Love in the Big Easy" by "Lejohn Richburg" — match the book cover design from the attached reference exactly, it is already correct. No other people in frame.

The jacket has embroidered text on both sides of the chest, partially visible around the book. Render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive: "Baron Vieux" on the left chest, "Bayouboujee" on the right chest.
```

---

### SCENE 5 — CTA
**Visual:** Baron holding the book toward camera, closing energy.
**On-screen text (specify explicitly — do not let Flow auto-caption this one, that's what produced the "Rean it" typo last time):** "Read it. Then tell me you're okay."

**ATTACH:** `baron-tiktok-bookslikethis-chefjacket-scene5-reference-v1.jpg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, plain gray chef's coat, same dark-wood bar with exposed brick wall and bottle shelves in the background.

Medium shot, holding the same "Culinary Crescendo" book toward camera with both hands, direct to camera, closing energy. No other people in frame.

On-screen text, rendered exactly as written, no variation: "Read it. Then tell me you're okay." Do not auto-generate or paraphrase this line — use this exact text only.

The jacket has embroidered text on both sides of the chest, partially visible around the book. Render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive: "Baron Vieux" on the left chest, "Bayouboujee" on the right chest.
```

---

## What happens after generation

Run all 5 through Google Flow in order, drop the clips back, and I'll verify against the checklist above — same discipline as the Jambalaya regeneration this week, including a dense full-timeline check (not just a spot-check) before this replaces `outputs/baron-tiktok-bookslikethis-chefjacket-v2.mp4`. If it passes: this becomes the new current cut for the chef's-jacket line — v2 gets superseded, not deleted, per the repo's usual practice. Note the other cut of this same script (`outputs/baron-tiktok-bookslikethis-v5.mp4`, vest/chef-coat mix) is already live on TikTok — this chef's-jacket version stays a second option, not urgent to post once fixed.
