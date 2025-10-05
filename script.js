document.addEventListener('DOMContentLoaded', () => {
    // Responsive Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Hero Slideshow
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlides() {
        slides.forEach((slide) => slide.classList.remove('active'));
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex-1].classList.add('active');
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    showSlides();
});

