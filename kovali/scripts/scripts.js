document.addEventListener('DOMContentLoaded', () => {
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Код, который нужно выполнить, когда блок видим
        function animateCounter(element, targetNumber, duration, interval) {
          const startNumber = 1
          const step = Math.ceil(targetNumber / (duration / 10))

          let currentNumber = startNumber

          function updateNumber() {
            if (currentNumber < targetNumber) {
              currentNumber += step
              if (currentNumber > targetNumber) {
                currentNumber = targetNumber
              }
              element.textContent = currentNumber
              setTimeout(updateNumber, interval)
            }
          }

          updateNumber()
        }

        const arsenalItemNumYear = document.querySelector('.arsenal__item-num--year')
        if (arsenalItemNumYear) {
          const targetNumber = parseInt(arsenalItemNumYear.dataset.num, 10)
          const duration = 3000
          const interval = 100
          animateCounter(arsenalItemNumYear, targetNumber, duration, interval)
        }

        const arsenalItemNumProduct = document.querySelector('.arsenal__item-num--product')
        if (arsenalItemNumProduct) {
          const targetNumber = parseInt(arsenalItemNumProduct.dataset.num, 10)
          const duration = 3000
          const interval = 5
          animateCounter(arsenalItemNumProduct, targetNumber, duration, interval)
        }

        const arsenalItemNumClients = document.querySelector('.arsenal__item-num--clients')
        if (arsenalItemNumClients) {
          const targetNumber = parseInt(arsenalItemNumClients.dataset.num, 10)
          const duration = 3000
          const interval = 30
          animateCounter(arsenalItemNumClients, targetNumber, duration, interval)
        }

        const arsenalItemTitleSmall = document.querySelectorAll('.arsenal__item-title--small')
        arsenalItemTitleSmall.forEach((item) => {
          item.classList.add('arsenal__item-title--visible')
        })
        // Выключаем наблюдатель после выполнения кода (если нужно)
        observer.disconnect()
      }
    })
  }

  const options = {
    root: null, // Наблюдение за видимостью в окне браузера
    threshold: 0.5, // Минимальный процент видимости блока, чтобы срабатывал обработчик
  }

  const targetElement = document.querySelector('.arsenal__info')
  if (targetElement) {
    const observer = new IntersectionObserver(handleIntersection, options)
    observer?.observe(targetElement)
  }

  const video = document.querySelectorAll('.video')

  video?.forEach((element) => {
    const videoEl = element.querySelector('video')
    videoEl.controls = false
    videoEl.autoplay = true
    videoEl.loop = true
  })

  const menuLinks = document.querySelectorAll('.menu__link[data-goto]')

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

  const words = ['Грунт-эмали', 'Порошковые краски', 'Эмали', 'Грунты', 'Лаки']
  const test = document.querySelector('.arsenal__swap')
  let wordNum = 0

  function getNextWord() {
    wordNum++

    if (wordNum >= words.length) {
      wordNum = 0
    }

    return words[wordNum]
  }

  function change() {
    test.style.opacity = 0
    setTimeout(function () {
      test.textContent = getNextWord()
      test.style.opacity = 1
    }, 600)

    setTimeout(change, 2000)
  }

  if (test) {
    test.innerHTML = getNextWord()
    change()
  }

  const accordion = document.querySelectorAll('.accordion')

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

  const getCP = document.querySelectorAll('.getCP')
  const callback = document.querySelectorAll('.callback')
  const consultation = document.querySelectorAll('.consultation')

  if (getCP) {
    getCP.forEach((element) => {
      const modalBtn = element?.querySelector('.btn')
      const modalClose = element?.querySelector('.modal__close')
      const modalOpen = document.querySelector('.getCP-open')

      modalBtn?.addEventListener('click', (e) => {
        e.preventDefault()
        modal.classList.remove('modal--active')
        document.body.classList.remove('no-scroll')
      })

      element?.addEventListener('click', (e) => {
        if (!e.target.closest('.modal__form')) {
          element.classList.remove('modal--active')
          document.body.classList.remove('no-scroll')
        }

        if (element.classList.contains('modal--active')) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
      })

      modalClose?.addEventListener('click', () => {
        element.classList.remove('modal--active')
        document.body.classList.remove('no-scroll')
      })

      modalOpen?.addEventListener('click', () => {
        element.classList.add('modal--active')
        document.body.classList.add('no-scroll')
      })
    })
  }

  if (callback) {
    callback.forEach((element) => {
      const modalBtn = element?.querySelector('.btn')
      const modalClose = element?.querySelector('.modal__close')
      const modalOpen = document.querySelector('.callback-open')

      modalBtn?.addEventListener('click', (e) => {
        e.preventDefault()
        modal.classList.remove('modal--active')
        document.body.classList.remove('no-scroll')
      })

      element?.addEventListener('click', (e) => {
        if (!e.target.closest('.modal__form')) {
          element.classList.remove('modal--active')
          document.body.classList.remove('no-scroll')
        }

        if (element.classList.contains('modal--active')) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
      })

      modalClose?.addEventListener('click', () => {
        element.classList.remove('modal--active')
        document.body.classList.remove('no-scroll')
      })

      modalOpen?.addEventListener('click', () => {
        element.classList.add('modal--active')
        document.body.classList.add('no-scroll')
      })
    })
  }

  if (consultation) {
    consultation.forEach((element) => {
      const modalBtn = element?.querySelector('.btn')
      const modalClose = element?.querySelector('.modal__close')
      const modalOpen = document.querySelectorAll('.consultation-open')

      modalBtn?.addEventListener('click', (e) => {
        e.preventDefault()
        modal.classList.remove('modal--active')
        document.body.classList.remove('no-scroll')
      })

      element?.addEventListener('click', (e) => {
        if (!e.target.closest('.modal__form')) {
          element.classList.remove('modal--active')
          document.body.classList.remove('no-scroll')
        }

        if (element.classList.contains('modal--active')) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
      })

      modalClose?.addEventListener('click', () => {
        element.classList.remove('modal--active')
        document.body.classList.remove('no-scroll')
      })

      modalOpen.forEach((item) => {
        item?.addEventListener('click', () => {
          element.classList.add('modal--active')
          document.body.classList.add('no-scroll')
        })
      })
    })
  }

  if (document.querySelector('[name="phone"]')) {
    const element = document.querySelectorAll('[name="phone"]')

    element.forEach((item) => {
      const maskOptions = {
        mask: '+{7} 000 000 00 00',
      }
      const mask = IMask(item, maskOptions)
    })
  }
})
