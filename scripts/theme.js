let toggle = document.querySelector(".light-toggle");

// Get the theme from local storage or user preference
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
}
else {
    storedTheme = "light";
}

toggle.addEventListener("click", function() {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "dark";

    if (currentTheme === "dark") {
        targetTheme = "light";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);

    }
)
