const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const priceOutput = document.getElementById('priceOutput');
const rangeBox = document.querySelector('.filter-price__range-box');

function updatePriceRange() {
  if (!priceMin || !priceMax || !priceOutput || !rangeBox) return;
  let min = parseInt(priceMin.value);
  let max = parseInt(priceMax.value);
  if (min >= max) {
    min = max - 0;
    priceMin.value = min;
  } else if (max <= min) {
    max = min + 0;
    priceMax.value = max;
  }
  const minPercent = min / 5000 * 100;
  const maxPercent = max / 5000 * 100;
  rangeBox.style.setProperty('--min', `${minPercent}%`);
  rangeBox.style.setProperty('--max', `${maxPercent}%`);
  priceOutput.textContent = `Ціна: ${min} - ${max} UAH`;
}

if (priceMin && priceMax) {
  priceMin.addEventListener('input', updatePriceRange);
  priceMax.addEventListener('input', updatePriceRange);
}