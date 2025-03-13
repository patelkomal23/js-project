
const questions = [
    { q: "What is an object in JavaScript?", options: ["A primitive value", "A collection of properties", "A function", "None"], answer: 1 },
    { q: "How do you define an object property?", options: ["obj.property = value", "obj = {property: value}", "Both", "None"], answer: 2 },
    { q: "Which method converts an object to a JSON string?", options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "None"], answer: 1 }
];

let currentQuestion = 0, score = 0, timeLeft = 10, timer;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timeEl = document.getElementById("time");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    timeEl.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if (timeLeft === 0) { nextQuestion(); }
    }, 1000);
    
    let q = questions[currentQuestion];
    questionEl.textContent = q.q;
    optionsEl.innerHTML = "";
    q.options.forEach((opt, index) => {
        let btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
    nextBtn.classList.add("hidden");
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) { score++; }
    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) { loadQuestion(); }
    else { showResult(); }
}

function showResult() {
    clearInterval(timer);
    document.getElementById("quiz").classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${questions.length}`;
}

nextBtn.onclick = nextQuestion;
loadQuestion();
