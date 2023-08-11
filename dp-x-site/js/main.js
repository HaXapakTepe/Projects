$(document).ready(function () {
  if (document.querySelector('.card__item-select')) {
    $('.card__item-select').select2({
      // placeholder: 'This is my placeholder',
    })
  }

  $('.card__info-accordion').click(function () {
    $(this).toggleClass('card__info-accordion--active').next().slideToggle()
    $('.card__info-accordion')
      .not(this)
      .removeClass('card__info-accordion--active')
      .next()
      .slideUp()
  })

  const cardItemBtn = document.querySelectorAll('.card__item-btn')

  cardItemBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      if (!elem.classList.contains('card__item-btn--active')) {
        elem.classList.add('card__item-btn--active')
      } else {
        elem.classList.remove('card__item-btn--active')
      }
    })
  })

  const headerItemBox = document.querySelectorAll('.header__item-link')

  headerItemBox.forEach((elem) => {
    elem.addEventListener('click', () => {
      if (!elem.classList.contains('header__item-link--active')) {
        elem.classList.add('header__item-link--active')
      } else {
        elem.classList.remove('header__item-link--active')
      }
    })
  })

  const popularSlideIcon = document.querySelectorAll('.popular__slide-icon')

  popularSlideIcon.forEach((elem) => {
    elem.addEventListener('click', () => {
      if (!elem.classList.contains('popular__slide-icon--active')) {
        elem.classList.add('popular__slide-icon--active')
      } else {
        elem.classList.remove('popular__slide-icon--active')
      }
    })
  })

  var dataTarget = document.querySelectorAll('[data-target]'),
    cardInfo = document.querySelectorAll('.card__info')

  dataTarget?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()

      var target = this.getAttribute('data-target')

      cardInfo.forEach((elem) => {
        elem.classList.remove('card__info--opacity', 'card__info--active')
      })

      dataTarget.forEach((elem) => {
        elem.classList.remove('card__target--active')
      })

      this.classList.add('card__target--active')

      var dataInfo = document.querySelector('[data-info="' + target + '"]')

      dataInfo.classList.add('card__info--active')
      setTimeout(() => {
        dataInfo.classList.add('card__info--opacity')
      }, 380)
    })
  })

  var dataTargetNovelty = document.querySelectorAll('[data-targetNovelty]'),
    noveltyInfo = document.querySelectorAll('.novelty__info')

  dataTargetNovelty?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()

      var targetNovelty = this.getAttribute('data-targetNovelty')

      noveltyInfo.forEach((elem) => {
        elem.classList.remove('novelty__info--opacity', 'novelty__info--active')
      })

      dataTargetNovelty.forEach((elem) => {
        elem.classList.remove('novelty__target--active')
      })

      this.classList.add('novelty__target--active')

      var dataInfoNovelty = document.querySelector('[data-infoNovelty="' + targetNovelty + '"]')

      dataInfoNovelty.classList.add('novelty__info--active')
      setTimeout(() => {
        dataInfoNovelty.classList.add('novelty__info--opacity')
      }, 380)
    })
  })

  var dataTargetPopular = document.querySelectorAll('[data-targetPopular]'),
    popularInfo = document.querySelectorAll('.popular__info')

  dataTargetPopular?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()

      var targetPopular = this.getAttribute('data-targetPopular')

      popularInfo.forEach((elem) => {
        elem.classList.remove('popular__info--opacity', 'popular__info--active')
      })

      dataTargetPopular.forEach((elem) => {
        elem.classList.remove('popular__target--active')
      })

      this.classList.add('popular__target--active')

      var dataInfoPopular = document.querySelector('[data-infoPopular="' + targetPopular + '"]')

      dataInfoPopular.classList.add('popular__info--active')
      setTimeout(() => {
        dataInfoPopular.classList.add('popular__info--opacity')
      }, 380)
    })
  })

  var dataTargetStocks = document.querySelectorAll('[data-targetStocks]'),
    stocksInfo = document.querySelectorAll('.stocks__info')

  dataTargetStocks?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()

      var targetStocks = this.getAttribute('data-targetStocks')

      stocksInfo.forEach((elem) => {
        elem.classList.remove('stocks__info--opacity', 'stocks__info--active')
      })

      dataTargetStocks.forEach((elem) => {
        elem.classList.remove('stocks__target--active')
      })

      this.classList.add('stocks__target--active')

      var dataInfoStocks = document.querySelector('[data-infoStocks="' + targetStocks + '"]')

      dataInfoStocks.classList.add('stocks__info--active')
      setTimeout(() => {
        dataInfoStocks.classList.add('stocks__info--opacity')
      }, 380)
    })
  })

  const allSwipers = []
  const popularSwiper = document.querySelectorAll('.popular__swiper')
  popularSwiper.forEach((swiper, index) => {
    allSwipers.push(setSwiper(index + 1))
  })
  function setSwiper(index) {
    return new Swiper(`.popular__swiper--${index}`, {
      navigation: {
        nextEl: `.popular__arrow-prev--${index}`,
        prevEl: `.popular__arrow-next--${index}`,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
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
})
// document.addEventListener('DOMContentLoaded', () => {})
