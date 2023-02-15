$(document).ready(function () {
  $('#phone').mask('+7 (999) 999-99-99')

  $('.modalbox').fancybox({})

  const searchPageСontentBox = document.querySelectorAll('.searchPage__content-box')
  const searchPageContentInput = document.querySelector('.searchPage__content-input')
  const doctorsSearchBlock = document.querySelector('.doctors__search-block')
  const doctorsSearchnput = document.querySelector('.doctors__search-input')

  if (searchPageСontentBox) {
    searchPageСontentBox.forEach((item) => {
      item.addEventListener('click', () => {
        searchPageContentInput.focus()
      })
    })
  }

  if (doctorsSearchBlock) {
    doctorsSearchBlock.addEventListener('click', () => {
      doctorsSearchnput.focus()
    })
  }

  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__link')
  const body = document.querySelector('body')
  const iconClose = document.querySelectorAll('.iconClose')
  const successClose = document.querySelector('.success__close')
  const check = document.querySelector('.form__check')
  const doctorsColorLetter = document.querySelectorAll('.doctors__search-letter')

  // if (body.classList.contains('.fancybox-active')) {
  //   document.querySelector('body').onwheel = (e) => e.stopPropagation()
  // }

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.add('no-scroll')
    })
  })

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('no-scroll')
  })

  if (doctorsColorLetter) {
    doctorsColorLetter.forEach((item) => {
      item.addEventListener('click', function () {
        doctorsColorLetter.forEach((item) => {
          item.classList.remove('active')
        })
        this.classList.add('active')
      })
    })
  }

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.active').length) {
      $('.doctors__search-letter').removeClass('active')
      $('.extra__text').removeClass('active')
    }
    e.stopPropagation()
  })

  iconClose.forEach((item) => {
    item.addEventListener('click', function () {
      $.fancybox.close()
    })
  })

  successClose.addEventListener('click', function () {
    $.fancybox.close()
    $.fancybox.close()
  })

  if (check) {
    check.addEventListener('click', function () {
      check.classList.toggle('active')
    })
  }

  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.about__box')

  targetMap.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('about__box--opacity', 'about__box--active')
      })
      targetMap.forEach((elem) => {
        elem.classList.remove('about__text--active')
      })
      this.classList.add('about__text--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('about__box--active')
      setTimeout(() => {
        cat.classList.add('about__box--opacity')
      }, 400)
    })
  })

  var targetTextPatients = document.querySelectorAll('[data-patients]'),
    patientBox = document.querySelectorAll('.patients__box')

  targetTextPatients.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-patients')
      patientBox.forEach((elem) => {
        elem.classList.remove('patients__box--opacity', 'patients__box--active')
      })
      targetTextPatients.forEach((elem) => {
        elem.classList.remove('patients__text--active')
      })
      this.classList.add('patients__text--active')
      var toCatch = document.querySelector('[data-infoPatients="' + target + '"]')
      toCatch.classList.add('patients__box--active')
      setTimeout(() => {
        toCatch.classList.add('patients__box--opacity')
      }, 400)
    })
  })

  $('textarea').on('paste input', function () {
    if ($(this).outerHeight() > this.scrollHeight) {
      $(this).height(1)
    }
    while (
      $(this).outerHeight() <
      this.scrollHeight +
        parseFloat($(this).css('borderTopWidth')) +
        parseFloat($(this).css('borderBottomWidth'))
    ) {
      $(this).height($(this).height() + 1)
    }
  })

  $('.searchBox__input').on('input', function (e) {
    checkControls(e.currentTarget.value)
  })

  const doctorsSwiper = new Swiper('.doctors__swiper', {
    breakpoints: {
      993: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
      410: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    },
  })

  var reviewsSwiper = new Swiper('.reviews__swiper', {
    breakpoints: {
      993: {
        slidesPerView: 2.1,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      577: {
        grid: {
          rows: 1,
        },
        slidesPerView: 1.3,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    },
  })
})
