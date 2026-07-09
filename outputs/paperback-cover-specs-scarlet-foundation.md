# Paperback Cover Specs — The Scarlet Foundation
**File:** `outputs/Scarlet_Foundation_Paperback_Cover_6x9_74p.pdf`
**Date:** 2026-07-09

## KDP Setup These Specs Assume
| Setting | Value |
|---|---|
| Trim size | 6" x 9" |
| Page count | 74 (per KDP Print Previewer) |
| Paper | White |
| Cover finish | Author's choice (matte recommended for the dark palette) |

## Dimensions
- **Full wrap:** 12.424" x 9.250" (KDP's exact expected size for 6x9 / 74 pages)
- **Bleed:** 0.125" all outer edges
- **Spine width:** 0.174"
- **Spine text:** NONE — KDP does not allow spine text under ~80 pages. Spine is solid charcoal (#0d0b0a).
- **Barcode zone:** bottom-right of back cover left clear; KDP overlays its own barcode (2" x 1.2").

## Layout
- **Back cover:** charcoal (#0d0b0a) with amber/scarlet glow accents. Eyebrow (Courier Prime), tagline #1 from `prequel-blurbs-v1.md` (Playfair Display italic), 75-word short blurb + Scarlet Elixir line (EB Garamond), series cross-sell line, author + FuturIQ/Bayoubeaux1070 imprint bottom-left.
- **Front cover:** existing `PrequelFrontCover.jpg` art, upscaled to 300 DPI canvas size.

## Known Limitation — Front Art Resolution
The only available front cover art is 687x1024 px (~112 true DPI at 6x9 print size).
It was Lanczos-upscaled + sharpened to 1862x2775 so the file meets KDP's pixel-density
check, but real detail is limited — expect slight softness in print, and possibly a
KDP quality *warning* (not an error).

**Fix for a v2:** regenerate the art at 2048px+ wide using the prompt in
`references/prequel-cover-prompt.md` (or run the current art through a proper
AI upscaler), drop it into `outputs/paperback-cover-source/` as
`front_upscaled.jpg` (1862x2775 or larger, same aspect), and re-print
`wrap.html` to PDF at 12.424" x 9.25".

## If Page Count Changes
Spine width = pages x 0.002252" (white paper). Full wrap width = 12.25" + spine.
Update the CSS panel widths in `outputs/paperback-cover-source/wrap.html` accordingly —
KDP's previewer states the exact expected size after any interior re-upload.

## Regenerating the PDF
Open `outputs/paperback-cover-source/wrap.html` in Chrome and print to PDF at
custom size 12.424" x 9.25", margins 0, background graphics ON — or use any
headless Chromium `page.pdf()` call with those dimensions.
