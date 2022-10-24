const daysNe = document.getElementById('days');
const hoursNe = document.getElementById('hours');
const minsNe = document.getElementById('mins');
const secondsNe = document.getElementById('seconds');

const newYears = '1 Jan 2023'

function contdown(){
    const newDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysNe.innerHTML = days;
    hoursNe.innerHTML = formatTime(hours);
    minsNe.innerHTML = formatTime(mins);
    secondsNe.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
contdown();

setInterval(contdown , 1000);


