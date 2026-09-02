# Calliope — Solo Portrait Prompts (Google Flow, still image)
### Created: September 1, 2026

Character-spotlight content for Calliope. Unlike the Olivia solo set, she's already a met, established character in the story (Baron's confidante at the neighboring bar) — these are standalone portraits of her own life behind the counter, not a pre-debut tease.

## Reference art (match likeness/wardrobe to this, do not free-hand)
**RE-DESIGN NOTE (2026-09-02):** Calliope's look has been updated. `references/calliope-portrait-v1.jpg` (short natural afro, black button-up, whiskey bar) is now **superseded** — do not use it as the likeness/wardrobe anchor going forward. Kept in the repo for history only.

**Primary anchor (current, as of 2026-09-02):**
- `references/calliope-bartender-portrait-v2-bun.webp` — curly hair pulled into a bun, olive-green button-up, tattooed forearms (rose, snake/dagger, skull, botanical linework), apothecary/tincture bar setting (jars labeled "Bitter Botanicals," "Gentian Root," "Chamomile," "Scarlet Elixir" bottles on the shelf, "APOTHECARY — TINCTURES & ELIXIRS, OPEN LATE" signage).
- `references/calliope-bartender-portrait-v2-braids.webp` — alternate hair variant, cornrow-style braids pulled back, black button-up, same tattoos and apothecary setting, "APOTHECARY NEXT DOOR" signage.

Both variants share the same face, tattoos, and setting — treat either as valid for likeness, and pick whichever hair styling fits the shot.

## Character reference (reuse in every prompt)
**Calliope** *(pronounced "cal-LEE-ope" — not the classical muse pronunciation)* — Black woman, dark skin, sharp-eyed and steady, freckles across the nose/cheeks, small nose ring and hoop earrings. Bartender at an apothecary-style tincture bar. Sharp, perceptive, unhurried — the kind of presence that watches people reveal what their faces work to conceal. Extensive tattoo work on both forearms (florals, a rose, a snake/dagger motif, a skull, fine linework). Wardrobe: dark button-up (olive-green or black), sleeves rolled to the forearm, sometimes a brown waist apron. Match face/hair/wardrobe/tattoos to the reference art above.

**Setting — her bar** — Dim, warm apothecary-style tincture bar: dark wood counter, exposed bulb pendant lights, glass apothecary jars of dried botanicals ("Bitter Botanicals," "Gentian Root," "Chamomile," "Rosehip"), bottles of "Scarlet Elixir" on the back shelf alongside whiskey, hand-painted "Apothecary" signage, citrus peels and bar tools on the counter.

**Palette:** scarlet `#a6182c`, gaslamp-amber `#c9973f`, parchment `#ede4d3`, ink-black `#0d0b0a` (`docs/css/style.css`), consistent with the rest of the character-poster set.

---

## Prompt 1 — Behind the Bar (anchors directly to reference art)
Photorealistic portrait, medium shot, Calliope alone behind her apothecary-style bar, wiping down the dark wood counter with a cloth, one hand braced on the bar, tattooed forearms visible. Warm bulb-light from pendant lights above, glass jars of dried botanicals and "Scarlet Elixir" bottles on the shelf behind. Steady, composed expression, direct to camera. Dark button-up (olive-green or black) with rolled sleeves. Noir-toned color grade matching the established character-poster look, shallow depth of field, subtle film grain. No other people in frame, no title card/text.

## Prompt 2 — Reading the Room
Photorealistic portrait, three-quarter shot, Calliope standing with arms loosely crossed at the end of her bar, watching the room with a sharp, unreadable, faintly amused expression — the "watches people reveal what their faces work to conceal" quality from her character description. Tattooed forearms visible, warm amber bar light behind her, soft haze in the air, patrons blurred and anonymous in the deep background (no named characters). Same wardrobe and noir grade as Prompt 1.

## Prompt 3 — Closing Time
Photorealistic portrait, Calliope alone in her bar after last call, most of the lights dimmed except one pendant bulb, pouring a small drink for herself and studying it rather than drinking, unhurried and private. A quieter, more unguarded register than the working shots — this is her own moment, not performance for a customer. Warm, low, intimate lighting; same wardrobe and tattoos.

## Prompt 4 — The Small Smile
Photorealistic portrait, close-up, Calliope allowing a rare small, genuine smile — private and brief, not performed for anyone in the room. Same apothecary-bar setting, warm bulb-light catching one side of her face, soft shadow on the other. This is the softer counterpart to her usual steady/guarded read, still recognizably her.

---

## Notes
- **Generation checklist (manual Flow runs):**
  - Upload `references/calliope-bartender-portrait-v2-bun.webp` (or the braids variant) as the reference image for every prompt — not the superseded `calliope-portrait-v1.jpg`.
  - Reject on sight, don't try to fix in-prompt: wrong hair, wrong skin tone, missing/wrong tattoos, or an off-model face — regenerate rather than accepting a near-miss.
  - Watch for Baron (or any other named character) drifting into frame — every scene here is solo; reject if anyone else appears.
  - No on-screen text/title cards — leave that field blank in Flow (the reference art itself has title-card text baked in; don't carry that into new generations).
  - File naming for keepers: `calliope-solo-[bar/reading-room/closing/smile]-v2.[ext]` (v2 to distinguish from the superseded-look v1 set, if any existed).
- **Timeline/version note:** as of 2026-09-02, this is her current design. If older `calliope-solo-*-v1` assets exist anywhere (whiskey-bar look, no tattoos), they belong to the superseded design — don't mix the two looks in the same piece of content.
