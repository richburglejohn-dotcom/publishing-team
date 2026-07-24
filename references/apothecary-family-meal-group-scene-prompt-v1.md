# Apothecary Family Meal — Full Crew Group Scene Prompt
### Created: 2026-07-24

**Goal:** One image, all six together — Baron Vieux, Rampart, Slide, Dex, Farrah, Ghost — gathered around the preshift family meal (red beans and rice), before the dinner rush hits. Meant as the anchor asset for `outputs/apothecary-family-meal-individual-posts-v1.md`, which currently pairs each character's post with their existing solo portrait. If this group shot holds up, it can lead that whole set (cover/opener) or replace the solo-portrait pairings outright.

**Known risk, stated plainly:** `outputs/apothecary-crew-carousel-post-copy-v1.md` deliberately avoided this exact shot — six people in one generation was judged a bigger consistency risk than the two-person Baron/Rampart test in `references/baron-rampart-higgsfield-prompt-v1.md`, so that carousel used the existing solo portraits instead. This prompt takes the harder path on purpose. Treat the first pass as a test, not a final asset, the same way the Baron/Rampart test was treated.

---

## Character reference block (repeat in full for image-to-image / multi-reference tools that support it)

**Baron Vieux** — Black, lean, sharp-featured. Square black-framed glasses (always — his single most distinctive trait). Steel-gray chef's coat embroidered "Baron Vieux" on the left chest and "Bayouboujee" on the right, dark canvas tool apron. Calm, watchful presence — the host of this meal, not just another diner at it.

**Rampart** — Black, late 30s to 40s, bald, heavyset and powerfully built through the shoulders (~260 lbs, "built like a shipping container" — the single most important trait to hold on-model; if he reads lean or average, regenerate). Dark skin with a faint sheen from kitchen heat. One scar along his cheek, no other scars or marks. Kitchen whites, sleeves rolled to the forearms. Controlled, settled expression here — off the clock for these twenty minutes.

**Slide** — Black, young man, kitchen whites, alert and quick energy even at rest — prep-cook build.

**Dex** — Black man, chef whites, focused features, line-cook bearing (sauté station is his usual post).

**Farrah** — White woman, blonde, chef coat. Note: she is a line cook, not an executive chef (Melpomene holds that title) — read her as carrying herself with quiet, exacting competence, not literal rank insignia.

