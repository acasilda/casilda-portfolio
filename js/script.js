
// Select theme button
const themeButton = document.getElementById("theme-toggle");

// Check saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

// Apply saved theme
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
} else {
    document.documentElement.setAttribute("data-theme", "light");
}

// Update button icon and accessibility label
function updateThemeButton(theme) {

    if (theme === "dark") {
        themeButton.textContent = "☀️";
        themeButton.setAttribute(
            "aria-label",
            "Switch to light mode"
        );
    } else {
        themeButton.textContent = "🌙";
        themeButton.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );
    }
}

// Initial button setup
updateThemeButton(
    document.documentElement.getAttribute("data-theme")
);

// Theme toggle
themeButton.addEventListener("click", function () {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark" ? "light" : "dark";

    // Apply new theme
    document.documentElement.setAttribute(
        "data-theme",
        newTheme
    );

    // Save theme
    localStorage.setItem("portfolio-theme", newTheme);

    // Update button
    updateThemeButton(newTheme);

});
