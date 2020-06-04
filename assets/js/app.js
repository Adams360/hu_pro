// Nav Hamburger Button
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav__menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
});



// Header Slides Transition
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot--active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " dot--active";
  };


// Form Selection
const selected = document.querySelector('.selected');
const options  = document.querySelector('.options');
const optionsList = document.querySelectorAll('.option');
const arrow = document.querySelector('.selected__arrow');


selected.addEventListener('click', () => {
  options.classList.toggle('active');
  arrow.classList.toggle('flip');
})

optionsList.forEach( listItem => {
  listItem.addEventListener('click', () => {
    selected.innerHTML = listItem.querySelector('label').innerHTML;
    options.classList.remove('active');
    arrow.classList.remove('flip');
  });
});



// SwiperJS
var testimonialsSwiper = new Swiper ('.swiper-container-testimonials', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: true,
  fadeEffect: { crossFade: true },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

})
// SwiperJS
var teamSwiper = new Swiper ('.swiper-container-team', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  fadeEffect: { crossFade: true },
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-team',
  },

})