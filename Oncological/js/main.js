$(document).ready(function () {
  const query = window.location.search.replace('?', '')
  const vars = query.split('&')
  if (vars) {
    const args = {}
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=')
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
  const phone1 = document.querySelectorAll('#phone1')
  const phone2 = document.querySelectorAll('#phone2')
  $(phone1).mask('+7 (999) 999-99-99')
  $(phone2).mask('+7 (999) 999-99-99')

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

  const header = document.querySelector('.header')
  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__link')
  const body = document.querySelector('body')
  const iconClose = document.querySelectorAll('.iconClose')
  const successClose = document.querySelector('.success__close')
  const check = document.querySelector('.form__check')
  const doctorsColorLetter = document.querySelectorAll('.doctors__search-letter')
  const bviShortcode = document.querySelector('.bvi-shortcode')
  const bviLink = document.querySelectorAll('.bvi-link')
  const footer = document.querySelector('.footer')

  bviLink?.forEach((elem) => {
    if (elem.dataset.bvi == 'close') {
      elem.addEventListener('click', () => {
        location.reload()
      })
    }
  })

  bviShortcode?.addEventListener('click', () => {
    location.reload()
  })

  if (body.classList.contains('bvi-active')) {
    header.classList.remove('header--fixed')
    footer.classList.remove('footer--fixed')
  }

  menuItem?.forEach((item) => {
    item.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      // body.classList.add('no-scroll')
    })
  })

  burger?.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('no-scroll')
  })

  if (doctorsColorLetter) {
    doctorsColorLetter.forEach((item) => {
      item.addEventListener('click', function (e) {
        e.stopPropagation
        doctorsColorLetter.forEach((item) => {
          if (item !== e.target.closest('.doctors__search-letter')) item.classList.remove('active')
        })
        this.classList.contains('active')
          ? this.classList.remove('active')
          : this.classList.add('active')
      })
    })
  }

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.active').length) {
      $('.extra__text').removeClass('active')
    }
    e.stopPropagation()
  })

  iconClose?.forEach((item) => {
    item.addEventListener('click', function () {
      $.fancybox.close()
      $.fancybox.close()
    })
  })

  successClose?.addEventListener('click', function () {
    $.fancybox.close()
    $.fancybox.close()
  })

  if (check) {
    check.addEventListener('click', function () {
      check.classList.toggle('active')
    })
  }

  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.tab__info')

  targetMap?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('tab__info--opacity', 'tab__info--active')
      })
      targetMap.forEach((elem) => {
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

  // var targetTextPatients = document.querySelectorAll('[data-patients]'),
  //   patientBox = document.querySelectorAll('.patients__box')

  // targetTextPatients?.forEach((elem) => {
  //   elem.addEventListener('click', function (e) {
  //     e.preventDefault()
  //     var target = this.getAttribute('data-patients')
  //     patientBox.forEach((elem) => {
  //       elem.classList.remove('patients__box--opacity', 'patients__box--active')
  //     })
  //     targetTextPatients.forEach((elem) => {
  //       elem.classList.remove('patients__text--active')
  //     })
  //     this.classList.add('patients__text--active')
  //     var toCatch = document.querySelector('[data-infoPatients="' + target + '"]')
  //     toCatch.classList.add('patients__box--active')
  //     setTimeout(() => {
  //       toCatch.classList.add('patients__box--opacity')
  //     }, 400)
  //   })
  // })

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

  if (document.querySelector('.doctors__swiper')) {
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

  if (document.querySelector('.reviews__swiper')) {
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
  $('.form__input').on('focus', (e) =>  {
    $(e.currentTarget).parent().next().css('top', '-30px')
  })
  $('.form__input').on('focusout', (e) =>  {
    $(e.currentTarget).parent().next().css('top', '-15px')
  })
  $('.form__textarea').on('focus', (e) =>  {
    $(e.currentTarget).parent().next().css('top', '-30px')
  })
  $('.form__textarea').on('focusout', (e) =>  {
    $(e.currentTarget).parent().next().css('top', '-15px')
  })
  $('.wpcf7-spinner').css('display', 'none')
  $('.wpcf7-list-item').css('margin', '0')
  $('.wpcf7-form-control-wrap').attr('hidden', )
  let form = $('.entry').find('.footer__inner')
  for(x of form){
    $(x).children('.form__text-link').css('display', 'none')
  }


  //$(window).resize(function(){
    //if($(window).width()<= 992) {
      //$('.header').addClass('header--fixed')
    //} 
    //if($(window).width()> 992){
      //$('.header').removeClass('header--fixed')
    //}
  //})
})

//hidden на форм control wrap
//на спиннер дисплей нан
//стили на textarea