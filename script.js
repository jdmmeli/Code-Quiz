var questions = [{
    title: "Arrays in javascript can be used to store?",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
},
{
    title: "A very useful tool used during development and debugging for printing content to the debugger is?",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log"
},
{
    title: " The condition in an if / else statement is enclosed within?",
    choices: ["quotes", "curly brackets", "parantheses", "square brackets"],
    answer: "parantheses"
},
{
    title: "String variables must be enclosed within __________ when being assigned to variables?",
    choices: ["commas", "curly brackets", "quotes", "parantheses"],
    answer: "quotes"
},
{
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
}
]



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

