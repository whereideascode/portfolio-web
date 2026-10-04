import "@fontsource/comfortaa/600.css";
import "@fontsource/comfortaa/700.css";

import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";

import "./styles/main.scss";

import { createHeader } from "./components/header.js";
import { createAbout } from "./components/about.js";
import { createProjects } from "./components/projects.js";
import { createGoals } from "./components/goals.js";
import { createFooter } from "./components/footer.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${createHeader()}

  <main class="portfolio">
    ${createAbout()}
    ${createProjects()}
    ${createGoals()}
  </main>

  ${createFooter()}
`;