const home = document.getElementById("home");
const sections = document.querySelectorAll(".section");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

//! ---------------------SAYFA BUTON----------------------
function pageBtnClick(currentIndex) {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question, index) => {
    if (index + 1 === currentIndex) {
      question.style.display = "block";
    } else {
      question.style.display = "none";
    }
  });
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
    // currentIndex--;
  } else {
    showQuestion(1);
  }
});

next.addEventListener("click", () => {
  if (currentIndex < 21) {
    showQuestion(currentIndex + 1);
    // currentIndex++;
  } else {
    showQuestion(21);
  }
});

function showQuestion(questionNumber) {
  sections.forEach((section) => {
    section.style.display = "none";
  });
  const selectedQs = document.getElementById("question" + questionNumber);
  if (selectedQs) {
    selectedQs.style.display = "block";
  }
  currentIndex = questionNumber; // previous ve next butonları ile senkronize sağlamak için
}
