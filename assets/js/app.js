// Nav Hamburger Button
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav__menu');
const navBar    = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
    navBar.classList.toggle('scrolled');
});

// Nav Transparent on scroll
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }
}

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



// SwiperJS Sliders

const headerSlider = new Swiper ('.header-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: true,
  fadeEffect: { crossFade: true },
  // pagination
  pagination: {
    el: '#header-pagination',
    clickable: true
  },

});


const testimonialsSlider = new Swiper ('.testimonials-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: true,
  fadeEffect: { crossFade: true },
  // If we need pagination
  pagination: {
    el: '#testimonials-pagination',
    clickable: true
  },

});

const teamSlider = new Swiper('.team-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,\
  setWrapperSize: true,
  autoHeight: true,
  watchOverflow: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});
