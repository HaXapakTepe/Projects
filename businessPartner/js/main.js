$(document).ready(function () {
  $('input[name=phone]').mask('+7 (999) 999-99-99')

  // if (window.innerWidth > 1200) {
  // $('#fullpage').fullpage({
  //   navigation: false,
  //   scrollBar: true,
  //   fitToSectionDelay: 1000,
  // })
  // }

  const query = window.location.search.replace('?', '')
  const maps = query.split('&')
  const links = query.split('&')
  if (maps) {
    const args = {}
    for (let i = 0; i < maps.length; i++) {
      const pair = maps[i].split('=')
      args[pair[0]] = decodeURI(pair[1]).replace(/\,/g, ' ')
    }

    if (args.target) {
      const btn = document.querySelector(`[data-target=target${args.target}]`)

      let event = new Event('click')

      setTimeout(() => {
        btn.dispatchEvent(event)
      }, 100)
    }
  }

  const catalogAccordeonLink = document.querySelectorAll('.catalog__accordeon-link')
  catalogAccordeonLink.forEach((el, i) => {
    let linkNum = (el.dataset.link = `link-${i}`)
    el.setAttribute('href', `${el.getAttribute('href')}?${linkNum}`)
  })

  if (links) {
    const args = {}
    for (let i = 0; i < links.length; i++) {
      const pair = links[i].split('-')
      args[pair[0]] = decodeURI(pair[1]).replace(/\,/g, ' ')
    }

    const link = document.querySelector(`[data-link=link-${args.link}]`)

    if (args.link) {
      let event = new Event('click')

      setTimeout(() => {
        link.dispatchEvent(event)

        var parents = $(link).parentsUntil('.catalog__accordeon')
        console.log('🚀 ~ file: main 2.js:45 ~ setTimeout ~ parents:', parents)
        parents.each(function () {
          console.log('ddfsaf', $(this))
          var prevLink = $(this)[0].firstElementChild.parentElement
          var prevLink2 = prevLink.previousElementSibling
          console.log('prevLink', prevLink2)
          if (prevLink2 != null) {
            prevLink2.click()
          }
        })
      }, 100)
    }
  }

  const reviewsLinks = document.querySelectorAll('.reviewsItem__news-link[data-goto]')

  if (reviewsLinks.length > 0) {
    reviewsLinks.forEach((link) => {
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

  var myMap
  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.tab__info')

  targetMap?.forEach((elem, index) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()

      myMap?.setCenter([points[index][1], points[index][2]], 14)

      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('tab__info--opacity', 'tab__info--active')
      })
      targetMap?.forEach((elem) => {
        elem.classList.remove('tab__target--active')
      })
      this.classList.add('tab__target--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('tab__info--active')
      setTimeout(() => {
        cat.classList.add('tab__info--opacity')
      }, 400)
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
      '<div class="map-baloon"><p></p><p>410047, г.Саратов, ул. Танкистов, 195</p></div>',
      '51.58715737788605',
      '46.02850946947052',
    ],
    [
      '<div class="map-baloon"><p></p><p>413118 г.Энгельс ул.Маяковского 138</p></div>',
      '51.482309598184266',
      '46.11328499830268',
    ],
    [
      '<div class="map-baloon"><p></p><p>г. Балашов, ул.Автомобилистов, 10</p></div>',
      '51.537260606247244',
      '43.212531498304195',
    ],
    [
      '<div class="map-baloon"><p></p><p>403882, ул.Волгоградская, 39. р-н Авторынка, база "Пульсар" №2</p></div>',
      '50.07416823288279',
      '45.396042666390734',
    ],
  ]
  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [51.58715737788605, 46.02850946947052],
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
            iconImageHref: '/wp-content/themes/partner_spaceapp/images/icons/marker.svg',
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

  $('.catalog__accordeon-title').click(function () {
    $(this).toggleClass('active').next().slideToggle()
  })

  $('.catalog__accordeon-item').click(function () {
    $(this).toggleClass('active').next().slideToggle()
  })

  const showModal = document.querySelectorAll('.showModal')
  const phoneModal = document.querySelector('.phoneModal')
  const phoneModalClose = phoneModal.querySelector('.phoneModal__close')

  showModal?.forEach((elem) => {
    elem.addEventListener('click', () => {
      phoneModal.classList.add('active')
      phoneModalClose.addEventListener('click', () => {
        phoneModal.classList.remove('active')
      })
    })
  })

  $(phoneModal).on('click', function (e) {
    if (!$(e.target).closest('.phoneModal__inner').length) {
      phoneModal.classList.remove('active')
    }
    e.stopPropagation()
  })

  if (document.querySelector('.popular__swiper')) {
    const popularSwiper = new Swiper('.popular__swiper', {
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 1.1,
          spaceBetween: 15,
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

  if (document.querySelector('.news__swiper')) {
    const popularSwiper = new Swiper('.news__swiper', {
      navigation: {
        nextEl: '.news__arrow-prev',
        prevEl: '.news__arrow-next',
      },
      loop: true,
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.2,
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

  if (document.querySelector('.top__swiper')) {
    const topSwiper = new Swiper('.top__swiper', {
      direction: 'vertical',
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.top__prev',
        prevEl: '.top__next',
      },
      pagination: {
        el: '.top__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
      },
    })
  }

  // HOVER-CIRCLE
  if (innerWidth > 992) {
    const newsSlides = document.querySelectorAll('.news__slide')
    if (newsSlides.length > 0) {
      newsSlides.forEach((slide) => {
        const circle = slide.querySelector('.news__slide-circle')
        slide.addEventListener('mouseenter', (e) => {
          setPosition(circle, e)
          circle.classList.add('active')
        })

        slide.addEventListener('mouseleave', (e) => {
          setPosition(circle, e)
          circle.classList.remove('active')
        })
      })

      function setPosition(elem, event) {
        const x =
          event.offsetX < 30
            ? '-20'
            : event.offsetX > event.target.getBoundingClientRect().width - 30
            ? event.target.getBoundingClientRect().width + 20
            : event.offsetX
        const y =
          event.offsetY < 30
            ? '-20'
            : event.offsetY > event.target.getBoundingClientRect().height - 30
            ? event.target.getBoundingClientRect().height + 20
            : event.offsetY
        elem.style.top = y + 'px'
        elem.style.left = x + 'px'
      }
    }
  }
})
