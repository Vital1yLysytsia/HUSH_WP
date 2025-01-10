document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.header__search-icon');
    const searchField = document.querySelector('.header__search-field');
    const searchInput = document.querySelector('.header__search-input');
    const searchResults = document.querySelector('.header__search-results');
    const header = document.querySelector('.header');
    const iconsParent = document.querySelector('.header__icons');
    const originalParent = iconsParent;
  
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
  
    function handleMediaQueryChange(e) {
      if (header && searchField && originalParent) {
        if (e.matches) {
          if (searchField.parentElement !== header) {
            header.appendChild(searchField);
          }
        } else {
          if (searchField.parentElement !== originalParent) {
            originalParent.insertBefore(searchField, originalParent.firstChild);
          }
        }
      }
    }
  
    // Новий метод для слухача змін медіа-запиту
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
  
    if (searchIcon && searchField && searchInput && searchResults) {
      searchIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        searchField.classList.toggle('active');
        searchField.classList.toggle('hidden');
        searchInput.focus();
      });
  
      searchInput.addEventListener('input', function () {
        if (searchInput.value.trim() !== '') {
          searchResults.style.display = 'block';
        } else {
          searchResults.style.display = 'none';
        }
      });
  
      searchInput.addEventListener('blur', function () {
        setTimeout(() => {
          searchResults.style.display = 'none';
        }, 200);
      });
  
      const searchItems = document.querySelectorAll('.header__search-result-item');
      searchItems.forEach(item => {
        item.addEventListener('click', function () {
          searchInput.value = this.textContent;
          searchResults.style.display = 'none';
        });
      });
  
      document.addEventListener('click', function (e) {
        if (!searchField.contains(e.target) && !searchIcon.contains(e.target)) {
          searchField.classList.remove('active');
          searchField.classList.add('hidden');
          searchResults.style.display = 'none';
        }
      });
    }
  });