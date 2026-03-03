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
    } else if (value === "ls") {
        currentSpan.innerHTML += "spacegame school personal-projects<br>";
        input.remove();
    } else if (value === "cd spacegame") {
        currentSpan.innerHTML += "theres no game muhahahha you got tricked!<br>";
        input.remove();
    } else if (value === "cd school") {
        currentSpan.innerHTML += "don't even bother looking here trust me its all boring stuff.<br>";
        input.remove();
    } else if (value === "personal-projects") {
        currentSpan.innerHTML += "https://github.com/Tom-De-Jong<br>";
        input.remove();
    } else if (value.includes("sudo")) {
        currentSpan.innerHTML += "Did you just try sudo? Goodluck lol<br>";
        input.remove();
    } else if (value === "dih") {
        currentSpan.innerHTML += "https://portfolio.rupnil.codes/<br>";
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