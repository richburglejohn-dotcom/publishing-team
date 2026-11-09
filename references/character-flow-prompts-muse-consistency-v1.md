# Google Flow Prompt Master — Character Consistency Reference for Muse
### Created: 2026-11-08
### Why this exists

Muse now has her own Google Flow connector and can generate video directly, without Claude in the loop until review time. That's exactly the gap that produced the Rampart Flow Clip 2 problem (logged `references/turn-folder-briefing-log.md`, 2026-11-08 05:08 UTC): the clip used the wrong Baron Vieux costume — a black canvas tool apron instead of the dark brown leather YELEGAI apron, no embroidery, two phones instead of one. Not a quality/drift issue — a **wrong-reference-image** issue. Muse's own frame check (06:46 UTC the same day) independently confirmed the exact same details without realizing it was corroborating the finding, which is what settled it: the clip really is off-model, not a disagreement about what "off-model" means.

This file is the fix: one place with every named character's **locked reference image**, which one to attach for which kind of scene, and copy-paste Flow prompt formulas that have already proven to hold the likeness (same structure used for the Dark Roux Episode 1 pilot and the Roe Velvet video, both of which passed). Use this before generating, not just for checking after.

**This does not replace Claude's review.** Per the standing rule in `references/drive-folder-reference.md` ("Claude is the approval hub for Base44 + Meta AI"), nothing generated — including through Muse's Flow connector — is canon or gets published until Claude checks it against these same references. What this file buys is fewer clips failing that check in the first place.

---

## Rule 0 — Never generate a named character from text description alone

Every prompt below is built to be used **with an attached reference image**, not as a standalone text description. Flow (and every other tool tested in this pipeline) drifts when it has to invent a face/build/wardrobe from words. Attach the image fresh for every single scene/clip — don't rely on it carrying over from a previous generation in the same session.

## Rule 1 — Baron Vieux has TWO locked looks. Do not mix them.

This is the exact mistake that produced the Rampart Clip 2 failure, so it gets its own rule, not just a table row.

| | Look A — Narrative / Scarlet Foundation | Look B — Cooking Series |
|---|---|---|
| **Reference image** | `references/baron-vieux-storage-room-portrait-v1.jpg` | `references/baron-portrait-apron-kitchen-v1.jpeg` |
| **Apron** | Dark brown **leather** apron, embossed "YELEGAI" | **Black canvas** tool apron (phone pocket, wooden spatula/spoon, leather straps) |
| **Coat** | Gray chef's coat, embroidered "Baron Vieux" (left chest) / "Bayouboujee" (right chest) | Gray chef's coat, no embroidery called out |
| **Glasses / hair** | Square black-framed glasses, short dark hair — same in both | Same |
| **Use for** | Any Scarlet Foundation / book-manuscript scene. Any scene with another named character (Rampart, Calliope, Maya, Dex, Ghost, etc.). The Apothecary, the storage room, the back hallway. | **Only** the standalone instructional Baron Vieux Cooking Series episodes (Dark Roux, Redfish, Gumbo, Étouffée) — Baron alone, demonstrating a technique, no other characters in frame. |
| **Embroidery detail reference (if text needs to render)** | `references/baron-mentoring-kitchen-v1.webp` | — |

**Before generating any Baron scene, decide which bucket it's in and attach that look's reference image — not the other one.** A scene with Rampart, Maya, Calliope, or anyone else from the books is automatically Look A. A solo cooking-demo clip is Look B. If a request doesn't clearly say which, ask rather than guess — this is exactly where Clip 2 went wrong.

