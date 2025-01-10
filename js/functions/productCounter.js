document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const counterValue = counter.querySelector(".counter__value");
    const decreaseButton = counter.querySelector(".counter__button--decrease");
    const increaseButton = counter.querySelector(".counter__button--increase");

    if (!counterValue || !decreaseButton || !increaseButton) return;

    let value = parseInt(counterValue.textContent);

    decreaseButton.addEventListener("click", () => {
      if (value > 1) {
        value--;
        counterValue.textContent = value;
      }
    });

    increaseButton.addEventListener("click", () => {
      value++;
      counterValue.textContent = value;
    });
  });
});