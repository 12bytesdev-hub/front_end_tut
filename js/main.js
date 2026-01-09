window.addEventListener('scroll', function() {
    const mainMenu = this.document.querySelector('.main-menu');
    if (this.window.scrollY > 50) {
        mainMenu.classList.add('is-scrolled');
    } else {
        mainMenu.classList.remove('is-scrolled');
    }
});

// Hàm cập nhật ảnh trong carousel-window
function updateCarouselWindowImage() {
    const activeSlide = document.querySelector('#hero-carousel .carousel-item.active');
    const activeImage = activeSlide ? activeSlide.querySelector('img') : null;
    const windowImage = document.getElementById('carousel-window-img');
    
    if (activeImage && windowImage) {
        // Cập nhật background-image thay vì src
        windowImage.style.backgroundImage = `url('${activeImage.src}')`;
        // Hoặc nếu muốn cập nhật cho .carousel-window (container)
        const carouselWindow = document.querySelector('.carousel-window');
        if (carouselWindow) {
            carouselWindow.style.backgroundImage = `url('${activeImage.src}')`;
        }
    }
}

// Cập nhật ảnh khi page load (cho slide đầu tiên)
document.addEventListener('DOMContentLoaded', function() {
    updateCarouselWindowImage();
});

// Lắng nghe sự kiện khi carousel slide thay đổi
const carousel = document.getElementById('hero-carousel');
if (carousel) {
    carousel.addEventListener('slid.bs.carousel', function() {
        updateCarouselWindowImage();
    });
}