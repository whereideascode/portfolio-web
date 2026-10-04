export function initSubnav() {
  const tablists = document.querySelectorAll('[role="tablist"]');

  tablists.forEach((tablist) => {
    const buttons = Array.from(
      tablist.querySelectorAll('[role="tab"]')
    );

    function selectTab(selectedButton) {
      const contentId = selectedButton.getAttribute("aria-controls");
      const selectedContent = document.getElementById(contentId);

      buttons.forEach((button) => {
        const panelId = button.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);

        button.classList.remove("subnav__button--active");
        button.setAttribute("aria-selected", "false");
        button.setAttribute("tabindex", "-1");

        panel.classList.remove("subnav__content--active");
        panel.hidden = true;
      });

      selectedButton.classList.add("subnav__button--active");
      selectedButton.setAttribute("aria-selected", "true");
      selectedButton.removeAttribute("tabindex");

      selectedContent.classList.add("subnav__content--active");
      selectedContent.hidden = false;
    }

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        selectTab(button);
      });

      button.addEventListener("keydown", (event) => {
        let newIndex;

        switch (event.key) {
          case "ArrowRight":
            newIndex = (index + 1) % buttons.length;
            break;

          case "ArrowLeft":
            newIndex = (index - 1 + buttons.length) % buttons.length;
            break;

          case "Home": //Mac Fn + Left Arrow
            newIndex = 0;
            break;

          case "End": //Mac Fn + Right Arrow
            newIndex = buttons.length - 1;
            break;

          default:
            return;
        }

        event.preventDefault();

        const newButton = buttons[newIndex];

        newButton.focus();
        selectTab(newButton);
      });
    });
  });
}

export function resetSubnav(container) {
  const tablist = container.querySelector('[role="tablist"]');

  if (!tablist) return;

  const buttons = Array.from(
    tablist.querySelectorAll('[role="tab"]')
  );

  if (buttons.length === 0) return;

  const firstButton = buttons[0];

  buttons.forEach((button) => {
    const panelId = button.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    button.classList.remove("subnav__button--active");
    button.setAttribute("aria-selected", "false");
    button.setAttribute("tabindex", "-1");

    panel.classList.remove("subnav__content--active");
    panel.hidden = true;
  });

  const firstPanelId = firstButton.getAttribute("aria-controls");
  const firstPanel = document.getElementById(firstPanelId);

  firstButton.classList.add("subnav__button--active");
  firstButton.setAttribute("aria-selected", "true");
  firstButton.removeAttribute("tabindex");

  firstPanel.classList.add("subnav__content--active");
  firstPanel.hidden = false;
}