# Google Drive Folder Reference — Base44 / Automation
### Created: 2026-07-19
### Corrected 2026-08-24: see note below — this is NOT how Solene actually sources content

Quick lookup for folder IDs used in the daily social automation check and Base44 handoff, so they don't need to be re-derived each session.

**Correction (2026-08-24):** with a live Base44 MCP connector now available, it turns out Solene (the Base44 app handling scheduled posts) does not read from this or any Drive folder. Its `ScheduledPost` entity has a `content_source` field that points directly at paths inside this git repo (e.g. `outputs/tiktok-book-launch-campaign-v1.md#Video3`), or occasionally a direct asset filename. The Base44 Drive folder below was a manual workaround from before this connector existed and isn't part of Solene's actual pipeline — keeping this section for history, but don't treat it as the live mechanism.

| Folder | ID | Purpose |
|---|---|---|
| Downloads | `1xkWk7B_zyoETWCAqbzUjqRTVuX4YHY70` | General uploads/downloads — where Flow-generated videos have landed historically |
| Publishing Team (root) | `1xOPiEKDYQn4NqPL7ZHjjaQ8UTmeDQHAb` | Main project folder tree |
| **Base44** | `1qdmfzO16MiwUQts0vDp2nKPlg5Ohu-rb` | **New (2026-07-19)** — created since there's no live Base44 MCP connector. Drop anything meant for Base44 to pick up and post here (quote cards, clips, scripts) instead of scattering them across Downloads. Subfolder of Publishing Team. |

## Why this folder exists
No Base44 connector is installed in this session, so files can't be pushed to Base44 directly — everything has to be a manual upload on Lejohn's end. This folder is the single designated drop point so it's obvious what's staged for Base44 versus general Drive clutter, and so future daily-automation-check runs know exactly where to look for new automation-bound assets.

## Note for future daily-automation-check runs
Include this folder's ID alongside the Downloads/Publishing Team checks when scanning for new entries.
