
// Toggle Menu Function
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.menu-toggle');

    navbar.classList.toggle('active'); // Toggle visibility
    hamburger.classList.toggle('active'); // Toggle hamburger animation
}

// Changing Text Functionality
const changingtext = ["On Desired Domain", "Gain Experience", "Competitive Salary"];
let index = 0;

function changetext() {
    index = (index + 1) % changingtext.length;
    document.getElementById("changing-text").textContent = changingtext[index];
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(changetext, 3000);
});

// Swiper Slider Initialization
const swiper = new Swiper('.slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    },
});
