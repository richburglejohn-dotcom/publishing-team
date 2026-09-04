# Publishing Team — Start Here

This repo runs the Culinary Crescendo book series and FuturIQ publishing business (Baron Vieux/Bayouboujee brand). Before doing anything with character art, social content, scheduling, or the Base44/Meta AI/Buffer pipeline, read these first:

1. **`references/drive-folder-reference.md`** — the standing rule that Claude is the review/approval hub for Base44 (Koda) and Meta AI content. Nothing new is canon until it's reviewed against the series bible and locked reference art and committed here. Also has the Drive folder IDs the daily automation check uses.
2. **`references/pipeline-tool-capabilities.md`** — which connected tool (Buffer, Meta Ads, Base44) actually handles which kind of task, so work gets routed directly instead of defaulting to a copy-paste script for Lejohn.
3. **`references/series-bible.md`** — character canon (appearance, relationships, timeline). Check this and the locked reference art in `references/` before filing anything with a named character in it.
4. **`references/character-generation-request-queue.md`** — what character art is still needed, and what's already locked. Update this when new art gets filed or a gap gets found.
5. **`automation/COORDINATION.md`** — append-only Claude ⇄ Koda handoff log for the FuturIQ Kit automation (`automation/kitApi.ts`, `updateFoundingSpots.ts`). Check here before touching code either side owns.

**The core rule, regardless of which session you are:** flag and hold rather than silently file anything that looks off-model or contradicts the manuscripts (`outputs/Scarlet_Foundation_FULL_DRAFT_v1.md`, `outputs/Symphony_of_Love_Book1_FULL.docx`) or `series-bible.md`. Never silently "fix" a continuity error without flagging it first. This applies whether you're running the daily automation check, reviewing new Drive drops, or doing anything else in this repo.

**Established git pattern:** commit to `claude/book-amazon-upload-s9hppz`, merge to `main` via PR. Lejohn has standing approval for this for routine, reviewed content.
