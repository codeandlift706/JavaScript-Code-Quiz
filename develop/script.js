//global variables
const headerEl = document.querySelector(".frontPage");
const firstSectionEl = document.querySelector(".quizPage");
const secondSectionEl = document.querySelector(".donePage");
const thirdSectionEl = document.querySelector(".highScorePage");

const firstBtn = document.getElementById("pageSwitcher");
const submitScoreBtn = document.getElementById("submitBtn");
const retakeBtn = document.getElementById("retakeQuizbtn");
const resetScoreboardBtn = document.getElementById("resetScoreBoardbtn");

const timeEl = document.getElementById("timer");
const scoreEl = document.getElementById("viewScore");

const questionEl = document.querySelector(".question");
const answerBtnsEl = document.querySelector(".answer-buttons");
const answerBtn = document.querySelector(".btn");
let currentQuestionIndex = 0

let timerSeconds = 100;
const startingScore = 0;
const correctMessage = "Correct!";
const wrongMessage = "Incorrect!";
const answerPoints = 5;

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
    question: "What keywords can we use to declare variables?",
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
    question: "What method can I use to locate a specific class?",
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


//functions
//display homepage
function defaultHomepage() {
    const elementSections = [firstSectionEl, secondSectionEl, thirdSectionEl];

    if (headerEl.style.display !== "none") {
        for (let i = 0; i < elementSections.length; i++) {
            elementSections[i].style.display = "none";
        }
    }
}
defaultHomepage();


// display questions and answers
function displayQuestion() {

    document.querySelector(".answer-buttons").innerHTML = ""; //reset the buttons to show nothing
    const currentQuestion = quizQuestions[currentQuestionIndex] //start at index 0 for quiz questions to display
    document.querySelector(".question").textContent = currentQuestion.question

    for (let i = 0; i < currentQuestion.answers.length; i++) { //loop through each answer
        const choiceButton = document.createElement("button"); //create a button for each answer
        choiceButton.textContent = currentQuestion.answers[i].text; //show the answers on the button

        choiceButton.addEventListener("click", function () { //on click
            currentQuestionIndex++; //go to the next question

            let quizAnswer = currentQuestion.answers[i].correct;
            console.log(quizAnswer);
            
            //for each answer you select
            if (quizAnswer === true) { //if answer.correct is true and there's at least 1 second left
                console.log("Correct!");
                console.log(answerPoints);
                let updatedScore = startingScore + answerPoints;
                console.log(updatedScore);
            }

            else if (quizAnswer === false) { //if answer.correct is false and there's at least 6 seconds left
                console.log("False!");
                console.log(answerPoints);
                let updatedScore = startingScore - answerPoints;
                console.log(updatedScore);
            }

            displayQuestion(); //repeat this process
        })

        choiceButton.classList.add("btn");
        document.querySelector(".answer-buttons").append(choiceButton);
    }
}

//timer
function setTime() {
    const timerInterval = setInterval(function () {
        timerSeconds--;
        timeEl.textContent = "Time: " + timerSeconds;
        scoreEl.textContent = "Score: " + startingScore;

    }, 1000);
}


//------------------------------ENTER INITIALS AND HIT THE SUBMIT BUTTON, "donePage" SECTION DISAPPEARS, "highScorePage" SECTION APPEARS, WITH SCOREBOARD
//Hit submit --> stringify the submission, store it to local storage, then retrieve from local storage and parse it, and have it show textcontent in scoreboard

//save score - collect score, set to local storage
function saveScore() {
    const userScore = {
        score: score.value,
        initials: initials.value.trim()
    };

    const userScoreString = JSON.stringify(userScore);
    localStorage.setItem("userScore", userScoreString);
}

//render score by retrieving from local storage
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


//processes

//start the quiz
firstBtn.addEventListener("click", () => {
    headerEl.style.display = "none";
    firstSectionEl.style.display = "block";
    setTime();
    displayQuestion();
})

//submit score
submitScoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    saveScore();
    renderLastScore();
});

//renderLastScore();


