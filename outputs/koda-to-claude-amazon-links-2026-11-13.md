# Koda to Claude — Amazon Associates: tag confirmed, where the links are, exact edits

Nothing changed live. This is the review you asked for, corrected.

## TAG — Lejohn confirmed `bayoubeauxllc-20`

Lejohn replied in chat 2026-11-13 22:45 CT: **`bayoubeauxllc-20`** (letters "llc", not a zero).

That contradicts your doc and `references/amazon-associates.md`, which both say `bayoubeauxl0c-20` with a zero. Gmail shows why the confusion existed. There are TWO Associates welcome emails, both from associates@amazon.com, both SPF and DKIM pass, two hours apart:

| Sent (UTC) | StoreID in the body |
|---|---|
| 2026-11-14 02:20:35 | `bayoubeauxllc-20` (letter l) |
| 2026-11-14 04:13:12 | `bayoubeauxl0c-20` (zero) |

The zero version was created at 04:13, four minutes before your 04:17 commit recorded "Associates payment step done". If the payment and tax details went onto that second account, commissions from `bayoubeauxllc-20` links may land on an account that cannot pay out. **Worth one look in Associates Central before the tag ships:** confirm the payment/tax step is on the `bayoubeauxllc-20` account, and close the duplicate, since Amazon allows one account per person.

Every proposed edit below uses `bayoubeauxllc-20` as instructed.

## (1) Where Amazon links appear on bayoubeauxllc.com today

Only two files carry live Amazon links. Nothing is tagged and there is no disclosure anywhere.

| File | Line | What it is |
|---|---|---|
| `docs/js/store-config.js` | 25 | `amazonUrl` for A Symphony of Love in the Big Easy (B0H2WLJ8JF) |
| `docs/js/store-config.js` | 31 | `amazonUrl` for The Scarlet Foundation (B0H88D3H58) |
| `docs/formulary.html` | 869 | hardcoded "Get the eBook" href, B0H2WLJ8JF |
| `docs/formulary.html` | 884 | hardcoded "Get the eBook" href, B0H88D3H58 |

`store-config.js` feeds the "Buy on Amazon" buttons on `books.html` via `data-buy-amazon`, so the config edit covers books.html. The two formulary hrefs are hardcoded and are NOT driven by config. They need their own edit.

`grep -rn -i "associate\|affiliate" docs/*.html` returns nothing. No disclosure exists on the site.

## (2) Exact edits

**Edit 1 — `docs/js/store-config.js` line 25**
```diff
-    amazonUrl: "https://www.amazon.com/dp/B0H2WLJ8JF",
+    amazonUrl: "https://www.amazon.com/dp/B0H2WLJ8JF?tag=bayoubeauxllc-20",
```

**Edit 2 — `docs/js/store-config.js` line 31**
```diff
-    amazonUrl: "https://www.amazon.com/dp/B0H88D3H58",
+    amazonUrl: "https://www.amazon.com/dp/B0H88D3H58?tag=bayoubeauxllc-20",
```

**Edit 3 — `docs/formulary.html` line 869**
```diff
-<a class="btn btn-solid" href="https://www.amazon.com/dp/B0H2WLJ8JF" target="_blank" rel="noopener">Get the eBook</a>
+<a class="btn btn-solid" href="https://www.amazon.com/dp/B0H2WLJ8JF?tag=bayoubeauxllc-20" target="_blank" rel="noopener">Get the eBook</a>
```

**Edit 4 — `docs/formulary.html` line 884**
```diff
-<a class="btn btn-solid" href="https://www.amazon.com/dp/B0H88D3H58" target="_blank" rel="noopener">Get the eBook</a>
+<a class="btn btn-solid" href="https://www.amazon.com/dp/B0H88D3H58?tag=bayoubeauxllc-20" target="_blank" rel="noopener">Get the eBook</a>
```

**Edit 5 — `docs/formulary.html`, inside the `#the-books` section, just before the closing `</section>` on line 906**
```html
<p class="affiliate-note">As an Amazon Associate I earn from qualifying purchases.</p>
```

**Edit 6 — `docs/books.html`, directly under each Amazon button, after line 70 and after line 92**
```html
<span class="btn-note">As an Amazon Associate I earn from qualifying purchases.</span>
```

Reusing `btn-note` means no new CSS and it matches the "Secure checkout via Stripe" note already on the page. If you would rather have one line per page than one per button, say so and Edit 6 becomes a single note at the end of the books section.

**Edit 7, only if we keep a distinct class — `docs/css/style.css`**
```css
.affiliate-note{font-size:.78rem;opacity:.65;margin-top:1.25rem;line-height:1.5}
```

## Scope notes

- Both books are also sold direct through Stripe. Those buttons are untouched. The disclosure covers the Amazon route, and the placement keeps it adjacent to the Amazon control.
- `outputs/scarlet-foundation-teaser-shotlist-v1.md` mentions amazon.com, but it is a shot list, not a live page. No change there.
- `references/amazon-associates.md` is not in HEAD. It exists in commit `aa4cabc` and was last modified in `5e36aee` ("tag cleared"). I can restore it with the corrected tag if you want the reference living in the repo again.

## Waiting on

Your review, per your instruction. Nothing is live. The moment you approve, Edits 1-7 go in as one commit, and I will re-grep the live pages to confirm every Amazon URL carries `?tag=bayoubeauxllc-20` and that each page renders the disclosure.
