$(document).ready(function () {
  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })
  Fancybox.bind('.fancy', {
    // Your custom options
  })

  const fancy = document.querySelectorAll('.fancy')
  const fancyModal = document.querySelectorAll('.fancyModal')
  fancy.forEach((el, i) => {
    el.dataset.src = `#modalbox-${i + 1}`
    fancyModal.forEach((el, i) => {
      el.id = `modalbox-${i + 1}`
    })
  })

  if (document.querySelector('.select')) {
    $(document).ready(function () {
      $('.select').select2()
    })
  }

  const localeDate = {
    format: 'DD.MM.YYYY',
    customRangeLabel: 'Custom',
    daysOfWeek: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  }

  $('input[name="daterangeFrom"]').daterangepicker(
    {
      singleDatePicker: true,
      autoApply: true,
      locale: localeDate,
    },
    function (start, end, label) {
      $('input[name="daterangeTo"]')
    }
  )

  $('input[name="daterangeTo"]').daterangepicker(
    {
      singleDatePicker: true,
      autoApply: true,
      locale: localeDate,
    },
    function (start, end, label) {
      $('input[name="daterangeTo"]')
    }
  )

  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')
  const burgerClose = document.querySelector('.burgerClose')

  if (burger) {
    burgerClose.addEventListener('click', () => {
      burger.classList.remove('active')
      menu.classList.remove('active')
      body.classList.remove('no-scroll')
    })

    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      }
      e.stopPropagation()
    })

    // menuItem.forEach((item) => {
    //   item.addEventListener('click', () => {
    //     burger.classList.toggle('active')
    //     menu.classList.remove('active')
    //     body.classList.remove('no-scroll')
    //   })
    // })

    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
    })
  }

  if (innerWidth <= 576) {
    $('.footer__sections-title').click(function () {
      $(this).toggleClass('active').next().slideToggle()
      $('.footer__sections-title').not(this).removeClass('active').next().slideUp()
    })
    $('.footer__contacts-title').click(function () {
      $(this).toggleClass('active').next().slideToggle()
      $('.footer__contacts-title').not(this).removeClass('active').next().slideUp()
    })
    // $('.footer__sections-title').click(function () {
    //   $(this).toggleClass('active').next().slideToggle()
    // })
    // $('.footer__contacts-title').click(function () {
    //   $(this).toggleClass('active').next().slideToggle()
    // })
  }

  $('.case__accordion-title').click(function () {
    $(this).toggleClass('in').next().slideToggle()
    $('.case__accordion-title').not(this).removeClass('in').next().slideUp()
  })

  if (innerWidth <= 992) {
    const menuListLink = document.querySelectorAll('.menu__list-link')
    menuListLink.forEach((item) => {
      item.addEventListener('click', () => {
        item.parentNode.parentNode.parentNode.parentNode.previousElementSibling.click()
        burgerClose.click()
      })
    })

    burgerClose.addEventListener('click', () => {
      const menuItemLink = document.querySelectorAll('.menu__item-icon')
      menuItemLink.forEach((item) => {
        if (item.classList.contains('active')) {
          item.click()
        }
      })
    })

    $('.menu__item-icon').click(function () {
      $(this).toggleClass('active').parent().next().slideToggle()
      $('.menu__item-icon').not(this).removeClass('active').parent().next().slideUp()
    })
  }

  var points = [
    [
      '<div class="map-baloon"><p></p><p>г. Чистополь, К. Либкнехта, д. 22 Б</p></div>',
      '55.36448724804843',
      '50.64512057200493',
    ],
  ]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [55.36448724804843, 50.64512057200493],
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
            // iconImageHref: './images/icons/marker.svg',
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
})
