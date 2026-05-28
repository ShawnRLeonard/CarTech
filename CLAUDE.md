# CarTech Automotive LLC — Project Context

## The Business
- **Name:** CarTech Automotive LLC
- **Address:** 207 Monroe Street, Smyrna, TN 37167
- **Phone/Text:** 615-220-6114
- **Email:** cartechautomotivellc@gmail.com
- **Hours:** Mon–Fri 8:00 AM – 5:00 PM, closed weekends
- **Founded:** 2020; dedicated paint & body shop added 2024
- **Facebook:** facebook.com/cartechautomotivellc
- **Instagram:** instagram.com/cartechautomotivellc
- **Shop system:** Tekmetric (handles CRM, scheduling, customer texts, invoicing)
- **Ownership:** Co-owners Emmanuel Salazar and Ruben Salazar (Mexican origin, fluent Spanish speakers); Scott Leonard (Shop Manager); Shawn Leonard (Auto Technician, in-house web/marketing)
- **Booking URL:** https://booking.shopgenie.io/?shop=cartech-automotive-1812547883&preselect_account=cartech-automotive-llc-1812548070&rwg_token=AFd1xnF4gZf0mW_9ep8v-Wpu4k-BpW-JRBx_VP8Ao8ESG94qCRVwYPsGVlh7xB_k6lYrRKm0aX_1yZD58hpGRh6MDN4SDAT9vQ%3D%3D

## The Website
- **Live site:** https://cartechsmyrna.com — hosted on **GitHub Pages** (free), branch: main
- **DNS:** Managed in Cloudflare — 4 A records → GitHub IPs, www CNAME → shawnrleonard.github.io
- **HTTPS:** Enabled and enforced via GitHub Pages
- **GHL:** Cancelled as of 2026-05-28 — no longer in use
- **Shared stylesheet:** styles.css
- **Language toggle:** lang.js (EN/ES in-place toggle, persists via localStorage key `ct-lang`)
- **Make-specific language toggle:** mk-lang.js (same behavior, used on all 12 make pages)
- **Google Maps Embed API key:** AIzaSyB9a8wEvXRTS_xGSWuHkoWMhdZ146X_OHA (restricted to cartechsmyrna.com + Maps JavaScript API + Places API)
- **GA4 ID:** G-ZD0BHVK5JM
- **Formspree:** Contact form active on contact.html and taller-mecanico-smyrna-tn.html — submissions go to cartechautomotivellc@gmail.com
- **Google Search Console:** Verified via Google Analytics. Sitemap submitted and confirmed Success on 2026-05-28.
- **Google Business Profile:** Website URL updated to https://cartechsmyrna.com on 2026-05-28

## Everything That's Been Built ✅

### Core Pages
- **index.html** — Homepage with background video hero (cartechdriveby.mp4), service cards with hover image swap, Why Choose Us section, About snippet with shopfront.jpg, Google Reviews section (live via Maps API), service areas grid (39 communities), CTA banner, footer
- **Services.html** — Service cards with photos and "Learn More" links to sub-pages, Makes We Service grid (12 brands with links to make pages), CTA, footer
- **about.html** — Shop story with bilingual callout (Mexican ownership + Se Habla Español badge), team member cards (Scott/Emmanuel/Ruben/Shawn with photos), CTA, footer
- **contact.html** — Dark theme, 2-column layout (info cards left, Google Maps iframe right), business hours table, service areas grid, Formspree contact form, CTA, footer
- **faq.html** — 12 FAQ accordion items, FAQPage JSON-LD schema, CTA, footer
- **taller-mecanico-smyrna-tn.html** — Full Spanish SEO landing page with Formspree contact form

### Service Sub-Pages (6 pages)
All 6 pages are fully bilingual (EN/ES via data-es attributes), have JSON-LD, canonical tags, GA4, and link back to Services.html:
- **paint-body-work-smyrna-tn.html**
- **repair-services-smyrna-tn.html**
- **maintenance-smyrna-tn.html**
- **engine-repair-smyrna-tn.html**
- **transmission-service-smyrna-tn.html**
- **noise-drivability-smyrna-tn.html**

### Make-Specific Landing Pages (12 pages)
All pages use mk-lang.js for bilingual toggle, have JSON-LD, canonical tags, GA4:
- nissan-repair-smyrna-tn.html
- toyota-repair-smyrna-tn.html
- ford-lincoln-repair-smyrna-tn.html
- chevrolet-gmc-repair-smyrna-tn.html
- honda-acura-repair-smyrna-tn.html
- subaru-repair-smyrna-tn.html
- jeep-dodge-ram-repair-smyrna-tn.html
- hyundai-kia-repair-smyrna-tn.html
- bmw-mercedes-repair-smyrna-tn.html
- volkswagen-audi-repair-smyrna-tn.html
- mitsubishi-repair-smyrna-tn.html
- mazda-repair-smyrna-tn.html

### SEO & Technical
- ✅ GA4 (G-ZD0BHVK5JM) on all pages
- ✅ JSON-LD AutoRepair structured data on all pages
- ✅ FAQPage JSON-LD schema on faq.html
- ✅ Canonical tags on all pages
- ✅ Open Graph tags on all pages
- ✅ areaServed (12 cities) in JSON-LD on all pages
- ✅ hreflang alternate tags (en/es) on index.html and taller-mecanico-smyrna-tn.html
- ✅ Meta descriptions and title tags on all pages
- ✅ Alt text on all images
- ✅ Favicon set (apple-touch-icon, favicon-32, favicon-16, site.webmanifest)
- ✅ Mobile sticky Call/Text bar on all pages
- ✅ Mobile hamburger nav on all pages
- ✅ Shopfront.jpg used as fallback for video hero on mobile
- ✅ Service areas grid (39 communities) on index.html and contact.html
- ✅ Mobile-responsive layout throughout
- ✅ sitemap.xml (25 pages, submitted to Google Search Console)
- ✅ robots.txt (points to sitemap)

