document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const textContent = document.querySelector('.text-info__content');
  
    if (toggleButton && textContent) {
      toggleButton.addEventListener('click', function () {
        textContent.classList.toggle('expanded');
        if (textContent.classList.contains('expanded')) {
          toggleButton.textContent = 'Згорнути';
        } else {
          toggleButton.textContent = 'Розгорнути';
        }
      });
    }
  });