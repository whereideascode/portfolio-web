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

                <div class="goals-content">

                    <header class="goals-content__intro">
                        <p class="goals-content__eyebrow">
                            Career Direction
                        </p>
                    </header>

                    <div class="goals-content__body">
                        <p>
                            My goal is to grow into a developer capable of building
                            <strong>complete web applications that are useful, accessible and adaptable
                            across different devices and user needs</strong>. I am interested not only
                            in how an application is programmed, but in how all the decisions around it
                            contribute to the quality of the final experience.
                        </p>

                        <p>
                            I want to develop a broader understanding of the web: from application
                            structure, interaction and data to
                            <strong>accessibility, responsive design, performance and discoverability</strong>.
                            This includes learning how websites and applications can be structured and
                            optimised for traditional search engines as well as for emerging forms of
                            search and discovery through AI-powered systems.
                        </p>

                        <p>
                            I am also interested in the analytical side of digital products:
                            understanding how people find and use an application, interpreting traffic
                            and behavioural data, and using that information to
                            <strong>identify problems, evaluate decisions and improve the product over time</strong>.
                        </p>

                        <p>
                            I am currently building these skills from the fundamentals, while gradually
                            expanding the range of tools and technologies I can work with. My long-term
                            direction is therefore not tied to mastering one particular technology, but
                            to developing the technical judgement needed to
                            <strong>choose appropriate solutions as the web continues to evolve</strong>.
                        </p>
                    </div>
                </div>
            </div>


            <div
                id="opportunities-content"
                class="subnav__content"
                role="tabpanel"
                aria-labelledby="tab-opportunities"
                hidden
            >

                <div class="goals-content">

                    <header class="goals-content__intro">
                        <p class="goals-content__eyebrow">
                            Opportunities
                        </p>
                    </header>

                    <div class="goals-content__body">

                        <p>
                            I am interested in opportunities to
                            <strong>contribute to meaningful and challenging web projects</strong>
                            where I can continue developing these skills in a practical environment.
                            I am particularly drawn to projects that consider the application as a
                            complete product rather than focusing exclusively on its implementation.
                        </p>

                        <p>
                            I would like to collaborate on work where questions such as
                            <strong>accessibility, responsive behaviour, usability, performance,
                            discoverability and continuous improvement</strong>
                            are part of the development process, and where technical decisions are
                            connected to the needs of the people who will ultimately use the product.
                        </p>

                        <p>
                            I am also looking for environments where I can
                            <strong>learn from other developers, contribute my own perspective and take
                            on progressively more complex challenges</strong>.
                            As web development continues to evolve, I want to remain open to new tools
                            and approaches that can make applications more effective, maintainable and
                            useful.
                        </p>

                        <p>
                            Whether through a junior role, a collaborative project or another
                            opportunity to build something real, I am interested in work that allows me
                            to <strong>learn by contributing and contribute while learning</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>    
      </section>
    </div>
  `;
}