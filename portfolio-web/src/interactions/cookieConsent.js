
import {
  getAnalyticsConsent,
  saveAnalyticsConsent
} from "../analytics/analytics.js";

export function initCookieConsent() {
  const banner = document.querySelector("#cookie-consent");
  const privacyButton = document.querySelector("#privacy-settings");
  const acceptButton = document.querySelector("#accept-analytics");
  const rejectButton = document.querySelector("#reject-analytics");

  if (!banner || !acceptButton || !rejectButton) return;

  function showBanner() {
    banner.hidden = false;
  }

  function hideBanner() {
    banner.hidden = true;
  }

  function setConsent(accepted) {
    saveAnalyticsConsent(accepted);
    hideBanner();
  }

  acceptButton.addEventListener("click", () => {
    setConsent(true);
  });

  rejectButton.addEventListener("click", () => {
    setConsent(false);
  });

  privacyButton?.addEventListener("click", showBanner);

  if (getAnalyticsConsent() === null) {
    showBanner();
  }
}