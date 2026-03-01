function openTexteditor() {
    document.querySelector("#textEditor").className = "app appanim"
    document.querySelector("#textEditor").style.display = "block";

    setTimeout(() =>
        document.querySelector("#textEditor").className = "app"
        , 500)
}

function openTerminal() {
    document.querySelector("#terminal").className = "app appanim"
    document.querySelector("#terminal").style.display = "block";

    setTimeout(() =>
        document.querySelector("#terminal").className = "app"
        , 500)
}

function openStore() {
    document.querySelector("#store").className = "app appanim"
    document.querySelector("#store").style.display = "block";

    setTimeout(() =>
        document.querySelector("#store").className = "app"
        , 500)
}


