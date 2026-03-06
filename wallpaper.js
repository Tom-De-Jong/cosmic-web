function changeWallpaper(that){
    console.log("function started")
    let wallFileName = "wallpaper/" + that.id + ".png"
    console.log(wallFileName)
    document.querySelector(".desktop").style.backgroundImage = `url('${that.src}')`
}