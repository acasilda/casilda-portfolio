
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        document.documentElement.setAttribute("data-theme", "light");

        themeButton.textContent = "🌙";
        themeButton.setAttribute("aria-label", "Switch to dark mode");

    } else {

        document.documentElement.setAttribute("data-theme", "dark");

        themeButton.textContent = "☀️";
        themeButton.setAttribute("aria-label", "Switch to light mode");

    }

});
