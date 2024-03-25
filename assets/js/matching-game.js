const questions = [
  { question: 'What is the capital of France?', answer: 'yes' },
  { question: 'What is the largest planet in our solar system?', answer: 'no' },
  { question: 'What is the powerhouse of the cell?', answer: 'no' },
];

let currentQuestionIndex = 0;
let gameCompleted = false;

function handleCardClick(card) {
  if (gameCompleted) {
    currentQuestionIndex = 0;
    gameCompleted = false;
  }

  const questionModal = document.getElementById('questionModal');
  const questionText = document.getElementById('questionText');
  const answerInput = document.getElementById('answerInput');

  if (currentQuestionIndex % 2 === 0) {
    const question = questions[currentQuestionIndex / 2].question;
    questionText.textContent = question;
    answerInput.value = '';

    questionModal.style.display = 'block';
  }

  currentQuestionIndex++;
}

function checkAnswer() {
  const questionModal = document.getElementById('questionModal');
  const answerInput = document.getElementById('answerInput');

  const answer = questions[Math.floor(currentQuestionIndex / 2)].answer;
  const userAnswer = answerInput.value.trim();

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    alert('Thành công!');
    questionModal.style.display = 'none';
    if (currentQuestionIndex >= questions.length * 2) {
      alert("You've answered all questions!");
      gameCompleted = true;
    }
  } else {
    alert('Thất bại! Thử lại.');
    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomQuestionIndex].question;
    const questionText = document.getElementById('questionText');
    questionText.textContent = randomQuestion;
    answerInput.value = '';

    questionModal.style.display = 'block';
  }
}
