$(document).ready(function () {
  $('.city__box-example').select2({
    dropdownParent: $('.city__box'),
  })

  $('.sorting__select-item').select2({
    placeholder: 'Выбор чего-то там',
    closeOnSelect: false,
    dropdownParent: $('.sorting'),
  })

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

  if (document.querySelector('[name="price"]')) {
    $('[name="price"]').mask('99?999999', {
      placeholder: '',
      autoclear: false,
    })
  }

  if (document.querySelector('[name="quantity"]')) {
    $('[name="quantity"]').mask('9?999', {
      placeholder: '',
      autoclear: false,
    })
  }

  if (document.querySelector('[name="phone"]')) {
    $('[name="phone"]').mask('+7 (999) 999-99-99', {
      placeholder: '',
      autoclear: false,
    })
  }

  const ordersItem = document.querySelectorAll('.orders__item')

  ordersItem?.forEach((item) => {
    const ordersItemBtnDelete = item?.querySelector('.orders__item-btn--delete')
    ordersItemBtnDelete?.addEventListener('click', () => {
      item.remove()
    })
  })

  const gallerySlide = document.querySelectorAll('.gallery__slide')

  gallerySlide?.forEach((elem) => {
    const galleryImg = elem.querySelector('.gallery__img')
    const galleryHidden = elem.querySelector('.gallery__hidden')?.firstElementChild
    galleryImg.addEventListener('click', () => {
      galleryHidden.click()
    })
  })

  $('.sorting__accordion-text').click(function () {
    $(this).toggleClass('sorting__accordion-text--active').next().slideToggle()
    $('.sorting__accordion-text')
      .not(this)
      .removeClass('sorting__accordion-text--active')
      .next()
      .slideUp()
  })

  $('.contacts__accordion-title').click(function () {
    $(this).toggleClass('contacts__accordion-title--active').next().slideToggle()
    $('.contacts__accordion-title')
      .not(this)
      .removeClass('contacts__accordion-title--active')
      .next()
      .slideUp()
  })

  $('.orders__top').click(function () {
    $(this).toggleClass('orders__top--active').next().slideToggle()
    $('.orders__top').not(this).removeClass('orders__top--active').next().slideUp()
  })

  $('.orders__item-top').click(function () {
    $(this).toggleClass('orders__item-top--active').next().slideToggle()
    $('.orders__item-top').not(this).removeClass('orders__item-top--active').next().slideUp()
  })

  if (innerWidth <= 992) {
    $('.filter__top').click(function () {
      $(this).toggleClass('filter__top--active').next().slideToggle()
    })
  }

  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')
  const menuClose = document.querySelector('.menu__close')

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
    menuClose.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
    })
  }

  if (document.querySelector('.filter__choice-range')) {
    let tooltipSlider = document.querySelectorAll('.filter__choice-range')

    tooltipSlider.forEach((element) => {
      noUiSlider.create(element, {
        range: {
          min: 1,
          max: 5,
        },
        start: ['1'],
        connect: [true, false],
        step: 1,
        pips: { mode: 'steps', density: 50 },
      })
    })
  }

  const cardItem = document.querySelectorAll('.card__item')

  cardItem?.forEach((item) => {
    const modalCounter = item.querySelectorAll('.count')
    const cardItemNum = item.querySelectorAll('.card__item-num')

    modalCounter.forEach((element) => {
      element.addEventListener('click', function (event) {
        const e = event.target
        const parent = element.querySelector('.count__num')
        const num = parent.querySelector('span')
        let sum = +num.innerHTML

        if (e.classList.contains('count__plus')) {
          ++sum
          num.innerHTML = sum

          cardItemNum.forEach((element) => {
            element.textContent = `x${sum}`
          })
        }

        if (e.classList.contains('count__minus')) {
          if (sum > 1) {
            --sum
            num.innerHTML = sum

            cardItemNum.forEach((element) => {
              element.textContent = `x${sum}`
            })
          }
        }
      })
    })

    const toBasket = item.querySelectorAll('.toBasket')
    toBasket.forEach((btn) => {
      const cardIcon = btn.querySelector('.card__icon')
      const cardFlexText = btn.querySelector('.card__flex-text')
      const count = item.querySelectorAll('.count')
      const cardItemNum = item.querySelectorAll('.card__item-num')

      btn.addEventListener('click', (e) => {
        if (btn.classList.contains('toBasket--add')) {
          btn.classList.remove('toBasket--add')
          btn.classList.add('toBasket--delete')
          cardFlexText.textContent = 'Удалить'
          cardIcon.classList.remove('icon-basket-transparent')
          cardIcon.classList.add('icon-bin')
        } else {
          btn.classList.remove('toBasket--delete')
          btn.classList.add('toBasket--add')
          cardFlexText.textContent = 'В корзину'
          cardIcon.classList.remove('icon-bin')
          cardIcon.classList.add('icon-basket-transparent')
        }

        count.forEach((count) => {
          count.classList.toggle('count--hidden', btn.classList.contains('toBasket--add'))
        })

        cardItemNum.forEach((num) => {
          num.classList.toggle('card__item-num--hidden', btn.classList.contains('toBasket--add'))
        })
      })
    })
  })

  const basketCard = document.querySelectorAll('.basket__card')

  basketCard?.forEach((element) => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const parent = element.querySelector('.count__num')
      const num = parent.querySelector('span')
      let sum = +num.innerHTML

      if (e.classList.contains('count__plus')) {
        ++sum
        num.innerHTML = sum
      }
      if (e.classList.contains('count__minus')) {
        if (sum > 1) {
          --sum
          num.innerHTML = sum
        } else {
          element.remove()
        }
      }
    })

    const basketCardIcon = element.querySelectorAll('.basket__card-icon')
    basketCardIcon.forEach((icon) => {
      icon.addEventListener('click', function () {
        element.remove()
      })
    })
  })

  const filter = document.querySelector('.filter')
  const filterChoiceRange = filter?.querySelectorAll('.filter__choice-range')
  const price = filter?.querySelector('[name="price"]')
  const quantity = filter?.querySelector('[name="quantity"]')
  const filterHidden = filter?.querySelector('.filter__block')
  const filterTextRequired = filter?.querySelector('.filter__text--required')

  filterChoiceRange?.forEach((range) => {
    const marker = range.querySelectorAll('.noUi-marker')
    const connect = range.querySelectorAll('.noUi-connect')

    function copy() {
      connect.forEach((el) => {
        let attributeConnect = el.style.transform
        if (attributeConnect === 'translate(0%, 0px) scale(0, 1)') {
          marker[0].style.backgroundColor = '#7AC8C9'
          marker[1].style.backgroundColor = '#E7EFF2'
          marker[2].style.backgroundColor = '#E7EFF2'
          marker[3].style.backgroundColor = '#E7EFF2'
          marker[4].style.backgroundColor = '#E7EFF2'
        } else if (attributeConnect === 'translate(0%, 0px) scale(0.25, 1)') {
          marker[0].style.backgroundColor = '#7AC8C9'
          marker[1].style.backgroundColor = '#7AC8C9'
          marker[2].style.backgroundColor = '#E7EFF2'
          marker[3].style.backgroundColor = '#E7EFF2'
          marker[4].style.backgroundColor = '#E7EFF2'
        } else if (attributeConnect === 'translate(0%, 0px) scale(0.5, 1)') {
          marker[0].style.backgroundColor = '#7AC8C9'
          marker[1].style.backgroundColor = '#7AC8C9'
          marker[2].style.backgroundColor = '#7AC8C9'
          marker[3].style.backgroundColor = '#E7EFF2'
          marker[4].style.backgroundColor = '#E7EFF2'
        } else if (attributeConnect === 'translate(0%, 0px) scale(0.75, 1)') {
          marker[0].style.backgroundColor = '#7AC8C9'
          marker[1].style.backgroundColor = '#7AC8C9'
          marker[2].style.backgroundColor = '#7AC8C9'
          marker[3].style.backgroundColor = '#7AC8C9'
          marker[4].style.backgroundColor = '#E7EFF2'
        } else if (attributeConnect === 'translate(0%, 0px) scale(1, 1)') {
          marker[0].style.backgroundColor = '#7AC8C9'
          marker[1].style.backgroundColor = '#7AC8C9'
          marker[2].style.backgroundColor = '#7AC8C9'
          marker[3].style.backgroundColor = '#7AC8C9'
          marker[4].style.backgroundColor = '#7AC8C9'
        }
      })
    }

    filter.addEventListener('mousemove', copy)
    filter.addEventListener('touchmove', copy)
  })

  function checkFields() {
    if (price.value === '' || quantity.value === '') {
      filterHidden.classList.remove('filter__block--hidden')
      filterTextRequired.classList.remove('filter__text--hidden')
      setTimeout(() => {
        filterTextRequired.style.display = 'flex'
        filterHidden.style.display = 'none'
      }, 380)
    } else {
      filterHidden.classList.add('filter__block--active')
      filterTextRequired.classList.add('filter__text--hidden')
      setTimeout(() => {
        filterTextRequired.style.display = 'none'
        filterHidden.style.display = 'flex'
      }, 380)
    }
  }

  if (innerWidth > 992) {
    price?.addEventListener('input', checkFields)
    quantity?.addEventListener('input', checkFields)
  }

  const accept = document.querySelector('.accept')
  const reset = document.querySelector('.reset')
  const filterBlockBox = document.querySelector('.filter__block-box')

  accept?.addEventListener('click', () => {
    if (price.value !== '' && quantity.value !== '') {
      filterBlockBox.classList.add('filter__block-box--active')
    } else {
      filterBlockBox.classList.remove('filter__block-box--active')
    }
  })

  reset?.addEventListener('click', () => {
    price.value = ''
    quantity.value = ''
    filterBlockBox.classList.remove('.filter__block-box--active')
  })

  function handleInput(event) {
    const inputValue = event.target.value
    const filterPrice = filter.querySelector('.filter__price')
    filterPrice.textContent = `${inputValue} ₽`
  }

  price?.addEventListener('input', handleInput)

  var dataTarget = document.querySelectorAll('[data-target]')
  var tabInfo = document.querySelectorAll('.tab__info')

  dataTarget?.forEach((elem, index) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()

      var target = this.getAttribute('data-target')
      tabInfo.forEach((elem) => {
        elem.classList.remove('tab__info--opacity', 'tab__info--active')
      })
      dataTarget.forEach((elem) => {
        elem.classList.remove('tab__target--active')
      })
      this.classList.add('tab__target--active')
      var dataInfo = document.querySelector('[data-info="' + target + '"]')
      dataInfo.classList.add('tab__info--active')
      setTimeout(() => {
        dataInfo.classList.add('tab__info--opacity')
      }, 400)
    })
  })

  if (document.querySelector('.choice__swiper')) {
    const choiceSwiper = new Swiper('.choice__swiper', {
      slidesPerView: 7,
      spaceBetween: 30,
      breakpoints: {
        1024: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        360: {
          slidesPerView: 3.4,
          spaceBetween: 25,
        },
        320: {
          slidesPerView: 2.5,
          spaceBetween: 25,
        },
      },
    })
  }

  if (document.querySelector('.team__swiper')) {
    const teamSwiper = new Swiper('.team__swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 2.1,
          spaceBetween: 30,
        },
        360: {
          slidesPerView: 1.8,
          spaceBetween: 25,
        },
        320: {
          slidesPerView: 1.8,
          spaceBetween: 25,
        },
      },
    })
  }

  if (document.querySelector('.certificate__swiper')) {
    const certificateSwiper = new Swiper('.certificate__swiper', {
      slidesPerView: 6,
      spaceBetween: 30,
      breakpoints: {
        992: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        360: {
          slidesPerView: 2.1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 2.1,
          spaceBetween: 10,
        },
      },
    })
  }

  if (document.querySelector('.partners__swiper')) {
    const partnersSwiper = new Swiper('.partners__swiper', {
      slidesPerView: 4,
      spaceBetween: 30,
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        360: {
          slidesPerView: 2.1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 2.1,
          spaceBetween: 10,
        },
      },
    })
  }

  const allSwipers = []
  const gallerySwiper = document.querySelectorAll('.gallery__swiper')
  gallerySwiper.forEach((swiper, index) => {
    allSwipers.push(setSwiper(index + 1))
  })
  function setSwiper(index) {
    return new Swiper(`.gallery__swiper--${index}`, {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: `.gallery__next--${index}`,
        prevEl: `.gallery__prev--${index}`,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        414: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1.25,
          spaceBetween: 10,
        },
      },
    })
  }

  var points = [
    [
      '<div class="map-baloon"><p></p><p>Саратов, ул. имени Н.Г. Чернышевского, 60/62, БЦ «Фрегат»</p></div>',
      '51.5137066949698',
      '45.99918099739058',
    ],
  ]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [51.5137066949698, 45.99918099739058],
        zoom: 16,
        controls: ['zoomControl', 'geolocationControl', 'trafficControl'],
      })

      if ($(window).width() < 1024) {
        myMap.behaviors.disable('scrollZoom')
        myMap.behaviors.disable('drag')
      }

      for (i = 0; i < points.length; i++) {
        var myPlacemark = new ymaps.Placemark(
          [points[i][1], points[i][2]],
          {
            balloonContent: points[i][0],
          },
          {
            iconLayout: 'default#image',
            iconImageHref: '../images/icons/marker.svg',
            iconImageSize: [48, 48],
          }
        )
        myCollection.add(myPlacemark)
        myMap.geoObjects.add(myPlacemark)

        myMap.events.add('click', function (e) {
          myMap.balloon.close()
        })
      }

      myMap.geoObjects.add(myCollection)

      myPlacemark.events.add('click', function (event) {
        event.preventDefault()
      })
    })
  }
})
