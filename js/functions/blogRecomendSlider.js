document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.blog-recomend__slides');
    const slides = document.querySelectorAll('.blog-recomend__item');
    const pagination = document.querySelector('.blog-recomend__pagination');
    let currentSlide = 0;

    // Перевірка ширини екрану
    function checkScreenWidth() {
      if (window.innerWidth < 500) {
        initSlider();
      } else {
        resetSlider();
      }
    }

    // Ініціалізація слайдера
    function initSlider() {
      slider.style.transition = 'transform 0.5s ease-in-out';
      createPagination();
      goToSlide(currentSlide);
      window.addEventListener('resize', goToSlideOnResize);
    }

    // Скидання слайдера
    function resetSlider() {
      slider.style.transform = 'translateX(0)';
      slider.style.transition = 'none';
      pagination.innerHTML = '';
      window.removeEventListener('resize', goToSlideOnResize);
    }

    // Створення пагінації
    function createPagination() {
      pagination.innerHTML = '';
      slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('blog-recomend__pagination-dot');
        if (index === currentSlide) {
          dot.classList.add('blog-recomend__pagination-dot--active');
        }
        dot.addEventListener('click', () => {
          goToSlide(index);
        });
        pagination.appendChild(dot);
      });
    }

    // Перехід до певного слайда
    function goToSlide(index) {
      const slideWidth = slides[0].offsetWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
      currentSlide = index;
      updatePagination();
    }

    // Оновлення пагінації
    function updatePagination() {
      const dots = document.querySelectorAll('.blog-recomend__pagination-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('blog-recomend__pagination-dot--active', index === currentSlide);
      });
    }

    // Адаптація при зміні розміру вікна
    function goToSlideOnResize() {
      goToSlide(currentSlide);
    }

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
  });