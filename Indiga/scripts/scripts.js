document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuClose = menu?.querySelector('.menu__close')
  const menuListItem = menu?.querySelectorAll('.menu__list-item')
  const tabs = document.querySelectorAll('.tab__target')
  const pages = document.querySelectorAll('.tab__info')
  const boxes = document.querySelectorAll('.tab__box')
  const scrollArrow = document.querySelector('.scrollArrow')
  const scrollBtn = document.querySelectorAll('.info__elem-target')
  const infoSwiper = document.querySelectorAll('.info__elem-swiper')
  const allSwipers = []

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

  scrollBtn?.forEach((element, idx) => {
    element.addEventListener('click', () => {
      const infoElemBox = document.querySelector('.info__elem-box')
      const scrollWidth = infoElemBox.scrollWidth - infoElemBox.offsetWidth
      if (idx == 2) {
        infoElemBox.scrollTo({
          left: scrollWidth,
          behavior: 'smooth',
        })
      } else if (idx == 0) {
        infoElemBox.scrollTo({
          left: 0,
          behavior: 'smooth',
        })
      }
    })
  })

  tabs?.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('tab__target--active'))
      pages.forEach((page) => {
        page.classList.remove('tab__info--active')
        setTimeout(() => {
          page.classList.remove('tab__info--opacity')
        }, 380)
      })
      boxes.forEach((box) => {
        box.classList.remove('tab__box--active')
        setTimeout(() => {
          box.classList.remove('tab__box--opacity')
        }, 380)
      })
      tab.classList.add('tab__target--active')
      pages[idx].classList.add('tab__info--active')
      boxes[idx].classList.add('tab__box--active')
      setTimeout(() => {
        pages[idx].classList.add('tab__info--opacity')
        boxes[idx].classList.add('tab__box--opacity')
      }, 380)
    })
  })

  window?.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > 100) {
      scrollArrow.classList.add('scrollArrow--alt')
    } else {
      scrollArrow.classList.remove('scrollArrow--alt')
    }
  })

  scrollArrow?.addEventListener('click', function () {
    if (scrollArrow.classList.contains('scrollArrow--alt')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      return false
    } else {
      const footer = document.querySelector('.footer')
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  })

  burger?.addEventListener('click', () => {
    menu.classList.add('menu--active')
    body.classList.add('no-scroll')
  })

  menuClose?.addEventListener('click', () => {
    menu.classList.remove('menu--active')
    body.classList.remove('no-scroll')
  })

  menuListItem?.forEach((item) => {
    item?.addEventListener('click', () => {
      menu.classList.remove('menu--active')
      body.classList.remove('no-scroll')
    })

    item.addEventListener('mouseover', function () {
      menuListItem.forEach((item) => {
        item.classList.remove('menu__list-item--active')
      })
      this.classList.add('menu__list-item--active')
    })
  })

  if (document.querySelector('[name="phone"]')) {
    const phone = document.querySelectorAll('[name="phone"]')
    phone.forEach((element) => {
      const maskOptions = {
        mask: '+{7} (000) 000 00 00',
      }
      const mask = IMask(element, maskOptions)
      element.addEventListener('click', (e) => {
        element.value = '+7 '
      })
    })
  }

  infoSwiper?.forEach((swiper, index) => {
    allSwipers.push(setSwiper(index + 1))
  })
  function setSwiper(index) {
    return new Swiper(`.info__elem-swiper--${index}`, {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: `.info__elem-pagination--${index}`,
        // clickable: true,
        // type: 'progressbar',
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        769: {
          slidesPerView: 2.1,
          spaceBetween: 15,
        },
        577: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        481: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        320: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
      },
    })
  }

  if (document.querySelector('.cases__swiper')) {
    const casesSwiper = new Swiper('.cases__swiper', {
      navigation: {
        nextEl: `.cases__arrow-next`,
        prevEl: `.cases__arrow-prev`,
      },
      pagination: {
        el: `.cases__pagination`,
        // clickable: true,
        // type: 'progressbar',
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
          spaceBetween: 26,
        },
        769: {
          slidesPerView: 2.1,
          spaceBetween: 15,
        },
        577: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        481: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
      },
    })
  }

  if (innerWidth < 993) {
    if (document.querySelector('.log__swiper')) {
      const casesSwiper = new Swiper('.log__swiper', {
        pagination: {
          el: `.log__pagination`,
          // clickable: true,
          // type: 'progressbar',
        },
        breakpoints: {
          993: {
            slidesPerView: 3,
            spaceBetween: -10,
          },
          769: {
            slidesPerView: 2.1,
            spaceBetween: -10,
          },
          577: {
            slidesPerView: 1.1,
            spaceBetween: -10,
          },
          481: {
            slidesPerView: 1.1,
            spaceBetween: -10,
          },
          320: {
            slidesPerView: 1.1,
            spaceBetween: -10,
          },
        },
      })
    }
  }
})
