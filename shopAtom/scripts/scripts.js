$(document).ready(function () {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const shopCardIcon = document.querySelectorAll('.shop__card-icon')
  const expositionSwiper = document.querySelectorAll('.shop__swiper')
  const allSwipers = []
  const basketItemElem = document.querySelectorAll('.basket__item-elem')
  const basketItemIcon = document.querySelectorAll('.basket__item-icon')
  const detailsItemBox = document.querySelectorAll('.details__item-box')
  const detailsItemBoxIcon = document.querySelectorAll('.details__item-boxIcon')
  const detailsItemIcon = document.querySelectorAll('.details__item-box--favorite')

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

  $('.select__btn').click(function () {
    $(this).toggleClass('select__btn--active').next().slideToggle()
    $('.select__btn').not(this).removeClass('select__btn--active').next().slideUp()
  })

  $('.menu__arrow').click(function () {
    $(this).toggleClass('menu__arrow--active').parent().next().slideToggle()
    $('.menu__arrow').not(this).removeClass('menu__arrow--active').parent().next().slideUp()
  })

  $('.details__accordion-title').click(function () {
    $(this).toggleClass('details__accordion-title--active').next().slideToggle()
    $('.details__accordion-title').not(this).removeClass('details__accordion-title--active').next().slideUp()
  })

  basketItemIcon?.forEach((icon) => {
    icon.addEventListener('click', () => {
      if (!icon.classList.contains('basket__item-icon--accent')) {
        icon.classList.add('basket__item-icon--accent')
      } else {
        icon.classList.remove('basket__item-icon--accent')
      }
    })
  })

  detailsItemBoxIcon?.forEach((icon) => {
    icon.addEventListener('click', () => {
      if (!icon.classList.contains('details__item-boxIcon--favorite')) {
        icon.classList.add('details__item-boxIcon--favorite')
      } else {
        icon.classList.remove('details__item-boxIcon--favorite')
      }
    })
  })

  function counter(params) {
    params?.forEach((element) => {
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
  }

  counter(basketItemElem)
  counter(detailsItemBox)

  shopCardIcon?.forEach((icon) => {
    icon.addEventListener('click', () => {
      if (!icon.classList.contains('shop__card-icon--accent')) {
        icon.classList.add('shop__card-icon--accent')
      } else {
        icon.classList.remove('shop__card-icon--accent')
      }
    })
  })

  if (document.querySelector('[name="phone"]')) {
    const element = document.querySelector('[name="phone"]')
    const maskOptions = {
      mask: '+{7} 000 000 00 00',
    }
    const mask = IMask(element, maskOptions)
  }

  if (document.querySelector('.select')) {
    $('.select__price').select2({
      dropdownParent: $('.select__block--price'),
    })
    $('.select__color').select2({
      dropdownParent: $('.select__block--color'),
    })
    $('.select__brand').select2({
      dropdownParent: $('.select__block--brand'),
    })
    $('.select__categoty').select2({
      dropdownParent: $('.select__block--categoty'),
    })
    $('.select__popular').select2({
      dropdownParent: $('.select__block--popular'),
    })
  }

  $('.all__calendar-text').click(function () {
    $(this).toggleClass('all__calendar-text--active').next().slideToggle()
    $('.all__calendar-text').not(this).removeClass('all__calendar-text--active').next().slideUp()
  })

  $('.rules__accordion').click(function () {
    $(this).toggleClass('rules__accordion--active').next().slideToggle()
    $('.rules__accordion').not(this).removeClass('rules__accordion--active').next().slideUp()
  })

  if (burger) {
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      }
      e.stopPropagation()
    })

    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
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

  var swiperSmall = new Swiper('.details__swiperSmall', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6,
      },
      360: {
        slidesPerView: 4,
      },
      320: {
        slidesPerView: 3,
      },
    },
  })
  var swiperBig = new Swiper('.details__swiperBig', {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiperSmall,
    },
  })

  expositionSwiper.forEach((swiper, index) => {
    allSwipers.push(setSwiper(index + 1))
  })
  function setSwiper(index) {
    return new Swiper(`.shop__swiper--${index}`, {
      navigation: {
        nextEl: `.shop__next--${index}`,
        prevEl: `.shop__prev--${index}`,
      },
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      breakpoints: {
        1199: {
          slidesPerView: 4,
          spaceBetween: 14,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 14,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 14,
        },
        576: {
          slidesPerView: 1.9,
          spaceBetween: 14,
        },
        480: {
          slidesPerView: 1.1,
          spaceBetween: 14,
        },
        320: {
          slidesPerView: 1.1,
          spaceBetween: 14,
        },
      },
    })
  }

  if (document.querySelector('.content__swiper')) {
    const contentSwiper = new Swiper('.content__swiper', {
      loop: true,
      pagination: {
        el: '.content__pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.content__next',
        prevEl: '.content__prev',
      },
      // autoplay: {
      //   delay: 5000,
      // },
      slidesPerView: 1,
      spaceBetween: 40,
    })
  }
})
