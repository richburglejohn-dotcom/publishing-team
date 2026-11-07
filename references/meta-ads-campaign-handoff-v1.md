# Culinary Crescendo Meta Ads Campaign — Handoff / In-Progress State
### Created: 2026-10-24

Status: **blocked on Page access**, waiting on Lejohn. Read this at the start of any new session picking up the ad campaign work so nothing gets rebuilt or re-litigated.

---

## The plan (agreed with Lejohn)

Single campaign, not the 3-campaign "Muse" plan that dropped in the Turn folder on 2026-10-24 (see `ad-campaign-setup-guide.md` there — not used, kept only as a reference for its copy/creative ideas).

- **Objective:** Traffic → bayoubeauxllc.com/books
- **Budget:** $25/day (midpoint of Lejohn's "$20-30/day" range — never got an exact number, this is the working default)
- **Creative:** a locked/canon Baron Vieux portrait (NOT the new AI-generated "ad-2-baron-vieux-portrait.jpg" from the Muse drop — that one is off-model, see below) + copy pointing to the books page. Creative itself not yet built — blocked on Page access (see below).
- **Audience:** broad — US, ages 25–65, Advantage+ Audience on, no invented interest IDs
- **Page:** **Bayoubeaux1070** (NOT "Bayou Boujee Seafood" — see the saga below)

## Already built (staged as DRAFT in Meta Ads Manager — safe, not live, not spending)

- **Ad account:** `142417789`
- **Campaign:** `52603541694344` — "Culinary Crescendo — Book Traffic", OUTCOME_TRAFFIC, $25/day (CBO)
- **Ad set:** `52603541700744` — "US — Traffic to Books Page", LINK_CLICKS, US/25-65/Advantage+
- Neither has a creative or an ad yet — that's the blocked step.

## The Page-access saga (read this before re-deriving it)

1. Ad account `142417789` has **no payment method** and (at the account-scoped level) showed **no linked Pages at all**.
2. Broader search (`ads_get_user_pages`) found 3 Pages this Meta Ads connection *can* see: **Bayou Boujee Seafood** (`103754115536767`), Waterways Boutique, Mr. Everything Cafe NOLA. Lejohn initially confirmed "Bayou Boujee Seafood" as correct — **this was wrong**, he corrected it in the next message.
3. The real brand Page is **Bayoubeaux1070** (confirmed via Lejohn's own screenshot — profile photo is the same locked Baron Vieux portrait used everywhere else in this project). It is **not visible to this Meta Ads connection at all** — not in `ads_get_user_pages`, no Business Manager matching "Baron" or "Bayoubeaux" in `ads_catalog_get_businesses`.
4. Lejohn screenshotted Bayoubeaux1070's Page Access settings: 3 people assigned — **Lejohn Richburg** (Full access, this is him) and two **"UnclaimedBusinessUserFromPool"** placeholder slots (not yet investigated — could be where this integration's access belongs, unconfirmed).
5. **No tool in this Meta Ads MCP connector reveals which Facebook identity it's authenticated as** (no whoami/me endpoint). Checked `ads_catalog_get_businesses` (only sees "bayouboujee,llc" business, which owns only Bayou Boujee Seafood — the wrong page — and "Mr. Everything Cafe"), `ads_get_pages_for_business`, `ads_get_ad_account_pages` — exhausted the discovery surface.
6. Lejohn was pointed to `claude.ai/customize/connectors` → click into the Meta Ads card → look for "Connected as [identity]" to find out which account needs Page access granted. He pasted `https://mcp.facebook.com/ads` which is just the MCP server endpoint (same for everyone), not account-specific — so this is still unresolved as of this writing.
7. Re-checked `ads_get_user_pages` / `ads_catalog_get_businesses` twice after Lejohn said "try to connect" / "check again" — **no change both times**. Bayoubeaux1070 still not visible.

## What's needed to unblock

1. Lejohn identifies which Facebook account this Meta Ads connector authenticates as (via the connectors page, or by process of elimination/checking the two "UnclaimedBusinessUserFromPool" slots on Bayoubeaux1070's access list).
2. That account gets added to Bayoubeaux1070's Page Access list (Advertiser role is enough).
3. **A session restart is likely required** — connector permissions are read fresh at session start, not live mid-session, so even a correctly-granted access change may not show up without starting a new session.
4. Once Bayoubeaux1070 shows up in `ads_get_user_pages`, build the creative (locked Baron portrait — candidates: `references/baron-vieux-storage-room-portrait-v1.jpg` or `references/baron-vieux-noir-portrait-v1.jpg`, Lejohn hasn't picked between the two yet) + ad under the existing draft campaign/ad set above, using `ads_create_creative` then `ads_create_ad`.
5. Still also need: **payment method added to ad account `142417789`** (separate blocker, unconfirmed whether resolved).

## Also flagged during this work, not yet resolved

- `ad-2-baron-vieux-portrait.jpg` (from the "Muse" Drive drop, 2026-10-24) is **off-model** vs. locked reference art — wrong face/skin tone/expression, missing the embroidered "Baron Vieux"/"Bayouboujee" coat and YELEGAI leather apron that are definitional in every locked reference. Held, not filed, not used.
- `ad-1-book1-cover.jpg` and `ad-1-prequel-cover.jpg` from that same drop ARE fine — confirmed pixel-identical to the real published covers already in `outputs/` (`Book1_Cover_Stripe.jpg`, `PrequelFrontCover.jpg`).
