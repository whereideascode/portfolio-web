
const CONSENT_KEY = "portfolio-analytics-consent";

const analyticsId = document.querySelector(
  'meta[name="google-analytics-id"]'
)?.content;

let analyticsLoaded = false;

export function getAnalyticsConsent() {
  return localStorage.getItem(CONSENT_KEY);
}

function disableAnalytics() {
  if (!analyticsId) return;

  window[`ga-disable-${analyticsId}`] = true;
}

function deleteAnalyticsCookies() {
  const cookies = document.cookie.split(";");

  cookies.forEach((cookie) => {
    const name = cookie.split("=")[0].trim();

    if (name === "_ga" || name.startsWith("_ga_")) {
      document.cookie =
        `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    }
  });
}

export function enableAnalytics() {
  if (!analyticsId) return;

  window[`ga-disable-${analyticsId}`] = false;

  if (analyticsLoaded) return;

  analyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", analyticsId);

  const script = document.createElement("script");
  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;

  document.head.appendChild(script);
}

export function saveAnalyticsConsent(accepted) {
  localStorage.setItem(
    CONSENT_KEY,
    accepted ? "accepted" : "rejected"
  );

  if (accepted) {
    enableAnalytics();
  } else {
    disableAnalytics();
    deleteAnalyticsCookies();
  }
}

export function initAnalytics() {
  disableAnalytics();

  if (getAnalyticsConsent() === "accepted") {
    enableAnalytics();
  }
}