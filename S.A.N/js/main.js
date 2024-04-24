$(document).ready(function () {
  $('.fancy').fancybox()

  const fancy = document.querySelectorAll('.fancy')
  const fancyModal = document.querySelectorAll('.fancyModal')
  fancy.forEach((el, i) => {
    el.dataset.src = `#modalbox-${i + 1}`
    fancyModal.forEach((el, i) => {
      el.id = `modalbox-${i + 1}`
    })
  })

  var rellax = new Rellax('.rellax', {
    breakpoints: [576, 768, 1201],
  })

  $('.info__modal-box').mCustomScrollbar()

  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')

  if (burger) {
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      }
      e.stopPropagation()
    })
  }

  if (menuItem) {
    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      })
    })
  }

  if (burger) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
    })
  }

  const menuLinks = document.querySelectorAll('.menu__item-link[data-goto]')
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

  $(window).on('load', function () {
    setTimeout(function () {
      $(document).scrollTop(0)
    }, 0)
    if ($(window).width() > 1024) {
      wow = new WOW({
        animateClass: 'animate__animated',
        mobile: false,
        offset: 200,
      })
      wow.init()
    }
  })

  $(this)
    .find('.problems')
    .addClass('wow animate__animated animate__fadeInUp animate__fadeIn')
    .css({
      animationDelay: '.0s',
      animateDuration: '.1s',
    })

  $(this)
    .find('.solution')
    .addClass('wow animate__animated animate__fadeInUp animate__fadeIn')
    .css({
      animationDelay: '.0s',
      animateDuration: '.1s',
    })

  $(this).find('.info').addClass('wow animate__animated animate__fadeInUp animate__fadeIn').css({
    animationDelay: '.0s',
    animateDuration: '.1s',
  })

  $(this).find('.help').addClass('wow animate__animated animate__fadeInUp animate__fadeIn').css({
    animationDelay: '.0s',
    animateDuration: '.1s',
  })

  $(this).find('.case').addClass('wow animate__animated animate__fadeInUp animate__fadeIn').css({
    animationDelay: '.0s',
    animateDuration: '.1s',
  })

  $(this)
    .find('.partners')
    .addClass('wow animate__animated animate__fadeInUp animate__fadeIn')
    .css({
      animationDelay: '.0s',
      animateDuration: '.1s',
    })

  $(this)
    .find('.contacts')
    .addClass('wow animate__animated animate__fadeInUp animate__fadeIn')
    .css({
      animationDelay: '.0s',
      animateDuration: '.1s',
    })

  $(this).find('.footer').addClass('wow animate__animated animate__fadeInUp animate__fadeIn').css({
    animationDelay: '.0s',
    animateDuration: '.1s',
  })

  const caseSwiper = new Swiper('.case__swiper', {
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2.1,
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
})
