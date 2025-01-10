document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.filters__toggle');
  const filterList = document.querySelector('.woocommerce-widget-layered-nav');
  if (toggleButton && filterList) {
    toggleButton.classList.add('is-active');
    filterList.classList.add('is-active');
    toggleButton.setAttribute('aria-expanded', true);
    filterList.setAttribute('aria-hidden', false);

    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('is-active');
      filterList.classList.toggle('is-active');
      const isActive = toggleButton.classList.contains('is-active');
      toggleButton.setAttribute('aria-expanded', isActive);
      filterList.setAttribute('aria-hidden', !isActive);
    });
  }

  const filterItems = document.querySelectorAll('.filter-item-product');
  filterItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      filterItems.forEach(el => el.classList.remove('filter-item-product--active'));
      item.classList.add('filter-item-product--active');
    });
  });
});