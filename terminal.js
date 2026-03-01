document.querySelector(".term-container").addEventListener("click", () => {
    document.querySelector(".terminalInput").focus();
});

document.querySelector(".term-container").addEventListener('keyup', function (e) {
    if (!e.target.classList.contains("terminalInput")) return;
    if (e.key !== 'Enter') return;

    const input = e.target;
    const value = input.value.trim();
    const allSpans = document.querySelectorAll(".terminalSpan");
    const currentSpan = allSpans[allSpans.length - 1];

    currentSpan.innerHTML += value + "<br>";

    if (value === "clear") {
        document.querySelectorAll(".terminalSpan").forEach(s => s.remove());
        input.remove();
    } else if (value === "dih") {
        currentSpan.innerHTML += "woah why?<br>";
        input.remove();
    } else if (value !== "") {
        currentSpan.innerHTML += `command not found: ${value}<br>`;
        input.remove();
    } else {
        input.remove();
    }

    const newSpan = document.createElement("span");
    newSpan.className = "terminalSpan";
    newSpan.innerHTML = "[Tom-de-Jong@archlinux ~]$ ";
    document.querySelector(".term-container").appendChild(newSpan);

    const newInput = document.createElement("input");
    newInput.className = "terminalInput";
    newInput.type = "text";
    document.querySelector(".term-container").appendChild(newInput);
    newInput.focus();
});