### Language Toggle
- **lang.js** — used on all core pages and service sub-pages
  - `data-i18n` attributes + shared ES dictionary (nav, CTAs, footer, etc.)
  - `data-es` inline attributes for page-specific body content (service sub-pages use this heavily)
  - `data-es-src` for image source swapping (e.g. spanishsuspention.png on Services.html Noise card)
  - In-place toggle — does NOT redirect to taller-mecanico; switches language on current page
- **mk-lang.js** — used on all 12 make-specific pages; same in-place behavior

### Spanish SEO (taller-mecanico-smyrna-tn.html)
- Full standalone Spanish page — content baked into HTML source (not JS-swapped), so Google indexes it
- `<html lang="es">`, hreflang tags connecting to index.html
- Targets: "taller mecánico Smyrna TN", "reparación de autos Smyrna", "carrocería Smyrna Tennessee", "mecánico hablamos español Smyrna"
- Key differentiator: prominently features Mexican-origin owners (Emmanuel & Ruben Salazar), fluent Spanish team
- Includes: hero, Why Choose Us (4 items), 6 service cards, About story with "Hablamos Español" badge, makes tag cloud, service areas, CTA, bilingual footer, Formspree contact form
- "English Version" nav button links back to index.html

## What's Still Left — In Priority Order

### 🟡 DO SOON
1. **Request indexing of key pages** — In Google Search Console, use URL Inspection tool → "Request Indexing" on:
   - https://cartechsmyrna.com/taller-mecanico-smyrna-tn.html
   - https://cartechsmyrna.com/faq.html
   - (Spanish page and FAQ are new — Google hasn't seen them before)
2. **Social media push for Spanish page** — Have Emmanuel or Ruben post about taller-mecanico-smyrna-tn.html on Facebook/Instagram in Spanish, mentioning Mexican roots. One authentic post will do more than months of organic SEO for the Smyrna Hispanic community.
3. **Google Business Profile maintenance** — Post photos weekly, respond to every review within 24 hours

### 🟢 ONGOING / WHEN TIME ALLOWS
4. **Directory listings** (free, important for local SEO — consistent NAP everywhere):
   - Yelp
   - Apple Maps (submit at mapsconnect.apple.com)
   - RepairPal
   - Carfax Service Shop
   - BBB (Better Business Bureau)
   - NAP: CarTech Automotive LLC, 207 Monroe Street, Smyrna TN 37167, 615-220-6114
5. **Monitor Search Console** — Check monthly: are the make pages and Spanish page getting impressions? Are rankings improving for target keywords?
6. **Google Reviews on more pages** — Currently only on index.html. Could add to about.html or contact.html.
7. **Internal cross-links** — Make pages could link to relevant service sub-pages and vice versa.
8. **Photo gallery page** — Would add visual content and more indexed pages.

## Keywords to Track in Google Search Console
Check monthly to see position improving:

**English — Auto Repair:**
- auto repair Smyrna TN
- car repair Smyrna TN
- mechanic Smyrna TN
- body shop Smyrna TN
- auto body shop Smyrna TN
- oil change Smyrna TN
- check engine light Smyrna TN
- CarTech Automotive (branded)

**English — Make-Specific:**
- Nissan repair Smyrna TN
- Toyota repair Smyrna TN
- Subaru repair Smyrna TN

**Spanish:**
- taller mecánico Smyrna TN
- reparación de autos Smyrna
- carrocería Smyrna Tennessee
- mecánico Smyrna hablamos español
- taller mecánico Murfreesboro TN

**Signs it's working:** Moving from page 2–3 into page 1 (positions 1–10) for any of the above. Getting impressions on the Spanish page in Search Console means Google indexed it.

## Key Technical Notes
- **Video hero:** On mobile, video is hidden and shopfront.jpg is used as background instead (CSS media query in index.html)
- **Google Reviews:** Loaded via Google Maps Places API (same key as Maps embed). Shows live reviews, star ratings, "Write a Review" button.
- **Maps embed on contact page:** Uses Maps Embed API (different from JS API) — works everywhere including local file:// testing
- **lang.js approach:** Stores original English innerHTML in data-orig attribute on first Spanish toggle; restores from data-orig on switch back to English. No double-encoding issues.
- **Local testing:** `python3 -m http.server 8765` then open localhost:8765 — Maps and reviews won't load (domain restriction) but everything else works
- **Booking system:** ShopGenie (Tekmetric's booking tool) — same URL used on all "Schedule Appointment" buttons
- **DNS backup:** Original Cloudflare records saved in memory/dns_backup.md if ever need to revert

## Key Decisions & Preferences
- Shawn is an employee and the in-house web/marketing person going forward
- Contact email for account access: wrongway611@gmail.com
- Plain HTML + CSS only — no frameworks, no page builders, no JavaScript libraries
- Keep it simple, no unnecessary abstractions
- Dark theme: body #0d0d0d, sections #111111/#1a1a1a, accent #05b6fc (bright blue)
- Fonts: Oswald (headings), Montserrat (body) — loaded from Google Fonts
- The shop is bilingual — English and Spanish are both first-class languages for this business
