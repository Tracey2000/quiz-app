const num1 = Math.ceil(Math.random() * 20);
const num2 = Math.ceil(Math.random() * 20);
let correctAns = num1 * num2;

const questionE1 = document.getElementById("question");

const inputE1 = document.getElementById("input");

const formE1 = document.getElementById("form");

const scoreE1 = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreE1.innerText = `Score: ${score}`;

questionE1.innerText = `What is ${num1} multiplied by ${num2}?`;


formE1.addEventListener("submit", (event) => {
    const userAns = +inputE1.value;
    if (userAns === correctAns) {
        score++;
        updatelocalstorage();
        num1 = Math.ceil(Math.random() * 20);
        num2 = Math.ceil(Math.random() * 20);
        correctAns = num1 * num2;
        questionE1.innerText = `What is ${num1} multiplied by ${num2}?`;
    } else {
        score--;
        updatelocalstorage();
    }
});

function updatelocalstorage() {
    localStorage.setItem("score", JSON.stringify(score));
    scoreE1.innerText = `Score: ${score}`;
    inputE1.value = '';
}

