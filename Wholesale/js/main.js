var swiper = new Swiper(".swiperMini", {
  freeMode: true,
  watchSlidesProgress: true,
  spaceBetween: 15,

  breakpoints: {
    992: {
      slidesPerView: 5,
    },
    320: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  }
});

var swiper2 = new Swiper(".swiperBig", {
  effect: "fade",
  thumbs: {
    swiper: swiper,
  },
});

const itemColor = document.querySelectorAll(".slider__item-color")
const itemSize = document.querySelectorAll(".slider__item-size")

if (itemSize) {
  itemSize.forEach((item) => {
    item.addEventListener("click", function () {
      itemSize.forEach((item) => {
        item.classList.remove('active');
      })
      this.classList.add('active');
    })
  })
}

if (itemColor) {
  itemColor.forEach((item) => {
    item.addEventListener("click", function () {
      itemColor.forEach((item) => {
        item.classList.remove('active');
      })
      this.classList.add('active');
    })
  })
}