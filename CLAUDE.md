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
- **Live site:** cartechsmyrna.com — currently hosted on **GoHighLevel (GHL)**
- **Local files (not yet live):** index.html, Services.html, about.html, contact.html, faq.html, taller-mecanico-smyrna-tn.html
- **Shared stylesheet:** styles.css
- **Language toggle:** lang.js (EN/ES toggle, persists via localStorage)
- **Goal:** Replace the GHL site with the local custom HTML files, hosted free on GitHub Pages
- **Reason for moving:** GHL costs $97–$297/mo and only serves as a website host — Tekmetric already handles everything else GHL offers. Custom HTML gives full SEO control and zero hosting cost.
- **Git repo:** already initialized, all files committed, branch: main
- **Google Maps Embed API key:** AIzaSyB9a8wEvXRTS_xGSWuHkoWMhdZ146X_OHA (restricted to cartechsmyrna.com + Maps JavaScript API + Places API)
- **GA4 ID:** G-ZD0BHVK5JM

## Everything That's Been Built ✅

### Pages
- **index.html** — Homepage with background video hero (cartechdriveby.mp4), service cards with hover image swap, Why Choose Us section, About snippet with shopfront.jpg, Google Reviews section (live via Maps API), service areas grid (39 communities), CTA banner, footer
- **Services.html** — Service cards with photos, Makes We Service grid (12 brands), CTA, footer
- **about.html** — Shop story with bilingual callout (Mexican ownership + Se Habla Español badge), team member cards (Scott/Emmanuel/Ruben/Shawn with photos), CTA, footer
- **contact.html** — Dark theme, 2-column layout (info cards left, Google Maps iframe right), business hours table, service areas grid, CTA, footer
- **faq.html** — 12 FAQ accordion items, FAQPage JSON-LD schema, CTA, footer
- **taller-mecanico-smyrna-tn.html** — Full Spanish SEO landing page (see Spanish SEO section below)

### Technical / SEO
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
- ✅ "Makes We Service" section on Services.html (SEO for brand-specific searches)
- ✅ Service areas grid (39 communities) on index.html and contact.html
- ✅ Mobile-responsive layout throughout

### Language Toggle (lang.js)
- Button in nav header on all 5 main pages: shows "HAZ CLIC PARA ESPAÑOL" in English, "CLICK FOR ENGLISH" in Spanish
- Uses data-i18n attributes (200+ elements across all pages) + localStorage persistence
- Translates: nav, heroes, service cards, Why Choose Us, About snippet, makes section, FAQ (all 12 Q&As), contact labels/hours, CTA banners, footer
- Does NOT translate: phone numbers, addresses, city names, Google Reviews (dynamic), brand/model names

### Spanish SEO (taller-mecanico-smyrna-tn.html)
- Full standalone Spanish page — content baked into HTML source (not JS-swapped), so Google indexes it
- `<html lang="es">`, hreflang tags connecting to index.html
- Targets: "taller mecánico Smyrna TN", "reparación de autos Smyrna", "carrocería Smyrna Tennessee", "mecánico hablamos español Smyrna"
- Key differentiator: prominently features Mexican-origin owners (Emmanuel & Ruben Salazar), fluent Spanish team — authentic, not just translated
- Includes: hero, Why Choose Us (4 items), 6 service cards, About story with "Hablamos Español" badge, makes tag cloud, service areas, CTA, bilingual footer
- "English Version" nav button links back to index.html
- about.html also updated with bilingual paragraph + "Se Habla Español" badge linking to Spanish page

## What Needs to Happen Next — In Priority Order

### 🔴 BLOCKERS — Can't go live without these
1. **Get domain registrar login from the marketing team** — this is the single most critical item. Whoever controls cartechsmyrna.com DNS needs to hand over access. Without this, the domain can't be pointed to GitHub Pages. Ask for: registrar login (GoDaddy, Namecheap, Google Domains, etc.) or offer to transfer domain to a new registrar account you control.
2. **Audit GHL before canceling** — log into GHL and check:
   - Is the contact form routing leads into GHL? (if yes, you could be losing leads mid-transition)
   - Are there any active automations texting customers?
   - Any contacts stored there worth exporting?
   - Once confirmed empty/safe, cancel the subscription

### 🟡 DO BEFORE GOING LIVE
3. **Set up GitHub Pages** — takes ~5 minutes once repo is ready:
   - Go to the repo on GitHub → Settings → Pages → Source: Deploy from branch → main → / (root)
   - GitHub will give you a `username.github.io/repo` URL to test
   - Then point the custom domain once you have DNS access
4. **Point cartechsmyrna.com DNS to GitHub Pages:**
   - Add 4 A records pointing to GitHub's IPs: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Add CNAME record: www → yourusername.github.io
   - In GitHub Pages settings, set custom domain to cartechsmyrna.com and enable HTTPS
