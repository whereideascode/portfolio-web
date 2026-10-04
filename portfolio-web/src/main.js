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

const navPanels = document.querySelectorAll(".nav-panel");
const panels = document.querySelectorAll(".panel");

navPanels.forEach((button) => {
  button.addEventListener("click", () => {
    const panelId = button.getAttribute("aria-controls");
    const selectedPanel = document.getElementById(panelId);

    const isOpen = button.getAttribute("aria-expanded") === "true";

    if (isOpen) {
        closePanels();
        return;
    }

    const currentPanel = document.querySelector(".panel--active");

    if (currentPanel) {
        switchPanel(button, selectedPanel, currentPanel);
        return;
    }

    openPanel(button, selectedPanel);
  });
});

function openPanel(selectedButton, selectedPanel) {
  navPanels.forEach((button) => {
    button.classList.add("nav-panel--compact");
    button.setAttribute("aria-expanded", "false");

    const indicator = button.querySelector(".nav-panel__indicator");
    indicator.textContent = "+";
  });

  panels.forEach((panel) => {
    panel.classList.remove("panel--active");
  });

  selectedButton.setAttribute("aria-expanded", "true");

  const selectedIndicator = selectedButton.querySelector(
    ".nav-panel__indicator"
  );

  selectedIndicator.textContent = "−";

  selectedPanel.classList.add("panel--active");
}

function closePanels() {
  navPanels.forEach((button) => {
    button.classList.remove("nav-panel--compact");
    button.setAttribute("aria-expanded", "false");

    const indicator = button.querySelector(".nav-panel__indicator");
    indicator.textContent = "+";
  });

  panels.forEach((panel) => {
    panel.classList.remove("panel--active");
  });
}

function switchPanel(selectedButton, selectedPanel, currentPanel) {
  currentPanel.classList.remove("panel--active");

  setTimeout(() => {
    openPanel(selectedButton, selectedPanel);
  }, 350);
}