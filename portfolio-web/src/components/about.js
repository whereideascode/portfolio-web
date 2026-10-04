export function createAbout() {
  return `
    <div class="portfolio-section">
      <button
        class="nav-panel nav-panel--about"
        type="button"
        aria-controls="about"
        aria-expanded="false"
      >
        <span class="nav-panel__heading">
            <span class="nav-panel__number">01</span>
            <span class="nav-panel__title">About</span>
        </span>

        <span class="nav-panel__summary">
          Who I am · Education · Tech stack
        </span>

        <span class="nav-panel__indicator" aria-hidden="true">+</span>
      </button>

      <section
        id="about"
        class="panel"
      >
        <div class="panel__content">
            <section>
                <h2>Who I am</h2>
            </section>

            <section>
                <h2>Education</h2>
            </section>

            <section>
                <h2>Tech stack</h2>
            </section>
        </div>
      </section>
    </div>
  `;
}