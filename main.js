(function() {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark-mode");
    }
})();

function toggleTheme() {
    const html = document.documentElement;
    const isDarkMode = html.classList.toggle("dark-mode");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    const modeIcon = document.getElementById("mode-icon");
    if (modeIcon) {
        modeIcon.src = isDarkMode ? "pic/sun.png" : "pic/moon.png";
    }
}

function setThemeBasedOnPreference() {
    const savedTheme = localStorage.getItem("theme") || "light";
    const html = document.documentElement;
    const isDarkMode = savedTheme === "dark";
    html.classList.toggle("dark-mode", isDarkMode);

    const modeIcon = document.getElementById("mode-icon");
    if (modeIcon) {
        modeIcon.src = isDarkMode ? "pic/sun.png" : "pic/moon.png";
    }
}

function animateProfileImage() {
    const profileImage = document.getElementById("profile-image");
    if (profileImage) {
        profileImage.classList.add("bounce");
    }
}

function initialize() {
    setThemeBasedOnPreference();

    const themeToggleButton = document.getElementById("theme-toggle");
    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", toggleTheme);
    }
    animateProfileImage();
}

document.addEventListener("DOMContentLoaded", initialize);