export function createScrollTop() {
  return `
    <button
      class="scroll-top"
      type="button"
      aria-label="Back to top"
      title="Back to top"
    >
      <span aria-hidden="true">↑</span>
    </button>
  `;
}