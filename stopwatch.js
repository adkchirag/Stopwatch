let stopwatchtime = document.getElementById('stopwatchtext');
let startbtn = document.getElementById('startbtn');
let pausebtn = document.getElementById('pausebtn');
let resetbtn = document.getElementById('resetbtn');

let startTime = 0;
let currentTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

startbtn.addEventListener('click', () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});

pausebtn.addEventListener('click', () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetbtn.addEventListener('click', () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    stopwatchtime.innerText = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)));

    seconds = pad(seconds);
    minutes = pad(minutes);
    hours = pad(hours);

    function pad(unit){
        return (('0')+unit).length > 2 ? unit : '0' + unit; 
    }

    stopwatchtime.textContent  = `${hours}:${minutes}:${seconds}`;

}