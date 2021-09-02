const accordionQuestion = document.querySelectorAll(".faq__question");
const accordionAnswer = document.querySelectorAll(".faq__answer");

for (let i = 0; i < accordionQuestion.length; i++) {
  accordionQuestion[i].addEventListener("click", function () {
    accordionAnswer[i].classList.toggle("faq__answeropen");
  });
}
