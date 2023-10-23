//global variables
const headerEl = document.querySelector(".frontPage");
const firstSectionEl = document.querySelector(".quizPage");
const secondSectionEl = document.querySelector(".donePage");
const thirdSectionEl = document.querySelector(".highScorePage");

const firstBtn = document.getElementById("pageSwitcher");
const initialsInput = document.getElementById("initialsInput");
const submitScoreBtn = document.getElementById("submitBtn");
const retakeBtn = document.getElementById("retakeQuizbtn");
const resetScoreboardBtn = document.getElementById("resetScoreBoardbtn");

const timeEl = document.getElementById("timer");
const scoreEl = document.getElementById("viewScore");

const questionEl = document.querySelector(".question");
const answerBtnsDiv = document.querySelector(".answer-buttons");
const answerBtn = document.querySelector(".btn");

let currentQuestionIndex = 0
let quizScore = 0;

const message = document.querySelector(".message");
const correctMessage = "Correct!";
const wrongMessage = "Incorrect!";
const doneMessage = "All done!";

const listEl = document.querySelector(".listEl");
const scoreList = document.querySelector(".scoreList");
const finalScore = document.getElementById("finalScore");


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


// display questions & render answers on buttons
function displayQuestion() {

    answerBtnsDiv.innerHTML = ""; //reset the buttons to show nothing
    const currentQuestion = quizQuestions[currentQuestionIndex] //start at index 0 for quiz questions to display
    questionEl.textContent = currentQuestion.question //show the current question

    for (let i = 0; i < currentQuestion.answers.length; i++) { //loop through each answer

        const choiceButton = document.createElement("button"); //create a button for each answer
        choiceButton.textContent = currentQuestion.answers[i].text; //show the answers on the button
        let quizAnswer = currentQuestion.answers[i].correct; //access the true and false values

        selectQuestion(choiceButton, quizAnswer); //pass buttons and true/false values
    }
};


//select correct/incorrect answers
function selectQuestion(choiceButton, quizAnswer) { //receive

    choiceButton.addEventListener("click", function () { //on click
        const messagePopUp = document.createElement("p"); //create a p for every answer
        message.innerHTML = ""; //reset the correct/incorrect message to show nothing

        //for each answer you select
        if (quizAnswer) { //if answer.correct is true
            console.log("Correct!");
            messagePopUp.textContent = correctMessage;
            message.append(messagePopUp);
            quizScore += 5;
            currentQuestionIndex++; //go to the next question
        }

        else if (!quizAnswer) { //if answer.correct is false 
            console.log("False!");
            messagePopUp.textContent = wrongMessage;
            message.append(messagePopUp);
            quizScore -= 5;

            if (quizScore < 0) { //if score goes negative, just set score to 0
                quizScore = 0;
            }

            currentQuestionIndex++; //go to the next question
        }

        displayQuestion(); //repeat this whole process

    })

    choiceButton.classList.add("btn");
    answerBtnsDiv.append(choiceButton);

    console.log(quizScore);
}


//timer
function setTime() {
    let timerSeconds = 3;

    const timerInterval = setInterval(function () {
        timerSeconds--;
        timeEl.textContent = "Time: " + timerSeconds;
        scoreEl.textContent = "Score: " + quizScore;

        if (timerSeconds === 0 || currentQuestionIndex == quizQuestions.length) {
            clearInterval(timerInterval);
            console.log(quizScore);
            saveScore(quizScore);
        }
    }, 1000);
}


//collect score & submit initials/score
function saveScore(quizScore) {

    firstSectionEl.style.display = "none"; //hide quiz page
    secondSectionEl.style.display = "block"; //display submit initials page
    finalScore.textContent = "Your final score is: " + quizScore;

    console.log(quizScore);
    return quizScore;
}


//render score by setting & retrieving from local storage
function renderScore(e) {
    e.preventDefault();

    secondSectionEl.style.display = "none"; //hide submit initials page
    thirdSectionEl.style.display = "block"; //display the scoreboard page

    const userScore = { //create userScore object with properties
        score: quizScore,
        initials: initialsInput.value.trim() //remove whitespace
    };

    let scoreArray = JSON.parse(localStorage.getItem("scores")) || []; // Get existing scores or default to an empty array if none exist -- retrieving and initializing from local storage


    scoreArray.push(userScore); //push scores into array and sort 
    // Sort scores in descending order
    scoreArray.sort((a, b) => b.score - a.score);

    // Save updated scoreArray to local storage
    localStorage.setItem("scores", JSON.stringify(scoreArray));

    scoreList.innerHTML = ""; //clear the score list

    for (const entry of scoreArray) { //for every entry in scoreArray
        const scoreEntry = (`${entry.initials} ............................... ${entry.score}`); //template string to format score entry
        const listEl = document.createElement("p");
        listEl.textContent = scoreEntry;
        scoreList.append(listEl);
    }

    initialsInput.value = ""; //clear input
}


//processes
//start the quiz
firstBtn.addEventListener("click", () => {
    headerEl.style.display = "none";
    firstSectionEl.style.display = "block";
    setTime();
    displayQuestion();
});

//submit score
submitScoreBtn.addEventListener("click", renderScore);

//retake the quiz
retakeBtn.addEventListener("click", () => {
    thirdSectionEl.style.display = "none";
    firstSectionEl.style.display = "block";
    quizScore = 0;
    currentQuestionIndex = 0;
    setTime();
    displayQuestion();
});

//clears the scoreboard
resetScoreboardBtn.addEventListener("click", () => {
    scoreList.innerHTML = "";
    localStorage.clear();
})