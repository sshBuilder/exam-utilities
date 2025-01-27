const questions = [];

// Add squares between 1 to 50
for (let i = 1; i <= 50; i++) {
  questions.push({ question: `What is the square of ${i}?`, answer: i * i });
}

// Add cubes between 1 to 30
for (let i = 1; i <= 30; i++) {
  questions.push({ question: `What is the cube of ${i}?`, answer: i * i * i });
}

let currentQuestionIndex = 0;
let startTime;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  shuffle(questions);
  currentQuestionIndex = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("answer").value = "";
  displayQuestion();
  startTime = new Date().getTime();
}

function stopQuiz() {
  document.getElementById("question").innerText = "Quiz stopped!";
  document.getElementById("result").innerText = "";
  document.getElementById("answer").value = "";
}

function displayQuestion() {
  document.getElementById("question").innerText =
    questions[currentQuestionIndex].question;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = questions[currentQuestionIndex].answer;
  const endTime = new Date().getTime();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

  if (userAnswer === correctAnswer) {
    document.getElementById("result").innerText =
      `Correct! Time taken: ${timeTaken} seconds.`;
  } else {
    document.getElementById("result").innerText =
      `Wrong! The correct answer was ${correctAnswer}. Time taken: ${timeTaken} seconds.`;
  }

  document.getElementById("answer").value = ""; // Reset the input field

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    startTime = new Date().getTime();
    displayQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz completed!";
  }
}