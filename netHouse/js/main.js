$(document).ready(function () {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')

  if (burger) {
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      }
      e.stopPropagation()
    })

    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
    })
  }

  if (menuItem) {
    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      })
    })
  }

  if (document.querySelector('.top__swiper')) {
    const topSwiper = new Swiper('.top__swiper', {
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: '.top__arrow-prev',
        prevEl: '.top__arrow-next',
      },
    })
  }

  if (document.querySelector('.works__swiper')) {
    const workSwiperMini = new Swiper('.works__swiperMini', {
      loop: true,
      spaceBetween: 20,
      watchSlidesProgress: true,

      breakpoints: {
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        320: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
      },
    })

    const worksSwiper = new Swiper('.works__swiper', {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.works__arrow-next',
        prevEl: '.works__arrow-prev',
      },
      thumbs: {
        swiper: workSwiperMini,
      },
    })
  }
})
