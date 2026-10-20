
export function createCookieConsent() {
  return `
    <section
      id="cookie-consent"
      class="cookie-consent"
      aria-label="Analytics preferences"
      hidden
    >
      <p>
        This website uses optional analytics cookies
        to understand traffic and improve the experience.
      </p>

      <div class="cookie-consent__actions">

        <button
            type="button"
            id="cookie-privacy-policy"
            class="cookie-consent__policy"
        >
            Read Privacy Policy
        </button>
        
        <button type="button" id="reject-analytics">
          Reject
        </button>

        <button type="button" id="accept-analytics">
          Accept
        </button>

      </div>
    </section>
  `;
}