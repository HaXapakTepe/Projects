$(document).ready(function () {
  $('.lightzoom').lightzoom({ speed: 400, viewTitle: true })

  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
  })

  const z = document.querySelector('.zoom')

  function zoom(e) {
    var zoomer = e.currentTarget
    e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX)
    e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX)
    x = (offsetX / zoomer.offsetWidth) * 100
    y = (offsetY / zoomer.offsetHeight) * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%'
  }

  z.addEventListener('mousemove', zoom)

  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.menu')
  const menuitem = document.querySelectorAll('.menu__item')
  const modalBasket = document.querySelector('.modalBasket')
  const basket = document.querySelector('.header__basket')
  const mask = document.querySelector('.mask')
  const closeBasket = document.querySelector('.modalBasket__title-icon')
  const body = document.querySelector('body')
  const cardFilter = document.querySelector('.card__filter')
  const cardAccordeon = document.querySelector('.card__accordeon')
  const modalBtn = document.querySelector('.modal__btn')

  if (modalBtn) {
    modalBtn.addEventListener('click', function () {
      $.fancybox.close()
    })
  }

  if (cardFilter) {
    cardFilter.addEventListener('click', function () {
      cardAccordeon.classList.toggle('show')
    })
  }

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.active').length) {
      $('.menu').removeClass('active')
      burger.classList.remove('active')
      body.classList.remove('no-scroll')
    }
    e.stopPropagation()
  })

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('no-scroll')
    cardAccordeon.classList.remove('show')
  })

  menuitem.forEach((item) => {
    item.addEventListener('click', () => {
      menu.classList.remove('active')
      body.classList.remove('no-scroll')
    })
  })

  const modalCounter = document.querySelectorAll('.modalBasket__item-box')

  modalCounter.forEach((element) => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const num = element.querySelector('.count__num')
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

  const sliderCounter = document.querySelectorAll('.slider__item-boxBtn')

  sliderCounter.forEach((element) => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const num = element.querySelector('.count__num')
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

  $().fancybox({})

  const openBasket = document.querySelector('.openBasket')

  openBasket.addEventListener('click', () => {
    mask.classList.add('active')
    modalBasket.classList.add('active')
  })

  basket.addEventListener('click', () => {
    mask.classList.add('active')
    modalBasket.classList.add('active')
  })

  mask.addEventListener('click', () => {
    mask.classList.remove('active')
    closeBasket.classList.remove('active')
    modalBasket.classList.remove('active')
  })

  closeBasket.addEventListener('click', () => {
    mask.classList.remove('active')
    modalBasket.classList.remove('active')
  })

  $('.card__accordeon-title').click(function () {
    $(this).toggleClass('active').next().slideToggle()
    $('.card__accordeon-title').not(this).removeClass('active').next().slideUp()
  })

  if (null) {
    if (document.querySelector('.slider__item-text').clientHeight > 266) {
      document.querySelector('.slider__item-content--scroll').style.overflowY = 'scroll'
    }
  }

  let isSliderAccOpen = true
  $('.slider__accordeon-title').click(function () {
    $(this).toggleClass('show').next().slideToggle()
    $('.slider__accordeon-title').not(this).removeClass('show').next().slideUp()

    if (isSliderAccOpen) {
      document.querySelector('.slider__item-content--scroll').style.overflowY = 'scroll'
      isSliderAccOpen = false
    } else {
      document.querySelector('.slider__item-content--scroll').style.overflowY = 'unset'
      isSliderAccOpen = true
    }
  })

  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.variety__image')

  targetMap.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('variety__image--opacity', 'variety__image--active')
      })
      targetMap.forEach((elem) => {
        elem.classList.remove('variety__item--active')
      })
      this.classList.add('variety__item--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('variety__image--active')
      setTimeout(() => {
        cat.classList.add('variety__image--opacity')
      }, 400)
    })
  })

  const ratings = document.querySelectorAll('.rating')

  if (ratings.length > 0) {
    initRatings()
  }

  function initRatings() {
    let ratingActive, ratingValue

    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index]
      initRating(rating)
    }

    function initRating(rating) {
      initRatingVars(rating)

      setRatingActiveWidth()

      if (rating.classList.contains('rating')) {
        setRating(rating)
      }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active')
      ratingValue = rating.querySelector('.rating__value')
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05
      ratingActive.style.width = `${ratingActiveWidth}%`
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.rating__item')

      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index]

        ratingItem.addEventListener('mouseenter', function (e) {
          initRatingVars(rating)
          setRatingActiveWidth(ratingItem.value)
        })

        ratingItem.addEventListener('mouseleave', function (e) {
          setRatingActiveWidth()
        })

        ratingItem.addEventListener('click', function (e) {
          initRatingVars(rating)

          if (rating.dataset.ajax) {
            setRatingValue(ratingItem.value.rating)
          } else {
            ratingValue.innerHTML = index + 1
            setRatingActiveWidth()
          }
        })
      }
    }
  }

  var swiper = new Swiper('.swiperMini', {
    loop: true,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  })

  var swiper2 = new Swiper('.swiperBig', {
    effect: 'fade',
    loop: true,
    thumbs: {
      swiper: swiper,
    },
  })

  var swiperBg = new Swiper('.sliderBg__swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>'
      },
    },
  })

  var swiperHith = new Swiper('.hits__swiper', {
    spaceBetween: 30,
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      1366: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2.1,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 1.4,
      },
      480: {
        slidesPerView: 1.1,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    },
  })

  var swiperNew = new Swiper('.new__swiper', {
    spaceBetween: 30,
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      1366: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2.1,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 1.4,
      },
      480: {
        slidesPerView: 1.1,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    },
  })
})
