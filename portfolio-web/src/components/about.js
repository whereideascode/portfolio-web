export function createAbout() {
  return `
    <div class="portfolio-section">
      <button
        class="nav-panel nav-panel--about"
        type="button"
        aria-controls="about"
        aria-expanded="false"
      >
        <span class="nav-panel__number">01</span>

        <span class="nav-panel__title">About</span>

        <span class="nav-panel__summary">
          Who I am · Education · Tech stack
        </span>

        <span class="nav-panel__indicator" aria-hidden="true">+</span>
      </button>

      <section
        id="about"
        class="panel"
        aria-labelledby="about-title"
      >
        <h2 id="about-title">About</h2>

        <section>
          <h3>Who I am</h3>
        </section>

        <section>
          <h3>Education</h3>
        </section>

        <section>
          <h3>Tech stack</h3>
        </section>
      </section>
    </div>
  `;
}