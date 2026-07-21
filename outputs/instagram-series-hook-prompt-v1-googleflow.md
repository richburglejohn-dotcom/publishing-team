# Instagram Video Generation Prompt — "Series Hook" (Post 5)
## For Google Flow (Veo)
**Pairs with:** `outputs/social-content-prequel-v1.md` — Post 5, "Series Hook" caption
**Created:** 2026-07-21

Flow generates one continuous shot per clip (~8 sec each) from plain
cinematic description, not a multi-scene script — same lesson learned on
the Scarlet Elixir prompt. The caption hits three distinct beats (storage
room, permit office, side street), so this is three separate single-shot
clips, generated individually and stitched in Scenebuilder in order.

**Era note:** this is prequel-era Baron — sous chef under Melpomene at
The Apothecary, years before Bayouboujee exists. No chef's coat with
either restaurant's name on it yet; keep him in plain kitchen whites or a
plain black apron, no branding. Square black-framed glasses stay on in
every shot — his one unbroken signature trait across every era.

---

## Clip 1 — The Storage Room (~8 sec)
```
A cramped restaurant storage room in the French Quarter, dim overhead
bulb, metal shelving stacked with dry goods and cleaning supplies. A
Black man in his late 20s, square black-framed glasses, plain white
kitchen undershirt with sleeves pushed up, leans against a shelf holding
a mostly-empty bottle of dark rum, mid-exhale after a long shift. Two
other kitchen staff nearby, tired and relaxed, low laughter. Warm,
low-key practical lighting, shallow depth of field, photorealistic
cinematic style, grainy handheld feel, ambient sound of a kitchen
exhaust fan hum and quiet talk.
```

## Clip 2 — The Permit Office (~8 sec)
```
Municipal permit office interior on Canal Street, fluorescent lighting,
worn linoleum floor, a wall of frosted-glass windows. The same Black man
in his late 20s, square black-framed glasses, now in a plain collared
shirt, stands at a counter sliding a folder of paperwork toward a
trim white man in his fifties in a gray suit behind the window, who
studies it with a skeptical, measuring look. Static camera, flat
institutional lighting, photorealistic style, ambient sound of a
ceiling fan and distant office chatter.
```

## Clip 3 — The Side Street (~8 sec)
```
A quiet French Quarter side street at dusk, wrought-iron balconies
overhead, string lights just flickering on. The same Black man in his
late 20s, square black-framed glasses, walks alone at an unhurried pace,
head turning slightly as if catching a sound somewhere off-frame — a
voice, distant, half-heard. Camera tracks alongside him in a slow lateral
drift. Warm dusk lighting fading to blue, photorealistic cinematic
style, ambient sound of faint distant music and footsteps on wet
pavement.
```

---

## Assembly Notes
- **Order:** Clip 1 → 2 → 3, matching the caption's own sequence (storage room → permit office → side street). Trim each to ~3-4 sec in Scenebuilder for a ~10-12 sec total — this is a hook, not a narrative short.
- **Aspect ratio:** set to 4:5 in Flow for the main Instagram feed/Reel crop. Regenerate at 9:16 if reusing on Reels full-screen or TikTok later.
- **Text overlay:** add "The Scarlet Foundation" as a closing title card in Flow's editor over the last second of Clip 3 — do not ask Flow to generate the text itself (it doesn't render reliably, same issue as the Elixir prompt).
- **Audio:** let each clip's native ambient sound carry it, no music bed, consistent with the established brand voice on other prequel content. If a music bed is wanted here specifically (this is the top-of-funnel hook post), keep it a quiet instrumental under -18dB, not louder than the ambient layer.
- **Continuity:** no restaurant branding visible on Baron in any clip — Bayouboujee doesn't exist yet at this point in the story, and The Apothecary's storage room is a back-of-house space, not a branded one.
