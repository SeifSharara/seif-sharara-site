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
- `ivrPhone` — the exact phone number tied to the live SMS-consent IVR flow
  (the GHL/campaign number). This is read automatically by the
  "A2P Reviewer Verification" card on `/sms-consent/` — update it in this
  one place only.
- `ivrStatus` — set to `"live"` once the IVR flow is actually configured and
  answering calls in production for this campaign, or leave as
  `"pre-launch"` until then. This automatically switches the status badge
  and wording on `/sms-consent/` between "IVR Pre-Launch" and "IVR Live."

This file drives the shared header and footer, plus the reviewer
verification card, on every page automatically.

**Important:** because this is plain HTML with no templating engine, the
business email and phone number are also written directly into the visible
body copy of these files (contact section, legal pages):

- `index.html`
- `privacy/index.html`
- `terms/index.html`

If you change the email or general business phone number, update `js/config.js`
**and** search for the old value in the HTML files above so the site stays
consistent everywhere. (The IVR-specific phone number on `/sms-consent/` does
**not** need manual updates — it's injected from `ivrPhone` automatically.)

The placeholder favicon (`images/favicon.png`) and Open Graph image
(`images/og-image.png`) are solid-color placeholders — replace with real
brand assets when available.

### IVR configuration evidence image

The "IVR Configuration Evidence" section on `/sms-consent/` displays:

- `images/ivr-verbal-consent-evidence.png` — a single combined evidence
  diagram showing the exact IVR disclosure, the phone-based consent flow,
  and the underlying HighLevel IVR configuration (including the key-press-1
  → SMS Consent branch).

If this file is ever missing, the page automatically shows a clean
"Configuration screenshot to be added before campaign resubmission"
placeholder instead of a broken image icon. To update the evidence image,
just replace the file at that path with the same filename — no HTML changes
needed.

## 4. URLs for A2P registration

Once deployed, use:

- **Main business website:** `https://<your-domain>/`
- **SMS Consent URL:** `https://<your-domain>/sms-consent/`
- **Privacy Policy URL:** `https://<your-domain>/privacy/`
- **Terms & Conditions URL:** `https://<your-domain>/terms/`

## 5. A2P resubmission checklist

Use this checklist before resubmitting the campaign for review (e.g. after
an error 30909 CTA verification rejection):

- [ ] Business name on the site matches the A2P registration exactly: "Seif Sharara"
- [ ] `ivrPhone` in `js/config.js` is the correct, real business/campaign phone number
- [ ] `/sms-consent/` (IVR consent page) is public and reachable
- [ ] The IVR disclosure text on `/sms-consent/` matches the actual GHL/IVR workflow exactly
- [ ] Press 1 is confirmed as the affirmative consent action in the live workflow
- [ ] The live workflow does not send SMS unless the caller pressed 1
- [ ] IVR configuration evidence image present at `images/ivr-verbal-consent-evidence.png`
- [ ] Privacy Policy effective date is current
- [ ] Terms & Conditions effective date is current
- [ ] Privacy Policy (`/privacy/`) and Terms (`/terms/`) are public
- [ ] STOP / HELP / rates / frequency disclosures are present on `/sms-consent/`, `/privacy/`, and `/terms/`
- [ ] No contradictory marketing-consent language exists anywhere on the site
- [ ] Homepage contact details (email, phone, location) are accurate
- [ ] All internal links work (header, footer, in-page links)
- [ ] Site works on mobile (nav menu, spacing, readability)
- [ ] No placeholder text remains anywhere (search for `[` and `]`)
- [ ] `ivrStatus` in `js/config.js` reflects reality — `"live"` only if the IVR is actually answering calls in production, otherwise `"pre-launch"`
