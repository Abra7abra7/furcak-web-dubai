<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# FURCAK Web Dubai — Frontend Design & Architectural System

This document records the complete UI/UX overhaul implemented according to the `frontend-design` skill guidelines for **FURCAK MARKETING MANAGEMENT - FZCO**.

---

## 1. Design Direction & Aesthetic Philosophy

### Executive Stature & Context
FURCAK is a licensed Free Zone enterprise operating under the **Dubai Integrated Economic Zones Authority (DIEZA)** within the **Dubai Silicon Oasis (DSO-IFZA)** jurisdiction (Trade Licence No. 89324). Its clients are institutional investors, European founders, family offices, and regional corporate leaders navigating UAE market entry, business development, and high-stakes marketing management.

### Eradication of Generic AI / SaaS Tropes
In strict accordance with `frontend-design` rules, all generic "AI template" patterns were systematically eliminated:
- ❌ **No glowing radial neon blobs** or purple/cyan cyber blurs.
- ❌ **No mid-sentence gradient text cuts** (e.g. *"Next-Gen [Marketing AI] Advisory"* with awkward shiny clips).
- ❌ **No toy pill badges** featuring pulsating green pinging dots.
- ❌ **No identical 3-column SaaS pricing card grids** with redundant icons.
- ❌ **No low-contrast gray-on-gray** illegibility.

### Chosen Aesthetic: Bespoke Architectural & Institutional Luxury
- **Dignified Dark Foundations:** Deep Basalt (`#090B0E`) and Slate Obsidian (`#12151B`) create an intimate, high-end private advisory atmosphere.
- **Architectural Grid & Hairlines:** Subtle 1px borders in subdued DSO Gold (`rgba(200, 165, 94, 0.25)`) and neutral hairlines (`rgba(255, 255, 255, 0.08)`) reference precision master planning and corporate governance.
- **Typography with Editorial Weight:**
  - **Headings (`font-heading`):** Strong geometric authority with tight tracking (`-0.03em`), high contrast, and crisp uppercase categorization tags.
  - **Body (`font-sans`):** Inter with relaxed line-height (`leading-relaxed`) and crisp contrast (`text-slate-300` on dark substrates).
  - **Data / Registries (`font-mono`):** JetBrains Mono for official DIEZA license codes, UAE coordinates, and metric figures.
- **Warm Metallic Accents:** Bespoke DSO Muted Gold (`#C8A55E`), Warm Champagne (`#EFE4CA`), and Antique Ochre (`#9A7730`) evoke authentic Dubai regional heritage without gaudiness.

---

## 2. Global Design Tokens (`src/app/globals.css`)

```css
:root {
  --bg-dark: #090B0E;        /* Deep Basalt foundation */
  --bg-card: #12151B;        /* Slate Obsidian container */
  --bg-card-hover: #171B23;  /* Interactive card state */
  --gold-primary: #C8A55E;   /* DSO Muted Gold */
  --gold-light: #EFE4CA;     /* Warm Champagne accent */
  --gold-dark: #9A7730;      /* Antique Gold depth */
  --gold-hairline: rgba(200, 165, 94, 0.25);
  --border-subtle: rgba(255, 255, 255, 0.08);
}
```

- **Architectural Grid:** `.bg-arch-grid` injects a surgical 48px coordinate background pattern at 2% opacity.
- **Hairline Dividers:** `.border-hairline` provides high-precision separation lines.
- **Focus Rings:** Accessible gold-tinted outlines (`focus-visible:ring-2 focus-visible:ring-[#C8A55E]`).

---

## 3. Component Architecture & Structural Improvements

### 3.1 Header Navigation (`src/components/Navbar.tsx`)
- **Visual Stature:** Translucent obsidian backdrop (`rgba(9, 11, 14, 0.88)`) with a precision bottom hairline.
- **Jurisdiction Credential:** Integrated DSO-IFZA / DIEZA authority tag next to the gold corporate monogram.
- **Interaction Model:** Active section indicators feature micro gold hairline underlines. The CTA button is styled as an architectural button (`Consultation Mandate`).

