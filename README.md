# Seif Sharara — Business Website

Static site (plain HTML/CSS/JS, no build step, no backend) for the business
"Seif Sharara." Also serves as the public documentation site for A2P 10DLC
SMS registration.

## 1. Run locally

No build tools required. From this directory, run a simple static server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/ in a browser. (Opening `index.html`
directly via `file://` also works for basic checks, but a local server more
accurately reflects how Netlify serves the clean URLs like `/privacy/`.)

## 2. Deploy to Netlify

1. Push this project to a Git repository (GitHub, GitLab, etc.), or drag the
   project folder directly into the Netlify dashboard ("Deploys" → manual
   deploy).
2. If using Git: in Netlify, "Add new site" → "Import an existing project" →
   select the repo.
3. Build settings:
   - **Build command:** none / leave blank
   - **Publish directory:** `.` (repo root)
   - These are already set in `netlify.toml`.
4. Deploy. Netlify will serve `/`, `/sms-consent/`, `/privacy/`, and
   `/terms/` automatically because each is a folder with its own
   `index.html`.
5. Once you have a final custom domain, update the `<link rel="canonical">`
   and Open Graph `og:url` / `og:image` tags in each page's `<head>`, and the
   `<loc>` values in `sitemap.xml`, to use the full `https://` URL instead of
   the relative paths currently in place.

## 3. Where to update business contact information

Almost everything is centralized in **`js/config.js`** — edit the values in
`window.SITE_CONFIG` at the top of the file:

- `businessName`
- `email`
- `phone`
- `city` / `state`
- `streetAddress` (leave blank until ready to publish; the footer and
  contact section will automatically fall back to "City, State" only)
- `effectiveDate`
- `currentYear`

This file drives the shared header and footer on every page automatically.

**Important:** because this is plain HTML with no templating engine, the
placeholders `[YOUR EMAIL]` and `[YOUR CONTACT PHONE NUMBER]` are also
written directly into the visible body copy of these files (contact section,
legal pages):

- `index.html`
- `privacy/index.html`
- `terms/index.html`

Search for `[YOUR EMAIL]` and `[YOUR CONTACT PHONE NUMBER]` across the repo
and replace every instance — in `js/config.js` **and** in the HTML files
above — so the site is consistent everywhere.

Also replace `[EFFECTIVE DATE — UPDATE BEFORE LAUNCH]` in `privacy/index.html`,
`terms/index.html`, and `js/config.js` (`effectiveDate`) with the actual
effective date once finalized.

The placeholder favicon (`images/favicon.png`) and Open Graph image
(`images/og-image.png`) are solid-color placeholders — replace with real
brand assets when available.

## 4. URLs for A2P registration

Once deployed, use:

- **Main business website:** `https://<your-domain>/`
- **SMS Consent URL:** `https://<your-domain>/sms-consent/`
- **Privacy Policy URL:** `https://<your-domain>/privacy/`
- **Terms & Conditions URL:** `https://<your-domain>/terms/`

## 5. Pre-submission checklist

- [ ] All `[YOUR EMAIL]` placeholders replaced with a real email
- [ ] All `[YOUR CONTACT PHONE NUMBER]` placeholders replaced with a real phone number
- [ ] `[EFFECTIVE DATE — UPDATE BEFORE LAUNCH]` replaced on Privacy and Terms pages
- [ ] Website is publicly accessible (deployed, not just local)
- [ ] Business name on the site matches the A2P registration exactly: "Seif Sharara"
- [ ] Contact information is real and monitored
- [ ] SMS Consent page is public and reachable at `/sms-consent/`
- [ ] Privacy Policy is public and reachable at `/privacy/`
- [ ] Terms & Conditions are public and reachable at `/terms/`
- [ ] All internal links work (header, footer, in-page links)
- [ ] No fake claims, testimonials, client counts, or statistics anywhere on the site
- [ ] No purchased/rented/affiliate lead-list language anywhere
- [ ] Mobile layout verified (navigation menu, spacing, readability)
- [ ] Canonical/OG URLs and `sitemap.xml` updated to the final domain
- [ ] Favicon and OG image replaced with real brand assets (optional but recommended)
