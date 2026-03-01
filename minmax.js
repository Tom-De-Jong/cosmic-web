document.addEventListener("click", (e) => {
    const btn = e.target;
    const appWindow = btn.closest(".app");

    if (!appWindow) return;

    if (btn.classList.contains("minimize")) {
        appWindow.classList.toggle("minimized");
        if (appWindow.classList.contains("minimized")) {
            appWindow.classList.remove("maximized");
        }
    }

    if (btn.classList.contains("maximize")) {
        appWindow.classList.toggle("maximized");
        if (appWindow.classList.contains("maximized")) {
            appWindow.classList.remove("minimized");
        }
    }
});