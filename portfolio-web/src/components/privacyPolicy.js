
export function createPrivacyPolicy() {
  return `
    <dialog
      id="privacy-policy"
      class="privacy-policy"
      aria-labelledby="privacy-policy-title"
    >
      <h2 id="privacy-policy-title">
        Privacy & Cookie Policy
      </h2>

      <p>
        This portfolio uses Google Analytics 4,
        provided by Google, to understand how
        visitors interact with the website.
      </p>

      <h3>Analytics data</h3>
      <p>
        With your consent, analytics may collect
        information such as pages visited, device
        information, approximate location and
        interactions with the website.
      </p>

      <h3>Analytics cookies</h3>
      <p>
        Google Analytics may use cookies such as
        _ga and _ga_* to distinguish visitors
        and maintain session information.
      </p>

      <h3>Your choices</h3>
      <p>
        Analytics is optional. You can accept or
        reject it and change your choice at any
        time using Privacy Settings in the footer.
      </p>

      <p>
        Learn more in
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google's Privacy Policy
        </a>.
      </p>

      <button
        type="button"
        id="close-privacy-policy"
        class="privacy-policy__close"
      >
        Close privacy policy
      </button>
    </dialog>
  `;
}