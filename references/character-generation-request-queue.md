# Character Generation Request Queue
### Created: 2026-09-03

Living document. This is where Claude assigns what character art actually needs to get made next, so Meta AI generation isn't just "whatever comes back from Drive" — Lejohn (or whoever is driving the Meta AI prompt; no direct API access from this session) pulls the next open item below, generates it, and drops the result into Drive for the next automation check to review and file. See the "Claude is the approval hub" standing rule in `references/drive-folder-reference.md` for how this fits together with Base44/Solene.

## How to use this file
- **Open request** = no reference art exists yet, or the existing art is flagged for replacement. Includes the locked details to carry into the Meta AI prompt so it comes back on-model the first time.
- When Claude files new art from a request, move it to **Filled** with the reference filename, and update `series-bible.md`'s appearance note for that character if needed.
- Add new requests here as soon as a gap is spotted — don't rely on remembering it for the next check-in.

## Open requests

1. **Theron** — no reference art exists. Bible gives no physical description yet, only role: crew member who, with Jamara, saves Bayouboujee during Book 1's crisis and keeps it running during Baron and Olivia's recovery (`series-bible.md` lines ~206-212, ~284). Needs a physical description decided (race, age, build, kitchen role) before generating — flag this back to Lejohn rather than inventing one.
2. **Jamara** — same situation as Theron: no art, no physical description yet, same "saves the restaurant" role. Needs the same decision first.
3. **Terpsichore "Teri"** — no reference art. Bible: chaotic, visionary pop-up chef who keeps trying to lure Baron away from Bayouboujee (line ~164). Needs a physical description decided first.
4. **Esperanza** — no reference art. Bible: Puerto Rican, Tulane music student, met Baron at Kaldi's, planted the seed of his culinary philosophy on a San Juan trip (line ~188-191). Needs a physical description decided first.
5. **Chef Conti Jasper** — no reference art. Bible: White, Executive Chef at ACE Hotel New Orleans, early thirties when Baron worked for him (line ~172-179).

## Filled (for reference — don't regenerate without a reason)

- Baron Vieux — `baron-vieux-noir-portrait-v1.jpg`, `baron-portrait-apron-kitchen-v1.jpeg`, `baron-vieux-storage-room-portrait-v1.jpg` (2026-09-03), `bayouboujee-cast-poster-v1.webp` (ensemble)
- Olivia Marigny — `olivia-marigny-portrait-v1.png`, `olivia-marigny-headshot-v1.jpg`, `olivia-portrait-v1.jpg`
- Calliope — `calliope-bartender-portrait-v2.jpg` + `-bun.jpg` (2026-09-03, current canon — see supersession note in `calliope-portrait-prompt-googleflow-v1.md`)
- Rampart — `rampart-portrait-v1.jpg` + titlecard variants
- Tchoup — `tchoup-portrait-v1.jpg`, `tchoup-waterfront-poster-v1.webp`
- Dex — `dex-portrait-v1.jpg`
- Farrah — `farrah-portrait-v1.jpg`
- Ghost — `ghost-portrait-v1.jpg`
- Slide — `slide-portrait-v1.jpg`
- Elysian, Carondelet, Prytania, Desire — `elysian-concept-v1.webp`, `carondelet-finance-concept-v1.webp`, `prytania-boutique-owner-concept-v1.webp`, `desire-street-concept-v1.webp`
- Chef Menture, Constance, Connie — `chef-menture-portrait-v1.webp`/`-poster-v1.webp`, `constance-menture-portrait-v1.webp`, `connie-menture-portrait-v1.webp`

## Note on the file marked "olivia" as next in the old manifest

An earlier bulk-regeneration pass (Drive: `CLAUDE-IMAGE-MANIFEST.json`, 2026-09-02/03) listed Olivia as its next target. Olivia already has three locked references above from before that pass — if a new Meta AI take on Olivia shows up in a future check, treat it exactly like the Calliope case: compare against the current locked look, and if it's a deliberate update rather than drift, flag it for Lejohn's call instead of filing or rejecting automatically.
