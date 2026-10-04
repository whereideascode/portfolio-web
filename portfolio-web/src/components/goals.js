export function createGoals() {
  return `
    <div class="portfolio-section">
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
            <section>
                <h2>Career Direction</h2>
            </section>

            <section>
                <h2>Opportunities</h2>
            </section>
         </div>
      </section>
    </div>
  `;
}