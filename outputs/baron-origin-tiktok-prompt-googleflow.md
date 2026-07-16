# "Origin" (Quick Shoot) — Google Flow Version
## TikTok talking-head, 15–20 sec
**Original script:** provided direct, written as a timecoded shot list with a
generated text card
**Fills the gap in `scheduled-posting-lookup.csv`:** Facebook/Instagram/X all
have an "Origin" post on 2026-07-16 — this gives TikTok the matching piece.

## Why the original needs adapting for Flow
Same two issues as the earlier Elixir prompt: (1) Flow generates one
continuous shot per clip, roughly 8 seconds — a single 17-second timecoded
script won't run in one pass, and (2) Flow doesn't reliably render generated
on-screen text, so the "Baron Vieux — The Origin" title card needs to be a
post-production overlay, not part of the prompt.

The fix: the script already breaks cleanly into three beats. Generate each
as its own ~5–7 second continuous take in the **same locked framing** (so
the cuts read as one continuous sit-down, not three different scenes), then
stitch and add the title card in post — same pipeline used for the Scarlet
Elixir video (ffmpeg concat + PNG title overlay).

**Aspect ratio: set to 9:16 in Flow** — this is native TikTok vertical, no
reformatting needed afterward (unlike the Elixir video, which was built
horizontal for the website first).

## Location and likeness reference
Using the two images provided:
- **Baron's likeness/wardrobe:** the kitchen portrait — square black-framed
  glasses, warm smile, steel-gray chef coat embroidered "Baron Vieux" /
  "Bayouboujee," dark canvas apron loaded with tools (phone, notebook,
  tweezers, thermometer). This is on-canon with every other Baron asset in
  the repo and should carry across all three clips.
- **Setting:** the courtyard photo — brick walls, a red-painted building
  facade, wrought iron café furniture, a hanging wall lantern. The script
  calls for "low light, one warm light source," so this reimagines the same
  courtyard at dusk rather than the bright daylight in the reference photo,
  with the wall lantern serving as that single warm source.

---

## Clip 1 — "It wasn't a business plan" (0:00–0:05, ~5 sec)
```
A close talking-head shot, shoulders up, of a Black man in his 40s with
square black-framed glasses, warm and composed, sitting in a dim New
Orleans courtyard at dusk — brick walls, a wrought iron table just out of
focus, a single wall lantern glowing warm behind him as the only real light
source. He wears a steel-gray chef's coat. He speaks directly to camera,
calm and unhurried: "People ask where Baron Vieux started. It wasn't a
business plan. It wasn't a brand deck." Static camera, shallow depth of
field, warm amber tones against the dark courtyard, photorealistic,
cinematic, quiet ambient night sound — distant French Quarter murmur, no
music.
```

## Clip 2 — "Someone cooking slow" (0:05–0:10, ~5 sec)
```
Same close talking-head framing, same man, same dusk courtyard with the
warm wall lantern behind him, same steel-gray chef's coat. He leans
slightly forward toward camera as he speaks, voice steady: "It was a
kitchen in New Orleans. Someone cooking slow, telling a story, and
everyone in the room going quiet to listen." Static camera, shallow depth
of field, warm amber tones, photorealistic, cinematic, quiet ambient night
sound, no music.
```

## Clip 3 — "That's the whole thing" (0:10–0:15, ~5–7 sec)
```
Same close talking-head framing, same man, same dusk courtyard and lantern
light. A small, warm smile settles in as he delivers the last line, holding
eye contact with the camera: "That's the whole thing. That's the origin.
Everything after that is just... details." He holds the look and the smile
for a beat after finishing. Static camera, shallow depth of field, warm
amber tones, photorealistic, cinematic, quiet ambient night sound, no
music.
```

---

## Assembly (post-production, not in Flow)
1. Generate all three clips at 9:16, same framing/lighting settings if Flow
   lets you lock them, so lighting doesn't visibly jump between cuts.
2. Stitch in order: Clip 1 → Clip 2 → Clip 3.
3. Add the title card in the last 2 seconds: **"Baron Vieux — The Origin"**
   in gold italic Playfair Display, same treatment as the Scarlet Elixir
   video's title card, fading in over the hold-and-smile moment at the end.
4. Burned-in captions — per the standing rule in
   `outputs/scarlet-foundation-teaser-shotlist-v1.md`, most viewers watch
   muted.

## Posting
Slot this alongside the existing 2026-07-16 Origin posts on Facebook,
Instagram, and X in `outputs/scheduled-posting-lookup.csv` — same theme,
same day, TikTok completes the set. Send me the three clips once generated
and I'll stitch and burn in the title card, same as the Elixir video.
