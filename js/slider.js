// new Swiper('.reviews__block', {
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   slidesPerView: 3,
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     766: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     1135: {
//       slidesPerView: 3,
//     },
//   },
//   spaceBetween: 15,
//   navigation: {
//     nextEl: '.reviews__arrow_right',
//     prevEl: '.reviews__arrow_left',
//   },
// });
new Swiper('.intro__block', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInterection: false,
  },
  speed: 800,
  effect: 'fade',
});
