function login(){
document.querySelector(".loginCard").className = "loginCard swipeDown";
setTimeout(() => {
document.querySelector(".loginScreen").style.display = "none"
document.querySelector(".taskBar").className = "taskBar slideUp"
document.querySelector(".navBar").className = "navBar slideDown"
document.querySelector(".desktop").style.display = "block";
}, 1000);

}