function login(){
document.querySelector(".loginCard").className = "loginCard swipeDown";
setTimeout(() => {
document.querySelector(".loginScreen").style.display = "none"
document.querySelector(".desktop").style.display = "block";
}, 1000);

}