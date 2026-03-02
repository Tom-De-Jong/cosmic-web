function playSong() {
    console.log("clicked");
    const song = document.querySelector(".coolSong");
    const playIcon = document.querySelector(".playIcon");

    if (song.paused) {
        song.play();
        playIcon.src = "icons/pause.png";
    } else {
        song.pause();
        playIcon.src = "icons/play.png";
    }
}