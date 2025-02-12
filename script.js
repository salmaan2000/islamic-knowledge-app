const questions = [
    {
        question: "What are the Five Pillars of Islam?",
        answers: [
            "A) Prayer, Charity, Fasting, Pilgrimage, Declaration of Faith",
            "B) Reading, Writing, Speaking, Learning, Teaching",
            "C) Faith, Hope, Charity, Wisdom, Peace",
            "D) None of the above"
        ],
        correct: 0 // Index of the correct answer
    },
    {
        question: "In which month do Muslims fast?",
        answers: [
            "A) Shawwal",
            "B) Ramadan",
            "C) Rajab",
            "D) Sha'ban"
        ],
        correct: 1
    },
    {
        question: "What is the first chapter of the Quran?",
        answers: [
            "A) Al-Baqarah",
            "B) Al-Ikhlas",
            "C) Al-Fatiha",
            "D) Yasin"
        ],
        correct: 2
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-button");

    questionElement.textContent = questions[currentQuestionIndex].question;
    answersElement.innerHTML = "";

    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });

    nextButton.style.display = "none"; // Hide next button initially
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    const nextButton = document.getElementById("next-button");

    if (selectedIndex === correctIndex) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again!");
    }

    nextButton.style.display = "block"; // Show next button after answering
}

document.getElementById("next-button").onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz completed!");
        currentQuestionIndex = 0; // Reset for next time
        showQuestion();
    }
};

// Start the quiz
showQuestion();

// Feedback form submission
document.getElementById("feedback-form").onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you can handle the feedback submission (e.g., send it to a server)
    // For now, we'll just display a thank you message
    const feedbackResponse = document.getElementById("feedback-response");
    feedbackResponse.textContent = `Thank you, ${name}! Your feedback has been submitted.`;
    feedbackResponse.style.display = "block";

    // Clear the form
    document.getElementById("feedback-form").reset();
};