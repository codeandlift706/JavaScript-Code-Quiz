//global variables----------------------------------------------------------------
const headerEl = document.querySelector(".frontPage");
const sectionEl = document.querySelectorAll("section");
const firstSectionEl = document.querySelector(".quizPage");
const secondSectionEl = document.querySelector(".donePage");
const thirdSectionEl = document.querySelector(".highScorePage");

const firstBtn = document.getElementById("pageSwitcher");
const submitScoreBtn = document.getElementById("submitBtn");
const retakeBtn = document.getElementById("retakeQuizbtn");
const resetScoreboardBtn = document.getElementById("resetScoreBoardbtn");

const timeEl = document.getElementById("timer");
const quizQuestions = document.querySelector(".question");
const quizChoices = document.querySelector(".listEl");
const correctBtn = document.getElementById("correctAnswerBtn");
const wrongBtn = document.getElementById("wrongAnswerBtn");

const correctMessage = "Correct!";
const wrongMessage = "Incorrect!";

var secondsLeft = 100;
var wrongAnswerDeduction = 2;
var pointsGain = 4;

//functions----------------------------------------------------------------
//------------------------------DEFAULT HOME PAGE SHOWS ONLY THE <header>

function defaultHomepage() {
    var elementSections = [firstSectionEl, secondSectionEl, thirdSectionEl];

    if (headerEl.style.display !== "none") { 
        for (var i = 0; i < elementSections.length; i++) {
            elementSections[i].style.display = "none";
        }
    }
}
    
defaultHomepage();

//------------------------------WHEN YOU CLICK THE START BUTTON, <HEADER> DISAPPEARS, "quizPage" SECTION APPEARS, TIMER STARTS, TIMER (-2) IF THE USER SELECTS WRONG ANSWER. WHEN TIMER ENDS, "quizPage" SECTION DISAPPEARS, "donePage" SECTION APPEARS

function pageSwitcherFunction() {
    var headerEl = document.querySelector(".frontPage");
    if (headerEl.style.display !== "none") {
        headerEl.style.display = "none";
        firstSectionEl.style.display = "block";
    }
    
    setTime();
    userTakesQuiz();
}

function userTakesQuiz() {
    correctBtn.addEventListener("click",function() {
    alert(correctMessage);
})
    wrongBtn.addEventListener("click", function() {
    alert(wrongMessage);
})
}


function setTime() {
var secondsLeft = 100;
var wrongAnswerDeduction = 2;
var pointsGain = 4;

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

    //if((secondsLeft > 2) && (wrongAnswerDeduction)) {
    //((secondsLeft--) - 2);
    //}

    //else if (pointsGain) {
    //need comment
    //}

    if (secondsLeft === 0); {
        clearInterval(timerInterval);
        secondSectionEl.style.display = "block";
        firstSectionEl.style.display = "none";

    }
}, 1000);
}



//------------------------------ENTER INITIALS AND HIT THE SUBMIT BUTTON, "donePage" SECTION DISAPPEARS, "highScorePage" SECTION APPEARS, WITH SCOREBOARD
//Hit submit --> stringify the submission, store it to local storage, then retrieve from local storage and parse it, and have it show textcontent in scoreboard


function saveScore () {
    var userScore = {
        score: score.value,
        initials: initials.value.trim()
    };

    var userScoreString = JSON.stringify(userScore);
    localStorage.setItem("userScore", userScoreString);



function renderLastScore () {
    var lastScore = JSON.parse(localStorage.getItem("userScore"));

    if (userScore !== null) {
        document.getElementById("generateFinalScore").innerHTML = lastScore.score;
        document.getElementById("insertInitialBox").innerHTML = lastScore.initials;
    } else {
        submitScoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
        saveScore();
        renderLastScore();
        });
        
        renderLastScore();

    }
}}



//processes----------------------------------------------------------------

//submitScoreBtn.addEventListener("click", function(event) {
 //   event.preventDefault();
 //   saveScore();
 //   renderLastScore();
//);
//renderLastScore();


