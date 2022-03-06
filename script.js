"use strict";

document.querySelectorAll(".accordion-element").forEach((index) => {
  index.addEventListener("click", () => {
    const answerEl = index.querySelector(".element-answer");
    const questionEl = index.querySelector(".element-question");
    const arrow = index.querySelector(".arrow");

    answerEl.classList.toggle("show");
    questionEl.classList.toggle("active");
    arrow.classList.toggle("rotate");
  });
});
