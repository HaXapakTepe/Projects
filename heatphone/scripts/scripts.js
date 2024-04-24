document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const close = document.querySelector('.menu__close')
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
  close.addEventListener('click', toggleMenu)
  document.addEventListener('click', clickOutsideMenu)

  // if (burger) {
  //   menuItem.forEach((item) => {
  //     item.addEventListener('click', () => {
  //       burger.classList.toggle('burger--active')
  //       menu.classList.remove('menu--active')
  //       body.classList.remove('no-scroll')
  //     })
  //   })
  // }

  if (document.querySelector('.catalog')) {
    const catalogInner = document.querySelectorAll('.catalog__inner')
    catalogInner.forEach((element) => {
      const filterReset = element.querySelector('.filter__reset')

      filterReset.addEventListener('click', () => {
        const check = element.querySelectorAll('.label__input')
        check.forEach((item) => {
          item.checked = false
        })
      })

      const cheapBtn = element.querySelector('.catalog__sort-option--cheap')
      const expensiveBtn = element.querySelector('.catalog__sort-option--expensive')

      const cards = Array.from(element.querySelectorAll('.card'))

      const comparePrices = (a, b) => {
        const priceA = parseInt(a.querySelector('.card__price').textContent.replace(/\s/g, ''))
        const priceB = parseInt(b.querySelector('.card__price').textContent.replace(/\s/g, ''))

        return priceA - priceB
      }

      const updateCardOrder = (cardList) => {
        const container = element.querySelector('.catalog__cards-box')

        cards?.forEach((card) => {
          card.remove()
        })

        cardList?.forEach((card) => {
          container.appendChild(card)
        })
      }

      const choice = element.querySelector('.catalog__sort-choice')
      const option = element.querySelectorAll('.catalog__sort-option')

      option?.forEach((btn) => {
        btn.addEventListener('click', () => {
          choice.textContent = btn.textContent.trim()
        })
      })

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
    })
  }

  const count = document.querySelectorAll('.count')

  count?.forEach((element) => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const num = element.querySelector('.count__num')
      let sum = +num.innerHTML

      if (e.classList.contains('count__plus')) {
        ++sum
        num.innerHTML = sum
      }
      if (e.classList.contains('count__minus')) {
        if (sum > 1) {
          --sum
          num.innerHTML = sum
        }
      }
    })
  })

  function handleTabClick(tabs, pages, activeTabClass, activePageClass, opacityPageClass) {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove(activeTabClass))
        pages.forEach((page) => {
          page.classList.remove(activePageClass)
          page.classList.remove(opacityPageClass)
        })

        tab.classList.add(activeTabClass)
        pages[idx].classList.add(activePageClass)

        setTimeout(() => {
          pages[idx].classList.add(opacityPageClass)
        }, 380)
      })
    })
  }

  const tabs = document.querySelectorAll('.tab__target')
  const pages = document.querySelectorAll('.tab__info')

  handleTabClick(tabs, pages, 'tab__target--active', 'tab__info--active', 'tab__info--opacity')

  const accordions = document.querySelectorAll('.accordion')
  const contents = document.querySelectorAll('.accordion-content')

  accordions?.forEach((acc, index) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()

      const content = contents[index]

      if (acc.classList.contains('accordion--active')) {
        acc.classList.remove('accordion--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  const accordionItems = document.querySelectorAll('.accordionAlt')

  accordionItems?.forEach((accordionItem) => {
    accordionItem.addEventListener('click', (event) => {
      event.preventDefault()

      const content = accordionItem.nextElementSibling
      if (accordionItem.classList.contains('accordionAlt--active')) {
        accordionItem.classList.remove('accordionAlt--active')
        content.style.maxHeight = '0'
      } else {
        accordionItem.classList.add('accordionAlt--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  const filterAccordionItems = document.querySelectorAll('.filter__accordion-item')

  filterAccordionItems.forEach((filterAccordionItem) => {
    const showMoreButton = filterAccordionItem.querySelector('.filter__accordion-more')
    const hiddenItems = filterAccordionItem.querySelectorAll('.label')
    const filterHidden = filterAccordionItem.querySelector('.filter__accordion-column')

    let visibleItems = 5
    showMoreButton.addEventListener('click', function () {
      hiddenItems.forEach(function (item, index) {
        if (index < visibleItems) {
          item.classList.remove('hidden')
        }
      })

      const lastElement = hiddenItems[hiddenItems.length - 1]

      if (!lastElement.classList.contains('hidden')) {
        filterHidden.classList.add('filter__accordion-column--max')
      }

      visibleItems += 5

      filterHidden.style.maxHeight = `${filterHidden.scrollHeight}px`

      showMoreButton.click()
    })
  })

  if (document.querySelector('.popular__swiper')) {
    var promoSwiper = new Swiper('.popular__swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        993: {
          slidesPerView: 4,
        },
        769: {
          slidesPerView: 2.4,
        },
        577: {
          slidesPerView: 2,
        },
        391: {
          slidesPerView: 1.6,
        },
        320: {
          slidesPerView: 1.1,
        },
      },
      // navigation: {
      //   nextEl: `.team__arrow-next`,
      //   prevEl: `.team__arrow-prev`,
      // },
      // pagination: {
      //   el: '.team__swiper-pagination',
      //   dynamicBullets: true,
      // },
    })
  }

  if (document.querySelector('.news__swiper')) {
    var promoSwiper = new Swiper('.news__swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        993: {
          slidesPerView: 4,
        },
        769: {
          slidesPerView: 2.4,
        },
        577: {
          slidesPerView: 2,
        },
        391: {
          slidesPerView: 1.6,
        },
        320: {
          slidesPerView: 1.1,
        },
      },
    })
  }

  var swiper = new Swiper('.details__swiperSmall', {
    loop: true,
    spaceBetween: 12,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
    grid: {
      rows: 2,
    },
  })
  var swiper2 = new Swiper('.details__swiperBig', {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  })
})

if (document.querySelector('[name="phone"]')) {
  const element = document.querySelector('[name="phone"]')
  const maskOptions = {
    mask: '+{7} 000 000 00 00',
  }
  const mask = IMask(element, maskOptions)
}
