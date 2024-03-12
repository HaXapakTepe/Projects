document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')
  const tabs = document.querySelectorAll('.tab__target')
  const pages = document.querySelectorAll('.tab__info')

  const tabsAlt = document.querySelectorAll('.tab__targetAlt')
  const pagesAlt = document.querySelectorAll('.tab__infoAlt')

  Fancybox.bind('[data-fancybox]', {})

  tabs?.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('tab__target--active'))
      pages.forEach((page) => {
        page.classList.remove('tab__info--active')
        setTimeout(() => {
          page.classList.remove('tab__info--opacity')
        }, 380)
      })

      tab.classList.add('tab__target--active')
      pages[idx].classList.add('tab__info--active')

      setTimeout(() => {
        pages[idx].classList.add('tab__info--opacity')
      }, 380)
    })
  })

  tabsAlt?.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabsAlt.forEach((tab) => tab.classList.remove('tab__targetAlt--active'))
      pagesAlt.forEach((page) => {
        page.classList.remove('tab__infoAlt--active')
        setTimeout(() => {
          page.classList.remove('tab__infoAlt--opacity')
        }, 380)
      })

      tab.classList.add('tab__targetAlt--active')
      pagesAlt[idx].classList.add('tab__infoAlt--active')

      setTimeout(() => {
        pagesAlt[idx].classList.add('tab__infoAlt--opacity')
      }, 380)
    })
  })

  const toggleMenu = () => {
    menu.classList.toggle('menu--active')
    burger.classList.toggle('burger--active')
  }

  const clickOutsideMenu = (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      menu.classList.remove('menu--active')
      burger.classList.remove('burger--active')
    }
  }

  burger?.addEventListener('click', toggleMenu)
  document.addEventListener('click', clickOutsideMenu)

  if (burger) {
    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.remove('active')
      })
    })
  }

  const popularSort = document.querySelectorAll('.popular__sort-text')

  if (popularSort) {
    popularSort.forEach((item) => {
      item.addEventListener('click', function () {
        popularSort.forEach((item) => {
          item.classList.remove('popular__sort-text--active')
        })
        this.classList.add('popular__sort-text--active')
      })
    })
  }

  const accordion = document.querySelectorAll('.accordion')
  const accordionMenu = document.querySelectorAll('.accordionMenu')

  accordion?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()
      const content = acc.nextElementSibling
      if (acc.classList.contains('accordion--active')) {
        acc.classList.remove('accordion--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  if (innerWidth < 993) {
    accordionMenu?.forEach((acc) => {
      acc.addEventListener('click', (e) => {
        e.preventDefault()
        const content = acc.querySelector('.accordionMenu__content')
        if (acc.classList.contains('accordionMenu--active')) {
          acc.classList.remove('accordionMenu--active')
          content.style.maxHeight = '0'
        } else {
          acc.classList.add('accordionMenu--active')
          content.style.maxHeight = content.scrollHeight + 'px'
        }
      })
    })
  }

  const popularTypeText = document.querySelectorAll('.popular__type-text')

  if (popularTypeText) {
    popularTypeText.forEach((item) => {
      item.addEventListener('click', function () {
        popularTypeText.forEach((item) => {
          item.classList.remove('popular__type-text--active')
        })
        this.classList.add('popular__type-text--active')
      })
    })
  }

  const promotion = document.querySelector('.popular__type-text--promotion')
  const hit = document.querySelector('.popular__type-text--hit')
  const recommended = document.querySelector('.popular__type-text--recommended')

  const cheapBtn = document.querySelector('.popular__sort-text--cheap')
  const expensiveBtn = document.querySelector('.popular__sort-text--expensive')
  const promotionBtn = document.querySelector('.popular__sort-text--promotion')

  const cards = Array.from(document.querySelectorAll('.popular__card'))

  const comparePrices = (a, b) => {
    const priceA = parseInt(a.querySelector('.popular__card-price').textContent.replace(/\s/g, ''))
    const priceB = parseInt(b.querySelector('.popular__card-price').textContent.replace(/\s/g, ''))

    return priceA - priceB
  }

  const updateCardOrder = (cardList) => {
    const container = document.querySelector('.popular__inner')

    cards?.forEach((card) => {
      card.remove()
    })

    cardList?.forEach((card) => {
      container.appendChild(card)
    })
  }

  function toggleActiveCards(cardTextClass) {
    const cards = document.querySelectorAll('.popular__card')

    cards.forEach(function (card) {
      const cardText = card.querySelector(`.${cardTextClass}`)
      if (cardText) {
        card.classList.remove('popular__card--active')
      } else {
        card.classList.add('popular__card--active')
      }
    })
  }

  if (document.querySelector('.popular')) {
    cheapBtn?.addEventListener('click', () => {
      const sortedCards = [...cards]
      sortedCards.sort(comparePrices)
      updateCardOrder(sortedCards)
    })

    expensiveBtn?.addEventListener('click', () => {
      const sortedCards = [...cards]
      sortedCards.sort((a, b) => comparePrices(b, a))
      updateCardOrder(sortedCards)
    })

    promotionBtn?.addEventListener('click', () => {
      const sortedCards = [...cards]

      sortedCards.sort((a, b) => {
        const promotionA = a.querySelector('.popular__card-text--promotion')
        const promotionB = b.querySelector('.popular__card-text--promotion')

        if (promotionA && !promotionB) {
          return -1
        } else if (!promotionA && promotionB) {
          return 1
        } else {
          return comparePrices(a, b)
        }
      })

      updateCardOrder(sortedCards)
    })

    toggleActiveCards('popular__card-text--promotion')

    promotion?.addEventListener('click', function () {
      toggleActiveCards('popular__card-text--promotion')
    })

    hit?.addEventListener('click', function () {
      toggleActiveCards('popular__card-text--hit')
    })

    recommended?.addEventListener('click', function () {
      toggleActiveCards('popular__card-text--recommended')
    })
  }

  if (document.querySelector('[name="phone"]')) {
    const element = document.querySelector('[name="phone"]')
    const maskOptions = {
      mask: '+{7} 000 000 00 00',
    }
    const mask = IMask(element, maskOptions)
  }

  var sliderSwiper = new Swiper('.slider__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    navigation: {
      nextEl: `.slider__arrow-next`,
      prevEl: `.slider__arrow-prev`,
    },
  })

  // var popularSwiper = new Swiper('.popular__swiper', {
  //   slidesPerView: 3,
  //   spaceBetween: 16,
  //   navigation: {
  //     nextEl: `.popular__arrow-next`,
  //     prevEl: `.popular__arrow-prev`,
  //   },
  //   breakpoints: {
  //     993: {
  //       slidesPerView: 3,
  //     },
  //     769: {
  //       slidesPerView: 2,
  //     },
  //     577: {
  //       slidesPerView: 2,
  //     },
  //     361: {
  //       slidesPerView: 1.8,
  //     },
  //     320: {
  //       slidesPerView: 1.2,
  //     },
  //   },
  // })

  const allSwipers = []
  const popularSwiper = document.querySelectorAll('.popular__swiper')
  popularSwiper.forEach((swiper, index) => {
    allSwipers.push(setSwiper(index + 1))
  })
  function setSwiper(index) {
    return new Swiper(`.popular__swiper--${index}`, {
      slidesPerView: 3,
      spaceBetween: 16,
      navigation: {
        nextEl: `.popular__arrow-next--${index}`,
        prevEl: `.popular__arrow-prev--${index}`,
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 2,
        },
        577: {
          slidesPerView: 1.2,
        },
        320: {
          slidesPerView: 1.1,
        },
      },
    })
  }
})

// $(document).ready(function () {})
