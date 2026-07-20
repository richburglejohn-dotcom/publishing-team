# Young Baron at Kaldi's — Google Flow Video Prompt
### Created: 2026-07-20

**Reference image:** `references/young-baron-kaldis-portrait-v1.jpg` — teenage Baron, square black-framed glasses (matches adult Baron's signature trait — chosen over the no-glasses version specifically for that continuity), charcoal apron embroidered "KALDI'S COFFEE HOUSE," standing at a vintage copper-and-brass Gaggia espresso machine. Brick walls, tall arched French Quarter windows, warm pendant lighting — matches Chapter Zero's description of Kaldi's (941 Decatur Street) closely.

**Scene basis (Chapter Zero, `outputs/edited-chapters-0-prologue.md`):** "he was a teenager standing on the corner of Decatur Street... found himself standing behind an espresso machine the size of a small engine... The machine taught you, and it was not a patient instructor." This is the quiet-competence moment after he's learned it — not the overwhelmed first day, but a kid who's found something he's good at.

**Treatment: quiet ambient moment, no dialogue** — matches the nostalgic, reflective tone of Chapter Zero (this is Baron-at-56's memory, not a present-tense scene) and gives a silent b-roll asset that can sit under narration — the podcast Episode 1 script (`outputs/podcast-episode-1-baron-script-v1.md`) tells this exact Kaldi's story and currently has no matching visual.

---

## Prompt

```
A teenage Black boy with short natural hair and square black-framed
glasses, wearing a faded charcoal apron embroidered "KALDI'S COFFEE
HOUSE" over a plain worn t-shirt, stands behind a large vintage
copper-and-brass espresso machine in a sunlit French Quarter coffeehouse.
Steam curls from the group head as he works the portafilter with quiet,
practiced focus. Exposed brick walls, tall arched windows with
wrought-iron balconies visible on the street outside, warm pendant
lighting, a wooden shelf of coffee bags behind him, a few patrons
blurred at tables in the background. After a moment he glances up, a
small satisfied smile crossing his face, then returns his attention to
the machine. Static camera, shallow depth of field, warm golden-hour
light through the tall windows, photorealistic, cinematic, nostalgic
film-grain texture evoking the early 1990s. Quiet ambient coffeehouse
sound only — the espresso machine's hiss, distant conversation, a soft
French Quarter street murmur outside. No dialogue, no music.
```

**Aspect ratio:** 9:16 if this feeds social (Origin-style reuse) or short clips off the podcast; 16:9 if it's headed for a website/media-page placement instead — set per Flow's per-generation ratio limit, matching whichever the other clips in that specific placement use.

## Notes for the generation
- This is a **silent mood/b-roll asset**, not a talking-head — no line to deliver, so there's nothing to garble (avoids the embroidery-text and dialogue-audio failure modes seen on other recent generations).
- Watch the apron embroidery specifically anyway — "KALDI'S COFFEE HOUSE" is exactly the kind of small printed text that AI video tends to warp; regenerate if it comes out illegible.
- Keep the glasses — that's the deliberate continuity anchor tying this back to every adult-Baron asset in the repo.
- Natural pairing: cut this under the opening of Podcast Episode 1 ("Segment 1 — 941 Decatur") or use as a flashback insert in a future Origin-style video.
