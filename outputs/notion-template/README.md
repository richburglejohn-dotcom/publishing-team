# FuturIQ Co-Pilot Client OS — Notion Template

No Notion connector is available in this session, so this couldn't be built
directly inside Notion. Everything below is ready to import/paste in about
10 minutes by hand.

## How to import the four databases

1. In Notion, create a new page called **FuturIQ Co-Pilot Client OS**.
2. Inside it, for each CSV in this folder: `... > Import > CSV`, or drag the
   file onto the page.
3. Notion creates every column as a **Text** property by default. Change these
   to get the field types the spec calls for:
   - `positioning-sheet.csv` → fine as-is (all text/long-text).
   - `research-items.csv` → set **Status** to a *Select* property with
     options `To check` / `Verified`.
   - `chapters.csv` → set **Status** to *Select* with options
     `Not started` / `AI Draft` / `Human Edit` / `Client Review` / `Final`;
     set **Word Count** to *Number*; set **Due Date** to *Date*. Add
     **Kanban** (group by Status) and **Calendar** (by Due Date) views.
   - `weekly-calls.csv` → set **Date** to *Date*.
4. Rename each imported table to match the page names below and drag them
   under the matching page.

The example rows in `positioning-sheet.csv`, `research-items.csv`, and
`chapters.csv` are real Culinary Crescendo material pulled from
`references/series-bible.md`, `references/continuity-report.md`, and
`references/brand-voice.md` — not invented placeholder text — so a new
client can see what a filled-in row actually looks like. Three fields are
intentionally left as `(add ...)` because only the client/author can supply
them (comparable titles, cover mood references, etc.).

## Full page structure

**Page 1 — Welcome Dashboard**
Content: "Welcome [Client Name], your 6-week path to published." Progress
tracker 0–100%, Next Call date, quick links to Research Pack, Drafts,
Design, Launch.
Properties on the page: Client Name, Book Title, Start Date, Target Publish
Date.

**Page 2 — Positioning Lock**
Database: `positioning-sheet.csv` (imported above).
Deliverable checklist: ☐ Positioning approved.

**Page 3 — Research Pack**
Database: `research-items.csv` (imported above).
Add a file area (Notion file property or a simple upload block) for
interviews, notes, and existing content the client provides.

**Page 4 — Drafting Sprints**
Database: `chapters.csv` (imported above), with Kanban (by Status) and
Calendar (by Due Date) views.
Per-chapter sub-template to duplicate: Prompt used / AI draft link / human
refined version.

**Page 5 — Human Refinement HQ**
Checklist:
- ☐ Voice check — does this sound like the client?
- ☐ Accuracy check — facts/claims (recipes, for culinary clients) verified?
- ☐ Originality check — stories and insights added?
- ☐ AI tone scrubbed?
- ☐ Legal check — no trademarked material copied without right?
Status field: Approved for production (yes/no).

**Page 6 — Production**
Three subpages:
- *Cover Brief* — Title, Subtitle, Mood, Comparable covers (upload), Must
  include text, Avoid.
- *Interior Style Guide* — Font choices, Chapter opener style, Recipe
  layout (if culinary), Trim size (6x9, 7x10).
- *Image Specs.*
File areas: Cover drafts v1/v2/v3, Interior PDF proofs.

**Page 7 — Distribution**
Checklist: ☐ KDP account setup · ☐ Author bio · ☐ Book description (with
keywords) · ☐ 7 Kindle keywords · ☐ 2 categories · ☐ Paperback vs.
hardcover specs · ☐ Pricing · ☐ Look Inside file check.
Launch Assets section: Amazon A+ Content, author photo, launch email copy,
social posts.

**Page 8 — Weekly Calls**
Database: `weekly-calls.csv` (imported above), pre-filled with the standard
6-week agenda (Week 1 Positioning → Week 6 KDP setup and launch kit).

## Automations (need Notion Automations or a Zapier/Make bridge — set up
inside Notion once the workspace exists; can't be pre-built outside it)

- When a Chapters row's Status changes to **Client Review** → notify the
  client by email.
- When Page 2's **Positioning approved** checkbox is checked → unlock/reveal
  the Research Pack page.
- Progress bar on the Welcome Dashboard = count of Chapters rows with
  Status **Final** ÷ total Chapters rows.

## Permissions

- Duplicate this page into the client's own Notion workspace (or share with
  **Can comment** access) — client can comment, not delete structure.
- Keep your working copy on **Full access**.

## Loom placeholders

Add an embed block at the top of Pages 2–7 with placeholder text
`[Loom walkthrough for this phase — record once, reuse per client]` so every
future Co-Pilot client gets the same walkthrough without re-recording.
