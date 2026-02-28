function invert() {
    console.log("inverted")
    if (document.body.style.filter === "invert(1)") {
        document.body.style.filter = "invert(0)";
    } else {
        document.body.style.filter = "invert(1)";
    }
}

function magnify() {
    if (document.body.style.transform === "scale(1.5)") {
        document.body.style.transform = "scale(1)";
    } else {
        document.body.style.transform = "scale(1.5)";
    }
}


function contrast() {
    console.log("contrasted");
    if (document.body.style.filter === "contrast(4)") {
        document.body.style.filter = "contrast(1)";
    } else {
        document.body.style.filter = "contrast(4)";
    }
}

function screenreader(){
    alert("Sorry screenreader is not available because it would be useless in this project and too lazy to implement it <- this is the real reason. Please try the other ones! They work!!!")
}

function turnOff(){
    document.querySelector(".poweredOff").style.display = "block";
}

document.querySelector(".poweredOff").addEventListener("click", () => {
    document.querySelector(".poweredOff").style.display = "none";
})