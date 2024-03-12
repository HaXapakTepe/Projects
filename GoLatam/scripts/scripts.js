document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const close = document.querySelector('.menu__item-icon--close')

  const toggleMenu = () => {
    menu.classList.toggle('menu--active')
    burger.classList.toggle('burger--active')
    body.classList.toggle('no-scroll')
  }

  const clickOutsideMenu = (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      menu.classList.remove('menu--active')
      burger.classList.remove('burger--active')
      body.classList.remove('no-scroll')
    }
  }

  burger.addEventListener('click', toggleMenu)
  close.addEventListener('click', toggleMenu)
  document.addEventListener('click', clickOutsideMenu)

  if (document.querySelector('.cases__swiper')) {
    const casesSwiper = new Swiper('.cases__swiper', {
      loop: true,
      pagination: {
        el: '.cases__swiper-pagination',
      },
      navigation: {
        nextEl: `.cases__swiper-next`,
        prevEl: `.cases__swiper-prev`,
      },
    })
  }

  if (document.querySelector('.teams__swiper')) {
    const teamsSwiper = new Swiper('.teams__swiper', {
      spaceBetween: 12,
      on: {
        slideChange: function () {
          const activeIndex = this.activeIndex
          console.log(activeIndex)
          const otherElement = document.querySelector('.teams__swiper')

          if (activeIndex == 0) {
            otherElement.classList.add('teams__swiper--fon')
          } else {
            otherElement.classList.remove('teams__swiper--fon')
          }
        },
      },
      watchOverflow: true,
      navigation: {
        nextEl: `.teams__swiper-next`,
        prevEl: `.teams__swiper-prev`,
      },
      breakpoints: {
        993: {
          spaceBetween: 24,
          slidesPerView: 3.4,
        },
        768: {
          slidesPerView: 2,
        },
        540: {
          slidesPerView: 1.6,
        },
        320: {
          slidesPerView: 1.1,
          spaceBetween: 12,
        },
      },
    })
  }

  if (document.querySelector('[name="phone"]')) {
    const element = document.querySelector('[name="phone"]')
    const maskOptions = {
      mask: '+{7} 000 000 00 00',
    }
    const mask = IMask(element, maskOptions)
  }
})

// document.addEventListener('DOMContentLoaded', () => {})
