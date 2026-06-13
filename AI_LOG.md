# CarTech Automotive — AI Work Log

A shared log for AI tools working in this repo (Claude, Gemini, etc.).
Update this file at the end of each session so the next tool knows what happened and why.

---

## 2026-06-12 — Claude (claude-sonnet-4-6)

**What was done:**
- Noticed `.gemini/` folder in project root (untracked, not in git) — contains `add_breadcrumbs.py` and `verify_breadcrumbs.py`, appears to be leftover from a prior Gemini CLI session
- Confirmed local `main` branch is fully in sync with `origin/main` — no drift
- Created this `AI_LOG.md` file to establish shared context between AI tools

**State of the project:**
- Site is live at https://cartechsmyrna.com via GitHub Pages (branch: main)
- 25 pages total — all have GA4, JSON-LD, canonical tags, Open Graph, BreadcrumbList schema
- Formspree contact forms active on contact.html and se-habla-espanol.html
- ShopGenie removed from all website CTAs as of 2026-06-01 — all buttons go to contact.html
- Language toggle (EN/ES) works in-place on all pages via lang.js / mk-lang.js
- sitemap.xml submitted to Google Search Console and confirmed

**No open issues or broken things known.**

---

## 2026-06-10 — Claude (claude-sonnet-4-6)

**Commits:** `d1d263f`, `3ca649f`

**What was done:**
- Added BreadcrumbList JSON-LD schema to all 24 interior and make-specific landing pages (homepage excluded — it is the root)
- Updated SEO report in CLAUDE.md: marked completed items, added next-level strategies, added Google Business Profile checklists

**Decisions made:**
- BreadcrumbList was added as a second JSON-LD block alongside the existing AutoRepair schema on each page — not merged into one block, to keep them easy to read and update independently

---

## 2026-06-08 — Claude (claude-sonnet-4-6)

**Commits:** `f176f43`

**What was done:**
- Fixed duplicate H1 tags across multiple pages (only one H1 per page now)
- Trimmed over-long meta descriptions to stay under 160 characters
- Excluded career page from sitemap (page was removed, sitemap still referenced it)

---

## 2026-06-01 — Claude (claude-sonnet-4-6)

**Commits:** `1b532e6`, `45af7d7`, `37e6fa8`, `840ff9b`

**What was done:**
- Added preferred day (Mon–Fri) and preferred time (Morning/Afternoon/Late) dropdowns to Formspree contact forms on contact.html and se-habla-espanol.html
- Removed ShopGenie booking widget from all website pages — was English-only with a login wall, bad UX for Spanish-speaking customers
- All "Schedule Appointment" / "Programar Cita" buttons now go to contact.html (or scroll to #cita anchor on Spanish page)
- ShopGenie link intentionally kept on Google Business Profile only
- Updated CLAUDE.md to reflect these changes

**Why ShopGenie was removed:**
- English-only interface excluded Spanish-speaking customers
- Required account login before booking — too much friction
- Contact form is simpler and works for everyone

---

## Prior sessions — Claude (claude-sonnet-4-6)

Major work completed before structured logging began (reconstructed from git history):

**Spanish SEO (se-habla-espanol.html):**
- Full standalone Spanish page — content baked into HTML (not JS-swapped) so Google indexes it
- Targets: "taller mecánico Smyrna TN", "reparación de autos Smyrna", "mecánico hablamos español"
- 5 hardcoded Spanish Google reviews with real profile photos
- taller-mecanico-smyrna-tn.html redirects here via meta-refresh
- hreflang tags connect English (index.html) ↔ Spanish (se-habla-espanol.html)

**Make-specific landing pages (12 pages):**
- nissan, toyota, ford-lincoln, chevrolet-gmc, honda-acura, subaru, jeep-dodge-ram, hyundai-kia, bmw-mercedes, volkswagen-audi, mitsubishi, mazda
- All bilingual via mk-lang.js, all have JSON-LD + canonical + GA4

**Service sub-pages (6 pages):**
- paint-body-work, repair-services, maintenance, engine-repair, transmission-service, noise-drivability
- All bilingual via data-es attributes + lang.js

**Language toggle system:**
- lang.js: core pages and service sub-pages (stores original EN in data-orig, restores on toggle back)
- mk-lang.js: make-specific pages (same behavior)
- Persists via localStorage key `ct-lang`
- In-place toggle — does NOT redirect to taller-mecanico

**Technical SEO:**
- GA4 (G-ZD0BHVK5JM) on all pages
- JSON-LD AutoRepair schema on all pages
- Canonical tags, Open Graph, alt text, favicon set on all pages
- sitemap.xml (25 pages), robots.txt
- Google Maps Places API for live reviews on homepage

---

## Gemini CLI — date unknown

**Files created (untracked, not committed):**
- `.gemini/add_breadcrumbs.py` — script to add BreadcrumbList JSON-LD to pages
- `.gemini/verify_breadcrumbs.py` — script to verify breadcrumb implementation

**Note:** These scripts were never run or committed. The actual BreadcrumbList implementation was done by Claude on 2026-06-10 by directly editing HTML files.

---

_To update this log: add a new dated section at the top with your tool name, what you did, and any decisions or caveats the next tool should know about._
