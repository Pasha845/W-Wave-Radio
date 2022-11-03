const aboutSlider = new Swiper('.about__swiper', {
  slidesPerView: "auto",
  grid: {
    rows: 1
  },
  spaceBetween: 32,
  navigation: {
    nextEl: ".about__next",
    prevEl: ".about__prev",
    disabledClass: "about__btn--disabled"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    924: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    1150: {
      slidesPerView: 4,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    }
  }
})