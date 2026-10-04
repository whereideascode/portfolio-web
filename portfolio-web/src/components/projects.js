export function createProjects() {
  return `
    <div class="portfolio-section portfolio-section--projects">
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
            <div
                class="subnav"
                role="tablist"
                aria-label="Projects"
            >
                <button
                    id="tab-tarot"
                    class="subnav__button subnav__button--active"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="tarot-content"
                    data-subnav="tarot-content"
                >
                    Tarot App
                </button>

                <button
                    id="tab-portfolio"
                    class="subnav__button"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="portfolio-content"
                    data-subnav="portfolio-content"
                    tabindex="-1"
                >
                    Portfolio
                </button>

                <button
                    id="tab-training"
                    class="subnav__button"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="training-content"
                    data-subnav="training-content"
                    tabindex="-1"
                >
                    Training Work
                </button>
            </div>


            <div
                id="tarot-content"
                class="subnav__content subnav__content--active"
                role="tabpanel"
                aria-labelledby="tab-tarot"
            >
                <p>
                    Tarot App content.
                </p>
            </div>


            <div
                id="portfolio-content"
                class="subnav__content"
                role="tabpanel"
                aria-labelledby="tab-portfolio"
                hidden
            >
                <p>
                    Portfolio content.
                </p>
            </div>


            <div
                id="training-content"
                class="subnav__content"
                role="tabpanel"
                aria-labelledby="tab-training"
                hidden
            >
                <p>
                    Training Work content.
                </p>
            </div>
        </div>
      </section>
    </div>
  `;
}