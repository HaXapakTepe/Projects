$(document).ready(function () {
  $(document).ready(function () {
    $('.js-example-basic-single').select2()
  })

  const gallerySlide = document.querySelectorAll('.gallery__slide')

  gallerySlide?.forEach((elem) => {
    const galleryImg = elem.querySelector('.gallery__img')
    const galleryHidden = elem.querySelector('.gallery__hidden')?.firstElementChild
    galleryImg.addEventListener('click', () => {
      galleryHidden.click()
    })
  })

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

  $('.contacts__accordion').click(function () {
    $(this).toggleClass('contacts__accordion--active').next().slideToggle()
    $('.contacts__accordion').not(this).removeClass('contacts__accordion--active').next().slideUp()
  })

  if (document.querySelector('[name="quantity"]')) {
    $('[name="quantity"]').mask('9?99', {
      placeholder: '_',
      autoclear: false,
    })
  }
  if (document.querySelector('[name="price"]')) {
    $('[name="price"]').mask('99?99999', {
      placeholder: '_',
      autoclear: false,
    })
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
    let cardItemNum = item.querySelectorAll('.card__item-num')

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
        }
      }
    })
  })

  const filter = document.querySelector('.filter')
  const price = filter?.querySelector('[name="price"]')
  const quantity = filter?.querySelector('[name="quantity"]')
  const filterHidden = filter?.querySelector('.filter__block')
  const filterTextRequired = filter?.querySelector('.filter__text--required')

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

  price?.addEventListener('input', checkFields)
  quantity?.addEventListener('input', checkFields)

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

  const allSwipers = []
  const gallerySwiper = document.querySelectorAll('.gallery__swiper')
  gallerySwiper.forEach((swiper, index) => {
    allSwipers.push(setSwiper(index + 1))
  })
  function setSwiper(index) {
    return new Swiper(`.gallery__swiper--${index}`, {
      navigation: {
        nextEl: `.gallery__prev--${index}`,
        prevEl: `.gallery__next--${index}`,
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
          slidesPerView: 1,
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
        zoom: 14,
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
            // iconImageHref: '/wp-content/themes/partner_spaceapp/images/icons/marker.svg',
            iconImageHref: '../images/icons/marker.svg',
            iconImageSize: [48, 61],
            // balloonLayout: 'default#imageWithContent',
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
