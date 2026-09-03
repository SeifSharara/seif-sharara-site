# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are owners/managers of local service businesses (e.g. contractors, clinics, and similar) evaluating whether to hire Seif Sharara for lead follow-up and customer communication systems. They land on the site to assess credibility and decide whether to reach out by email or phone.

## Product Purpose

The site serves two durable purposes:
1. A business marketing site for Seif Sharara's lead follow-up, customer communication, and business automation services for local service businesses.
2. Public documentation required for A2P 10DLC SMS registration: SMS Consent, Privacy Policy, and Terms & Conditions pages, each independently reachable at a stable clean URL (`/sms-consent/`, `/privacy/`, `/terms/`).

## Positioning

Practical, easy-to-manage lead follow-up and communication systems for local service businesses — not a generic marketing agency or a complex enterprise automation platform.

## Operating Context

- Static site, no build step, no backend (plain HTML/CSS/JS).
- Deployed on Netlify; each legal/consent page is its own folder with its own `index.html` for clean URLs.
- Shared header/footer and all business contact info (`businessName`, `email`, `phone`, `city`/`state`, `effectiveDate`) are centralized in `js/config.js` (`window.SITE_CONFIG`) and injected across pages.
- Business is based in Sterling, Virginia.

## Capabilities and Constraints

- No build tools/framework — must remain plain static HTML/CSS/JS per README.
- Contact placeholders (`[YOUR EMAIL]`, `[YOUR CONTACT PHONE NUMBER]`) currently unfilled in both `js/config.js` and the visible body copy of `index.html`, `privacy/index.html`, and `terms/index.html` — must be replaced before launch.
- Legal effective date placeholder (`[EFFECTIVE DATE — UPDATE BEFORE LAUNCH]`) must be finalized before launch.
- Favicon and OG image (`images/favicon.png`, `images/og-image.png`) are solid-color placeholders pending real brand assets.
- Canonical/OG URLs and `sitemap.xml` currently use relative paths pending a final custom domain.
- Compliance constraint (A2P 10DLC): no fake claims, testimonials, client counts, or statistics; no purchased/rented/affiliate lead-list language.

## Brand Commitments

Business name: "Seif Sharara" — must match the A2P registration exactly.

## Evidence on Hand

No testimonials, case studies, client counts, or press are present or should be fabricated — the pre-submission checklist explicitly prohibits fake claims/statistics.

## Product Principles

- Stay practical and plain-spoken, not agency-generic — the service is about fixing a concrete problem (slow follow-up, missed calls), not abstract "automation."
- Never fabricate credibility signals (testimonials, stats, client counts); credibility comes from clarity and directness instead.
- Keep the legal/consent pages independently reachable and unambiguous — they are load-bearing for SMS registration compliance, not incidental footer links.
- Keep the site technically simple (no build step) so contact info and dates stay trivially editable via `js/config.js`.

## Accessibility & Inclusion

No product-specific accessibility requirement established beyond standard web accessibility practice.
