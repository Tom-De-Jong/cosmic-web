let date = new Date()
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let today = weekday[date.getDay()];
let month = monthmonth[date.getMonth()];
let monthNum = date.getMonth();

let fullDate = today + ", " + month + " " + monthNum;
console.log(fullDate)

let hour = date.getHours()
let minute = date.getMinutes();

    if (minute <= 9) {
        minute = "0" + minute;
    }

    if (hour <= 9) {
        hour = "0" + hour;
    }

    let fullTime = hour + ":" + minute;
    console.log(fullTime);

    document.querySelector(".dateShow").innerHTML = fullDate;
    document.querySelector(".timeShow").innerHTML = fullTime;