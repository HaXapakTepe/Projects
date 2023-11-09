$(document).ready(function () {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')
  const filterItemTop = document.querySelectorAll('.filter__item-top')
  const filterItemBtn = document.querySelectorAll('.filter__item-btn')
  const filterItemBtnMobile = document.querySelectorAll('.filter__item-btn--mobile')
  const accordeonsEls = document.querySelectorAll('.quote__item-title')
  const accordeonsElsAll = document.querySelector('.quote__item-all')
  const playerIconSettings = document.querySelectorAll('.player__icon--settings')
  const playerIconBurger = document.querySelectorAll('.player__icon--burger')
  const menuLinks = document.querySelectorAll('.goto[data-goto]')
  const tabs = document.querySelectorAll('.tab__target')
  const pages = document.querySelectorAll('.tab__info')
  const headerEntry = document.querySelectorAll('.header__entry')

  playerIconBurger?.forEach((acc) => {
    acc.addEventListener('click', () => {
      const content = acc.nextElementSibling.firstElementChild
      if (acc.classList.contains('player__icon--active')) {
        acc.classList.remove('player__icon--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('player__icon--active')
        content.style.maxHeight = content.scrollHeight + 2 + 'px'
      }
    })
  })

  playerIconSettings?.forEach((acc) => {
    acc.addEventListener('click', () => {
      const content = acc.nextElementSibling.firstElementChild
      if (acc.classList.contains('player__icon--active')) {
        acc.classList.remove('player__icon--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('player__icon--active')
        content.style.maxHeight = content.scrollHeight + 2 + 'px'
      }
    })
  })

  if (burger) {
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.active')) {
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

  if (innerWidth < 768) {
    filterItemTop?.forEach((acc) => {
      acc.addEventListener('click', () => {
        const content = acc.nextElementSibling
        if (acc.classList.contains('filter__item-top--active')) {
          acc.classList.remove('filter__item-top--active')
          content.style.maxHeight = '0'
        } else {
          acc.classList.add('filter__item-top--active')
          content.style.maxHeight = content.scrollHeight + 'px'
        }
      })
    })

    filterItemBtnMobile?.forEach((acc) => {
      acc.addEventListener('click', () => {
        const content = acc.nextElementSibling.firstElementChild
        if (acc.classList.contains('filter__item-btn--active')) {
          acc.classList.remove('filter__item-btn--active')
          content.style.maxHeight = '0'
        } else {
          acc.classList.add('filter__item-btn--active')
          content.style.maxHeight = content.scrollHeight + 2 + 'px'
        }
      })
    })
  }

  headerEntry?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      const content = acc.querySelector('.dropdown__inner')
      if (acc.classList.contains('header__entry--active')) {
        acc.classList.remove('header__entry--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('header__entry--active')
        content.style.maxHeight = content.scrollHeight + 2 + 'px'
      }
    })
  })

  menuItem?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      const content = acc.querySelector('.dropdown__inner')
      if (acc.classList.contains('menu__item--active')) {
        acc.classList.remove('menu__item--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('menu__item--active')
        content.style.maxHeight = content.scrollHeight + 2 + 'px'
      }
    })
  })

  filterItemBtn?.forEach((acc) => {
    acc.addEventListener('click', () => {
      const content = acc.nextElementSibling.firstElementChild
      if (acc.classList.contains('filter__item-btn--active')) {
        acc.classList.remove('filter__item-btn--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('filter__item-btn--active')
        content.style.maxHeight = content.scrollHeight + 2 + 'px'
      }
    })
  })

  accordeonsEls?.forEach((acc) => {
    acc.addEventListener('click', () => {
      const content = acc.nextElementSibling
      if (acc.classList.contains('quote__item-title--active')) {
        acc.classList.remove('quote__item-title--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('quote__item-title--active')
        content.style.maxHeight = content.scrollHeight + 2 + 'px'
      }
    })
  })

  accordeonsElsAll?.addEventListener('click', () => {
    accordeonsEls.forEach((acc) => {
      const content = acc.nextElementSibling
      if (acc.classList.contains('quote__item-title--active')) {
        acc.classList.remove('quote__item-title--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('quote__item-title--active')
        content.style.maxHeight = content.scrollHeight + 2 + 'px'
      }
    })
  })
})

// if (document.querySelector('[name="phone"]')) {
//   const element = document.querySelector('[name="phone"]')
//   const maskOptions = {
//     mask: '+{7} 000 000 00 00',
//   }
//   const mask = IMask(element, maskOptions)
// }
