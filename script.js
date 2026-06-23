window.onload = function () {
    updateCountdown();

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

const facts = [
    "A total solar eclipse happens when the Moon completely covers the Sun.",
    "The Sun's corona is visible during totality.",
    "Eclipse glasses are needed to safely view the Sun.",
    "The Moon's shadow moves across Earth during a solar eclipse.",
    "The 2027 total solar eclipse will pass through parts of Europe, Africa, and the Middle East."
];

function showRandomFact() {
    document.getElementById("factText").innerHTML =
        facts[Math.floor(Math.random() * facts.length)];
}

function updateCountdown() {
    const eclipseDate = new Date("August 2, 2027 00:00:00");
    const today = new Date();
    const difference = eclipseDate - today;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const countdown = document.getElementById("countdown");

    if (countdown) {
        countdown.innerHTML = days + " days remaining until the 2027 total solar eclipse!";
    }
}

function checkQuiz() {
    let score = 0;

    const questions = ["q1", "q2", "q3"];

    questions.forEach(function(question) {
        const selected = document.querySelector("input[name='" + question + "']:checked");

        if (selected && selected.value === "correct") {
            score++;
        }
    });

    const result = document.getElementById("quizResult");

    if (result) {
        result.innerHTML = "You scored " + score + "/3!";
    }
}
