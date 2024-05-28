
const sampleSlider = new Swiper('.sample-slider', {
    // if navigation(arrows) is needed
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // if pagination(dots) is needed
    pagination: {
        el: '.swiper-pagination',
    },
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      600: {
          // The number of displayed slides when the window width is 600 or more
          slidesPerView: 3
      },
    },
    // effect: 'fade',
  })