let start = document.querySelector("#start");
let greet = document.querySelector("#greet");
let quiz = document.querySelector("#header");
let result = document.querySelector("#result");
let resultText = document.querySelector("#result_container");
let question = document.querySelector("#question");
let option1 = document.querySelector("#L_opt1");
let option2 = document.querySelector("#L_opt2");
let option3 = document.querySelector("#L_opt3");
let option4 = document.querySelector("#L_opt4");
let next = document.querySelector("#next");
let radiobutton = document.querySelectorAll("input[name='answer']");
let accuracy = document.querySelector("#accuracy");
let correct = document.querySelector("#correct");
let wrong = document.querySelector("#wrong");
let attempt = document.querySelector("#attempt");


let quizapp = [
    {
        question: "HTML stands for",
        opt1: "Hyper Text Markup Language",
        opt2: "Hyper Text Makeup Language",
        opt3: "Hyper Text Markup Leveler",
        opt4: "Hyper Text Markup Languageer",
        correct: "option1"
    },
    {
        question: "CSS stands for",
        opt1: "Cascading Style Sheets",
        opt2: "Cascading Style Sheep",
        opt3: "Cascading Style Sheet",
        opt4: "Cascading Style Sheets",
        correct: "option1"
    }
]

let currentQuestion = 0;
let correctanswer = 0;
let quizattempt = false;

deselect = () => {
    radiobutton.forEach((radio) => {
        radio.checked = false;
    })
}
let render = () => {
    deselect();
    let index = quizapp[currentQuestion];
    question.innerHTML = index.question;
    option1.innerHTML = index.opt1;
    option2.innerHTML = index.opt2;
    option3.innerHTML = index.opt3;
    option4.innerHTML = index.opt4;
}
start.addEventListener("click", () => {
    greet.style.display = "none";
    resultText.style.display = "none";
    quiz.style.display = "flex";
    render();
});


next.addEventListener("click", () => {
    let check = document.querySelector("input[name='answer']:checked");

    if (!check) {
        alert("Please select an answer");
        return;
    }

    quizattempt = true;
    attempt.innerHTML = "Quiz Attempted";

    if (check.id === quizapp[currentQuestion].correct) {
        correctanswer++;
    }

    if (currentQuestion < quizapp.length - 1) {
        currentQuestion++;
        render();
    }
    else {
        quiz.style.display = "none";
        alert("You have completed the Quiz");
    }
});

result.addEventListener("click", () => {
    greet.style.display = "none";
    quiz.style.display = "none";
    resultText.style.display = "flex";



    if (quizattempt === false) {
        accuracy.innerHTML = `Your Accuracy is 0%`;
        correct.innerHTML = `Correct Answers: 0`;
        wrong.innerHTML = `Wrong Answers: 0`;
        attempt.innerHTML = "Not Attempted"

    } 
    
    else {
        let calculate = (correctanswer / quizapp.length) * 100;
        accuracy.innerHTML = `Your Accuracy is ${calculate}%`;
        correct.innerHTML = `Correct Answers: ${correctanswer}`;

        let wronganswer = quizapp.length - correctanswer;
        wrong.innerHTML = `Wrong Answers: ${wronganswer}`;
    }
});

