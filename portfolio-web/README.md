# Portfolio Web — Carolina Ekombo

Personal developer portfolio built from scratch as part of my journey towards becoming a Full Stack Developer.

The project is designed to present who I am, what I am learning, the technologies I work with, the projects I am building and the direction I want to take as a developer.

> **Project status:** 🚧 In development
> **Live demo:** Coming soon

---

## About the project

This portfolio is both a personal website and a practical development project.

Rather than starting from a predefined template, I am designing and building the interface from scratch while applying and consolidating concepts related to frontend development, responsive design, accessibility, UX and maintainable code.

The main content is organised into three areas:

* **01 — About**
* **02 — Projects**
* **03 — Goals**

The interface is written in English so the portfolio can be easily understood by an international audience.

---

## Current features

The portfolio currently includes:

* Semantic HTML structure.
* Responsive interface following a mobile-first approach.
* Three main content areas: `About`, `Projects` and `Goals`.
* Interactive navigation between sections.
* Dedicated project presentation.
* GitHub profile integration.
* Responsive behaviour for mobile, tablet and desktop layouts.
* Keyboard-accessible interactive elements.
* Visible focus states.
* Hover interactions used as visual enhancements rather than essential controls.
* SCSS architecture for styling and responsive behaviour.
* JavaScript interactions without a frontend framework.

The project continues to evolve as I improve both its visual identity and user experience.

---

## Tech stack

The portfolio is built with:

* **HTML5**
* **SCSS / Sass**
* **Vanilla JavaScript**
* **Vite**
* **Git**
* **GitHub**

No frontend framework is used in the current version. The project intentionally uses Vanilla JavaScript to strengthen my understanding of native browser APIs, DOM interaction and frontend fundamentals.

---

## Responsive design

The interface follows a **mobile-first** approach.

Breakpoints are defined according to the needs of the content rather than targeting specific devices.

### Mobile

Content is organised vertically and interactions are designed primarily around `tap`.

The experience does not depend on hover states.

### Tablet

The layout progressively adapts to the additional available space while maintaining clear navigation and readable content.

### Desktop

The interface takes advantage of the wider viewport to provide a more structured presentation of the three main areas while keeping navigation and context visible.

---

## UX and accessibility

UX and accessibility are considered part of the development process rather than additions to be implemented at the end.

The portfolio takes into account different methods of interaction:

* **Mouse:** click interactions and optional hover microinteractions.
* **Touch:** tap-based interaction.
* **Keyboard:** interactive controls and visible focus states.

Animations and transitions are intended to provide visual feedback and orientation, but they are not required to understand or navigate the content.

Semantic HTML and responsive behaviour are also considered when making interface decisions.

---

## Design evolution

The interface has gone through several design explorations during development.

### The interactive envelope experiment

One of the first concepts used three interactive envelopes as the main navigation system for `About`, `Projects` and `Goals`.

The idea evolved through several iterations.

The initial version used CSS shapes and `clip-path` to construct the envelopes and animate their flaps and letters.

A second iteration explored custom SVG envelopes to create a more organic shape and gain greater control over the individual pieces of the illustration.

A later experimental branch introduced **GSAP** and `MorphSVGPlugin` to investigate more natural flap movement, folding effects and letter animations.

This experimentation was useful for exploring:

* SVG structure and manipulation.
* CSS transforms and perspective.
* Layering and `z-index`.
* Animation timing.
* Hover and focus interactions.
* GSAP animation.
* Responsive interaction design.
* The relationship between visual creativity and usability.

However, as the concept developed, the envelope navigation started to impose limitations on the experience I wanted for the portfolio.

The interaction was visually distinctive, but it introduced additional complexity when adapting the navigation across desktop, tablet, touch devices and keyboard interaction. It also placed too much emphasis on the navigation mechanism itself rather than on the portfolio content.

For that reason, I decided not to force the original idea into the final design.

The envelope prototype became an experiment rather than the final interface, and the project moved towards a clearer and more flexible navigation system based on the three main sections.

This process became an important part of the project: **an interesting interaction is not necessarily the right interaction for the user or for the purpose of the product.**

The experimental work has been preserved in Git branches rather than removed from the project's history.

---

## Project structure

The project currently follows a lightweight structure based on Vite:

```text
portfolio-web/
├── public/
├── src/
│   ├── main.js
│   └── ...
├── styles/
│   └── main.scss
├── index.html
├── package.json
└── README.md
```

The structure may continue to evolve as the project grows and components are reorganised.

---

## Run locally

To run the project locally, clone the repository:

```bash
git clone https://github.com/whereideascode/portfolio-web.git
```

Enter the project directory:

```bash
cd portfolio-web
```

Install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

---

## Development workflow

Git is used throughout the project to keep the development process organised and preserve experimental work.

Different branches have been used to explore ideas without affecting the main version of the project, including experiments with SVG envelopes, GSAP animations and the current portfolio redesign.

This allows unsuccessful or discarded ideas to remain part of the development history without having to become part of the final interface.

---

## Current status

🚧 **In development**

The project has progressed through:

* Initial Vite setup.
* Migration from the original React setup to Vanilla JavaScript.
* Sass / SCSS configuration.
* Semantic HTML structure.
* Initial navigation system.
* CSS envelope prototype.
* SVG envelope experimentation.
* GSAP animation experiments.
* Responsive UX exploration.
* Redesign of the main navigation.
* Development of the `About`, `Projects` and `Goals` sections.
* GitHub integration and project documentation.

---

## Roadmap

Current and upcoming work includes:

* Continue refining the visual identity.
* Improve responsive behaviour across viewport sizes.
* Refine transitions and microinteractions.
* Continue accessibility testing.
* Improve keyboard navigation where necessary.
* Add and refine project visuals.
* Review production performance.
* Complete cross-browser and responsive testing.
* Prepare the production build.
* Publish the portfolio online.
* Add the live demo to this repository.

---

## What I am learning through this project

This portfolio is also a record of my development process.

Through it I am practising and improving:

* Semantic HTML.
* SCSS architecture.
* Vanilla JavaScript.
* Responsive and mobile-first design.
* Accessibility.
* UX decision-making.
* SVG and web animation.
* Git branching and version control.
* GitHub workflows.
* Vite-based development.
* Secure web development practices.

The project will continue evolving alongside my skills.

---

## Author

**Carolina Ekombo**

Full Stack Developer in training.

GitHub: **@whereideascode**
