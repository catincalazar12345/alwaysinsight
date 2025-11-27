document.addEventListener('DOMContentLoaded', () => {
    const gridImages = document.querySelectorAll('.content img[data-index]');
    const modalElement = document.getElementById('photoModal');
    const carouselElement = document.getElementById('photoCarousel');
    const carouselInner = carouselElement?.querySelector('.carousel-inner');

    if (!gridImages.length || !modalElement || !carouselElement || !carouselInner || !window.bootstrap) {
        return;
    }

    gridImages.forEach((img, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        const carouselImg = document.createElement('img');
        carouselImg.classList.add('d-block', 'w-100');
        carouselImg.src = img.getAttribute('src');
        carouselImg.alt = img.getAttribute('alt') || `Photo ${index + 1}`;

        carouselItem.appendChild(carouselImg);
        carouselInner.appendChild(carouselItem);

        img.style.cursor = 'pointer';
    });

    const modal = new window.bootstrap.Modal(modalElement);
    const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: false,
        ride: false
    });

    gridImages.forEach((img) => {
        img.addEventListener('click', () => {
            const index = Number(img.dataset.index) || 0;
            carousel.to(index);
            modal.show();
        });
    });
});

