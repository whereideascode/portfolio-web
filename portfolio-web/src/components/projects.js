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
                <article class="project-detail">

                    <header class="project-detail__header">
                        <p class="project-detail__type">
                            Interactive tarot reading web application
                        </p>

                        <p class="project-detail__status">
                            In development
                        </p>
                    </header>

                    <section class="project-detail__section">
                        <h2>Overview</h2>

                        <p>
                            Tarot App is a personal project focused on building an
                            <strong>interactive tarot reading experience</strong>.
                            Users will be able to choose the subject of their question,
                            select different types of spreads and receive an interpretation
                            based on the cards drawn and the context of the reading.
                        </p>

                        <p>
                            The project started as an exploration of how an idea could be
                            transformed into a complete web application and has gradually
                            become one of the main environments in which I
                            <strong>
                            learn, experiment and put new concepts into practice
                            </strong>.
                        </p>
                    </section>

                    <section class="project-detail__section">
                        <h2>Why I built it</h2>

                        <p>
                            I wanted to work on a project that was complex enough to require
                            more than an interface, while also being connected to a subject
                            that genuinely interests me.
                        </p>

                        <p>
                            Building the application allows me to work with
                            <strong>
                            user interaction, application logic, structured data and
                            communication between different parts of a system
                            </strong>
                            within a single project.
                        </p>
                    </section>

                    <section class="project-detail__section">
                        <h2>Technologies</h2>

                        <p class="project-detail__technologies">
                            <strong>
                            React · Vite · Node.js · Express · SQLite · better-sqlite3
                            </strong>
                        </p>

                        <p>
                            Each technology has been introduced to
                            <strong>solve a practical need within the application</strong>,
                            rather than simply to add another tool to the stack.
                        </p>
                    </section>

                    <section class="project-detail__section">
                        <h2>Current development</h2>

                        <p>
                            The application currently includes the foundations for
                            <strong>
                            categorising questions by area and topic, managing different
                            tarot spreads and storing tarot card information in a
                            relational database
                            </strong>.
                        </p>

                        <p>
                            The project is being developed incrementally, with new
                            functionality added as the underlying concepts and requirements
                            become clearer.
                        </p>
                    </section>

                    <section class="project-detail__section">
                        <h2>What I'm learning</h2>

                        <p>
                            This project is helping me understand how an application grows
                            beyond its visual interface: how data is structured, how
                            different responsibilities can be separated, how an interface
                            communicates with application logic and how technical decisions
                            affect the experience of the person using it.
                        </p>

                        <p>
                            It is also teaching me to
                            <strong>
                            revisit earlier decisions, refactor when necessary and treat
                            development as an iterative process
                            </strong>,
                            rather than expecting the first solution to be the final one.
                        </p>
                    </section>

                    <footer class="project-detail__links">
                        <p>
                            <strong>Source code</strong>
                            <span>· Coming soon</span>
                        </p>

                        <p>
                            <strong>Live demo</strong>
                            <span>· In development</span>
                        </p>
                    </footer>

                </article>
            </div>


            <div
                id="portfolio-content"
                class="subnav__content"
                role="tabpanel"
                aria-labelledby="tab-portfolio"
                hidden
            >
                <article class="project-detail">

                    <header class="project-detail__header">
                        <p class="project-detail__type">
                            Personal developer portfolio
                        </p>

                        <p class="project-detail__status">
                            In development
                        </p>
                    </header>

                    <section class="project-detail__section">
                        <h2>Overview</h2>

                        <p>
                            This portfolio is both a
                            <strong>professional presentation and an ongoing development project</strong>.
                            I am building it from scratch to present my work, learning process and
                            professional direction while applying the same principles I want to
                            develop in larger applications.
                        </p>

                        <p>
                            Rather than starting from a predefined template, I use the project to
                            explore how <strong>structure, interaction, typography and visual hierarchy</strong>
                            can work together to create a clear and distinctive experience.
                        </p>
                    </section>

                    <section class="project-detail__section">
                        <h2>Design approach</h2>

                        <p>
                            The design has evolved through experimentation. Some early concepts
                            introduced more complex visual interactions, but testing them helped me
                            recognise when an idea was adding complexity without improving the
                            experience.
                        </p>

                        <p>
                            The current direction deliberately prioritises
                            <strong>clarity, accessibility and purposeful interaction</strong>.
                            The three main areas — About, Projects and Goals — act as the visual
                            foundation of the interface, while secondary navigation keeps detailed
                            information organised without overwhelming the page.
                        </p>
                    </section>

                    <section class="project-detail__section">
                        <h2>Technologies</h2>

                        <p class="project-detail__technologies">
                            <strong>
                            HTML · Sass · JavaScript · Vite · Git · GitHub
                            </strong>
                        </p>

                        <p>
                            I chose to build the portfolio with
                            <strong>vanilla JavaScript rather than a UI framework</strong>
                            so that I can work directly with the document structure, browser APIs
                            and interaction logic while strengthening my understanding of the
                            fundamentals behind web interfaces.
                        </p>
                    </section>

                    <section class="project-detail__section">
                        <h2>Accessibility & UX</h2>

                        <p>
                            Accessibility and user experience are part of the design process rather
                            than additions made at the end. The interface is designed to work with
                            <strong>keyboard navigation, visible focus states and accessible tab behaviour</strong>,
                            while responsive layouts allow the content to adapt to different
                            available widths.
                        </p>

                        <p>
                            The visual system also supports the user's preferred light or dark
                            colour scheme, and typography, spacing and contrast are considered as
                            functional parts of readability and navigation.
                        </p>
                    </section>

                    <section class="project-detail__section">
                        <h2>What I'm learning</h2>

                        <p>
                            Building the portfolio is teaching me that interface development is not
                            simply about making individual elements look good. Decisions about
                            structure, spacing, interaction and content affect one another and need
                            to be considered as part of the same system.
                        </p>

                        <p>
                            It has also become an exercise in
                            <strong>iteration and technical decision-making</strong>:
                            experimenting with ideas, identifying what does not work, simplifying
                            when necessary and gradually turning those decisions into reusable
                            components and patterns.
                        </p>
                    </section>

                    <footer class="project-detail__links">
                        <p>
                            <a
                                class="project-detail__link"
                                href="https://github.com/whereideascode/portfolio-web"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>Source code</strong>
                                <span>· GitHub ↗</span>
                            </a>
                        </p>

                        <p>
                            <strong>Live demo</strong>
                            <span>· Coming soon</span>
                        </p>
                    </footer>

                </article>
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