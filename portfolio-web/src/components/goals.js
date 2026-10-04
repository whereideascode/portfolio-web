export function createGoals() {
  return `
    <div class="portfolio-section">
      <button
        class="nav-panel nav-panel--goals"
        type="button"
        aria-controls="goals"
        aria-expanded="false"
      >
        <span class="nav-panel__number">03</span>

        <span class="nav-panel__title">Goals</span>

        <span class="nav-panel__summary">
          Career direction · Opportunities
        </span>

        <span class="nav-panel__indicator" aria-hidden="true">+</span>
      </button>

      <section
        id="goals"
        class="panel"
        aria-labelledby="goals-title"
      >
        <h2 id="goals-title">Goals</h2>

        <section>
          <h3>Career Direction</h3>
        </section>

        <section>
          <h3>Opportunities</h3>
        </section>
      </section>
    </div>
  `;
}