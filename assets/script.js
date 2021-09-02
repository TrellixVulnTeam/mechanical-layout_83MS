// Accordion
const accordionQuestion = document.querySelectorAll(".faq__question");
const accordionAnswer = document.querySelectorAll(".faq__answer");

for (let i = 0; i < accordionQuestion.length; i++) {
  accordionQuestion[i].addEventListener("click", function () {
    if (accordionAnswer[i].classList.contains("faq__answeropen")) {
      accordionAnswer[i].classList.remove("faq__answeropen");
    } else {
      for (let i = 0; i < accordionAnswer.length; i++) {
        accordionAnswer[i].classList.remove("faq__answeropen");
      }
      accordionAnswer[i].classList.add("faq__answeropen");
    }
  });
}
