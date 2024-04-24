$(document).ready(function () {
  $('.fancy').fancybox()

  $('#phone').mask('+7 (999) 999-99-99')

  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav__inner')
  const navItemLink = document.querySelectorAll('.nav__item-link')

  if (document.querySelector('.burger')) {
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active')
        nav.classList.remove('active')
      }
      e.stopPropagation()
    })

    navItemLink.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active')
        nav.classList.remove('active')
      })
    })

    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      nav.classList.toggle('active')
    })
  }

  if (innerWidth <= 992) {
    $('.nav__item--arrow').click(function () {
      $(this).toggleClass('active').children().slideToggle()
      $('.nav__item--arrow').not(this).removeClass('active').children().slideUp()
    })
  }

  if (innerWidth <= 480) {
    $('.footer__item-title').click(function () {
      $(this).toggleClass('active').next().slideToggle()
      $('.footer__item-title').not(this).removeClass('active').next().slideUp()
    })
  }

  const label = document.querySelectorAll('[data-category]')
  const block = document.querySelectorAll('[data-value]')

  label?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()

      if (document.querySelector('.choice__filter-info')) {
        if (elem.classList.contains('choice__filter-text--active')) {
          var category = elem.getAttribute('data-category')
          block.forEach((elem) => {
            elem.classList.remove('choice__filter-block--active')
            setTimeout(() => {
              elem.classList.add('choice__filter-block--active')
              elem.classList.add('choice__filter-block--opacity')
            }, 400)
          })
        } else {
          var category = elem.getAttribute('data-category')
          block.forEach((elem) => {
            elem.classList.remove('choice__filter-block--opacity', 'choice__filter-block--active')
          })
          label.forEach((elem) => {
            elem.classList.remove('choice__filter-text--active')
          })
        }
        e.target.classList.toggle('choice__filter-text--active')
        var dataValue = document.querySelectorAll('[data-value="' + category + '"]')
        dataValue.forEach((elem) => {
          elem.classList.add('choice__filter-block--active')
          setTimeout(() => {
            elem.classList.add('choice__filter-block--opacity')
          }, 400)
        })
      }
    })
  })

  var myMap
  var dataTarget = document.querySelectorAll('[data-target]'),
    tabInfo = document.querySelectorAll('.tab__info')

  dataTarget?.forEach((elem, index) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()

      if (document.querySelector('.map')) {
        myMap?.setCenter([points[index][1], points[index][2]], 14)

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
      }
    })
  })

  const onTheMap = document.querySelectorAll('.onTheMap')
  onTheMap.forEach((item, index) => {
    item.addEventListener('click', () => {
      myMap?.setCenter([points[index][1], points[index][2]], 14)
    })
  })

  //yandexMap
  var points = [
    [
      '<div class="map-baloon"><p></p><p>г. Саратов, ул. Вольская, д. 54</p></div>',
      '51.534547645616435',
      '46.02615089739142',
    ],
    [
      '<div class="map-baloon"><p></p><p>г. Энгельс, Горького 33</p></div>',
      '51.5034118535862',
      '46.17117651651498',
    ],
    [
      '<div class="map-baloon"><p></p><p>г. Балашов, Гагарина 99</p></div>',
      '51.54830624360196',
      '43.141431426227314',
    ],
    [
      '<div class="map-baloon"><p></p><p>г. Пугачев, Ермощенко, 179/3</p></div>',
      '52.02574717500289',
      '48.799543897414075',
    ],
    [
      '<div class="map-baloon"><p></p><p>г. Мытищи, Осташковское шоссе 70б</p></div>',
      '55.91111945986669',
      '37.67219119759965',
    ],
    [
      '<div class="map-baloon"><p></p><p>г. Энгельс, Геологический проезд, 10</p></div>',
      '51.50563830591359',
      '46.181559226225325',
    ],
  ]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [51.534547645616435, 46.02615089739142],
        zoom: 14,
        controls: ['zoomControl'],
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
            iconImageHref: './images/icons/marker.svg',
            iconImageSize: [48, 61],
            balloonLayout: 'default#imageWithContent',
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

  if (document.querySelector('.top')) {
    const topSwiper = new Swiper('.top', {
      slidesPerView: 1,
      pagination: {
        el: '.top__pagination',
        type: 'bullets',
        clickable: true,
      },
    })
  }

  if (document.querySelector('.stonksSlider__swiper')) {
    const stonksSwiper = new Swiper('.stonksSlider__swiper', {
      navigation: {
        nextEl: '.stonksSlider__arrow-prev',
        prevEl: '.stonksSlider__arrow-next',
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    })
  }

  if (document.querySelector('.worksSlider__swiper')) {
    const worksSwiper = new Swiper('.worksSlider__swiper', {
      navigation: {
        nextEl: '.worksSlider__arrow-prev',
        prevEl: '.worksSlider__arrow-next',
      },
      pagination: {
        el: '.worksSlider__pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    })
  }
})
