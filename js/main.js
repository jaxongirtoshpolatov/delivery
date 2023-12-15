let swiper = new Swiper(".intro-slider", {
    slidesPerView: 5,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
          slidesPerView: 1,
          spaceBetween: 10,
          slideToClickedSlide: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
        slideToClickedSlide: true,
      },
      1240: {
        slidesPerView: 5,
        spaceBetween: 16,
        slideToClickedSlide: true,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        slideToClickedSlide: true,
      }
  }
  });