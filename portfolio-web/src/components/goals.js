export function createGoals() {
  return `
    <div class="portfolio-section portfolio-section--goals">
      <button
        class="nav-panel nav-panel--goals"
        type="button"
        aria-controls="goals"
        aria-expanded="false"
      >
        <span class="nav-panel__heading">
            <span class="nav-panel__number">03</span>
            <span class="nav-panel__title">Goals</span>
        </span>

        <span class="nav-panel__summary">
          Career direction · Opportunities
        </span>

        <span class="nav-panel__indicator" aria-hidden="true">+</span>
      </button>

      <section
        id="goals"
        class="panel"
      >
        <div class="panel__content">
            <div
                class="subnav"
                role="tablist"
                aria-label="Goals"
            >
                <button
                    id="tab-career"
                    class="subnav__button subnav__button--active"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="career-content"
                    data-subnav="career-content"
                >
                    Career Direction
                </button>

                <button
                    id="tab-opportunities"
                    class="subnav__button"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="opportunities-content"
                    data-subnav="opportunities-content"
                    tabindex="-1"
                >
                    Opportunities
                </button>
            </div>


            <div
                id="career-content"
                class="subnav__content subnav__content--active"
                role="tabpanel"
                aria-labelledby="tab-career"
            >
                <p>
                    Career Direction content.
                </p>
            </div>


            <div
                id="opportunities-content"
                class="subnav__content"
                role="tabpanel"
                aria-labelledby="tab-opportunities"
                hidden
            >
                <p>
                    Opportunities content.
                </p>
            </div>
        </div>    
      </section>
    </div>
  `;
}