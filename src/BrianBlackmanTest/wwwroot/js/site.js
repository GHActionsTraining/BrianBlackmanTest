// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

(function () {
  var THEME_STORAGE_KEY = "theme";

  function getPreferredTheme() {
    var storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function updateToggleButton(theme) {
    var toggleButton = document.getElementById("theme-toggle");
    if (!toggleButton) {
      return;
    }

    var isDark = theme === "dark";
    toggleButton.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    toggleButton.setAttribute("aria-pressed", isDark.toString());
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateToggleButton(theme);
  }

  function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTheme(getPreferredTheme());

    var toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
      toggleButton.addEventListener("click", toggleTheme);
    }
  });
})();
