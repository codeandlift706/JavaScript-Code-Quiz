//global variables
//variables to dynamically change classes
//const pageSwitcher = document.querySelector("#pageSwitcher");
//const container = document.querySelector("#frontPage");

//default mode is to only show the starting page
// const mode ="introPageOnly";

//functions -- how we understand and define the actions we want to take


//processes -- how it will execute
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

function defaultHomepage() {
    var sectionEl = document.querySelectorAll("section");
    if (sectionEl.style.display == "none") {
        sectionEl.style.display = "block";
    } else {
        sectionEl.style.display = "none";
    }
}

function pageSwitcherFunction() {
    var x = document.querySelector(".frontPage");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }

defaultHomepage();

