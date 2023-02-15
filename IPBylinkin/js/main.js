$(document).ready(function () {
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

    ;($preloader = $('.preloader')), ($loader = $preloader.find('.preloader__image'))
    $loader.delay(700).fadeOut()
    $preloader.delay(800).fadeOut('slow')
  })

  $(this).find('.header').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.repair').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('h2').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.card').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.why').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.why__item').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.accent').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.video').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.howCard').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.info').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.certificate').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.shop').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.partners').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.face').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.formBottom').addClass('wow animate__animated animate__fadeIn').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.category').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.category__wrapper').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.category__bigCard').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.work').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.work__text').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.card').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.content').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.blockInfo').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.information').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.cards').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.reviews').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.service__inner').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  $(this).find('.uslugi__card').addClass('wow animate__animated animate__fadeInUp').css({
    animationDelay: '.0s',
    animateDuration: '.8s',
  })

  var rellax = new Rellax('.rellax', {
    breakpoints: [576, 768, 1201],
  })

  var mapTitle = document.createElement('div')
  mapTitle.className = 'map__text'
  mapTitle.textContent = 'Для активации карты нажмите по ней'
  const myMap = document.querySelector('#myMap')
  if (myMap) {
    myMap.appendChild(mapTitle)
    myMap.onclick = function () {
      this.children[0].style.pointerEvents = 'unset'
      mapTitle.parentElement.removeChild(mapTitle)
    }
    myMap.onmousemove = function (event) {
      mapTitle.style.display = 'block'
      if (event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px'
      if (event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px'
    }
    myMap.onmouseleave = function () {
      mapTitle.style.display = 'none'
    }
  }

  const body = document.querySelector('body')
  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.active').length) {
      burger.classList.remove('active')
      menu.classList.remove('active')
      body.classList.remove('no-scroll')
    }
    e.stopPropagation()
  })

  menu.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.remove('no-scroll')
  })

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.remove('no-scroll')
    })
  })

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.remove('no-scroll')
    })
  })

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('no-scroll')
  })

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

        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth',
        })
        e.preventDefault()
      }
    }
  }

  const formBox = document.querySelectorAll('.form__box')
  const formInput = document.querySelectorAll('.form__input')

  formBox.forEach((item, index) => {
    item.addEventListener('click', function () {
      formInput[index].focus()
    })
  })

  $('.form__box').on('click', function () {
    $(this).toggleClass('active')
  })

  $(document).on('mouseup', function (e) {
    let s = $('.form__box.active')
    if (!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass('active')
    }
  })

  const faceSwiper = new Swiper('.face__swiper', {
    loop: true,
    breakpoints: {
      993: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  })

  var sliderServis = new Swiper('.sliderServis', {
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl: '.sliderServis__btnNext',
      prevEl: '.sliderServis__btnPrev',
    },
    pagination: {
      el: '.sliderServis__pagination',
      type: 'custom',
      renderCustom: function (second, current, total) {
        return (
          '<span class="nav__pagination-number">' +
          ('0' + current).slice(-2) +
          '</span><span class="nav__pagination-line">/</span><span class="nav__pagination-numberMin">' +
          ('0' + total).slice(-2) +
          '</span>'
        )
      },
    },
  })

  var sliderWork = new Swiper('.workSlider', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.workSlider__btnNext',
      prevEl: '.workSlider__btnPrev',
    },
    pagination: {
      el: '.workSlider__pagination',
      type: 'custom',
      renderCustom: function (second, current, total) {
        return (
          '<span class="nav__pagination-number">' +
          ('0' + current).slice(-2) +
          '</span><span class="nav__pagination-line">/</span><span class="nav__pagination-numberMin">' +
          ('0' + total).slice(-2) +
          '</span>'
        )
      },
    },
  })

  var sliderInfo = new Swiper('.information__slider', {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      993: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.information__slider-btnNext',
      prevEl: '.information__slider-btnPrev',
    },
    pagination: {
      el: '.information__slider-pagination',
      type: 'custom',
      renderCustom: function (second, current, total) {
        return (
          '<span class="nav__pagination-number">' +
          ('0' + current).slice(-2) +
          '</span><span class="nav__pagination-line">/</span><span class="nav__pagination-numberMin">' +
          ('0' + total).slice(-2) +
          '</span>'
        )
      },
    },
  })

  var sliderReviews = new Swiper('.reviews__slider', {
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      993: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
    navigation: {
      nextEl: '.reviews__slider-btnNext',
      prevEl: '.reviews__slider-btnPrev',
    },
    pagination: {
      el: '.reviews__slider-pagination',
      type: 'custom',
      renderCustom: function (second, current, total) {
        return (
          '<span class="nav__pagination-number">' +
          ('0' + current).slice(-2) +
          '</span><span class="nav__pagination-line">/</span><span class="nav__pagination-numberMin">' +
          ('0' + total).slice(-2) +
          '</span>'
        )
      },
    },
  })

  var miniSlider = new Swiper('.miniSlider', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.miniSlider__btnNext',
      prevEl: '.miniSlider__btnPrev',
    },
    pagination: {
      el: '.miniSlider__pagination',
      type: 'custom',
      renderCustom: function (second, current, total) {
        return (
          '<span class="nav__pagination-number">' +
          ('0' + current).slice(-2) +
          '</span><span class="nav__pagination-line">/</span><span class="nav__pagination-numberMin">' +
          ('0' + total).slice(-2) +
          '</span>'
        )
      },
    },
  })

  var swiperMin = new Swiper('.category__sliderMin', {
    spaceBetween: 20,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      993: {
        spaceBetween: 20,
        slidesPerView: 6,
      },
      577: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  })

  var swiperBig = new Swiper('.category__sliderBig', {
    spaceBetween: 10,
    effect: 'fade',
    thumbs: {
      swiper: swiperMin,
    },
  })

  var miniSlider2 = new Swiper('.miniSlider--color', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.miniSlider__btnNext--color',
      prevEl: '.miniSlider__btnPrev--color',
    },
    pagination: {
      el: '.miniSlider__pagination--color',
      type: 'custom',
      renderCustom: function (second, current, total) {
        return (
          '<span class="nav__pagination-number">' +
          ('0' + current).slice(-2) +
          '</span><span class="nav__pagination-line">/</span><span class="nav__pagination-numberMin">' +
          ('0' + total).slice(-2) +
          '</span>'
        )
      },
    },
  })
})