**Ghost** — White, young man, light hair, plain shirt rather than kitchen whites (he doesn't fully belong to the line yet) — the outsider of the group, watchful, seated a little apart even here.

---

## Primary Prompt (Midjourney / DALL-E 3 / Ideogram — static image)

```
A cinematic, photorealistic restaurant scene, shot like a film still, warm
amber and candlelight tones with deep shadows, Victorian-noir gaslamp
aesthetic meets French Quarter kitchen grit — same visual world as the rest
of the Culinary Crescendo series.

SETTING: A kitchen prep table pulled into use as a dinner table, thirty
minutes before service. Exposed brick, stainless steel counters just out of
focus behind them, one warm overhead pendant light pooling on the table,
the rest of the kitchen dim and quiet — the calm before the rush. Six
mismatched bowls of red beans and rice sit on the table, steam rising, a
pot still on the stove behind them.

SUBJECTS (six people, seated and standing loosely around the table, caught
mid-meal, not posed for a photo — a real found moment):

1. BARON VIEUX — Black, lean, sharp-featured, square black-framed glasses,
   steel-gray chef's coat embroidered "Baron Vieux" and "Bayouboujee," dark
   canvas apron. Standing at the head of the table, one hand resting on the
   pot, having just served the last bowl. Calm, watching his crew eat before
   he sits.

2. RAMPART — Black, bald, heavyset, powerfully built through the shoulders,
   dark skin with a faint sheen, single scar along one cheek, kitchen whites
   with sleeves rolled. Seated, spoon in hand, posture relaxed for once —
   off duty for these twenty minutes.

3. SLIDE — Black, young man, kitchen whites, seated, mid-laugh, alert and
   quick energy.

4. DEX — Black man, chef whites, seated across from Rampart, focused
   expression easing into something lighter over the food.

5. FARRAH — White woman, blonde, chef coat, seated, quiet and composed,
   eating without fuss.

6. GHOST — White, young man, light hair, plain shirt (not kitchen whites),
   seated slightly apart from the others at the end of the table, watchful
   but present.

ACTION: A real preshift family meal — spoons in bowls, easy tired-crew body
language, no one performing for a camera. Warm, unguarded, communal.

CAMERA: Wide medium shot, whole table in frame, shallow depth of field with
the dim kitchen glowing softly behind them.

Color palette: scarlet red (#a6182c), gaslamp amber/gold (#c9973f), deep
charcoal black (#0d0b0a), parchment cream (#ede4d3).

Fully photorealistic, no cartoon or illustration style, shot like a film
still, 8k, dramatic warm lighting.

Aspect ratio: 3:2 or 16:9 (wide enough to hold six people around a table —
do not force the 9:16 portrait ratio used for the solo character sheets).
```

---

## Google Flow Version (continuous ~8 sec shot, no text overlay — see rationale in `references/rampart-portrait-prompt-googleflow.md`)

```
Wide shot in a professional restaurant kitchen at night, thirty minutes
before service. Exposed brick, stainless steel counters soft out of focus,
one warm pendant light over a prep table pulled into use for a meal. Six
people are gathered around it, bowls of red beans and rice in front of
them, steam still rising. A lean Black man with square black-framed
glasses, in a steel-gray chef's coat, stands at the head of the table, one
hand on the pot, watching his crew eat. A heavyset, bald Black man in
kitchen whites sits closest to him, relaxed, spoon in hand. Around the
table: a young Black man in kitchen whites mid-laugh, a focused Black man
in chef whites easing into a lighter mood, a blonde white woman in a chef
coat eating quietly and composed, and a young white man in a plain shirt
seated a little apart at the far end, watchful. Slow, subtle push-in
across the table. Shallow depth of field, photorealistic, cinematic, warm
amber and scarlet tones, ambient sound of quiet talk, spoons on bowls, a
pot still simmering behind them.
```

---

## Notes for whoever generates this

- **This is a test pass, not a commit-to-it final.** Six characters holding on-model in one generation is a real open question — go in expecting at least one regeneration round.
- **Priority QA checks, in order of how badly these have drifted before:**
  1. Rampart's build (broad/heavyset — the trait that's slipped to lean/average in past rounds) and his single cheek scar (previous rounds added unprompted forearm streaking — call it out explicitly if it recurs).
  2. Baron's glasses and coat embroidery — his one non-negotiable identifier.
  3. Farrah reading as a line cook's quiet competence, not literal executive-chef signaling (a continuity flag already raised in `references/supporting-cast-image-prompts-googleflow-v1.md`).
  4. Six consistent skin tones/races per the bible (Rampart/Slide/Dex Black, Farrah/Ghost white, Baron Black) — group generations are prone to homogenizing a mixed-race lineup.
- **Fallback if the single generation doesn't hold:** composite the six existing solo portraits (`docs/images/baron-vieux-portrait.jpg`, `references/rampart-portrait-v1.jpg`, `references/slide-portrait-v1.jpg`, `references/dex-portrait-v1.jpg`, `references/farrah-portrait-v1.jpg`, `references/ghost-portrait-v1.jpg`) into a single flat-lay or table-graphic composite instead — same fallback logic the carousel post already used, just assembled as one image instead of a swipe sequence.
- **Once art exists:** file it as `references/apothecary-family-meal-group-v1.jpg` (or similar), and it can become the lead/cover image for `outputs/apothecary-family-meal-individual-posts-v1.md` — either as a seventh "opening" post before the six solo ones, or swapped in as the single hero image the whole set links back to.
