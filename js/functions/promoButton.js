document.addEventListener("DOMContentLoaded", () => {
    const promoInput = document.getElementById("promo-code");
    const applyButton = document.getElementById("apply-promo");
    if (promoInput && applyButton) {
      promoInput.addEventListener("input", () => {
        if (promoInput.value.trim() !== "") {
          applyButton.classList.add("button");
          applyButton.classList.remove("btn-transparent");
        } else {
          applyButton.classList.add("btn-transparent");
        }
      });
    }
  });