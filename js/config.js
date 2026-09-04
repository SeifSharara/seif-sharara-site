/**
 * SITE CONFIGURATION
 * ===================
 * Edit the values below to update business info across the entire site.
 * This file is loaded on every page and used to fill in contact details,
 * the footer, and the copyright year automatically.
 *
 * NOTE: This is plain static HTML/CSS/JS with no build step, so the
 * email and phone number are also duplicated directly in the HTML of
 * index.html, privacy/index.html, and terms/index.html. If you change
 * them here, update those files too (search for the old value).
 */
window.SITE_CONFIG = {
  businessName: "Seif Sharara",
  email: "seifsharara@gmail.com",
  phone: "(703) 678-1815",
  city: "Sterling",
  state: "Virginia",
  // Leave blank until a public street address is ready to publish.
  streetAddress: "",
  effectiveDate: "September 4, 2026",
  currentYear: "2026",

  /**
   * IVR / A2P CAMPAIGN SETTINGS
   * ===========================
   * ivrPhone: The exact phone number tied to the live SMS-consent IVR flow
   *   (the GHL/campaign number). This is the ONLY place to update it — the
   *   "A2P Reviewer Verification" card on /sms-consent/ reads this value
   *   automatically via inline script.
   * ivrStatus: Either "live" or "pre-launch". Controls the status badge and
   *   wording in the "A2P Reviewer Verification" section on /sms-consent/.
   *   Switch to "live" only once the IVR flow is actually configured and
   *   answering calls in production for this campaign.
   */
  ivrPhone: "(857) 837-6539",
  ivrStatus: "live",
};

/**
 * Renders the shared site header and footer into any page that includes
 * <div id="site-header"></div> and <div id="site-footer"></div>.
 */
(function () {
  function locationLine() {
    var c = window.SITE_CONFIG;
    if (c.streetAddress) {
      return c.streetAddress + ", " + c.city + ", " + c.state;
    }
    return c.city + ", " + c.state;
  }

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    el.innerHTML =
      '<div class="nav-wrap">' +
      '<a class="brand" href="/">' + window.SITE_CONFIG.businessName + "</a>" +
      '<button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation menu">' +
      '<span></span><span></span><span></span>' +
      "</button>" +
      '<nav id="primary-nav" class="primary-nav" aria-label="Primary">' +
      '<a href="/">Home</a>' +
      '<a href="/sms-consent/">SMS Consent</a>' +
      '<a href="/privacy/">Privacy Policy</a>' +
      '<a href="/terms/">Terms &amp; Conditions</a>' +
      '<a class="nav-cta" href="/#contact">Contact Me</a>' +
      "</nav>" +
      "</div>";

    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var isOpen = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    var c = window.SITE_CONFIG;
    el.innerHTML =
      '<div class="footer-wrap">' +
      '<div class="footer-brand">' +
      "<strong>" + c.businessName + "</strong>" +
      "<span>" + locationLine() + "</span>" +
      '<span><a href="mailto:' + c.email + '">' + c.email + "</a></span>" +
      '<span><a href="tel:' + c.phone.replace(/[^+\d]/g, "") + '">' + c.phone + "</a></span>" +
      "</div>" +
      '<nav class="footer-nav" aria-label="Footer">' +
      '<a href="/">Home</a>' +
      '<a href="/sms-consent/">SMS Consent</a>' +
      '<a href="/privacy/">Privacy Policy</a>' +
      '<a href="/terms/">Terms &amp; Conditions</a>' +
      "</nav>" +
      "</div>" +
      '<div class="footer-bottom">© ' + c.currentYear + " " + c.businessName + ". All rights reserved.</div>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
  });
})();