### 3.2 Hero Section (`src/components/Hero.tsx`)
- **Authority Banner:** Replaced the generic green-dot pill with an official regulatory strip: `DUBAI INTEGRATED ECONOMIC ZONES AUTHORITY • LICENCE NO. 89324`.
- **Editorial Headline:** Clear, unfragmented typographic hierarchy emphasizing senior strategic counsel and UAE market execution.
- **Dual Action Architecture:** High-contrast primary advisory button paired with a secondary dossier discovery button.
- **Institutional Governance Ledger:** 4 structured metric panels with vertical dividers displaying:
  - *DSO-IFZA* Registered Jurisdiction
  - *2012* Strategic Foundation
  - *100%* Confidential Boardroom Mandates
  - *GCC & EU* Advisory Corridors

### 3.3 Corporate Profile (`src/components/About.tsx`)
- **Asymmetric Dossier Layout:** Restructured from generic text blocks into an authoritative corporate dossier.
- **Institutional Verification Card:** Highlights official DSO-IFZA registration, zero corporate tax jurisdiction alignment, and Jan Furcak's dual-jurisdiction leadership.
- **Precision Metrics:** Highlighting 12+ years of continuous operating history and cross-border commercial execution.

### 3.4 Advisory Capabilities (`src/components/Services.tsx`)
- **Matrix Layout:** Converted 6 uniform SaaS cards into an architectural advisory matrix.
- **Deliverables Ledger:** Every service card now features an explicit `Key Mandate Deliverables` section with structured bullets.
- **Sequential Indexing:** Displayed with institutional mono numbering (`01` through `06`).

### 3.5 Sector Directory (`src/components/Industries.tsx`)
- **Clean Taxonomy:** Replaced cluttered filter pills with an institutional directory format.
- **Contextual Advisory Details:** Each sector card details specific strategic focus areas (e.g. cross-border structuring, sovereign alignment, GCC digital commerce, compliance).

### 3.6 Advisory Methodology (`src/components/Approach.tsx`)
- **Sequential Roadmap:** Structured 5-stage timeline from initial boardroom alignment to post-launch governance.
- **Phase Deliverables:** Every phase contains an explicit deliverable indicator and milestone checkpoint, illustrating disciplined project development.

### 3.7 Leadership Profile (`src/components/Leadership.tsx`)
- **Executive Monograph:** Focuses on Jan Furcak (Founder & Managing Director).
- **Verified Credentials:** Highlights dual-jurisdiction experience (Slovakia 2012 / UAE DSO-IFZA), direct phone and WhatsApp routing, and verified corporate registry status.

### 3.8 Mandate Engagement & Inquiries (`src/components/Contact.tsx`)
- **Official Verification Block:** Displays full corporate credentials (DIEZA Licence 89324, Dubai Digital Park, Building A2).
- **Boardroom Inquiry Gateway:** Refined input fields with crisp focus states, clear privacy guarantees, and instant direct communication channels.

### 3.9 Regulatory Footer (`src/components/Footer.tsx`)
- **Governance Architecture:** Crisp multi-column navigation, corporate contact details, DSO-IFZA regulatory disclosures, and copyright compliance.

### 3.10 Modals & Widgets (`ScheduleModal.tsx`, `LegalModals.tsx`, `WhatsAppWidget.tsx`)
- **Cohesive Luxury Language:** Deep basalt containers, gold hairlines, and accessible interaction patterns across all modals and the direct concierge widget.

---

## 4. Text & Content Preservation Guarantee

**100% Content Verbatim Retention:**
- Company Name: `FURCAK MARKETING MANAGEMENT - FZCO`
- Trade Licence Number: `89324`
- Licensing Authority: `Dubai Integrated Economic Zones Authority (DIEZA) / Dubai Silicon Oasis (DSO-IFZA)`
- Physical Address: `Building A2, DSO-IFZA, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE`
- Phone / WhatsApp: `+971 50 539 5412`
- Email: `furcak@furcak.com` / `furcak.dubai@gmail.com`
- All service descriptions, industry text, 5-phase roadmap descriptions, leadership bios, privacy policies, and terms of engagement remain completely unaltered.

