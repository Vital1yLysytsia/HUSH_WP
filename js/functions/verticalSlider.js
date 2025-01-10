document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.hero__slides');
    const slides = document.querySelectorAll('.hero__slide');
    const navButtons = document.querySelectorAll('.hero__navButton');
    if (!slidesContainer || slides.length === 0 || navButtons.length === 0) return;
  
    let currentSlide = 0;
    let slideHeight = 600;
  
    const updateSlider = () => {
      if (window.innerWidth >= 980) {
        slideHeight = 600;
      } else if (window.innerWidth >= 640 && window.innerWidth < 980) {
        slideHeight = 500;
      } else {
        slideHeight = 215;
      }
      slidesContainer.style.transform = `translateY(-${currentSlide * slideHeight}px)`;
      updateActiveButton();
    };
  
    const updateActiveButton = () => {
      navButtons.forEach(button => button.classList.remove('active'));
      navButtons[currentSlide].classList.add('active');
    };
  
    navButtons.forEach(button => {
      button.addEventListener('click', () => {
        currentSlide = parseInt(button.getAttribute('data-slide'));
        updateSlider();
      });
    });
  
    updateSlider();
  });