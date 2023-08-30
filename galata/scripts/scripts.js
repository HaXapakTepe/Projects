$(document).ready(function () {
  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

  if (document.querySelector('[name="phone"]')) {
    $('[name="phone"]').mask(' 999 999 99 99', {
      placeholder: '',
      autoclear: false,
    })
  }

  $('.lk__order-item--accordion').click(function () {
    $(this).toggleClass('lk__order-item--active').next().slideToggle()
    $('.lk__order-item--accordion').not(this).removeClass('lk__order-item--active').next().slideUp()
  })

  const lkCheckoutBox = document.querySelectorAll('.lk__checkout-box')

  lkCheckoutBox.forEach((element) => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const num = element.querySelector('.count__num')
      let sum = +num.innerHTML

      if (e.classList.contains('count__plus')) {
        sum++
        num.innerHTML = sum
      } else if (e.classList.contains('count__minus') && sum > 1) {
        console.log('minus')
        sum--
        num.innerHTML = sum
      }
    })
  })

  const cloneWayLabel = `
    <label class="way__label">
      <input class="way__label-input" type="text" placeholder="Москва, улицпрофсоюзная, дом14 кв77">
    </label>
  `

  const way = document.querySelectorAll('.way')

  way?.forEach((elem) => {
    elem?.addEventListener('click', (e) => {
      const wayAdd = e.target.closest('.way__add')
      if (wayAdd) {
        const wayInner = elem.querySelector('.way__inner')
        wayInner.insertAdjacentHTML('beforeend', cloneWayLabel)
      }
    })
  })

  const lkLoyaltyFfonElem = document.querySelector('.lk__loyalty-fonElem')
  const dataWidth = lkLoyaltyFfonElem?.getAttribute('data-width')

  if (lkLoyaltyFfonElem) {
    lkLoyaltyFfonElem.style.width = `${dataWidth}%`
  }

  const cloneAddressInput = `
  <label class="lk__details-label">
    <input class="lk__details-input" type="text" placeholder="Введите адрес">
    <div class="lk__details-delete">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 12H8" stroke="#323232" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
          stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </label>
  `
  const lkDetails = document.querySelector('.lk__details')
  lkDetails?.addEventListener('click', (e) => {
    const create = e.target.closest('.lk__details-text--create')
    if (create) {
      const lkDetailsBlock = lkDetails.querySelector('.lk__details-block')
      lkDetailsBlock.insertAdjacentHTML('beforeend', cloneAddressInput)
    }

    const lkDetailsLabel = lkDetails.querySelectorAll('.lk__details-label')

    lkDetailsLabel.forEach((label) => {
      const lkDetailsDelete = label?.querySelector('.lk__details-delete')
      lkDetailsDelete?.addEventListener('click', () => {
        label.remove()
      })
    })
  })

  var lkBoxItem = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.lk__info')

  lkBoxItem?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('lk__info--opacity', 'lk__info--active')
      })
      lkBoxItem.forEach((elem) => {
        elem.classList.remove('lk__box-item--active')
      })
      this.classList.add('lk__box-item--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('lk__info--active')
      setTimeout(() => {
        cat.classList.add('lk__info--opacity')
      }, 400)
    })
  })

  const visible = document.querySelectorAll('.entry__label-icon')
  const password = document.querySelectorAll('[type="password"]')

  visible?.forEach((button) => {
    button.addEventListener('click', () => {
      password.forEach((input) => {
        if (input.getAttribute('type') === 'password') {
          input.setAttribute('type', 'text')
        } else {
          input.setAttribute('type', 'password')
        }
      })
    })
  })

  const lkOrders = document.querySelector('.lk__orders')

  function toggleClass(element, className, toggle) {
    if (toggle) {
      element.classList.add(className)
    } else {
      element.classList.remove(className)
    }
  }

  lkOrders?.addEventListener('click', (e) => {
    const label = e.target.closest('.label')

    if (label) {
      const labelInput = label.querySelector('.label__input')
      const { checked } = labelInput

      const orderItem = labelInput.parentNode.nextElementSibling.firstElementChild
      toggleClass(orderItem, 'lk__order-item--checked', checked)
    }
  })

  const formSelect = document.querySelector('.form__select')
  const formSelectItem = document.querySelectorAll('.form__select-item')

  formSelect?.addEventListener('click', () => {
    formSelectItem.forEach((item) => {
      item.classList.add('form__select-item--active')
    })
  })

  formSelectItem?.forEach((item) => {
    item.addEventListener('click', function () {
      formSelectItem.forEach((item) => {
        item.classList.remove('form__select-item--active')
      })
      this.classList.add('form__select-item--active')
    })
  })

  $('.delivery__select').select2({
    placeholder: `Куда`,
    dropdownParent: $('.delivery__box'),
  })

  $('.form__select').select2({
    placeholder: `Куда`,
    dropdownParent: $('.form__box'),
  })

  $('.lk__details-select').select2({
    placeholder: `Куда`,
    dropdownParent: $('.lk__details-box'),
  })

  $('.search__select').select2({
    placeholder: `Выберите`,
    closeOnSelect: false,
    dropdownParent: $('.search__box'),
  })

  $('.faq__item').click(function () {
    $(this).toggleClass('faq__item--active').children().eq(-1).slideToggle()
    $('.faq__item').not(this).removeClass('faq__item--active').find('.faq__item-hidden').slideUp()
  })

  const select2SelectionRendered = document.querySelector('.select2-selection__rendered')
  // const box = document.querySelector('.lk__details-box')

  // const flagMap = {
  //   '+7': '.lk__details-flagImg--ru',
  //   '+380': '.lk__details-flagImg--ua',
  //   '+375': '.lk__details-flagImg--by',
  // }

  // box?.addEventListener('click', () => {
  //   const selectedFlagClass = flagMap[select2SelectionRendered.textContent]
  //   const selectedFlag = box.querySelector(selectedFlagClass)

  //   if (selectedFlag) {
  //     const allFlags = box.querySelectorAll('.lk__details-flagImg')

  //     allFlags.forEach((flag) => {
  //       flag.classList.remove('lk__details-flagImg--active')
  //     })

  //     selectedFlag.classList.add('lk__details-flagImg--active')
  //   }

  //   // Создаем экземпляр MutationObserver
  //   const observer = new MutationObserver((mutationsList) => {
  //     for (let mutation of mutationsList) {
  //       if (mutation.type === 'childList' && mutation.target === select2SelectionRendered) {
  //         // Текст был изменен
  //         const selectedFlagClass = flagMap[select2SelectionRendered.textContent]
  //         const selectedFlag = box.querySelector(selectedFlagClass)

  //         if (selectedFlag) {
  //           const allFlags = box.querySelectorAll('.lk__details-flagImg')

  //           allFlags.forEach((flag) => {
  //             flag.classList.remove('lk__details-flagImg--active')
  //           })

  //           selectedFlag.classList.add('lk__details-flagImg--active')
  //         }
  //       }
  //     }
  //   })

  //   // Настраиваем наблюдатель на отслеживание изменений дочерних элементов
  //   observer?.observe(select2SelectionRendered, { childList: true })
  // })

  const formBox = document.querySelector('.form__box')

  const flagMapFormBox = {
    '+7': '.form__box-flagImg--ru',
    '+380': '.form__box-flagImg--ua',
    '+375': '.form__box-flagImg--by',
  }

  formBox?.addEventListener('click', () => {
    const selectedFlagClass = flagMapFormBox[select2SelectionRendered.textContent]
    const selectedFlag = formBox.querySelector(selectedFlagClass)

    if (selectedFlag) {
      const allFlags = formBox.querySelectorAll('.form__box-flagImg')

      allFlags.forEach((flag) => {
        flag.classList.remove('form__box-flagImg--active')
      })

      selectedFlag.classList.add('form__box-flagImg--active')
    }

    // Создаем экземпляр MutationObserver
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.target === select2SelectionRendered) {
          // Текст был изменен
          const selectedFlagClass = flagMapFormBox[select2SelectionRendered.textContent]
          const selectedFlag = formBox.querySelector(selectedFlagClass)

          if (selectedFlag) {
            const allFlags = formBox.querySelectorAll('.form__box-flagImg')

            allFlags.forEach((flag) => {
              flag.classList.remove('form__box-flagImg--active')
            })

            selectedFlag.classList.add('form__box-flagImg--active')
          }
        }
      }
    })

    // Настраиваем наблюдатель на отслеживание изменений дочерних элементов
    observer?.observe(select2SelectionRendered, { childList: true })
  })

  const howItem = document.querySelectorAll('.how__item-num')
  function copy(elem) {
    elem.forEach((span, index) => {
      span.textContent = `${index + 1}`
    })
  }
  copy(howItem)

  if (document.querySelector('.delivery__select')) {
    // добавить * в select2-selection__placeholder
    const placeholderElement = document.querySelector('.select2-selection__placeholder')
    const starElement = document.createElement('span')
    starElement.innerText = '*'
    starElement.classList.add('select2-selection__placeholder-star')
    placeholderElement.appendChild(starElement)
  }

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

    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      })
    })

    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
    })
  }

  if (document.querySelector('.say__swiper')) {
    const caseSwiper = new Swiper('.say__swiper', {
      navigation: {
        nextEl: `.say__next`,
        prevEl: `.say__prev`,
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 44,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        414: {
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
  if (document.querySelector('.lk__order-swiper')) {
    const caseSwiper = new Swiper('.lk__order-swiper', {
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        414: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
      },
    })
  }
})
