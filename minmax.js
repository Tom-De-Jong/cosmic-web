const minBtn = document.querySelector(".minimize");
const maxBtn = document.querySelector(".maximize");

minBtn.onclick = () => {
    myWindow.classList.toggle("minimized");
    if (myWindow.classList.contains("minimized")) {
        myWindow.classList.remove("maximized");
    }
};

maxBtn.onclick = () => {
    myWindow.classList.toggle("maximized");
    if (myWindow.classList.contains("maximized")) {
        myWindow.classList.remove("minimized");
    }
};