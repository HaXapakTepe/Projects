document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')

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
  document.addEventListener('click', clickOutsideMenu)

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

  var swiper = new Swiper('.content__swiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.content__swiper-pagination',
    },
  })

  var contentServices = new Swiper('.content__services', {
    slidesPerView: 3,
    spaceBetween: 16,
    navigation: {
      nextEl: `.content__services-next`,
      prevEl: `.content__services-prev`,
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 3,
      },
      541: {
        slidesPerView: 2,
      },
      414: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })

  var contentServices = new Swiper('.content__services--four', {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
      nextEl: `.content__services-next`,
      prevEl: `.content__services-prev`,
    },
    breakpoints: {
      993: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 4,
      },
      541: {
        slidesPerView: 3,
      },
      375: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })
})

// if (document.querySelector('[name="phone"]')) {
//   const element = document.querySelector('[name="phone"]')
//   const maskOptions = {
//     mask: '+{7} 000 000 00 00',
//   }
//   const mask = IMask(element, maskOptions)
// }
// $(document).ready(function () {})
