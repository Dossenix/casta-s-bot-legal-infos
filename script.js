const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".policy-panel");

function showPanel(targetId, updateHash = true) {
  const targetPanel = document.getElementById(targetId);

  if (!targetPanel) {
    return;
  }

  panels.forEach((panel) => {
    const isTarget = panel.id === targetId;
    panel.hidden = !isTarget;
    panel.classList.toggle("is-visible", isTarget);
  });

  tabButtons.forEach((button) => {
    const isActive = button.dataset.target === targetId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (updateHash) {
    history.replaceState(null, "", `#${targetId}`);
  }
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showPanel(button.dataset.target);
  });
});

window.addEventListener("hashchange", () => {
  const targetId = window.location.hash.replace("#", "") || "terms";
  showPanel(targetId, false);
});

showPanel(window.location.hash.replace("#", "") || "terms", false);
