export function createProjects() {
  return `
    <div class="portfolio-section">
      <button
        class="nav-panel nav-panel--projects"
        type="button"
        aria-controls="projects"
        aria-expanded="false"
      >
        <span class="nav-panel__heading">
            <span class="nav-panel__number">02</span>
            <span class="nav-panel__title">Projects</span>
        </span>

        <span class="nav-panel__summary">
          Tarot App · Portfolio · Training work
        </span>

        <span class="nav-panel__indicator" aria-hidden="true">+</span>
      </button>

      <section
        id="projects"
        class="panel"
      >
        <div class="panel__content">
            <article>
                <h2>Tarot App</h2>
            </article>

            <article>
                <h2>Portfolio</h2>
            </article>

            <article>
                <h2>Training Work</h2>
            </article>
        </div>
      </section>
    </div>
  `;
}