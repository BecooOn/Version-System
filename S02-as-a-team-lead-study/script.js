const home = document.getElementById("home");
// const random = document.getElementById("random");
const sections = document.querySelectorAll(".section");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

//! ---------------------SAYFA BUTON----------------------
function pageBtnClick(currentIndex) {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    question.style.display = "none";
  });
  const selectedQuestion = document.getElementById(`question${currentIndex}`);
  if (selectedQuestion) {
    selectedQuestion.style.display = "block";
  }
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    pageBtnClick(index + 1);
  });
});

//! --------------------NEXT-PREVİOUS BUTTONS-------------------
let currentIndex = 1; // Doğru değerle başlatıldı

previous.addEventListener("click", () => {
  if (currentIndex > 1) {
    showQuestion(currentIndex - 1); // currentIndex azaltıldı
    currentIndex--;
  } else {
    showQuestion(1);
  }
});

next.addEventListener("click", () => {
  if (currentIndex < buttons.length) {
    showQuestion(currentIndex + 1);
    currentIndex++;
  } else {
    showQuestion(21);
  }
});

// random.addEventListener("click", () => {
//     const randomIndex = Math.floor(Math.random() * buttons.length) + 1;
//     showQuestion(randomIndex);
// });

function showQuestion(questionNumber) {
  sections.forEach((section) => {
    section.style.display = "none";
  });
  const selectedQs = document.getElementById("question" + questionNumber);
  if (selectedQs) {
    selectedQs.style.display = "block";
  }
}
