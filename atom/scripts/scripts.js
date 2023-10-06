$(document).ready(function () {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const lang = document.querySelectorAll('.header__lang')
  const remove = document.querySelectorAll('.remove')
  const expositionSlideStyle = document.querySelectorAll('.exposition__slide')
  const tabTrget = document.querySelectorAll('.detailsCard__tab-target[data-goto]')

  lang.forEach((item) => {
    const langNow = item.querySelector('.header__lang-now')
    item.addEventListener('click', () => {
      item.classList.toggle('header__lang--ru')
      item.classList.toggle('header__lang--en')

      if (item.classList.contains('header__lang--ru')) {
        langNow.textContent = 'Ru'
      } else {
        langNow.textContent = 'En'
      }
    })
  })

  tabTrget?.forEach((link) => {
    link.addEventListener('click', function (e) {
      onMenuLinkClick(e)
      tabTrget.forEach((link) => {
        link.classList.remove('detailsCard__tab-target--active')
      })
      this.classList.add('detailsCard__tab-target--active')
    })
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

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

  if (document.querySelector('[name="phone"]')) {
    const element = document.querySelector('[name="phone"]')
    const maskOptions = {
      mask: '+{7} 000 000 00 00',
    }
    const mask = IMask(element, maskOptions)
  }

  if (document.querySelector('.contacts__form-subject')) {
    $('.contacts__form-subject').select2({
      dropdownParent: $('.contacts__form-select'),
    })
  }

  if (document.querySelector('.all__select')) {
    $('.all__select').select2({
      dropdownParent: $('.all__block'),
    })
  }

  if (document.querySelector('.all__location')) {
    $('.all__location').select2({
      dropdownParent: $('.all__block'),
    })
  }

  if (document.querySelector('.all__format')) {
    $('.all__format').select2({
      dropdownParent: $('.all__block'),
    })
  }

  if (innerWidth <= 992) {
    remove.forEach((item) => {
      item?.remove()
    })
    expositionSlideStyle?.forEach((slide) => {
      slide.classList.remove('exposition__slide--style')
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

  if (document.querySelector('.top__swiper')) {
    const topSwiper = new Swiper('.top__swiper', {
      loop: true,
      pagination: {
        el: '.top__pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.top__next',
        prevEl: '.top__prev',
      },
      // autoplay: {
      //   delay: 5000,
      // },
      slidesPerView: 1,
      spaceBetween: 40,
    })
  }

  if (document.querySelector('.exposition__swiper')) {
    const expositionSwiper = new Swiper('.exposition__swiper', {
      loop: true,
      navigation: {
        nextEl: '.exposition__next',
        prevEl: '.exposition__prev',
      },
      // autoplay: {
      //   delay: 5000,
      // },
      slidesPerView: 4,
      spaceBetween: 30,
      // allowTouchMove: false,
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1.1,
          spaceBetween: 14,
        },
        576: {
          slidesPerView: 1.1,
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

  if (document.querySelector('.excursions__swiper')) {
    const expositionSwiper = new Swiper('.excursions__swiper', {
      loop: true,
      navigation: {
        nextEl: '.excursions__next',
        prevEl: '.excursions__prev',
      },
      // autoplay: {
      //   delay: 5000,
      // },
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

  if (document.querySelector('.shop__swiper')) {
    const expositionSwiper = new Swiper('.shop__swiper', {
      loop: true,
      navigation: {
        nextEl: '.shop__next',
        prevEl: '.shop__prev',
      },
      // autoplay: {
      //   delay: 5000,
      // },
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

  if (document.querySelector('.events__swiper')) {
    if (innerWidth < 769) {
      const eventsSwiper = new Swiper('.events__swiper', {
        navigation: {
          nextEl: '.events__next',
          prevEl: '.events__prev',
        },
        // autoplay: {
        //   delay: 5000,
        // },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
          992: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          576: {
            slidesPerView: 1.1,
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
  }
})
