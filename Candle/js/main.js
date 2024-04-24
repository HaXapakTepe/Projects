$(document).ready(function () {
  const selects = document.querySelectorAll('.calc__item-select')
  selects.forEach((select, index) => {
    select.setAttribute('data-selectId', index)
  })

  const blocksWithAdded = document.querySelectorAll('.calc__item-block--added')
  blocksWithAdded.forEach((element) => addedBlock(element))
  initialSelects()
  addItem()

  function setColor() {
    const selectText = document.querySelectorAll('.select2-selection__rendered')
    selectText.forEach((text) => {
      text.title === 'Не выбрано' ? (text.style.color = '#999') : (text.style.color = '#ffc35a')
    })
  }

  function initialSelects() {
    if (document.querySelector('.calc__item-select')) {
      $('.calc__item-select').select2({
        placeholder: 'Не выбрано',
        language: 'ru',
      })
    }
    setColor()
  }

  function addedBlock(element) {
    const listElement = element.querySelector('.calc__item-create')
    const addedBtn = element.querySelector('.calc__item-add')
    addedBtn.addEventListener('click', () => {
      const selects = element.querySelectorAll('.calc__item-select')
      const copiedElement = selects[selects.length - 1]
      copiedElement.setAttribute('data-old', '')

      $('[data-old]').select2('destroy')
      const newField = copiedElement.cloneNode(true)
      newField.setAttribute(
        'data-selectId',
        newField.getAttribute('data-selectId') + '-' + newField.getAttribute('data-selectId')
      )

      listElement.append(newField)
      initialSelects()
      addItem()

      copiedElement.removeAttribute('data-old')
    })
  }

  function addItem() {
    const calcInfo = document.querySelector('.calc__info-box')
    $('.calc__item-select').off('select2:select')
    $('.calc__item-select').on('select2:select', function (e) {
      const title = e.target.dataset.fieldname ? e.target.dataset.fieldname : ''
      const option = e.params.data?.element.textContent
      const id = e.target.getAttribute('data-selectId')
      const block = calcInfo.querySelector(`[data-infoid="${id}"]`)
      const btn = document.querySelectorAll('.btn')

      if (block && e.params.data.id !== 'not-selected') {
        // console.log('block && e.params.data.id !== "not-selected"')
        block.innerText = `${title} ${option}`
      } else if (block && e.params.data.id === 'not-selected') {
        // console.log('block && e.params.data.id === "not-selected"')
        block.remove()
      } else if (!block && e.params.data.id !== 'not-selected') {
        // console.log(e.params.data.id)
        const elem = document.createElement('p')
        elem.setAttribute('data-infoId', id)
        elem.className = 'calc__info-text'
        elem.innerText = `${title ? title + ': ' : ''}${option}`
        calcInfo.append(elem)

        btn.forEach((elem) => {
          elem.style.pointerEvents = 'auto'
        })
      }

      setColor()
    })
  }

  $('.modalBox').fancybox()

  $('.phone').mask('+7 (999) 999-99-99')

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

  const modalFormBtn = document.querySelectorAll('.btn--close')
  const success = document.querySelector('.success')
  const successBtn = document.querySelector('.success__close')

  modalFormBtn?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      $.fancybox.close()
      $.fancybox.close()
      $.fancybox.open(success)
    })
  })

  successBtn?.addEventListener('click', function () {
    $.fancybox.close()
  })

  $('.tabs__link--accordion').click(function () {
    $(this).toggleClass('in').next().slideToggle()
    $('.tabs__link--accordion').not(this).removeClass('in').next().slideUp()
  })

  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.tabs__item-info')

  targetMap?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('tabs__item-info--opacity', 'tabs__item-info--active')
      })
      targetMap.forEach((elem) => {
        elem.classList.remove('tabs__link--active')
      })
      this.classList.add('tabs__link--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('tabs__item-info--active')
      setTimeout(() => {
        cat.classList.add('tabs__item-info--opacity')
      }, 400)
    })
  })

  if (document.querySelector('.stocks__swiper')) {
    const caseSwiper = new Swiper('.stocks__swiper', {
      navigation: {
        nextEl: '.stocks__arrow-prev',
        prevEl: '.stocks__arrow-next',
      },
      breakpoints: {
        992: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1.5,
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
  }
})
