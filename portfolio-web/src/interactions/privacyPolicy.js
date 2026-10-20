
export function initPrivacyPolicy() {
  const dialog = document.querySelector("#privacy-policy");

  const openButtons = document.querySelectorAll(
    "#open-privacy-policy, #cookie-privacy-policy"
  );

  const closeButton = document.querySelector(
    "#close-privacy-policy"
  );

  if (!dialog || !closeButton) return;

  let previousFocus = null;

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      previousFocus = button;
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("close", () => {
    if (previousFocus?.isConnected) {
      previousFocus.focus();
    }
  });
}