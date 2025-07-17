const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    category: "Technology",
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    answer: "HyperText Markup Language"
  }
];

const categoryEl = document.getElementById("category");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const newQuestionBtn = document.getElementById("new-question-btn");
const computerChoiceEl = document.getElementById("computer-choice");
const resultEl = document.getElementById("result");

let currentQuestion = null;

function getRandomQuestion(questionsArray) {
  const index = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[index];
}

function getRandomComputerChoice(choicesArray) {
  const index = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[index];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

function showQuestion(question) {
  categoryEl.textContent = `Category: ${question.category}`;
  questionEl.textContent = question.question;
  choicesEl.innerHTML = "";

  question.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => {
      const computerChoice = getRandomComputerChoice(question.choices);
      computerChoiceEl.textContent = `Computer's choice: ${computerChoice}`;
      resultEl.textContent = getResults(question, computerChoice);
    });
    choicesEl.appendChild(btn);
  });

  computerChoiceEl.textContent = "";
  resultEl.textContent = "";
}

newQuestionBtn.addEventListener("click", () => {
  currentQuestion = getRandomQuestion(questions);
  showQuestion(currentQuestion);
});

currentQuestion = getRandomQuestion(questions);
showQuestion(currentQuestion);
