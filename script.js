document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const ChoiceList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const ScoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      marks: 3,
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      marks: 2,
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      marks: 1,
    },
  ];
  let currentIndex = 0;
  let score = 0;
  let is = false;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      is = false;
      startQuiz();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    is = false;
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    nextBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    ChoiceList.innerHTML = "";

    questionText.textContent = questions[currentIndex].question;

    questions[currentIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;

      li.addEventListener("click", () => selectAnswer(li, choice)); //IMp way

      ChoiceList.appendChild(li);
    });
  }

  function selectAnswer(li, choice) {
    // console.log(score); 
    //extra  for removing seleted class form all other previousl selected choices
 const allChoices = document.querySelectorAll("#choices-list li");
 allChoices.forEach((item) => item.classList.remove("selected"));
  

    li.classList.add("selected");
    if (choice === questions[currentIndex].answer && is == false) {
      score += questions[currentIndex].marks;
      is = true;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    ScoreDisplay.textContent = `${score} out of ${6} marks`;
  }
});
