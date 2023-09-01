//global variables----------------------------------------------------------------
const headerEl = document.querySelector(".frontPage");
const firstSectionEl = document.querySelector(".quizPage");
const secondSectionEl = document.querySelector(".donePage");
const thirdSectionEl = document.querySelector(".highScorePage");

const firstBtn = document.getElementById("pageSwitcher");
const submitScoreBtn = document.getElementById("submitBtn");
const retakeBtn = document.getElementById("retakeQuizbtn");
const resetScoreboardBtn = document.getElementById("resetScoreBoardbtn");

const timeEl = document.getElementById("timer");


const correctMessage = "Correct!";
const wrongMessage = "Incorrect!";

const secondsLeft = 100;
const wrongAnswerDeduction = 2;
const pointsGain = 4;

//functions----------------------------------------------------------------
//------------------------------DEFAULT HOME PAGE SHOWS ONLY THE <header>

function defaultHomepage() {
    const elementSections = [firstSectionEl, secondSectionEl, thirdSectionEl];

    if (headerEl.style.display !== "none") {
        for (var i = 0; i < elementSections.length; i++) {
        elementSections[i].style.display = "none";
        }
    }
}
defaultHomepage();


//----------------------------------------------------------------QUESTIONS TO BE ASKED

const quizQuestions = [{

    question: "What is JavaScript used for?",
    answers: [{ text: "1. It lets us question the meaning of our lives as we try to build out a quiz application", correct: false },
    { text: "2. It lets us designate any object as a primitive type, so we can manipulate it as needed", correct: false },
    { text: "3. It lets us customize the layout of our websites", correct: false },
    { text: "4. It lets us create a dynamic application where the user can interact with it", correct: true }]
},

{
    question: "What is NOT a primitive type?",
    answers: [{ text: "1. String", correct: false },
    { text: "2. Boolean", correct: false },
    { text: "3. Property", correct: true },
    { text: "4. Number", correct: false }]
},

{
    question: "What keywords can we use to declare constiables?",
    answers: [{ text: "1. let", correct: false },
    { text: "2. const, let, const", correct: true },
    { text: "3. const, const", correct: false },
    { text: "4. let, me, be", correct: false }]
},

{
    question: "What is the correct option to link the external JavaScript file?",
    answers: [{ text: "1. In the HTML, at the bottom of the body tag, but you need to add “defer” in the code", correct: false },
    { text: "2. In the HTML, at the bottom of the head tag, but you need to add “defer” in the code", correct: true },
    { text: "3. In the HTML, at the bottom of the footer tag", correct: false },
    { text: "4. At the top of the CSS file, but you need to add “defer” in the code", correct: false }]
},

{
    question: "What is the correct way to console log expression1 and expression2 if they are both true?",
    answers: [{ text: "1. console.log(expression1 = expression2);", correct: false },
    { text: "2. console.log(expression1 || expression2);", correct: false },
    { text: "3. console.log(expression1 && expression2);", correct: true },
    { text: "4. console.log(expression1 != expression2);", correct: false }]
},

{
    question: "What are the three components of creating an HTML element?",
    answers: [{ text: "1. Create new HTML element, tell the element what it should look like, and where it should be on the DOM", correct: true },
    { text: "2. Create new HTML element, tell the element what its data attributes are, and where it should be on the DOM", correct: false },
    { text: "3. Create new HTML element, create corresponding CSS element, create corresponding JavaScript element", correct: false },
    { text: "4. Create new HTML element, tell the element what it does, and where it should be on the DOM", correct: false }]
},


{
    question: "How would you call the function, PipPipDoodlyDoo?",
    answers: [{ text: "1. document.call.PipPipDoodlyDoo[];", correct: false },
    { text: "2. PipPipDoodlyDoo();", correct: true },
    { text: "3. const PipPipDoodlyDoo = function() {}", correct: false },
    { text: "4. function PipPipDoodlyDoo(x,y) {}", correct: false }]
},


{
    question: "What method can I use to locate a specific class element in my HTML?",
    answers: [{ text: "1. querySelectorAll()", correct: false },
    { text: "2. getElementById()", correct: false },
    { text: "3. querySelector()", correct: true },
    { text: "4. getElementByClass()", correct: false }]
},


{
    question: "What can objects store?",
    answers: [{ text: "1. Only strings, booleans, and numbers", correct: false },
    { text: "2. Anything as long as they are not undefined properties", correct: false },
    { text: "3. Non-primitive type data", correct: false },
    { text: "4. strings, booleans, numbers, arrays, methods", correct: true }]
}
]


