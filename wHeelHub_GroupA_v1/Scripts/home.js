document.addEventListener("DOMContentLoaded", function() {
    
    let slider = document.querySelector('.slider');
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dots li');
    let btnLeft = document.getElementById('left');
    let btnRight = document.getElementById('right');

    let totalSlides = slides.length;
    let slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    let isAnimating = false;
    let intervalDuration = 5000;
    let carouselInterval;

    function hideAllText() {
        slides.forEach(slide => {
            slide.querySelector('.text').classList.remove('displaying');
        });
    }

    function showActiveSlideText() {
        const activeSlide = document.querySelector('.slide.displaying');
        if (activeSlide) {
            activeSlide.querySelector('.text').classList.add('displaying');
        }
    }

    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            hideAllText();
            slide.classList.add('displaying');
            showActiveSlideText();
        });
    });

    function moveToSlide(index) {
        if (!isAnimating && index !== currentIndex && index >= 0 && index < totalSlides) {
            isAnimating = true;
            currentIndex = index;
            updateSlidePosition();
        }
    }

    function updateSlidePosition() {
        const newPosition = -currentIndex * 20; 
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transition = 'transform 1s ease'; 
        slidesContainer.style.transform = `translateX(${newPosition}%)`;
    
        setTimeout(function() {
            slidesContainer.style.transition = '';
            isAnimating = false;
        }, 1500);
    
        updateActiveDot();
    }
    

    function updateActiveDot() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    btnRight.addEventListener('click', () => moveToSlide((currentIndex + 1) % totalSlides));
    btnLeft.addEventListener('click', () => moveToSlide((currentIndex - 1 + totalSlides) % totalSlides));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => moveToSlide(index));
    });

    startAutomaticMovement();

    slider.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    slider.addEventListener('mouseleave', startAutomaticMovement);

    function startAutomaticMovement() {
        carouselInterval = setInterval(() => moveToSlide((currentIndex + 1) % totalSlides), intervalDuration);
    }
});

document.addEventListener("scroll", function() {
    const cards = document.querySelectorAll('.itemCard');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const triggerBottom = window.innerHeight / 4 * 3;

        if (rect.top < triggerBottom) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
});

document.addEventListener("scroll", function() {
    const title = document.querySelector('.featuredCarsTitle');
    const rect = title.getBoundingClientRect();
    const triggerBottom = window.innerHeight / 4 * 3;

    if (rect.top < triggerBottom) {
        title.classList.add('visible');
    } else {
        title.classList.remove('visible');
    }
});

document.addEventListener("scroll", function() {
    const title = document.querySelector('.shortDesc');
    const rect = title.getBoundingClientRect();
    const triggerBottom = window.innerHeight / 5 * 3;

    if (rect.top < triggerBottom) {
        title.classList.add('visible');
    } else {
        title.classList.remove('visible');
    }
});
