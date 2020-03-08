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



var score = 75;
var timeLeft = 0;
var timer;
var index = 0;


// starts the timer 
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
    renderQuestions()
    
}


// renders the questions
function renderQuestions() {
    var questionsIndexLength = questions.length - 1;
    if (index <= questionsIndexLength) {
      document.getElementById("question-title").innerHTML = questions[index].title;
      renderQuestionChoices();
    }
    // quizOver();
  }


function renderQuestionChoices() {
    var question = questions[index].choices;
    
    for (var option = 0; option < question.length; option++) {
      var questionOptionsDiv = document.getElementById("choices");
      var questionButtons = document.createElement("button");
      questionButtons.className =
        "btn btn-outline-primary btn-lg d-flex justify-content-around";
      questionButtons.innerHTML = question[option];
     questionButtons.setAttribute(
        "onclick",
        "checkAnswer(" + index + "," + option + ");"
      );
      questionOptionsDiv.append(questionButtons);
    }
    // quizOver();
  }

  function clearQuestionDiv() {
    
    document.getElementById("choices").innerHTML = "";
    // quizOver();
  }
// checks the answer, gives an alert if incorrect
  function checkAnswer(question, answer) {
  
    let correctAnswer = questions[question].answer;
    let userAnswer = questions[question].choices[answer];
    if (userAnswer == correctAnswer) {
      index = index + 1; 
     
      console.log(score);
      console.log("Correct");
    }
    else {
      index = index + 1;
      // countDown = countDown - 15;
      score = score - 15;
      alert("incorrect");
      
     
      }
      

     
    
    clearQuestionDiv();
    renderQuestions();
    // quizOver();
  }
    
  