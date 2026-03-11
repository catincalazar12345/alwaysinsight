document.addEventListener("DOMContentLoaded", function () {
  const modalElement = document.getElementById("galleryModal");
  const carouselElement = document.getElementById("galleryCarousel");

  const galleryModal = new bootstrap.Modal(modalElement);
  const galleryCarousel = new bootstrap.Carousel(carouselElement, {
    interval: false
  });

  document.querySelectorAll(".grid-item img").forEach((img) => {
    img.addEventListener("click", function () {
      const index = parseInt(this.dataset.index, 10);

      galleryModal.show();

      modalElement.addEventListener(
        "shown.bs.modal",
        function () {
          galleryCarousel.to(index);
        },
        { once: true }
      );
    });
  });
});