# Olivia Marigny — Solo Portrait Prompts (Google Flow, still image)
### Created: 2026-08-30

Pre-debut solo content for Olivia Marigny, ahead of her appearance in Culinary Crescendo. She has not yet been met or named in the prequel timeline (`references/series-bible.md`: "Present in the prequel only as a voice Baron hears... Not yet met. Not yet named. The city is making its arrangements.") — these are standalone character portraits, not scenes with Baron.

## Reference art (match likeness/wardrobe to these, do not free-hand)
**Primary likeness anchor: `references/olivia-marigny-contact-sheet-v1.jpg`** — confirmed by the author as the closest match to how Olivia is pictured. Four panels, each a different facet of her — use whichever panel is closest in mood to the shot being generated:
1. **Stage panel** — mustard-yellow slip dress, gold hoop earrings, strappy heels, mic in hand, mid-performance, warm venue light, a kitchen/pass visible behind her.
2. **Private/weary panel** — bare-faced, hair down and undone, tank top and shorts, seated on a couch with a wine bottle at her feet, guarded and tired — the version of her nobody in the audience sees.
3. **Daylight/domestic panel** — soft white top, seated in a garden among roses and string lights, coffee and a small plate, warm and unguarded, a rare open smile.
4. **Tarot panel** — black top, candlelight, direct unreadable gaze at camera, cards fanned in hand — the mystic/reader side of her.

Secondary references (earlier single-scene art, still valid for likeness/wardrobe):
- `references/olivia-marigny-portrait-v1.png`
- `references/olivia-marigny-headshot-v1.jpg`
- `references/olivia-marigny-tarot-scene-v1.png`
- `references/olivia-marigny-performance-venue-ref-v1.jpg`

## Character reference (reuse in every prompt)
**Olivia Marigny** — Black woman, Virgin Islands heritage, warm brown skin, dark expressive eyes, composed and a little guarded — the kind of presence that reads a room before she plays a note. Jazz/blues singer. Elegant, unhurried movement, sultry rather than showy. She carries visibly different registers depending on the moment — radiant and commanding on stage, guarded and weary alone, warm and open in daylight/domestic settings, unreadable and watchful over tarot cards (see the four contact-sheet panels above) — pick the register that matches the scene rather than defaulting to one mood. Her stage persona draws on classic blues/torch-singer energy — think the phrasing and unhurried command of a room that a seasoned blues vocalist brings, not a pop-idol performance style. Match her face/hair to the reference art above; do not invent a new likeness.

**Palette:** scarlet `#a6182c`, gaslamp-amber `#c9973f`, parchment `#ede4d3`, ink-black `#0d0b0a` (`docs/css/style.css`), consistent with the rest of the character-poster set.

---

## Prompt 1 — Solo Stage Portrait (anchors to contact-sheet Panel 1)
Photorealistic portrait, medium shot, Olivia Marigny alone on a small stage in a dim New Orleans jazz bar, one hand loosely holding a vintage microphone stand, eyes half-lidded mid-phrase as if holding a long note. Warm amber stage light from one side, deep shadow on the other, soft haze in the air. Worn brick and string lights barely visible in the background, thrown out of focus. Mustard-yellow slip dress, gold hoop earrings, strappy heels — matching contact-sheet Panel 1's wardrobe. Noir-toned color grade matching the established character-poster look, shallow depth of field, subtle film grain. No other people in frame, no visible band.

## Prompt 2 — Solo Tarot Table (variant angle, anchors to contact-sheet Panel 4)
Photorealistic portrait, close three-quarter shot, Olivia Marigny alone at a worn wooden table in a dim back room, mid-shuffle on a tarot deck, one card already turned face-up in front of her, candle burning beside her hand, thin curl of incense smoke crossing the frame. Direct, unreadable gaze at camera — same watchful, unreadable expression as contact-sheet Panel 4. Black or dark jewel-toned top, minimal jewelry. Same noir black-and-white or deep-desaturated treatment as `references/olivia-marigny-tarot-scene-v1.png`, but a fresh angle/composition rather than a duplicate — camera lower, closer to table height, candlelight as the dominant light source.

## Prompt 3 — Off-Stage / Between Sets (new register, bridges Panels 1 and 2)
Photorealistic portrait, Olivia Marigny alone on a French Quarter side street at dusk, leaned against brick near a half-lit doorway, head tilted slightly as if humming to herself, unaware of being watched — this is the "voice Baron hears off a side street" moment from the prequel, rendered as her own private beat rather than his POV. Warm streetlamp glow mixing with cool dusk light, wrought-iron balcony shapes soft in the background. Relaxed off-stage wardrobe — light jacket over a simple top, a flicker of the guarded weariness from contact-sheet Panel 2 underneath the calm. Quiet, unglamorous, human moment; noir color grade consistent with the rest of the set.

## Prompt 4 — Daylight / Unguarded (anchors to contact-sheet Panel 3)
Photorealistic portrait, medium shot, Olivia Marigny alone in a small courtyard garden in soft natural daylight, roses and string lights around her, seated with a small cup and plate, a rare open, unguarded smile — the daylight counterpart to her stage persona, matching contact-sheet Panel 3's warmth. Soft white top, minimal jewelry, natural window/daylight rather than the noir stage lighting used elsewhere in this set — this one is meant to feel like a quieter, off-duty color palette (warm neutrals and greens) rather than the amber/scarlet noir grade, while still clearly the same woman.

---

## Notes
- **Generation checklist (manual Flow runs):**
  - Upload the contact sheet (`references/olivia-marigny-contact-sheet-v1.jpg`) as the reference image for every prompt, not just Panel 1 — attach it every time rather than relying on the text description alone.
  - Reject on sight, don't try to fix in-prompt: wrong hair color/texture, wrong skin tone, or a face that doesn't read as her — regenerate rather than accepting a near-miss.
  - Watch for a second figure appearing in frame (Baron drift) even though every prompt here specifies solo — reject if anyone else appears.
  - Don't accept "Turn"-era styling (fuller curled/highlighted hair) drifting into a pre-debut shot — that's a timeline miss, reject it.
  - No text/title cards on any of these four stills — leave that field blank in Flow.
  - File naming for keepers: `olivia-marigny-solo-[stage/tarot/street/garden]-v1.[ext]`.
- **Timeline note:** the contact sheet is her earlier-era look and is the correct anchor for this pre-debut set. The polished/curled-and-highlighted styling in `outputs/the-turn-facebook-campaign-v1/` (the Baron+Olivia dinner shoot) is a later, "successful" era of her — don't pull that styling into these pre-debut shots, or the timeline will read backwards.
- These are intentionally Baron-free — she hasn't been met yet in-story, so no scene should place them together.
- If Flow drifts on likeness, reject and regenerate against the reference art listed above rather than accepting an off-model face — same discipline as the Baron/Calliope consistency checks in `references/roe-velvet-video-prompt-googleflow-v1.md`.
- Wardrobe/energy pulls loosely from a classic blues-singer stage presence (phrasing, unhurried command of a room) — this is a tone reference only, not a likeness reference to any real performer.