5. **Activate Formspree contact form** — form is built and ready in contact.html AND taller-mecanico-smyrna-tn.html. Just needs a real form ID:
    - Go to formspree.io → sign up free with cartechautomotivellc@gmail.com
    - Click "New Form" → name it "CarTech Website"
    - Copy the form ID (looks like: xpwzabc1)
    - In contact.html: find `YOUR_FORM_ID` and replace with real ID
    - In taller-mecanico-smyrna-tn.html: same replacement (same form ID works for both)
    - Free tier = 50 submissions/month, email notifications to cartechautomotivellc@gmail.com
    - Form fields: Name, Phone, Email (optional), Vehicle, Service dropdown, Message

### 🟢 DO AFTER GOING LIVE
6. **Google Search Console** — verify cartechsmyrna.com ownership, submit sitemap, watch for indexing of Spanish page and FAQ page (these are the new pages Google hasn't seen yet)
7. **Google Business Profile** — get owner access for wrongway611@gmail.com; update website URL to the new site; post photos weekly; respond to every review within 24 hours
8. **Submit Spanish page to Google** — once live, use Google Search Console's URL Inspection tool to request indexing of taller-mecanico-smyrna-tn.html specifically. Don't wait for Google to find it.
9. **Social media push for Spanish page** — share taller-mecanico-smyrna-tn.html on Facebook/Instagram in Spanish. One authentic post from the owners (in Spanish, mentioning the Mexican roots) targeting the Smyrna Hispanic community will do more than months of organic SEO.
10. **Directory listings** (free, important for local SEO):
    - Yelp
    - Apple Maps (submit at mapsconnect.apple.com)
    - RepairPal
    - Carfax Service Shop
    - BBB (Better Business Bureau)
    - Make sure all listings have consistent NAP: CarTech Automotive LLC, 207 Monroe Street, Smyrna TN 37167, 615-220-6114

### 📋 SEO CONTENT PIPELINE (future sessions)
11. **Make-specific landing pages** (saved in memory as seo_make_landing_pages.md):
    - Priority 1: nissan-repair-smyrna-tn.html (Nissan plant is in Smyrna — huge local relevance)
    - Priority 2: toyota-repair-smyrna-tn.html (Spring Hill plant nearby)
    - Priority 3: subaru-repair-smyrna-tn.html
    - Then: ford, chevrolet, honda
    - Each page: 200–300 words, specific models listed, JSON-LD, CTA, link back to Services.html
12. **sitemap.xml** — create and submit to Google Search Console once live. Should list all pages including the Spanish page and any future make-specific pages.
13. **Google Reviews widget** — currently pulls live reviews via Maps API. Need to confirm API key works on the live cartechsmyrna.com domain (currently restricted to that domain, so it should work once DNS is switched).
14. **Google Search Console setup** (do day 1 of going live):
    - Go to search.google.com/search-console → Add property → Domain type → cartechsmyrna.com
    - Verify ownership via DNS TXT record (add it in the domain registrar)
    - Submit sitemap: cartechsmyrna.com/sitemap.xml
    - Use URL Inspection tool to manually request indexing of: taller-mecanico-smyrna-tn.html, faq.html (new pages Google hasn't seen)
    - Check back after 30/60/90 days to see ranking progress

## Keywords to Track in Google Search Console (after going live)
These are the searches we're targeting — check monthly to see position improving:

**English — Auto Repair:**
- auto repair Smyrna TN
- car repair Smyrna TN
- mechanic Smyrna TN
- body shop Smyrna TN
- auto body shop Smyrna TN
- oil change Smyrna TN
- check engine light Smyrna TN
- CarTech Automotive (branded)

**English — Make-Specific (once those pages are built):**
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

## Things to Request from the Marketing Team
- **Domain registrar login** ← most critical, do this first
- GHL sub-account login or transfer
- Google Business Profile owner access (add wrongway611@gmail.com as Owner)
- Google Search Console access
- Facebook Page admin access + Pixel ID
- All original image/logo files
- Any active GHL automations list

## Key Technical Notes
- **Video hero:** On mobile, video is hidden and shopfront.jpg is used as background instead (CSS media query in index.html)
- **Google Reviews:** Loaded via Google Maps Places API (same key as Maps embed). Shows live reviews, star ratings, "Write a Review" button.
- **Maps embed on contact page:** Uses Maps Embed API (different from JS API) — works everywhere including local file:// testing
- **lang.js approach:** Stores original English innerHTML in data-orig attribute on first Spanish toggle; restores from data-orig on switch back to English. No double-encoding issues.
- **Local testing:** `python3 -m http.server 8765` then open localhost:8765 — Maps and reviews won't load (domain restriction) but everything else works
- **Booking system:** ShopGenie (Tekmetric's booking tool) — same URL used on all "Schedule Appointment" buttons

## Key Decisions & Preferences
- Shawn is an employee and the in-house web/marketing person going forward
- Contact email for account access: wrongway611@gmail.com
- Plain HTML + CSS only — no frameworks, no page builders, no JavaScript libraries
- Keep it simple, no unnecessary abstractions
- Dark theme: body #0d0d0d, sections #111111/#1a1a1a, accent #05b6fc (bright blue)
- Fonts: Oswald (headings), Montserrat (body) — loaded from Google Fonts
- The shop is bilingual — English and Spanish are both first-class languages for this business
