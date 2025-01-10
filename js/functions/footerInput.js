document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.footer__input');
    const submitButton = document.querySelector('.footer__button');
    if (input && submitButton) {
      input.addEventListener('input', function () {
        if (input.value.trim() !== '') {
          submitButton.style.display = 'inline-block';
        } else {
          submitButton.style.display = 'none';
        }
      });
    }
  });