export function initScrollTop() {
  const scrollTopButton = document.querySelector(".scroll-top");

  if (!scrollTopButton) return;

  const updateScrollTopButton = () => {
    const shouldShow = window.scrollY > 400;

    scrollTopButton.classList.toggle(
      "scroll-top--visible",
      shouldShow
    );
  };

  scrollTopButton.addEventListener("click", () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });

  window.addEventListener("scroll", updateScrollTopButton, {
    passive: true,
  });

  updateScrollTopButton();
}