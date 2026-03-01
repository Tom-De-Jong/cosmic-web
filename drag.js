const apps = document.querySelectorAll(".app");

apps.forEach((app) => {
    const header = app.querySelector(".appNav");

    if (header) {
        dragElement(app, header);
    }
});

function dragElement(target, handle) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    handle.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        if (getComputedStyle(target).display === "none") return;

        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let newTop = target.offsetTop - pos2;
        let newLeft = target.offsetLeft - pos1;

        let maxLeft = window.innerWidth - target.offsetWidth;
        let maxTop = window.innerHeight - target.offsetHeight;

        target.style.top = Math.max(0, Math.min(newTop, maxTop)) + "px";
        target.style.left = Math.max(0, Math.min(newLeft, maxLeft)) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}