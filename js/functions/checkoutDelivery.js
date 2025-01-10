document.addEventListener("DOMContentLoaded", () => {
  const customSelects = document.querySelectorAll(".custom-select");
  customSelects.forEach(select => {
    const trigger = select.querySelector(".custom-select__trigger");
    const options = select.querySelector(".custom-select__options");
    if (trigger && options) {
      trigger.addEventListener("click", () => {
        select.classList.toggle("custom-select--open");
      });

      options.addEventListener("click", e => {
        if (e.target.classList.contains("custom-select__option")) {
          trigger.textContent = e.target.textContent;
          select.classList.remove("custom-select--open");
        }
      });

      document.addEventListener("click", e => {
        if (!select.contains(e.target)) {
          select.classList.remove("custom-select--open");
        }
      });
    }
  });

  const deliveryTypeInputs = document.querySelectorAll("input[name='delivery-type']");
  const postomatTitle = document.querySelector(".checkout-form__delivery-postomat-title");
  const branchOptions = document.querySelector(".branch-options");
  const postomatOptions = document.querySelector(".postomat-options");

  if (deliveryTypeInputs && postomatTitle && branchOptions && postomatOptions) {
    deliveryTypeInputs.forEach(input => {
      input.addEventListener("change", () => {
        if (input.value === "branch") {
          postomatTitle.textContent = "Відділення";
          branchOptions.classList.remove("hide");
          postomatOptions.classList.add("hide");
        } else {
          postomatTitle.textContent = "Поштомат";
          branchOptions.classList.add("hide");
          postomatOptions.classList.remove("hide");
        }
      });
    });
  }

  const deliveryOptionButtons = document.querySelectorAll('.checkout-form__delivery-option');
  const pickupBlock = document.querySelector('.checkout-form__pickup');
  const deliveryTypeBlock = document.querySelector('.checkout-form__delivery-type');
  const deliveryLocationBlock = document.querySelector('.checkout-form__delivery-location');
  const deliveryPostomatBlock = document.querySelector('.checkout-form__delivery-postomat');
  const deliveryServiceBlock = document.querySelector('.checkout-form__delivery-service');

  if (deliveryOptionButtons && pickupBlock && deliveryTypeBlock && deliveryLocationBlock && deliveryPostomatBlock && deliveryServiceBlock) {
    deliveryOptionButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.textContent.trim() === 'Самовивіз') {
          pickupBlock.classList.remove('hide');
          deliveryTypeBlock.classList.add('hide');
          deliveryLocationBlock.classList.add('hide');
          deliveryPostomatBlock.classList.add('hide');
          deliveryServiceBlock.classList.add('hide');
          deliveryOptionButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
        } else {
          pickupBlock.classList.add('hide');
          deliveryTypeBlock.classList.remove('hide');
          deliveryLocationBlock.classList.remove('hide');
          deliveryPostomatBlock.classList.remove('hide');
          deliveryServiceBlock.classList.remove('hide');
          deliveryOptionButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
        }
      });
    });
  }

  const paymentOptions = document.querySelectorAll('input[name="payment-type"]');
  const onlineWarning = document.querySelector('.online-warning');
  const onhandWarning = document.querySelector('.onhand-warning');

  if (paymentOptions && onlineWarning && onhandWarning) {
    paymentOptions.forEach(option => {
      option.addEventListener('change', () => {
        onlineWarning.classList.add('hide');
        onhandWarning.classList.add('hide');

        if (option.value === 'online') {
          onlineWarning.classList.remove('hide');
        } else if (option.value === 'onhand') {
          onhandWarning.classList.remove('hide');
        }
      });
    });
  }

  const commentField = document.querySelector('.checkout-form__comment-field');
  const commentCount = document.querySelector('.checkout-form__comment-count');
  if (commentField && commentCount) {
    commentField.addEventListener('input', () => {
      const currentLength = commentField.value.length;
      commentCount.textContent = currentLength;
    });
  };
  const commentTitle = document.querySelector('.checkout-form__comment-title');
  if (commentTitle) {
    commentTitle.addEventListener('click', () => {
      const commentSection = document.querySelector('.checkout-form__comment');
      if (commentSection) {
        commentSection.classList.toggle('checkout-form__comment--active');
      }
    });
  }


});
