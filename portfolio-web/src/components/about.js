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

          <div
            class="subnav"
            aria-label="About sections"
          >
            <button
              class="subnav__button subnav__button--active"
              type="button"
            >
              Who I am
            </button>

            <button
              class="subnav__button"
              type="button"
            >
              Education
            </button>

            <button
              class="subnav__button"
              type="button"
            >
              Tech stack
            </button>
          </div>

          <div class="subnav__content">
            <p>
              Soy Carol, desarrolladora web en formación, con especial interés en entender cómo se construyen las aplicaciones y cómo cada decisión de diseño y programación influye en la experiencia final.
            </p>
            <p>
              Me gusta abordar los proyectos desde su planteamiento inicial: organizar la información, pensar cómo interactuará el usuario con la interfaz, desarrollar la funcionalidad y refinar los detalles hasta conseguir soluciones claras, accesibles y útiles.
            </p>
            <p>
              Aprendo principalmente a través de la práctica y del desarrollo de proyectos propios, que utilizo para experimentar, resolver problemas y convertir lo aprendido en aplicaciones reales.
            </p>
          </div>

        </div>
      </section>
    </div>
  `;
}