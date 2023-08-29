//global variables----------------------------------------------------------------
const headerEl = document.querySelector(".frontPage");
const sectionEl = document.querySelectorAll("section"); //returns array, so we need to target each object,
const firstSectionEl = document.querySelector(".quizPage");
const secondSectionEl = document.querySelector(".donePage");
const thirdSectionEl = document.querySelector(".highScorePage");
const submitScoreBtn = document.getElementById("submitBtn");
const retakeBtn = document.getElementById("retakeQuizbtn");
const resetScoreboard = document.getElementById("resetScoreBoardbtn");
const correctAnswer = document.getElementById("correctAnswerBtn");
const wrongAnswer = document.getElementById("wrongAnswerBtn");
const timeEl = document.getElementById("timer");


//functions----------------------------------------------------------------
//------------------------------DEFAULT HOME PAGE SHOWS ONLY THE <header>

function defaultHomepage() {

    if (sectionEl.style.display !== "none") { 
        sectionEl.style.display = "none";  // add for loop to target each object, sectionEl[0]
        headerEl.style.display = "block";
    }
}

defaultHomepage();

//------------------------------WHEN YOU CLICK THE START BUTTON, <HEADER> DISAPPEARS, "quizPage" SECTION APPEARS, TIMER STARTS, TIMER (-2) IF THE USER SELECTS WRONG ANSWER. WHEN TIMER ENDS, "quizPage" SECTION DISAPPEARS, "donePage" SECTION APPEARS

function pageSwitcherFunction() {

    if (headerEl.style.display !== "none") {
        headerEl.style.display = "none";
        firstSectionEl.style.display = "block";
    } else {
        headerEl.style.display = "block";
        firstSectionEl.style.display = "none";
    }
}


function setTime() {
    var secondsLeft = 100;
    var wrongAnswerDeduction = 2;
    var pointsGain = 2;

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;


    if(secondsLeft > 2 && wrongAnswerDeduction); {
        ((secondsLeft--) - 2);
    }

    else if (pointsGain) {
        NEED POINTS SCORE
    }

    else (secondsLeft === 0); {
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
}


function renderLastScore () {
    var lastScore = JSON.parse(localStorage.getItem("userScore"));

    if (userScore !== null) {
        document.getElementById("generateFinalScore").innerHTML = lastScore.score;
        document.getElementById("insertInitialBox").innerHTML = lastScore.initials;
    } else {
        return;
    }
}



//processes----------------------------------------------------------------

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveScore();
    renderLastScore();
});

renderLastScore();








//variables to dynamically change classes
//const pageSwitcher = document.querySelector("#pageSwitcher");
//const container = document.querySelector("#frontPage");
//default mode is to only show the starting page
// const mode ="introPageOnly";
//pageSwitcher.addEventListener("click", function() { //process to dynamically change classes, to "hide"
//   if (mode === "introPageOnly") {
//  mode = "quizPage";
//  container.setAttribute("class", "quizPage");
//  }

//  else {
//   mode = "introPageOnly";
//  container.setAttribute("class", "introPageOnly");
//   }
// });