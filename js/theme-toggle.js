const themeToggleButtons = [
    document.getElementById("theme-toggle"),
    document.getElementById("theme-toggle-burger")
];

themeToggleButtons.forEach(btn => {
    if (btn) btn.addEventListener("click", toggleTheme);
});

function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";

    root.classList.remove(isDark ? "dark" : "light");
    root.classList.add(newTheme);
    localStorage.setItem("pref-theme", newTheme);
}