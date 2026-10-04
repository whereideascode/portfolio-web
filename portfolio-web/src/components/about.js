export function createAbout() {
  return `
    <div class="portfolio-section portfolio-section--about">
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
            role="tablist"
            aria-label="About sections"
          >
            <button
              id="tab-who"
              class="subnav__button subnav__button--active"
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="who-content"
              data-subnav="who-content"
            >
              Who I am
            </button>

            <button
              id="tab-education"
              class="subnav__button"
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="education-content"
              data-subnav="education-content"
              tabindex="-1"
            >
              Education
            </button>

            <button
              id="tab-stack"
              class="subnav__button"
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="stack-content"
              data-subnav="stack-content"
              tabindex="-1"
            >
              Tech stack
            </button>
          </div>

          <div 
            id="who-content"
            class="subnav__content subnav__content--active"
            role="tabpanel"
            aria-labelledby="tab-who"
          >
            <p>
                I'm Carol, a <strong>web developer in training</strong> with a particular interest in understanding how applications are built and how each design and development decision shapes the final user experience.
            </p>

            <p>
                I enjoy approaching projects from their initial concept: organising information, thinking about how users will interact with the interface, developing the functionality, and refining the details to create <strong>clear, accessible and useful solutions</strong>.
            </p>

            <p>
                I learn primarily through <strong>hands-on practice and building my own projects</strong>, using them as opportunities to experiment, solve problems and turn what I learn into real applications.
            </p>

          </div>

          <div
            id="education-content"
            class="subnav__content"
            role="tabpanel"
            aria-labelledby="tab-education"
            hidden
          >
            <p>
                My background is primarily scientific, and programming has been
                part of my academic journey through languages and tools such as
                <strong>Perl, Pascal and MATLAB</strong>. Although I did not
                specialise in software development at the time, I particularly
                enjoyed the combination of logic, problem-solving and
                experimentation involved in programming.
            </p>

            <p>
                Today, I am returning to that interest through a
                <strong>mainly self-directed approach</strong>. I am deliberately
                changing the way I learn: instead of following a strictly
                bottom-up path — mastering increasingly complex exercises before
                attempting a complete application — I am also working
                <strong>from the top down</strong>, building useful web
                applications around ideas that genuinely interest me and learning
                the underlying concepts as each project requires them.
            </p>

            <p>
                This does not mean skipping the fundamentals. Quite the opposite:
                <strong>
                building something real continually exposes the gaps in my
                knowledge and gives me a reason to investigate them.
                </strong>
                The difference is that concepts are learned in context, attached
                to a problem I need to understand and solve.
            </p>

            <p>
                <strong>AI is an important part of this process.</strong>
                I use it as a learning and development tool: to explore approaches,
                ask questions, analyse errors and understand unfamiliar concepts.
                It does not always provide the shortest route, particularly when I
                do not yet have enough knowledge to recognise the best solution.
                However, investigating those wrong turns, comparing alternatives
                and understanding why one approach works better than another has
                become part of how I build the judgement needed to make increasingly
                independent technical decisions.
            </p>

            <p>
                I also use <strong>freeCodeCamp</strong> to strengthen fundamentals
                and work through structured exercises. Since beginning my own
                projects, project-based learning has become my main focus, while I
                continue returning to the curriculum as a complementary resource.
                Some of the work produced through this training is included in the
                Projects section of this portfolio.
            </p>

            <p>
                I find formal degrees and postgraduate study genuinely interesting,
                and I do not rule them out in the future. At this stage, however,
                I want to give myself room to
                <strong>explore, build and discover</strong> which areas of
                development most strongly engage my curiosity before deciding where
                to specialise further.
            </p>
          </div>

          <div
            id="stack-content"
            class="subnav__content"
            role="tabpanel"
            aria-labelledby="tab-stack"
            hidden
          >
            <div class="tech-stack">

                <section class="tech-stack__group">
                    <h2>Interface & Design</h2>

                    <p class="tech-stack__technologies">
                        <strong>HTML · CSS · Sass</strong>
                    </p>

                    <p>
                        I use these technologies to build the structure and visual
                        language of my interfaces, paying particular attention to
                        <strong>
                            responsive design, accessibility and user experience
                        </strong>.
                        I am learning to approach design not simply as appearance,
                        but as part of how a website communicates, guides interaction
                        and adapts to different users and devices.
                    </p>
                </section>

                <section class="tech-stack__group">
                    <h2>Application Development</h2>

                    <p class="tech-stack__technologies">
                        <strong>JavaScript · React · Node.js · Express · Vite</strong>
                    </p>

                    <p>
                        JavaScript is at the centre of my current development work.
                        I use it to create interaction, manage application behaviour
                        and connect the different parts of my projects.
                        <strong>
                            React, Node.js and Express
                        </strong>
                        are helping me understand how larger applications can be
                        structured, how responsibilities can be separated and how
                        information moves between different parts of an application.
                    </p>
                </section>

                <section class="tech-stack__group">
                    <h2>Data</h2>

                    <p class="tech-stack__technologies">
                        <strong>SQLite · better-sqlite3</strong>
                    </p>

                    <p>
                        I use relational databases in my projects to learn how
                        applications can
                        <strong>
                        model, store, organise and retrieve persistent information
                        </strong>.
                        Working with SQLite allows me to connect application logic
                        with structured data while developing a practical understanding
                        of database design.
                    </p>
                </section>

                <section class="tech-stack__group">
                    <h2>Tools & Workflow</h2>

                    <p class="tech-stack__technologies">
                        <strong>Git · GitHub · VS Code · npm</strong>
                    </p>

                    <p>
                        These tools are part of my everyday development workflow.
                        I use Git and GitHub to
                        <strong>
                        work incrementally, experiment safely and maintain a clear
                        history of the decisions behind a project
                        </strong>.
                        VS Code and npm form part of the environment I use to organise,
                        develop and maintain my applications.
                    </p>
                </section>

            </div>
          </div>

        </div>
      </section>
    </div>
  `;
}