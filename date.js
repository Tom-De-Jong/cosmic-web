function updateClock() {
    const date = new Date();
    document.querySelector(".dateShow").innerHTML = date.toLocaleDateString("en-EN", {weekday:"long", month:"long", day:"numeric"});
    document.querySelector(".timeShow").innerHTML = date.toLocaleTimeString("en-EN", {timeStyle:"short", hour12:false});
    document.querySelector(".timeCenter").innerHTML = date.toLocaleTimeString("en-EN", {timeStyle:"short", hour12:false});
}

updateClock(); 
setInterval(updateClock, 1000);