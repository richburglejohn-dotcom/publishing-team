# Roe Velvet — Google Flow Image Prompt
### Created: 2026-08-08

No image exists yet for this dish. This is a still-image generation prompt for Google Flow, following the same conventions used for the Baron and Olivia character posters (`references/baron-victorian-tarot-scene-v1.jpg`, `references/olivia-marigny-tarot-scene-v1.png`) and the Scarlet Elixir / Redfish food styling already on the site.

## Dish reference (from the manuscript)
From `outputs/Scarlet_Foundation_FULL_DRAFT_v1.md`, Chapter 9 — Baron's absurdist dessert, presented on a cake stand and carried into Calliope's bar during a late-night lull: a glossy caviar/fish roe quenelle set center stage atop dark velvet cake and frosting.

> "This is not fusion. This is destiny." — Baron
> "Put that on the opening menu. Whatever you end up calling it. People will pay for that." — Calliope

**Flavor note (context only, not for the image):** salt first, then sweet right behind it, chasing its tail.

## Prompt (Google Flow, still image)

Photorealistic food photography, close-up hero shot of an elegant dessert on a dark cake stand: a single dense, dark red-black velvet cake slice with thick glossy frosting, topped center-stage with a precisely piped quenelle of glistening black and amber fish roe catching the light. Condensation-free, styled for a menu shoot — crumb visible at the cut edge, frosting swoop still holding a knife mark. Set on a dim wooden bar counter at night, echoing a quiet French Quarter bar after the rush: a few soft candle flames and string-light bokeh in the background, warm amber and scarlet undertones, New Orleans culinary-noir lighting (moody, directional, slightly desaturated). Bold white sans-serif title card reading "ROE VELVET" (all caps, top of frame, subtle drop shadow). Shallow depth of field, subtle film grain, shot on a macro lens, no visible hands or people in frame.

## Notes
- Matches the established brand palette (`docs/css/style.css`): scarlet `#a6182c`, gaslamp-amber `#c9973f`, parchment `#ede4d3`, ink-black `#0d0b0a`.
- Title card requested directly in the prompt, consistent with the character-poster convention (Baron and Olivia name cards rendered successfully in Flow's still-image mode) — this differs from Flow's video mode, which does not reliably render legible on-screen text and requires captions to be added in post.
- If the rendered roe texture or cake crumb comes out inconsistent, regenerate with the same prompt rather than patching — small food-texture artifacts are harder to spot-fix cleanly than portrait/wardrobe ones (see the chef's-jacket embroidery text failure this session).
- No existing image asset for this dish prior to this prompt; confirmed via repo search before drafting.
