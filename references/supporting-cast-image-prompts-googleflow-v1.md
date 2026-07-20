# Kaldi's Series — Character Image Prompts
### Filed from Google Drive (outputs/Cast/Character Image Prompts.md), created 2026-07-19

Formula: photorealistic character portrait/scene, bold white sans-serif title card with the character's name (all caps, top of frame, subtle drop shadow), New Orleans culinary-noir lighting (moody, directional, slightly desaturated), setting and wardrobe tied to the character's role. Modeled on the RAMPART reference image already generated.

---

## RAMPART (reference — already generated)
Broad-shouldered Black man, bald, weathered scarred forearms, cream chef shirt with dark stained apron, tongs in hand, standing at a butcher-block station in an industrial stainless kitchen with hanging pans and glass spice jars. Title card: "RAMPART" in bold white caps, top of frame.

## CHEF CONTI JASPER
Photorealistic portrait/scene, white man, early thirties, easy grin arriving a beat after his expression, gray chef's coat, dish towel over one shoulder. Setting: active kitchen pass, warm light, motion blur of a busy line behind him. Title card: "CONTI JASPER."

## ESPERANZA
Photorealistic portrait, Latina woman, curly dark hair, denim jacket, warm and observant expression — a regular, not staff. Setting: coffeehouse counter, morning light through a big street-facing window (echo of Kaldi's). Title card: "ESPERANZA."

## TCHOUPITOULAS ("TCHOUP")
Photorealistic portrait/scene, older man, gray beard, weathered face, flannel and a waterman's vest, standing on a dock or tailgate with iced Gulf seafood crates. Pre-dawn blue light. Title card: "TCHOUPITOULAS" with "TCHOUP" smaller beneath.

## SLIDE
Photorealistic portrait, young Black man, kitchen whites, alert and quick expression — line-cook energy. Setting: prep station, stainless steel, motion in the background. Title card: "SLIDE."

## DEX
Photorealistic portrait, Black man, chef whites, serious and focused expression. Setting: sauté station, flame visible in a pan, dramatic kitchen lighting. Title card: "DEX."

## FARRAH
Photorealistic portrait, white woman, blonde, chef coat, sharp and exacting expression — executive-chef authority. Setting: pass/expo station, tickets visible, cool overhead light. Title card: "FARRAH."

## GHOST
Photorealistic portrait, young white man, light hair, plain shirt (not kitchen whites — he doesn't quite belong to the line yet), quiet/watchful expression. Setting: back hallway or storage room, low contrast, half in shadow. Title card: "GHOST."

---

**Notes for use in Google Flow:**
- Repeat the character reference block (face/build/wardrobe details above) at the start of every scene prompt for that character to counteract visual drift across shots.
- Keep the title-card treatment consistent (font, placement, caps) across the whole set so they read as one cast sheet.
- Aspect ratio: match RAMPART (portrait, ~9:16) for consistency across the series.

---

## Filing notes
- **Mechanical fix on import:** the source doc's RAMPART section ran directly into the Conti Jasper section with no header and a few dropped characters ("...top ouuCHEF CONTI JASPER"). Restored the obvious missing text ("top of frame.") and the `## CHEF CONTI JASPER` header to match every other section's format — a formatting fix, not a content change.
- **Continuity flag, not corrected:** Farrah's line reads "sharp and exacting expression — executive-chef authority," but per `references/series-bible.md` (Ch. 1, Supporting Cast), Farrah is a **line cook** ("quietly covered stations she wasn't assigned to") — Melpomene is the Apothecary's sole Executive Chef. "Executive-chef authority" as a description of Farrah's demeanor at the expo station may just mean she carries herself with that level of command, but it reads like it could imply her actual title. Worth a quick author check before generating — flagging rather than silently rewriting since this could be intentional shorthand for her bearing rather than an error.
- All other character details (Esperanza's Puerto Rican/Latina background and Kaldi's-regular framing, Tchoup's pre-dawn dock setting, Slide/Dex's roles, Ghost's dishwasher/outsider framing) check out against the series bible with no changes needed.
