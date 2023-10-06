$(window).on('load', function () {
  const blogSlides = document.querySelectorAll('.blog__slide')
  const blogSearch = document.querySelector('#blog-search')
  const searchInput = blogSearch?.querySelector('.search__input')

  if (blogSearch) {
    searchInput.addEventListener('input', function () {
      const inputValue = searchInput.value.toLowerCase()
      let match = false

      blogSlides.forEach((blogSlide) => {
        const dataContent = blogSlide.getAttribute('data-content').toLowerCase()

        if (dataContent.includes(inputValue)) {
          match = true
          console.log('Совпадение найдено!')
          blogSlide.style.display = 'block'
        } else {
          console.log('Совпадений не найдено.')
          blogSlide.style.display = 'none'
        }
      })
    })
  }

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

  $('.reviews__item-img').click(function () {
    Fancybox.close()
  })

  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos)
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange()
      range.collapse(true)
      range.moveEnd('character', pos)
      range.moveStart('character', pos)
      range.select()
    }
  }

  if (document.querySelector('[name="phone"]')) {
    $('[name="phone"]')
      .click(function () {
        $(this).setCursorPosition(4)
      })
      .mask('+7 (999) 999-99-99', {
        placeholder: '',
        autoclear: false,
      })
  }

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

  const menuLinks = document.querySelectorAll('.article__item-link[data-goto]')

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

  $('.accordion__item-text').click(function () {
    $(this).toggleClass('accordion__item-text--active').next().slideToggle(200)
    $('.accordion__item-text').not(this).removeClass('accordion__item-text--active').next().slideUp(200)
  })

  const burger = $('.burger')
  navigation = $('.menu')
  $(burger).on('click', function () {
    $(navigation).toggleClass('menu--open')
    $(burger).toggleClass('burger--open')
  })

  const allTabSwipers = []
  const tabSwiper = document.querySelectorAll('.blog__swiperAlt')
  tabSwiper.forEach((swiper, index) => {
    allTabSwipers.push(setBlogSwiper(index + 1))
  })

  function setBlogSwiper(index) {
    return new Swiper(`.blog__swiperAlt--${index}`, {
      spaceBetween: 30,
      pagination: {
        el: `.blog__pagination--${index}`,
        type: 'fraction',
        formatFractionCurrent: function (number) {
          return '0' + number
        },
        formatFractionTotal: function (number) {
          return '0' + number
        },
      },
      navigation: {
        nextEl: `.blog__next--${index}`,
        prevEl: `.blog__prev--${index}`,
      },
    })
  }

  const reviewsSwiper = new Swiper('.reviews__swiper', {
    spaceBetween: 30,
    pagination: {
      el: `.reviews__pagination`,
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return '0' + number
      },
      formatFractionTotal: function (number) {
        return '0' + number
      },
    },
    navigation: {
      nextEl: `.reviews__next`,
      prevEl: `.reviews__prev`,
    },
  })

  const article = new Swiper('.article__item-swiper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.article__item-pagination',
      type: 'bullets',
      clickable: 'true',
    },
    autoplay: {
      delay: 10000,
    },
  })

  const about = new Swiper('.about__swiper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.about__swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
    autoplay: {
      delay: 10000,
    },
  })

  const swiper = new Swiper('.top__swiper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.top__swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
    autoplay: {
      delay: 10000,
    },
  })

  const allSwipers = []
  const gallerySwiper = document.querySelectorAll('.card__swiper')
  gallerySwiper.forEach((swiper, index) => {
    allSwipers.push(setSwiper(index + 1))
  })

  function setSwiper(index) {
    return new Swiper(`.card__swiper--${index}`, {
      loop: true,
      pagination: {
        el: `.swiper-pagination--${index}`,
        type: 'fraction',
        formatFractionCurrent: function (number) {
          return '0' + number
        },
        formatFractionTotal: function (number) {
          return '0' + number
        },
      },
      navigation: {
        nextEl: `.card-next--${index}`,
        prevEl: `.card-prev--${index}`,
      },
      breakpoints: {
        // when window width is >= 320px
        100: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        769: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        993: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    })
  }

  const noveltyswiper = new Swiper('.blog__swiper', {
    loop: true,
    pagination: {
      el: '.blog__pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return '0' + number
      },
      formatFractionTotal: function (number) {
        return '0' + number
      },
    },
    navigation: {
      nextEl: '.blog__next',
      prevEl: '.blog__prev',
    },
    breakpoints: {
      // when window width is >= 320px
      100: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      769: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      993: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  })

  var points = [
    [
      '<div class="map-baloon"><p>Россия, 410053, г. Саратов, ул. Арбатская, 28</p></div>',
      '51.53243674746642',
      '45.96543036085918',
    ],
  ]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [51.53243674746642, 45.96543036085918],
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
            iconImageHref: '../img/icons/loca.svg',
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
