# Website Video Generation Prompt — "The Scarlet Elixir"
## v2 — Rebuilt for Google Flow (Veo)
**Source storyboard:** `Scarlet_Elixir_TikTok_Media_Redfish_2K.jpeg` (6-panel — corrected dish version)
**Supersedes:** `scarlet-elixir-website-video-prompt-v1.md`, which Google Flow rejected
**Created:** 2026-07-15

## Why v1 didn't work in Flow
Flow generates **one continuous shot per clip** (~8 seconds each), built from
plain cinematic description — not a multi-cut shot list with hard timecodes.
V1 was written like a director's script (six scenes, `0:00–0:04` style cues,
a generated on-screen text overlay). Flow can't take a multi-scene prompt in
one pass, and it doesn't reliably render legible on-screen text, so that
combination is what got flagged. Below, the same storyboard is split into
five separate single-shot prompts — generate each one as its own clip in
Flow, then stitch them in Scenebuilder in this order. Add the title card
as a text overlay afterward in Flow's editor (or any video editor) rather
than asking the model to generate it.

---

## Clip 1 — Prep: Tomatoes & Guajillos (~8 sec)
```
A cast iron kitchen stovetop at night in a warm, candlelit New Orleans
restaurant kitchen, exposed brick and copper pans in soft focus behind.
Whole tomatoes roast on a metal tray beside a pan of dried guajillo
chiles charring over an open gas flame, faint steam rising. Slow, steady
push-in on the pan. Warm amber and scarlet lighting, shallow depth of
field, cinematic photorealistic style, film grain, quiet ambient kitchen
sound — sizzling, a low gas flame hiss.
```

## Clip 2 — The Reduction (~8 sec)
```
Close-up in a dim, candlelit restaurant kitchen: a man's hand drops a
charred dried chile into a simmering pot of deep scarlet reduction. Steam
curls upward past the glow of nearby candles. The camera holds steady,
slightly low angle, focus on the simmering pot. Warm amber and scarlet
color palette, photorealistic, moody Victorian-noir atmosphere, ambient
sound of gentle simmering and a soft clink of the spoon.
```

## Clip 3 — Baron at the Counter (~8 sec)
```
Medium shot of a Black man in his late 30s, square black-framed glasses,
dark vest over a white shirt, standing at a candlelit kitchen counter
lined with copper pans and dried herbs on open shelving. He speaks
calmly and unhurriedly toward camera, composed and confident, a slight
warm half-smile. Static camera, shallow depth of field, warm amber
lighting, photorealistic cinematic style, soft ambient room tone.
```

## Clip 4 — Plating the Dish (~8 sec)
```
Overhead shot in warm candlelight: a spoon ladles thick scarlet sauce
over a seared redfish fillet resting in a cast iron pan, the sauce
pooling and glistening as steam rises off the fish. Slow, smooth camera
movement drifting closer. Rich scarlet and amber tones, photorealistic,
shallow depth of field, soft ambient kitchen sound.
```

## Clip 5 — The Plated Reveal (~8 sec)
```
A dark ceramic plate on a wood table in a dimly candlelit room: a seared
redfish fillet topped with glossy scarlet reduction, oil pooling at the
edges. Candles glow softly out of focus in the background. Camera holds
a slow, steady drift downward toward the plate, coming to rest in a
still, elegant final frame. Warm amber and scarlet lighting, cinematic
photorealistic style, quiet ambient room tone, no dialogue.
```

---

## Assembly Notes (do this in Flow / your editor, not in the prompt)
- **Order:** Clip 1 → 2 → 3 → 4 → 5. Total runtime ~35-40 sec before trimming; tighten each clip to taste in Scenebuilder, target 20-25 sec for the website cut.
- **Title card:** add as a post-generation text overlay on the final 3-4 seconds of Clip 5 — elegant gold serif (Playfair Display or closest match), reading "Baron Vieux — Scarlet Elixir," matching the site's existing type treatment. Do not ask Flow to generate this text; it won't render cleanly.
- **Audio:** let each clip's native ambient sound carry it (simmering, flame, room tone). Skip a music bed — matches the "no fluff" brand voice used elsewhere on the site.
- **Aspect ratio:** set to 16:9 in Flow for the website cut (matches the existing clips on `docs/media.html`). If you also want a vertical cut for social reuse, regenerate at 9:16 — Flow requires the ratio to be set per-generation, it won't reliably reframe after the fact.

## Continuity Notes (unchanged from v1)
- This is the **corrected** Elixir version — dish, not drink. The Scarlet Elixir is a sauce reduction served over the Scarlet Redfish in the books; it's never bottled or poured as a drink.
- Keep Baron's square black-framed glasses visible in Clip 3 — established signature trait, previously missing in an early draft of the TikTok launch storyboard.

## Where This Goes on the Site
Once you have the final stitched export, send it over and I'll wire it into
`docs/media.html` (and `website/media.html`) following the existing `<video>`
block pattern, with a poster frame pulled from Clip 5 and a caption like
"The reduction that started it all — from *The Scarlet Foundation*."
