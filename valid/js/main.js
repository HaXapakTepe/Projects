$(document).ready(function () {
  $('.modalBox').fancybox()
  $('[name = "phone"]').mask("+7 (999) 999-9999", {
    placeholder: "_",
    autoclear: false,
  });
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

  if (burger) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
    })
  }
  const menuLinks = document.querySelectorAll('.menu__item-link[data-goto]')

  if (menuLinks.length > 0) {
    menuLinks.forEach((link) => {
      link.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
      const link = e.target
      if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
        const gotoBlock = document.querySelector(link.dataset.goto)
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top
        window.scrollBy({
          top: gotoBlockValue,
          behavior: 'smooth',
        })
        e.preventDefault()
      }
    }
  }

  const sliderSwiper = new Swiper('.slider__swiper', {
    breakpoints: {
      992: {
        slidesPerView: 1.7,
        spaceBetween: 60,
      },
      576: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
    },
  })

  const techcenterSwiper = new Swiper('.techcenter__swiper', {
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
    },
  })

  const videoSwiper = new Swiper('.techcenter__videoSwiper', {
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
    },
  })

  const painterSwiper = new Swiper('.painter__swiper', {
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
    },
  })

})
