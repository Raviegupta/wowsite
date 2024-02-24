        // Navbar

const navList = document.querySelector(".nav-menu");
const button = document.querySelector(".btn-wrapper-child");
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector('.mobile-menu-box')

console.log(menuIcon);

menuIcon.addEventListener('click', () => {

    console.log(mobileMenu);

    // mobileMenu.classList.toggle('hidden');


    if(mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }

})




          // logos-slider

const sliderBox = [...document.querySelectorAll('.slider-box')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];
const nextBtn = [...document.querySelectorAll('.next-btn')];


sliderBox.forEach((card, i) => {
    let sliderDimension = card.getBoundingClientRect();
    let width = sliderDimension.width;

    nextBtn[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft + width;
    })

    prevBtn[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft - width;
    })
});






        // FAQs

const accordOpen = document.querySelectorAll('.accord-open');
const accordClose = document.querySelectorAll('.accord-close');
const ansBox = document.querySelectorAll('.answer');

 console.log(accordOpen);

for(let i = 0; i<accordClose.length; i++) {
    accordOpen[i].addEventListener('click', () => {
        ansBox[i].classList.toggle('hidden');
        accordOpen[i].classList.toggle('hidden');
        accordClose[i].classList.toggle('hidden'); 
    });

    accordClose[i].addEventListener('click', () => {
        ansBox[i].classList.toggle('hidden');
        accordOpen[i].classList.toggle('hidden');
        accordClose[i].classList.toggle('hidden'); 
    })
}



// testimonials

const testimonialsBox = [...document.querySelectorAll('.testimonials-wrapper-box')];
const prevIcon = [...document.querySelectorAll('.previous-icon')];
const nextIcon = [...document.querySelectorAll('.next-icon')];


testimonialsBox.forEach((card, i) => {
    let sliderDimension = card.getBoundingClientRect();
    let width = sliderDimension.width;

    nextIcon[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft + width;
    })

    prevIcon[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft - width;
    })
});




// testimonials-stars

const stars = document.querySelectorAll('.fa-star');

console.log(stars);

for(let i=0; i<stars.length; i++) {
    stars[i].addEventListener('click', () => {
        stars[i].classList.toggle('checked');
    })
}






// brand-logo-slider

const brandLogobox = [...document.querySelectorAll('.brand-logos-slider')];
const prevbutton = [...document.querySelectorAll('.previous-button')];
const nextbutton = [...document.querySelectorAll('.next-button')];


brandLogobox.forEach((card, i) => {
    let sliderDimension = card.getBoundingClientRect();
    let width = sliderDimension.width;

    nextbutton[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft + width;
    })

    prevbutton[i].addEventListener('click', () => {
        card.scrollLeft = card.scrollLeft - width;
    })
});




