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
        aria-labelledby="projects-title"
      >
        <div class="panel__content">
          <h2 id="projects-title">Projects</h2>

            <article>
                <h3>Tarot App</h3>
            </article>

            <article>
                <h3>Portfolio</h3>
            </article>

            <article>
            <h3>Training Work</h3>
            </article>
        </div>
      </section>
    </div>
  `;
}