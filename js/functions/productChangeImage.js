document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".product-gallery__thumbnail");
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");

  if (mainImage && thumbnails.length > 0) {
    let currentIndex = 0;
    const images = Array.from(thumbnails).map(thumbnail => thumbnail.getAttribute("data-image"));

    const updateMainImage = index => {
      if (!images[index]) return;
      mainImage.src = images[index];
      thumbnails.forEach((thumbnail, idx) => {
        thumbnail.classList.toggle("active", idx === index);
      });
    };

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        currentIndex = index;
        updateMainImage(currentIndex);
      });
    });

    if (prevArrow) {
      prevArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateMainImage(currentIndex);
      });
    }

    if (nextArrow) {
      nextArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateMainImage(currentIndex);
      });
    }

    updateMainImage(currentIndex);
  }
});