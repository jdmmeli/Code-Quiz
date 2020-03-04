var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;




function start() {
    timeLeft = 75;
    
    document.getElementById("timer").innerHTML = timeLeft;
    
    timer = setInterval(function() {
        timeLeft--;
       
        document.getElementById("timer").innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);
    
    next();
    
}

