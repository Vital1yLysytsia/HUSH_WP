document.addEventListener('DOMContentLoaded', function () {
  const mobFilterBtn = document.querySelector('.product-category__mob-filter-btn');
  const filters = document.querySelector('.filters');
  const closeFilterBtn = document.querySelector('.filters__mob-close');

  if (mobFilterBtn && filters && closeFilterBtn) {
    mobFilterBtn.addEventListener('click', function () {
      filters.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeFilterBtn.addEventListener('click', function () {
      filters.classList.remove('active');
      document.body.style.overflow = '';
    });

    filters.addEventListener('click', function (event) {
      if (event.target === filters) {
        filters.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});