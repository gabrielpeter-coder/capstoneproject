window.onload = function () {
    updateCountdown();

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

const facts = [
    "The Moon's shadow moves across Earth during a solar eclipse.",
    "A total solar eclipse only happens in a narrow path on Earth.",
    "The Sun's corona can be seen during totality.",
    "Eclipse glasses protect your eyes from dangerous sunlight.",
    "The 2027 total solar eclipse will be one of the longest of the century."
];

function showRandomFact() {
    const random = Math.floor(Math.random() * facts.length);
    document.getElementById("factText").innerHTML = facts[random];
}

function updateCountdown() {
    const eclipseDate = new Date("August 2, 2027 00:00:00");
    const today = new Date();
    const difference = eclipseDate - today;

    const countdown = document.getElementById("countdown");

    if (countdown) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        countdown.innerHTML = days + " days remaining until the 2027 total solar eclipse!";
    }
}

function checkQuiz() {
    let score = 0;

    const answers = document.querySelectorAll("input[type='radio']:checked");

    answers.forEach(function(answer) {
        if (answer.value === "correct") {
            score++;
        }
    });

    document.getElementById("quizResult").innerHTML =
        "You scored " + score + "/3!";
}
