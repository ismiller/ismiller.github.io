const theme = localStorage.getItem("pref-theme");
const root = document.documentElement;

if (theme === "dark" || theme === "light") {
    root.classList.add(theme);
    root.classList.remove(theme === "dark" ? "light" : "dark");
}
