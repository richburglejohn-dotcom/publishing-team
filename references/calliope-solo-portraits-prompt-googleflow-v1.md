# Calliope — Solo Portrait Prompts (Google Flow, still image)
### Created: September 1, 2026

Character-spotlight content for Calliope. Unlike the Olivia solo set, she's already a met, established character in the story (Baron's confidante at the neighboring bar) — these are standalone portraits of her own life behind the counter, not a pre-debut tease.

## Reference art (match likeness/wardrobe to this, do not free-hand)
**Primary anchor: `references/calliope-portrait-v1.jpg`** — confirmed reference art already used successfully in `references/roe-velvet-video-prompt-googleflow-v1.md`.

## Character reference (reuse in every prompt)
**Calliope** *(pronounced "cal-LEE-ope" — not the classical muse pronunciation)* — Black woman, short natural afro, dark skin, sharp-eyed and steady. Bartender at her own spot near Baron's kitchen. Sharp, perceptive, unhurried — the kind of presence that watches people reveal what their faces work to conceal. Wardrobe: black button-up shirt with sleeves rolled to the forearm, black waist apron, small stud earrings. Match face/hair/wardrobe to the reference art above.

**Setting — her bar** — Dim, warm New Orleans bar, dark wood counter, vintage oil lamp, chandelier, whiskey bottles on the back shelf, a "LIVE PERFORMANCES" marquee visible in the background, worn leather booths.

**Palette:** scarlet `#a6182c`, gaslamp-amber `#c9973f`, parchment `#ede4d3`, ink-black `#0d0b0a` (`docs/css/style.css`), consistent with the rest of the character-poster set.

---

## Prompt 1 — Behind the Bar (anchors directly to reference art)
Photorealistic portrait, medium shot, Calliope alone behind her bar, wiping down the dark wood counter with a cloth, one hand braced on the bar. Warm lamp-light from an oil lamp beside her, chandelier glow above, whiskey bottles lined on the shelf behind. Steady, composed expression, direct to camera. Black button-up with rolled sleeves, black apron. Noir-toned color grade matching the established character-poster look, shallow depth of field, subtle film grain. No other people in frame.

## Prompt 2 — Reading the Room
Photorealistic portrait, three-quarter shot, Calliope standing with arms loosely crossed at the end of her bar, watching the room with a sharp, unreadable, faintly amused expression — the "watches people reveal what their faces work to conceal" quality from her character description. Warm amber bar light behind her, soft haze in the air, patrons blurred and anonymous in the deep background (no named characters). Same wardrobe and noir grade as Prompt 1.

## Prompt 3 — Closing Time
Photorealistic portrait, Calliope alone in her bar after last call, most of the lights dimmed except the lamp beside her, pouring a small drink for herself and studying it rather than drinking, unhurried and private. A quieter, more unguarded register than the working shots — this is her own moment, not performance for a customer. Warm, low, intimate lighting; same wardrobe.

## Prompt 4 — The Small Smile
Photorealistic portrait, close-up, Calliope allowing a rare small, genuine smile — private and brief, not performed for anyone in the room. Same bar setting, warm lamp-light catching one side of her face, soft shadow on the other. This is the softer counterpart to her usual steady/guarded read, still recognizably her.

---

## Notes
- **Generation checklist (manual Flow runs):**
  - Upload `references/calliope-portrait-v1.jpg` as the reference image for every prompt.
  - Reject on sight, don't try to fix in-prompt: wrong hair, wrong skin tone, or an off-model face — regenerate rather than accepting a near-miss.
  - Watch for Baron (or any other named character) drifting into frame — every scene here is solo; reject if anyone else appears.
  - No on-screen text/title cards — leave that field blank in Flow.
  - File naming for keepers: `calliope-solo-[bar/reading-room/closing/smile]-v1.[ext]`.
- Unlike the Olivia set, there's no timeline concern here — Calliope's look is already locked to her single established reference image, no "earlier era" vs "later era" distinction needed.
