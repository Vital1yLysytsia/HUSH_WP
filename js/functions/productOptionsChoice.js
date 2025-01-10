document.addEventListener('DOMContentLoaded', () => {
  const handleActiveState = (containerSelector, optionSelector, messageSelector) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const options = container.querySelectorAll(`${optionSelector}:not(${optionSelector}--unactive)`);
    const message = document.querySelector(messageSelector);
    options.forEach(option => {
      option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        if (message) {
          message.style.display = 'none';
        }
        updateButtonsState();
      });
    });
  };

  const hideMessage = messageSelector => {
    const message = document.querySelector(messageSelector);
    if (message) {
      message.style.display = 'none';
    }
  };

  const showMessage = messageSelector => {
    const message = document.querySelector(messageSelector);
    if (message) {
      message.style.display = 'block';
    }
  };

  const updateButtonsState = () => {
    const selectedSize = document.querySelector('.product-attributes__sizes-option.active');
    const selectedColor = document.querySelector('.product-attributes__colors-option.active');
    const addToCartButton = document.querySelector('.product-info__add-button');
    if (addToCartButton) {
      if (selectedSize && selectedColor) {
        addToCartButton.classList.remove('disable-transparent');
        addToCartButton.classList.add('btn-transparent');
      } else {
        addToCartButton.classList.add('disable-transparent');
        addToCartButton.classList.remove('btn-transparent');
      }
    }
  };

  handleActiveState('.product-attributes__colors', '.product-attributes__colors-option', '.select-color-message');
  handleActiveState('.product-attributes__sizes', '.product-attributes__sizes-option', '.select-size-message');

  const buttonsContainer = document.querySelector('.product-info__buttons');
  if (buttonsContainer) {
    const buttons = buttonsContainer.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedSize = document.querySelector('.product-attributes__sizes-option.active');
        const selectedColor = document.querySelector('.product-attributes__colors-option.active');
        if (!selectedSize) {
          showMessage('.select-size-message');
        } else {
          hideMessage('.select-size-message');
        }
        if (!selectedColor) {
          showMessage('.select-color-message');
        } else {
          hideMessage('.select-color-message');
        }
        updateButtonsState();
      });
    });
  }

  updateButtonsState();
});