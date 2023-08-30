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



//----------------------------------------------------------------QUESTIONS TO BE ASKED

const quizQuestions = [{

    q: "What is JavaScript used for?",
    a: [{ text: "1. It lets us question the meaning of our lives as we try to build out a quiz application", isCorrect: false },
    { text: "2. It lets us designate any object as a primitive type, so we can manipulate it as needed", isCorrect: false },
    { text: "3. It lets us customize the layout of our websites", isCorrect: false },
    { text: "4. It lets us create a dynamic application where the user can interact with it", isCorrect: true }]
    },
    
    {
    q: "What is NOT a primitive type?",
    a: [{ text: "1. String", isCorrect: false },
    { text: "2. Boolean", isCorrect: false },
    { text: "3. Property", isCorrect: true },
    { text: "4. Number", isCorrect: false }]
    },
    
    {
    q: "What keywords can we use to declare variables?",
    a: [{ text: "1. let", isCorrect: false },
    { text: "2. const, let, var", isCorrect: true },
    { text: "3. const, var", isCorrect: false },
    { text: "4. let, me, be", isCorrect: false }]
    },
    
    {
    q: "What is the correct option to link the external JavaScript file?",
    a: [{ text: "1. In the HTML, at the bottom of the body tag, but you need to add “defer” in the code", isCorrect: false },
    { text: "2. In the HTML, at the bottom of the head tag, but you need to add “defer” in the code", isCorrect: true },
    { text: "3. In the HTML, at the bottom of the footer tag", isCorrect: false },
    { text: "4. At the top of the CSS file, but you need to add “defer” in the code", isCorrect: false }]
    },
    
    {
    q: "What is the correct way to console log expression1 and expression2 if they are both true?",
    a: [{ text: "1. console.log(expression1 = expression2);", isCorrect: false },
    { text: "2. console.log(expression1 || expression2);", isCorrect: false },
    { text: "3. console.log(expression1 && expression2);", isCorrect: true },
    { text: "4. console.log(expression1 != expression2);", isCorrect: false }]
    },
    
    {
    q: "What are the three components of creating an HTML element?",
    a: [{ text: "1. Create new HTML element, tell the element what it should look like, and where it should be on the DOM", isCorrect: true },
    { text: "2. Create new HTML element, tell the element what its data attributes are, and where it should be on the DOM", isCorrect: false },
    { text: "3. Create new HTML element, create corresponding CSS element, create corresponding JavaScript element", isCorrect: false },
    { text: "4. Create new HTML element, tell the element what it does, and where it should be on the DOM", isCorrect: false }]
    },
    
    
    {
    q: "What is an example of a string?",
    a: [{ text: "1. "I love watching anime!"”, isCorrect: true },
    { text: "2. Tech is my favorite character in the Bad Batch…", isCorrect: false },
    { text: "3. False", isCorrect: false },
    { text: "4. (“What” “Are” “You” “Talking” “About?”)", isCorrect: false }]
    },
    
    
    {
    q: "How would you call the function, PipPipDoodlyDoo?",
    a: [{ text: "1. document.call.PipPipDoodlyDoo[];", isCorrect: false },
    { text: "2. PipPipDoodlyDoo();", isCorrect: true },
    { text: "3. var PipPipDoodlyDoo = function() {}", isCorrect: false },
    { text: "4. function PipPipDoodlyDoo(x,y) {}", isCorrect: false }]
    },
    
    
    {
    q: "What method can I use to locate a specific class element in my HTML?",
    a: [{ text: "1. querySelectorAll()", isCorrect: false },
    { text: "2. getElementById()", isCorrect: false },
    { text: "3. querySelector()", isCorrect: true },
    { text: "4. getElementByClass()", isCorrect: false }]
    },
    
    
    {
    q: "What can objects store?",
    a: [{ text: "1. Only strings, booleans, and numbers", isCorrect: false },
    { text: "2. Anything as long as they are not undefined properties", isCorrect: false },
    { text: "3. Non-primitive type data", isCorrect: false },
    { text: "4. strings, booleans, numbers, arrays, methods", isCorrect: true }]
    }
    ]


























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
    var quizQuestions = [question, HTMLDataListElement];



    correctBtn.addEventListener("click",function() {
    alert(correctMessage);
})
    wrongBtn.addEventListener("click", function() {
    alert(wrongMessage);
})
}


function setTime() {
var secondsLeft = 100;
//var wrongAnswerDeduction = 2;
//var pointsGain = 4;

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