//------------------------------WHEN YOU CLICK THE START BUTTON, <HEADER> DISAPPEARS, "quizPage" SECTION APPEARS, TIMER STARTS, TIMER (-5) IF THE USER SELECTS WRONG ANSWER. WHEN TIMER ENDS, "quizPage" SECTION DISAPPEARS, "donePage" SECTION APPEARS


firstBtn.addEventListener("click", () => {
    headerEl.style.display = "none";
    firstSectionEl.style.display = "block";
    setTime();
    displayQuestion();
})

const questionEl = document.querySelector(".question");
const answerBtnsEl = document.querySelector(".answer-buttons");
const answerBtn = document.querySelector(".btn");
let currentQuestionIndex = 0


// click the start button --> display question and choices


function displayQuestion () {
document.querySelector(".answer-buttons").innerHTML = "";
var currentQuestion = quizQuestions[currentQuestionIndex]
document.querySelector(".question").textContent = currentQuestion.question
for (var i = 0; i < currentQuestion.answers.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestion.answers[i].text;
    choiceButton.addEventListener("click", function() {
        currentQuestionIndex++;
        displayQuestion();
    }) 
    choiceButton.classList.add("btn");
    document.querySelector(".answer-buttons").append(choiceButton);
}
}



function startQuiz() {
for (var i = 0; i <quizQuestions.length; i++) {
    quizQuestions[i];
}
}

function setEachQuestion() {
quizQuestions.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')

    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerBtnsEl.appendChild(button)
})}


function selectAnswer(x) {
    const selectedButton = x.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length = currentQuestionIndex) {
        firstSectionEl.style.display = "none";
        secondSectionEl.style.display = "block";
    }

}


//----------------------------------------------------------------TIMER


function setTime() {
    var secondsLeft = 100;

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        //if((secondsLeft > 2) && (wrongAnswerDeduction)) {
        //((secondsLeft--) - 2);
        //}

        //else if (pointsGain) {
        //need comment
        //}

        var check = secondsLeft === 0


        if (check) {
            //clearInterval(timerInterval);
            secondSectionEl.style.display = "block";
            firstSectionEl.style.display = "none";

        }
    }, 1000);
}




//------------------------------ENTER INITIALS AND HIT THE SUBMIT BUTTON, "donePage" SECTION DISAPPEARS, "highScorePage" SECTION APPEARS, WITH SCOREBOARD
//Hit submit --> stringify the submission, store it to local storage, then retrieve from local storage and parse it, and have it show textcontent in scoreboard


function saveScore() {
    const userScore = {
        score: score.value,
        initials: initials.value.trim()
    };

    const userScoreString = JSON.stringify(userScore);
    localStorage.setItem("userScore", userScoreString);
}


    function renderLastScore() {
        const lastScore = JSON.parse(localStorage.getItem("userScore"));

        if (userScore !== null) {
            document.getElementById("generateFinalScore").innerHTML = lastScore.score;
            document.getElementById("insertInitialBox").innerHTML = lastScore.initials;
        } else {
            submitScoreBtn.addEventListener("click", function (event) {
                event.preventDefault();
                saveScore();
                renderLastScore();
            });

            renderLastScore();

        }
    }




//processes----------------------------------------------------------------

submitScoreBtn.addEventListener("click", function(event) {
event.preventDefault();
saveScore();
renderLastScore();
});

//renderLastScore();


