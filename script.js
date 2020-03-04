var timeEl = document.querySelector("#timer");
var TitleEl = document.querySelector("#quiz-title");
var startbuttonEL = document.querySelector("#start-button");
var secondsLeft = 75;
var timerInterval = "";
var score = 75
var highScore = 0

document.getElementById("start-button").addEventListener("click", function() {
    function starttime() {
        secondsLeft = secondsLeft - 1;
        if (secondsLeft < 75) {
            starttime.html = secondsLeft;
        }
        if (secondsLeft < 1) {
            window.clearInterval(update);
        }

      
    } 
    update = setInterval("starttime", 1000); 
});