updateCountdown();

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

//Making sure dark mode actually works
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
}
//Function for making the random fact shown in index.html
function showRandomFact() {
    const random = Math.floor(Math.random() * facts.length);
    document.getElementById("factText").innerHTML = facts[random];
}

//Function for checking the quiz in quiz.html
function checkQuiz() {
    let score = 0;
    const answers = document.querySelectorAll("input[type='radio']:checked");

    answers.forEach(answer => {

    if (answer.value == "correct") {
        score++;
    }

    if (score == 3) {
        console.log("Perfect! You got 3/3 or 100% of the answers right!");
    } else if (score == 2) {
        console.log("Nice! You got 2/3 questions right! Keep testing your eclipse knowledge!");
    } else if (score == 1) {
        console.log("Alright! You got 1/3 questions right! Definitely check a few stats for next time!");
    } else {
        console.log("Good try! You got 0/3 questions right but don't be discouraged! Keep learning!);
                    }
    }

    document.getElementById("quizResult").innerHTML = message;
