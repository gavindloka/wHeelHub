document.addEventListener("DOMContentLoaded", function() {
    
    let currentIndex = 0;
        const slides = $('.slide');
        const totalSlides = slides.length;

        function updateSlide() {
            const slideWidth = $('.slider').width();
            const newMarginLeft = -currentIndex * slideWidth / totalSlides * 5;
            $('.slides').animate({marginLeft: newMarginLeft}, 100);
            $('.dots li').removeClass('active');
            $('.dots li').eq(currentIndex).addClass('active');
        }

        $('#right').click(function() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlide();
        });

        $('#left').click(function() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlide();
        });

        $('.dots li').click(function() {
            currentIndex = $(this).index();
            updateSlide();
        });

        $(window).resize(updateSlide);
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
