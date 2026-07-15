# Website Video Generation Prompt — "The Scarlet Elixir"
## For the Media page (horizontal, 16:9 — not the vertical TikTok cut)
**Source storyboard:** `Scarlet_Elixir_TikTok_Media_Redfish_2K.jpeg` (6-panel — the corrected dish version, not the drink version)
**Created:** 2026-07-15

This is a generation prompt for an AI video tool (Sora, Runway, Kling, Luma, or
similar image-to-video model). It's built directly off the 6 panels in the
approved storyboard, in sequence, so the panels function as keyframes/reference
stills if your tool supports image-to-video conditioning. Target length: 20–25
seconds, horizontal 16:9, matching the existing clips on `docs/media.html`
(`chef-writing-clipboard.mp4`, `redfish-and-crawfish.mp4`).

---

## Full Prompt (paste into your video generation tool)

```
Cinematic short film, photorealistic, moody Victorian-noir New Orleans
restaurant kitchen at night. Warm amber candlelight, exposed brick, copper
pans hanging, dried herbs and apothecary-style bottles on open shelving.
Color palette: scarlet red, gaslamp amber/gold, deep charcoal black,
parchment cream. Shot like a premium food-and-character brand film — no
cartoon or illustration style, fully photorealistic, shallow depth of
field, film grain, 8k detail.

SEQUENCE (20-25 seconds):

0:00-0:04 — Close on a stovetop: whole tomatoes roasting on a tray and
dried guajillo chiles charring in a cast iron pan, gas flame visible,
steam rising. Slow push-in.

0:04-0:08 — A man's hand (Black, square black-framed glasses visible in
reflection) drops a charred guajillo into a simmering pot of deep red
reduction. Steam curls up past candlelight in the background.

0:08-0:12 — Medium shot: Baron Vieux, Black man in his 30s-40s, square
black-framed glasses, dark vest over white shirt, standing at a kitchen
counter lined with copper pans and candles, speaking directly to camera
with quiet, unhurried confidence. Mouth moves as if mid-sentence but no
audible dialogue needed — this is a visual beat.

0:12-0:16 — Overhead insert: a spoon ladles thick scarlet reduction over
a seared redfish fillet in a cast iron pan, sauce pooling and glistening,
steam rising off the fish.

0:16-0:21 — Slow reveal: the plated dish on a dark ceramic plate — seared
redfish fillet napped in the scarlet reduction, oil pooling at the edges,
lit by candlelight, on a dark wood table.

0:21-0:25 — Hold on the plated dish, candles softly out of focus in the
background. Text overlay fades in, elegant gold serif (Playfair Display
style): "Baron Vieux — Scarlet Elixir." Hold, then fade to black.

Audio: no dialogue. Natural kitchen ambience — simmering, a knife tap,
soft flame — under a single low, warm sustained note. No upbeat music bed.

Aspect ratio: 16:9. No visible logos, watermarks, or on-screen UI.
```

---

## Reference Stills (use as keyframes/style reference if your tool supports it)
Use the 6 panels of `Scarlet_Elixir_TikTok_Media_Redfish_2K.jpeg` in this order
as init/reference frames — they already match the sequence above panel-for-panel:
1. Sauce ladled over seared redfish (pan)
2. Baron to camera, kitchen behind him
3. Tomatoes + guajillos roasting on the stove
4. Baron close-up, candlelit
5. Title card — "Baron Vieux — Scarlet Elixir"
6. Hand dropping chile into the simmering pot

## Continuity Notes
- **This is the corrected storyboard** — the earlier Elixir media (`Scarlet_Elixir_TikTok_Media_2K.jpeg`) showed a poured drink in a glass, which contradicts the books: the Scarlet Elixir is a sauce reduction served over the Scarlet Redfish, never bottled, never written down. This prompt uses only the corrected, on-canon version.
- Keep Baron's square black-framed glasses visible in any face-forward shot — established as a signature trait, and the source of a prior continuity fix on the TikTok launch storyboard.
- No dialogue/VO needed for a website background/hero clip — the site is a visual medium, not a talking-head platform. If you want a voiced cut for social re-use later, borrow the line from `outputs/tiktok-baron-vieux-page-launch-v1.md` Script 2 ("Never Written Down").

## Where This Goes on the Site
Add to `docs/media.html` (and mirror in `website/media.html`) following the existing
`<video>` block pattern — poster image from a still frame or the plated-dish panel,
source the generated mp4. Suggested section heading: "The Scarlet Elixir" with a
one-line caption, e.g. "The reduction that started it all — from *The Scarlet
Foundation*." Once you have the exported video file, tell me and I'll wire it into
both the local `website/` source and the deployed `docs/` folder.