---

## 5. Development & Build Verification

- **Framework:** Next.js 16.3.5 (Turbopack) & React 19
- **Tailwind Version:** Tailwind CSS v4 via `@tailwindcss/postcss`
- **Build Verification:** Run `npm run build` to confirm zero TypeScript compilation errors or route generation issues.

---

## 6. Multi-Page Architecture (`src/app/*`)

To eliminate the congested single-page text wall and give each capability institutional breathing room, the web application was restructured into dedicated App Router subpages:

1. **Homepage (`/`) — Executive Portal:**
   - Architectural Hero with high-contrast action buttons ("Explore Services", "Schedule Call", "Contact Us").
   - Corporate Profile executive summary linking to `/about`.
   - Core Pillars matrix overview linking to `/services`.
   - Specialized Industry Sectors preview linking to `/industries`.
   - 5-Stage Advisory Methodology roadmap preview linking to `/approach`.
   - Executive Leadership Spotlight for Jan Furcak linking to `/leadership`.
   - Boardroom Mandate Engagement strip linking to `/contact`.
2. **Corporate Profile Subpage (`/about`):**
   - Full institutional dossier, DIEZA licensing details, mission, vision, and Dubai Silicon Oasis advantages.
3. **Core Pillars Subpage (`/services`):**
   - In-depth advisory matrix with complete deliverables ledger for all 6 pillars and direct mandate scoping.
4. **Sector Ecosystem Subpage (`/industries`):**
   - Complete directory of 8 industrial and commercial sectors with explicit advisory focus areas.
5. **Methodology Subpage (`/approach`):**
   - Detailed 5-stage sequential roadmap with milestone checkpoints and project governance oversight.
6. **Executive Leadership Subpage (`/leadership`):**
   - Managing Director Jan Furcak's monograph, legal foundation credentials (since 2012), and direct communication channels.
7. **Boardroom Mandate Gateway (`/contact`):**
   - Full mandate inquiry form with `useSearchParams` service pre-selection, official DIEZA verification panel, and direct phone/WhatsApp channels.
8. **Shared Components (`PageShell.tsx`, `PageHeader.tsx`):**
   - Encapsulates header navigation, breadcrumbs, footers, and modal states across all subpages.

---

## 7. Critical Text Contrast Bug Fix

### Cause
In Tailwind CSS v4, defining `--color-base: #090B0E;` in `globals.css` under the `@theme` directive caused Tailwind to generate `.text-base { color: #090b0e; }` and `.sm:text-base { color: #090b0e; }`. Because `text-base` is the standard font size class (`1rem`), this unintentionally colored all paragraphs, buttons, and card texts with `sm:text-base` pitch black (`#090B0E`) on top of the black background.

### Resolution
1. Renamed `--color-base` to `--color-basalt: #090B0E;` in `globals.css` so that `text-base` and `sm:text-base` strictly control font size (`1rem`).
2. Added explicit `color: #E2E8F0;` to `.furcak-card` containers to guarantee high-contrast text inheritance across all browsers.
3. Updated action buttons in `Hero.tsx` with explicit high-contrast text colors (`text-white`, `text-[#EFE4CA]`, `text-[#090B0E]`).

---

## 8. Production Domain, Cloudflare Email Routing & Lead Ingestion Architecture

### 8.1 Production Identity & Domain Ownership
- **Official Corporate Domain:** `https://fmm-fzco.com` (Derived from *FURCAK MARKETING MANAGEMENT - FZCO*).
- **Registrar & DNS:** Cloudflare Registrar with full DNSSEC and Anycast proxying (`104.21.51.197`, `172.67.185.126`).
- **Hosting Target:** Cloudflare Pages / Workers runtime (`furcak-web-dubai`).
- **SSL / TLS Encryption:** TLSv1.3 with Google Trust Services / Cloudflare Universal Edge SSL (`WE1` certificate authority).

