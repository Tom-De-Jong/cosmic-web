const myWindow = document.querySelector(".app");
const myHeader = document.querySelector(".appNav");

dragElement(myWindow, myHeader);

function dragElement(target, handle) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    handle.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let newTop = target.offsetTop - pos2;
        let newLeft = target.offsetLeft - pos1;

        let maxLeft = window.innerWidth - target.offsetWidth;
        let maxTop = window.innerHeight - target.offsetHeight;

        if (newTop < 0) newTop = 0;
        if (newLeft < 0) newLeft = 0;
        if (newTop > maxTop) newTop = maxTop;
        if (newLeft > maxLeft) newLeft = maxLeft;

        target.style.top = newTop + "px";
        target.style.left = newLeft + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}