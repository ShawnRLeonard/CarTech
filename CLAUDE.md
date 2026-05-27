# CarTech Automotive LLC — Project Context

## The Business
- **Name:** CarTech Automotive LLC
- **Address:** 207 Monroe Street, Smyrna, TN 37167
- **Phone/Text:** 615-220-6114
- **Email:** cartechautomotivellc@gmail.com
- **Hours:** Mon–Fri 8:00 AM – 5:30 PM, closed weekends
- **Founded:** 2020; dedicated paint & body shop added 2024
- **Facebook:** facebook.com/cartechautomotivellc
- **Instagram:** instagram.com/cartechautomotivellc
- **Shop system:** Tekmetric (handles CRM, scheduling, customer texts, invoicing)

## The Website
- **Live site:** cartechsmyrna.com — currently hosted on **GoHighLevel (GHL)**
- **Local files:** index.html, Services.html, about.html, contact.html (career.html hidden/unused)
- **Goal:** Replace the GHL site with the local custom HTML files, hosted free on GitHub Pages
- **Reason for moving:** GHL costs $97–$297/mo and only serves as a website host — Tekmetric already handles everything else GHL offers. Custom HTML gives full SEO control and zero hosting cost.

## Current Status
- SEO improvements have been made to all 4 local HTML files (meta descriptions, title tags, Open Graph tags, meta robots). These are NOT yet live — they exist only in the local/repo files.
- The live GHL site is missing: JSON-LD structured data (highest priority), Google Analytics 4, canonical tag, meta robots, branded favicon.
- A printed report (`cartech_seo_report.html`) was created for shop ownership making the case to drop the marketing team and manage in-house.
- ✅ GA4 (G-ZD0BHVK5JM), JSON-LD structured data, and canonical tags added to all 4 HTML pages.
- ✅ Services page rebuilt with photo card grid layout; 8 service images added.
- ✅ Background video hero added to homepage (`cartechdriveby.mp4`).
- ✅ Shared `styles.css` created; mobile sticky Call/Text bar added to all pages.
- ✅ Google Maps API key restricted to cartechsmyrna.com + Maps JavaScript API + Places API (done in Google Cloud Console, May 27 2026).

## What We Decided
1. **Drop the current marketing team** — they were paid but left key SEO items undone (no GA4, no JSON-LD, typos in metadata).
2. **Cancel GHL** once we confirm no active CRM contacts or automations are running in it.
3. **Move the site to custom HTML** hosted on GitHub Pages (free, already using git).
4. **Manage everything in-house** — Shawn Leonard (already on payroll) + Claude AI.
5. **Tekmetric stays** — it handles the shop-side operations, nothing changes there.

## Immediate Next Steps (in order)
- [ ] Get login access to GHL from the marketing team
- [ ] Audit GHL — check for active CRM contacts, automations, and whether the contact form routes leads into GHL
- [ ] Get Google Business Profile owner access (add wrongway611@gmail.com as Owner)
- [ ] Get Google Search Console access or set up fresh
- [x] Set up Google Analytics 4
- [x] Add JSON-LD structured data to the site
- [ ] Move live site from GHL to GitHub Pages
- [ ] Set up custom domain on GitHub Pages (point cartechsmyrna.com DNS)

## Things to Request from the Marketing Team
See `cartech_seo_report.html` for the full printed checklist. Key items:
- Domain registrar login (critical — do this first)
- GHL sub-account login or transfer
- Google Business Profile owner access
- Google Search Console access
- GA4 Measurement ID and admin access
- Facebook Page admin access + Pixel ID
- All original image/logo files
- Brand kit (colors, fonts)
- List of any active GHL automations

## Google Business Profile
- Description has been drafted and is ready to paste in (see conversation or ask Claude to regenerate it)
- Strategy: post weekly, respond to every review within 24 hours

## Team Members (for content/SEO use)
Scott Leonard, Emmanuel Salazar, Ruben Salazar, Shawn Leonard

## Key Decisions & Preferences
- Shawn is an employee and the in-house web/marketing person going forward
- Contact email for account access: wrongway611@gmail.com
- Plain HTML + CSS only — no frameworks, no page builders
- Keep it simple, no unnecessary abstractions