### 8.2 Unified Email Ingestion via Cloudflare Email Routing
To preserve high institutional stature and prevent the degradation of brand authority associated with exposing raw personal `@gmail.com` addresses on official corporate collaterals, a zero-cost, enterprise-grade email pipeline was established:
1. **Official Corporate Address:** `info@fmm-fzco.com` (sole public-facing email across all pages, footers, and schema).
2. **Cloudflare Destination Address:** `jan.furcak@gmail.com` (verified destination inbox).
3. **Routing Rules:**
   - **Specific Rule:** `info@fmm-fzco.com` ➔ Forwards directly to `jan.furcak@gmail.com`.
   - **Catch-All Policy:** `*@fmm-fzco.com` ➔ Forwards all unmatched prefixes (e.g. `jan@`, `contact@`, or typographical errors) to `jan.furcak@gmail.com`.
4. **DNS Mail Records Configured:**
   - MX: `route1.mx.cloudflare.net`, `route2.mx.cloudflare.net`, `route3.mx.cloudflare.net`
   - SPF: `v=spf1 include:_spf.mx.cloudflare.net ~all`
   - DKIM: Cloudflare-managed 2048-bit domain key signatures.
   - DMARC: Configured with `p=reject` policy and automated reporting.

### 8.3 Native Ingestion & Client Concierge Pipeline
Both interactive intake forms on the site are decoupled from fragile third-party intermediaries and stream directly to the verified corporate pipeline:
1. **Mandate Inquiry Form (`src/components/Contact.tsx`):**
   - Automatically generates structured RFC 6068 email payloads containing:
     - Prospective Client Name & Corporate Entity
     - Direct Contact Coordinates (Email & Telephone)
     - Core Area of Consultation (e.g. GCC Market Entry, Industrial Expansion)
     - Executive Project Brief & Jurisdictional Scope
   - Formats and dispatches directly to `info@fmm-fzco.com`, which lands in Jan Furcak's Gmail within seconds.
   - Provides instant dual-channel escalation via the dedicated WhatsApp Concierge (`+971 50 539 5412`).
2. **Strategic Consultation Modal (`src/components/ScheduleModal.tsx`):**
   - Prepares scheduled consultation briefs specifying preferred Gulf Standard Time (GST) windows, target capability requirements, and mandate notes.
   - Dispatches simultaneously to `info@fmm-fzco.com` and provides one-click WhatsApp appointment confirmation.
3. **Optional Web3Forms API Passthrough:**
   - Maintained native support for `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` for headless background AJAX submissions without opening client email software, with graceful automatic fallback to formatted `mailto:` when unconfigured.

### 8.4 Navigation Hydration Fix (`Navbar.tsx` & `FurcakLogo.tsx`)
- **Root Cause:** Next.js hydration error `<a> cannot be a descendant of <a>` caused by `<Navbar>` wrapping `<FurcakLogo>` in `<Link href="/">`, while `<FurcakLogo>` internally declared `<Link href="#home">`.
- **Architectural Fix:**
  - Standardized `FurcakLogo` with an optional `href` prop defaulting to `"/"`.
  - Removed redundant outer `<Link>` in `Navbar.tsx`, restoring clean single-anchor DOM hierarchy.

### 8.5 Corporate Network / Firewall Security Note (FortiGuard NOD)
- When accessing `https://fmm-fzco.com` from corporate networks protected by enterprise firewalls (e.g. Fortinet FortiGate):
  - Firewalls may temporarily flag or redirect the domain to `208.91.112.55` (`Fortiguard SDNS Blocked Page`) with a self-signed inspection certificate, triggering browser "Nezabezpečené" warnings.
  - **Etiology:** Standard FortiGuard **Newly Observed Domain (NOD)** heuristics applied to all domains within 24–72 hours of initial DNS registration.
  - **Resolution:** Resolves automatically as security databases index and classify the domain under *Business & Corporate*; can be accelerated via [FortiGuard Web Filter Lookup](https://www.fortiguard.com/webfilter) categorization.


