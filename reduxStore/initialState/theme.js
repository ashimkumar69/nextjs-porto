export let initialThemeFromLocalStorage;
if (typeof window !== "undefined") {
  initialThemeFromLocalStorage = localStorage.getItem("themeLight")
    ? JSON.parse(localStorage.getItem("themeLight"))
    : true;
}
