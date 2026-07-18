# Baron Vieux + Rampart — Test Video Prompt for Higgsfield
### Created: 2026-07-17

**Inventory photos to use:**
- Baron Vieux: `docs/images/baron-vieux-portrait.jpg` (glasses, gray chef coat embroidered "Baron Vieux" / "Bayouboujee," dark tool apron — the consistent reference used across every Origin video clip)
- Rampart: `references/rampart-portrait-v1.jpg` — the **calm** version, not the wall-up variant. It's the cleaner on-model image (no stray forearm marking) and matches his written description exactly.

## The problem this prompt works around
Neither photo shares a background, and the two Rampart images don't even share one *with each other* — his calm portrait is an open-hearth stone-tavern kitchen; his wall-up variant is a modern stainless kitchen; Baron's world is a candlelit brick kitchen/courtyard. Feeding both inventory photos into one generation as-is would look like two people spliced from different films. Rather than reuse either mismatched backdrop, this scene is built around a **new shared environment that's actually canon** — the Apothecary's back-of-house storage room, the one place in the books where these two characters actually have a scene together (Chapter 2, *The Scarlet Foundation*).

## Scene basis (adapted from the manuscript, not invented)
> "Rampart caught his arm just outside the storage room door. 'Vu.' His voice had dropped... 'You see what Dex said about the risotto? In front of Ghost?'"

This is the quiet, guarded beat right after the crew's post-shift ritual — good test content because it's a real two-character emotional exchange, not just two people standing near each other.

---

## Prompt (adapt camera-move terminology to whatever Higgsfield's UI actually offers — presets/names may not match exactly)

```
A cramped back-of-house restaurant storage room at night — bare concrete
floor, wire shelving stacked with dry goods, one bare bulb overhead
casting hard, low light, the hallway behind glowing faintly from the
kitchen beyond. Two men stand close, just outside the doorway.

MAN 1 (Baron): Black, lean, sharp-featured, square black-framed glasses,
steel-gray chef's coat embroidered "Baron Vieux" on the left chest and
"Bayouboujee" on the right, a dark canvas tool apron. Calm, still,
listening.

MAN 2 (Rampart): Black, bald, heavyset and powerfully built through the
shoulders, dark skin with a faint sheen, a single scar along one cheek,
kitchen whites with sleeves rolled. His hand grips Baron's forearm,
posture tense, guarded.

ACTION: Rampart holds Baron's arm, jaw tight, voice low and heavy — a
man deciding whether to let his guard down. Baron doesn't pull away; he
just watches, steady, waiting him out. A beat of stillness, then
Rampart's shoulders drop slightly — the wall coming down.

CAMERA: Slow push-in on the two of them, tight two-shot, shallow depth
of field, the wire shelving and hallway light soft in the background.

STYLE: Photorealistic, cinematic, moody low-key lighting, warm
practical bulb light against cool concrete, film grain, no dialogue
audio needed for this test pass — ambient room tone only (a faint
kitchen hum from beyond the door).
```

## Notes for the test
- **This is a likeness/consistency test, not a finished asset** — the goal is seeing whether Higgsfield holds both characters on-model (Baron's glasses + embroidery, Rampart's build + bald head + single scar) in one shared generated environment, before committing to a real scene.
- **Watch for the same failure modes we've hit before:** Rampart's build shrinking down to average/lean (regenerate if so — broad/heavyset is the one trait that's drifted before), embroidery text garbling if the coat is readable in frame, and any stray marks materializing on Rampart beyond the single cheek scar.
- If Higgsfield only supports single-image-to-video (one photo animates, no multi-character reference), this prompt won't work as one shot — it'd need to fall back to two separate single-character clips (Baron alone, Rampart alone) cut together, the same way the Origin video was built from separate Flow clips. Worth checking Higgsfield's actual multi-reference capability before running this.
- Send back whatever comes out and I'll check it against both characters' established briefs the same way I've been checking the Flow output.
