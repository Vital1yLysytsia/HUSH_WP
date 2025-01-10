document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq__question");
  questions.forEach(question => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const expanded = question.getAttribute("aria-expanded") === "true";

      questions.forEach(q => {
        q.setAttribute("aria-expanded", "false");
        q.nextElementSibling.style.maxHeight = "0";
        q.nextElementSibling.style.marginTop = "0";
      });

      if (!expanded) {
        question.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.marginTop = "16px";
      }
    });
  });
});