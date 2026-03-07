let globalUsername;

document.querySelector(".Tom-De-JongName").addEventListener("click", () => {
    document.querySelector(".username").innerHTML = 'Tom de Jong'
    globalUsername = "Tom-De-Jong"
    document.querySelector(".terminalSpan").innerHTML = "[Tom-de-Jong@archlinux ~]$ "
})

document.querySelector(".MeowzerName").addEventListener("click", () => {
    document.querySelector(".username").innerHTML = 'Meowzer'
    globalUsername = "Meowzer"
    document.querySelector(".terminalSpan").innerHTML = "[Meowzer@archlinux ~]$ "
})