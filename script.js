const themeSwitch = document.querySelector("#dark_mode_switch");
const modeLabel = document.querySelector("#mode_label");
const modeIcon = document.querySelector("#mode_icon");
const savedTheme = localStorage.getItem("todo-theme");
const initialTheme = savedTheme === "light" ? "light" : "dark";

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeSwitch.checked = theme === "dark";
    modeLabel.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    modeIcon.className = `fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`;
    themeSwitch.setAttribute("aria-label", `Switch to ${modeLabel.textContent.toLowerCase()}`);
}

applyTheme(initialTheme);

themeSwitch.addEventListener("change", () => {
    const theme = themeSwitch.checked ? "dark" : "light";
    applyTheme(theme);
    localStorage.setItem("todo-theme", theme);
});