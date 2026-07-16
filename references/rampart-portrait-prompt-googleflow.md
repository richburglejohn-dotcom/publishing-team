# Rampart Character Clip — Google Flow Version
**Supersedes for Flow use:** `rampart-portrait-prompt.md` is written for static
image generators (Midjourney/DALL-E/Ideogram) and will not work in Flow as-is —
Flow generates a single continuous ~8-second shot from cinematic prose, not a
static portrait, and it doesn't reliably render on-screen text. This version
restructures the same character brief into Flow's actual format (see the
reasoning in `outputs/scarlet-elixir-website-video-prompt-v2-googleflow.md`,
which covers the same fix for the Elixir video).

A "portrait" in Flow means a short clip that holds mostly still on him —
subtle motion, not a scene. Two options below: calm precision (the default)
and the "wall up" flare-up alternate, matching the two-mood set proposed in
the original doc.

---

## Clip A — Calm Precision (default, ~8 sec)
```
Medium portrait shot in a professional restaurant kitchen at night, warm
amber pendant lighting, exposed brick and stainless steel softly out of
focus behind him, faint steam drifting through the frame. A heavyset Black
man in his late 30s, bald, dark skin with a faint sheen from kitchen heat,
built broad and powerful through the shoulders, wearing kitchen whites with
sleeves pushed up. He stands still, composed, controlled intensity in his
eyes, a faint guardedness behind an otherwise settled expression. Slow,
subtle camera push-in. Shallow depth of field, photorealistic, cinematic,
warm amber and scarlet tones, quiet ambient kitchen sound — a low simmer,
distant clatter of the line.
```

## Clip B — Alternate: "The Wall Up" (~8 sec)
```
Medium shot in the same warm, candlelit restaurant kitchen at night. The
same heavyset, bald Black man stands at a prep station, tongs gripped
tight in one hand. His jaw is set, eyes sharp with sudden defensive
intensity, caught in the half-second before he catches himself and pulls
back. Static camera, slight handheld feel. Shallow depth of field,
photorealistic, cinematic, warm amber and scarlet tones, ambient kitchen
sound with a sharp metallic clink as the tongs hit the counter.
```

---

## Notes
- **No text overlay in either clip** — if a name card is wanted later, add
  it as a post-generation overlay (same method used for the Scarlet Elixir
  video's title card: PNG sequence composited with ffmpeg, not generated
  by Flow).
- **Build stays the priority QA check** — same as the original prompt: if
  Flow returns a lean or average build, regenerate. Broad/heavyset is the
  single most important on-model trait here.
- **No glasses, bald head** — keeps him visually distinct from Baron Vieux
  in any side-by-side use.
- If you want a longer character intro (Rampart speaking, similar to
  Baron's "Making an Exception" clip), that would need its own multi-clip
  Flow sequence built the same way as the Elixir video — happy to draft
  that separately if there's a script for it.
