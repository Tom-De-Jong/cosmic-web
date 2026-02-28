function updateClock() {
    const date = new Date();
    
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let fullDate = `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
    
    let hour = date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    let fullTime = `${hour}:${minute}`;

    document.querySelector(".dateShow").innerHTML = fullDate;
    document.querySelector(".timeShow").innerHTML = fullTime;

    document.querySelector(".timeCenter").innerHTML = fullTime;
}

updateClock(); 
setInterval(updateClock, 1000);