**Known exception (2026-11-09, Lejohn's explicit call):** Google Flow's "prominent people" policy refuses to generate the Look A storage-room reference at all — confirmed across seven attempts (raw image, saved Character, solo, combined with Rampart, even text-only with no image) on the Rampart storage-room/Maya scene specifically. Until a working Look A reference exists, Lejohn has approved using **Look B** for narrative scenes that would normally call for Look A, as a deliberate, flagged continuity trade-off — not a silent substitution. If you hit this same block on a different narrative scene, this is the fallback, but confirm with Lejohn/Claude before assuming it applies broadly rather than scene-by-scene.

---

## Per-character reference table

| Character | Locked reference image(s) | Key on-model traits to hold | Known failure modes (regenerate, don't accept) |
|---|---|---|---|
| **Baron Vieux — Look A** | `baron-vieux-storage-room-portrait-v1.jpg` | Black, lean, sharp-featured; square black glasses; gray coat embroidered "Baron Vieux"/"Bayouboujee"; dark brown leather YELEGAI apron; one phone in apron pocket | Missing/garbled embroidery; canvas apron substituted for leather; extra phone; glasses dropped |
| **Baron Vieux — Look B** | `baron-portrait-apron-kitchen-v1.jpeg` (+ `baron-mentoring-kitchen-v1.webp` for embroidery legibility) | Same face/glasses; black tool apron with phone pocket, wooden spatula/spoon, leather strap details; same stainless-steel kitchen (exposed hood, combi oven) every scene | Kitchen changes between scenes/clips in the same episode; apron style drifts toward Look A's leather |
| **Rampart** | `rampart-portrait-v1.jpg` (calm — default) | Black, bald, husky/broad-shouldered, dark skin with faint sheen, single scar along one cheek only | Build shrinking to lean/average (regenerate — broad/heavyset is the one trait that's drifted before); stray forearm marks beyond the one cheek scar; losing the bald head |
| **Calliope** | `calliope-bartender-portrait-v2.jpg` (or `-bun.jpg`) | Black woman, late 30s/40s, curly dark hair in a loose bun with tendrils, botanical/floral tattoo sleeves on both forearms with a small skull motif, steady/watchful expression | Reverting to the old `calliope-portrait-v1.jpg` look (short hair, no tattoos) — that version is superseded, not an alternate |
| **Kay Dorgenois, RN** | `kay-dorgenois-reference-v1.png` (low-res — upscale before using in video) | Black woman, warm brown skin, dark hair pulled back sleek, navy scrubs, stethoscope, ID badge reading "Kay Dorgenois, RN" | Low source resolution — don't let Flow "fix" facial detail by inventing it; regenerate a higher-res take from this exact reference first |
| **Olivia Marigny** | `olivia-marigny-portrait-v1.png`, `olivia-marigny-headshot-v1.jpg`, or `olivia-victorian-tarot-scene-v1.jpg`/`olivia-marigny-tarot-scene-v1.png` for the noir poster look specifically | Black, Virgin Islands heritage; blues/jazz singer, tarot reader | Don't mix the noir-illustration poster look with a photoreal scene look — pick the reference that matches the register of the scene being built |
| **Dex** | `dex-portrait-v1.jpg` | Black, line cook, chef whites, serious/focused | — |
| **Farrah** | `farrah-portrait-v1.jpg` | White, line cook (not Executive Chef — that's Melpomene), chef coat | Don't imply executive-chef rank |
| **Ghost** | `ghost-portrait-v1.jpg` | White, dishwasher, light hair, plain shirt (not kitchen whites) | — |
| **Slide** | `slide-portrait-v1.jpg` | Black, prep cook, kitchen whites, alert/quick energy | — |
| **Tchoup** | `tchoup-portrait-v1.jpg` / `tchoup-waterfront-poster-v1.webp` | Older man, gray beard, weathered, flannel + waterman's vest | — |
| **Young Baron (Kaldi's era)** | `young-baron-kaldis-portrait-v1.jpg` | Teenage/early-20s Baron, pre-glasses-as-signature-feature era look per that reference | Don't use present-day Baron's apron/coat in flashback scenes |

Characters with **no locked reference art yet** (Theron, Jamara, Terpsichore "Teri", Esperanza, Chef Conti Jasper) — see `references/character-generation-request-queue.md`. Do not generate video of these characters yet; a physical description needs to be decided with Lejohn first, same rule that's applied throughout this project.

---

## Copy-paste Flow prompt formula

This is the structure that passed on Dark Roux Episode 1 and Roe Velvet — reuse it, don't freelance a new structure per character.

```
[ATTACH the locked reference image fresh for this scene]

[Character name], same [face/build/wardrobe summary] as the attached reference image — [restate the 3-4 locked traits from the table above, e.g. "same face, glasses, gray coat, black tool apron, same stainless-steel kitchen with exposed hood and combi oven visible in the background"].

[Scene action — what happens in this ~8-second shot, present tense, cinematic].

[If other characters are in frame, give each one the same "same X as Y" treatment — pull their row from the table above. If this is a solo shot, explicitly state "No other people in frame."]

Dialogue ([Character]): "[line, verbatim from the script where one exists — don't paraphrase]"

Audio: [ambient sound description].

[Any character-specific failure-mode guard from the table above, phrased as a positive instruction — e.g. "No scars or marks beyond a single scar along one cheek" for Rampart, or "If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive" for Baron Look A.]
```

### Worked example — Baron (Look A) + Rampart, two-shot

```
[ATTACH: baron-vieux-storage-room-portrait-v1.jpg]
[ATTACH: rampart-portrait-v1.jpg]

Baron Vieux, same chef as the attached reference image — Black, lean, sharp-featured, square black-framed glasses, gray chef's coat embroidered "Baron Vieux" on the left chest and "Bayouboujee" on the right, dark brown leather apron embossed "YELEGAI," one phone in the apron pocket.

Rampart, same cook as the attached reference image — Black, bald, husky and broad-shouldered, dark skin with a faint sheen from kitchen heat, a single scar along one cheek, kitchen whites with sleeves rolled.

[scene action]

Dialogue ([speaker]): "[line]"

Audio: [ambient].

If any embroidered text on Baron's coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive. No scars or marks on Rampart beyond the single cheek scar. No additional phones or props beyond what's stated above.
```

---

## Pre-send checklist (run this before sending a clip to Claude for upload)

1. Which Baron look does this scene call for — A or B? Does the clip actually show that look's apron/coat, not the other one?
2. Does every named character in frame match their locked reference image's build, not just their face?
3. Any embroidered/printed text in frame — is it legible, correct wording, non-cursive?
4. Any prop count called out in the table (e.g., Baron's single phone) — does the clip show the right count?
5. If this is a multi-clip sequence, does the environment hold steady across every clip (same kitchen, same room) rather than reinventing it per clip?
6. Pull frames at a few timestamps and eyeball them against the reference image side-by-side before sending — don't rely on the generation "looking right" at a glance.

If any of these fail, regenerate against the correct reference rather than sending it for Claude to catch — that's the whole point of this file.

---

## Open item

Two uploads are still held pending Lejohn's call for reasons unrelated to what this file fixes (Rampart Clip 2 — the actual off-model clip this file is responding to; Ep 2 Redfish — unverifiable due to download size, not a model/costume issue). This file is about preventing the *next* one, not a ruling on those two.
