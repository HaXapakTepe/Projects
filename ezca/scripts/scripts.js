document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const accordion = document.querySelectorAll('.accordion')
  const formTypeLabel = document.querySelectorAll('.form__type-label')
  const formSpendingLabel = document.querySelectorAll('.form__spending-label')

  if (innerWidth < 993) {
    const studiesItems = document.querySelectorAll('.studies__item')
    studiesItems?.forEach((item, index) => {
      const adjustedIndex = index % 4 === 0 ? index + 4 : index
      item.style.order = adjustedIndex.toString()
    })

    const methodsItems = document.querySelectorAll('.methods__item')
    methodsItems?.forEach((item, index) => {
      // const adjustedIndex = index % 6 === 0 ? index : index
      // item.style.order = adjustedIndex.toString()
      item.style.order = index
    })
  }

  if (formTypeLabel) {
    formTypeLabel.forEach((item) => {
      item.addEventListener('click', function () {
        formTypeLabel.forEach((item) => {
          item.classList.remove('form__type-label--checked')
        })
        this.classList.add('form__type-label--checked')
      })
    })
  }

  if (formSpendingLabel) {
    formSpendingLabel.forEach((item) => {
      item.addEventListener('click', function () {
        formSpendingLabel.forEach((item) => {
          item.classList.remove('form__spending-label--checked')
        })
        this.classList.add('form__spending-label--checked')
      })
    })
  }

  if (innerWidth < 993) {
    accordion?.forEach((acc) => {
      acc.addEventListener('click', (e) => {
        e.preventDefault()
        const content = acc.parentNode.nextElementSibling
        if (acc.classList.contains('accordion--active')) {
          acc.classList.remove('accordion--active')
          content.style.maxHeight = '0'
        } else {
          acc.classList.add('accordion--active')
          content.style.maxHeight = content.scrollHeight + 'px'
        }
      })
    })
  }

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

  const up = document.querySelector('.up')

  up.addEventListener('click', scrollToTop)

  function scrollToTop() {
    const scrollToTopDuration = 1000
    const scrollStep = window.scrollY / (scrollToTopDuration / 15)

    scrollToTopInterval(scrollStep)
  }

  function scrollToTopInterval(scrollStep) {
    let scrollCount = 0
    const scrollInterval = setInterval(function () {
      if (window.scrollY != 0) {
        scrollCount++
        window.scrollBy(0, -scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 15)
  }

  if (document.querySelector('.partners__swiper')) {
    const partnersSwiper = new Swiper('.partners__swiper', {
      spaceBetween: 30,
      slidesPerView: 5,
      breakpoints: {
        1200: {
          spaceBetween: 120,
          slidesPerView: 5,
        },
        993: {
          slidesPerView: 5,
        },
        769: {
          slidesPerView: 4,
        },
        577: {
          slidesPerView: 2.1,
        },
        480: {
          slidesPerView: 3.5,
        },
        361: {
          slidesPerView: 3.4,
        },
        320: {
          slidesPerView: 2.5,
        },
      },
    })
  }

  if (document.querySelector('.reviews__swiper')) {
    var reviewsSwiper = new Swiper('.reviews__swiper', {
      pagination: {
        el: '.reviews__swiper-pagination',
        dynamicBullets: true,
      },
    })
  }

  if (document.querySelector('.team__swiper')) {
    var reviewsSwiper = new Swiper('.team__swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        993: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 2,
        },
        577: {
          slidesPerView: 2,
        },
        361: {
          slidesPerView: 1.8,
        },
        320: {
          slidesPerView: 1.2,
        },
      },
      navigation: {
        nextEl: `.team__arrow-next`,
        prevEl: `.team__arrow-prev`,
      },
      pagination: {
        el: '.team__swiper-pagination',
        dynamicBullets: true,
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

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })
})

// $(document).ready(function () {})
