$(document).ready(function () {
  const menuLinkGallery = document.querySelector('.menu__link--stop')
  const menuLinkHidden = document.querySelector('.menu__link-hidden')
  menuLinkGallery.addEventListener('click', () => {
    menuLinkHidden.style.display = 'block'
  })

  const projectsImage = document.querySelectorAll('.projects__image')
  const projectsItemDraft = document.querySelectorAll('.projects__item-draft')

  projectsImage.forEach((item) => {
    item.addEventListener('click', () => {
      projectsItemDraft.forEach((elem) => {
        elem.classList.add('active')
      })
    })
  })

  let sliderVideo

  const newsBoxText = document.querySelectorAll('.news__box-text')

  function text(Clipboard) {}

  let textLink = new Clipboard('.news__box-text')

  newsBoxText.forEach((item) => {
    item.addEventListener('click', () => {
      text()
    })
  })

  const projectsYearCircle = document.querySelectorAll('.projects__year-circle')

  projectsYearCircle.forEach((item) => {
    item.addEventListener('click', () => {
      projectsItemDraft.forEach((elem) => {
        elem.classList.remove('active')
      })
    })
  })

  const projectsPagOne = document.querySelectorAll('.projects__slide-pagination--one')
  projectsPagOne.forEach(function (item, index) {
    item.innerHTML = `${index + 1}`
  })

  const projectsPagTwo = document.querySelectorAll('.projects__slide-pagination--two')
  projectsPagTwo.forEach(function (item, index) {
    item.innerHTML = `${index + 1}`
  })

  const projectsPagThree = document.querySelectorAll('.projects__slide-pagination--three')
  projectsPagThree.forEach(function (item, index) {
    item.innerHTML = `${index + 1}`
  })

  const projectsPagFour = document.querySelectorAll('.projects__slide-pagination--four')
  projectsPagFour.forEach(function (item, index) {
    item.innerHTML = `${index + 1}`
  })

  const menuLinks = document.querySelectorAll('.link[data-goto]')

  if (menuLinks.length > 0) {
    menuLinks.forEach((link) => {
      link.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
      const link = e.target
      if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
        const gotoBlock = document.querySelector(link.dataset.goto)
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - header.offsetHeight
        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth',
        })
        e.preventDefault()
      }
    }
  }

  const newsBox = document.querySelectorAll('.news__box')
  const newsText = document.querySelectorAll('.news__box-text')

  newsText.forEach((item) => {
    item.addEventListener('click', function (e) {
      newsText.forEach((item) => {
        item.classList.remove('active')
        newsBox.forEach((elem) => {
          elem.classList.remove('active')
        })
      })
      this.classList.remove('active')
      e.preventDefault()
    })
  })

  newsBox.forEach((item) => {
    item.addEventListener('mouseover', function () {
      newsBox.forEach((item) => {
        item.classList.remove('active')
      })
      this.classList.add('active')
    })
  })

  newsBox.forEach((item) => {
    item.addEventListener('mouseleave', function () {
      newsBox.forEach((item) => {
        item.classList.remove('active')
      })
      this.classList.remove('active')
    })
  })

  const projectsBox = document.querySelectorAll('.projects__box')
  const projectsText = document.querySelectorAll('.projects__box-text')

  projectsBox.forEach((item) => {
    item.addEventListener('mouseover', function () {
      projectsBox.forEach((item) => {
        item.classList.remove('active')
      })
      this.classList.add('active')
    })
  })

  projectsBox.forEach((item) => {
    item.addEventListener('mouseleave', function () {
      projectsBox.forEach((item) => {
        item.classList.remove('active')
      })
      this.classList.remove('active')
    })
  })

  projectsText.forEach((item) => {
    item.addEventListener('click', function (e) {
      projectsText.forEach((item) => {
        item.classList.remove('active')
        projectsBox.forEach((elem) => {
          elem.classList.remove('active')
        })
      })
      this.classList.remove('active')
      e.preventDefault()
    })
  })

  const containerServices = document.querySelector('.container--services')

  if (containerServices) {
    if (innerWidth <= 992) {
      containerServices.classList.remove('container--services')
    }
  }

  const header = document.querySelector('.header')
  const loader = document.querySelector('.preloader')
  const preloaderImage = document.querySelector('.preloader__image')

  if (preloaderImage) {
    setTimeout(() => {
      preloaderImage.classList.add('preloader__image--active')
    }, 1000)
  }
  if (preloaderImage) {
    setTimeout(() => {
      preloaderImage.classList.remove('preloader__image--active')
    }, 3000)
  }
  if (preloaderImage) {
    setTimeout(() => {
      loader.classList.add('preloader--notActive')
      header.style.opacity = 1
    }, 4000)
  }

  loader.addEventListener('click', () => {
    preloaderImage.classList.add('preloader__image--active')
    preloaderImage.classList.remove('preloader__image--active')
    // body.classList.remove('no-scroll');
    loader.classList.add('preloader--notActive')
    header.style.opacity = 1
  })

  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.projects__item')

  targetMap.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('projects__item--opacity', 'projects__item--active')
      })
      targetMap.forEach((elem) => {
        elem.classList.remove('projects__year-circle--active')
      })
      this.classList.add('projects__year-circle--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('projects__item--active')
      setTimeout(() => {
        cat.classList.add('projects__item--opacity')
      }, 400)
    })
  })

  const smoothHeight = (itemSelector, buttonSelector, contentSelector) => {
    const items = document.querySelectorAll(itemSelector)

    if (!items.length) return
    items.forEach((el) => {
      const button = el.querySelector(buttonSelector)
      const content = el.querySelector(contentSelector)

      button.addEventListener('click', () => {
        if (el.dataset.open !== 'true') {
          el.dataset.open = 'true'
          content.style.maxHeight = `${content.scrollHeight}px`
          el.classList.add('active')
        } else {
          el.dataset.open = 'false'
          content.style.maxHeight = ''
          el.classList.remove('active')
        }
      })

      const onResize = () => {
        if (el.dataset.open === 'true') {
          if (parseInt(content.style.maxHeight) !== content.scrollHeight) {
            content.style.maxHeight = `${content.scrollHeight}px`
          }
        }
      }
      window.addEventListener('resize', onResize)
    })
  }
  smoothHeight('.newsPage__item', '.newsPage__item-title', '.newsPage__item-box')

  const technologyListItem = document.querySelectorAll('.technology__list-item')

  if (innerWidth <= 576) {
    technologyListItem.forEach((item) => {
      item.addEventListener('click', () => {
        technologyListItem.forEach((elem) => {
          elem.classList.toggle('active')
        })
      })
    })
  }

  const videoControls = $('.productionPage__video-play')

  videoControls.click(function (e) {
    sliderVideo = e.target.previousElementSibling
    if (sliderVideo.paused) {
      sliderVideo.play()
      sliderVideo.classList.add('video-is-playing')
    } else {
      sliderVideo.pause()
      sliderVideo.classList.remove('video-is-playing')
      sliderVideo.load()
    }
  })

  const videoPlay = $('.production__video-play')

  videoPlay.click(function (e) {
    const video = e.target.previousElementSibling
    if (video.paused) {
      video.play()
      video.classList.add('video-is-playing')
    } else {
      video.pause()
      video.classList.remove('video-is-playing')
      video.load()
    }
  })

  const body = document.querySelector('body')
  const burger = document.querySelector('.nav__burger')
  const menu = document.querySelector('.menu')
  const servicesSlide = document.querySelectorAll('.services__slide')
  const projectsSlide = document.querySelectorAll('.projects__slide')

  const close = document.querySelector('.close')

  close.addEventListener('click', () => {
    menu.classList.remove('active')
    burger.classList.remove('active')
  })

  menu.addEventListener('click', () => {
    burger.classList.remove('active')
  })

  burger.addEventListener('click', () => {
    burger.classList.add('active')
    menu.classList.toggle('active')
  })

  $('.projectsPage__item-box').click(function () {
    $(this).toggleClass('in').next().slideToggle()
    $('.projectsPage__item-box').not(this).removeClass('in').next().slideUp()
  })

  $('#up').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    )
    return false
  })

  $(document).on('click', function (event) {
    if (!$(event.target).closest('.active').length) {
      $('.newsPage__item').removeClass('active')
    }
  })

  const servicesSlideNum = document.querySelectorAll('.services__slide-pagination')

  servicesSlideNum.forEach(function (item, i) {
    item.innerHTML = `${i + 1} / ${servicesSlideNum.length}`
  })

  if (servicesSlide) {
    servicesSlide.forEach((item) => {
      item.addEventListener('click', function () {
        servicesSlide.forEach((item) => {
          item.classList.remove('active')
        })
        this.classList.add('active')
      })
    })
  }

  $(document).on('click', function (event) {
    if (!$(event.target).closest('.active').length) {
      $('.services__slide').removeClass('active')
    }
  })

  if (projectsSlide) {
    projectsSlide.forEach((item) => {
      item.addEventListener('click', function () {
        projectsSlide.forEach((item) => {
          item.classList.remove('active')
        })
        this.classList.add('active')
      })
    })
  }

  $(document).on('click', function (event) {
    if (!$(event.target).closest('.active').length) {
      $('.projects__slide').removeClass('active')
    }
  })

  $('.modalBox').fancybox({
    touch: false,
    beforeShow: function () {
      $('html, body').css({
        'overflow-y': 'hidden',
      })
    },
    afterShow: function () {
      var news = document.querySelectorAll('.news__content-item')

      news.forEach((element, index) => {
        element.addEventListener('click', function (event) {
          newsSwiper.slideTo(index, 0)
        })
      })
    },
    afterClose: function () {
      $('html, body').css({
        'overflow-y': 'visible',
      })
    },
  })

  str = $('.news__content-text').html()
  if (str) {
    str = str.substr(0, 238) + '...'
    $('.news__content-text').html(str)
  }

  const productionPageSwiper = new Swiper('.productionPage__video', {
    slidesPerView: 1,
    effect: 'fade',
    speed: 1000,
    navigation: {
      nextEl: '.icon-swiper-right',
      prevEl: '.icon-swiper-left',
    },
    on: {
      slideChange: () => {
        if (sliderVideo) {
          sliderVideo.pause()
          sliderVideo.classList.remove('video-is-playing')
          sliderVideo.load()
        }
      },
    },
  })

  var newsSwiper = new Swiper('.news__swiper', {
    spaceBetween: 2000,
    navigation: {
      nextEl: '.news__next',
      prevEl: '.news__prev',
    },
  })

  var solutionsSwiper = new Swiper('.solutions__swiper', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  })

  var solutionsSwiper = new Swiper('.solutions__swiperBottom', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.solutions__next',
      prevEl: '.solutions__prev',
    },

    breakpoints: {
      992: {
        spaceBetween: 100,
        centeredSlides: true,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 50,
      },
      576: {
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: false,
      },
    },
  })

  var servicesSwiper = new Swiper('.services__swiper', {
    navigation: {
      nextEl: '.services__next',
      prevEl: '.services__prev',
      disabledClass: 'disabled_swiper_button',
    },

    breakpoints: {
      1700: {
        slidesPerView: 3,
        spaceBetween: 63,
      },
      1081: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 1.1,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    },
  })

  if (innerWidth >= 577) {
    var clientsSwiper = new Swiper('.clients__swiper', {
      maxBackfaceHiddenSlides: 4,
      navigation: {
        nextEl: '.clients__next',
        prevEl: '.clients__prev',
      },

      breakpoints: {
        1500: {
          slidesPerView: 4,
          spaceBetween: 100,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 70,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        360: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      },
    })

    var clientsSwiperOne = new Swiper('.projects__swiper--one', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.projects__next--one',
        prevEl: '.projects__prev--one',
      },
    })

    var clientsSwiperTwo = new Swiper('.projects__swiper--two', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.projects__next--two',
        prevEl: '.projects__prev--two',
      },
    })

    var clientsSwiperThree = new Swiper('.projects__swiper--three', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.projects__next--three',
        prevEl: '.projects__prev--three',
      },
    })

    var clientsSwiperFour = new Swiper('.projects__swiper--four', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.projects__next--four',
        prevEl: '.projects__prev--four',
      },
    })
  }

  var certificateSwiper = new Swiper('.certificate__swiper', {
    slidesPerView: 3.5,
    spaceBetween: 0,

    breakpoints: {
      992: {
        centeredSlides: true,
        slidesPerView: 3.5,
      },
      768: {
        centeredSlides: false,
        slidesPerView: 2.1,
      },
      576: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })

  const certificateSlideDot = document.querySelectorAll('.certificate__slide-dot')

  certificateSlideDot.forEach((item, index) => {
    item.addEventListener('click', function () {
      certificateSwiper.slideTo(index)
    })
  })

  if (body.classList.contains('fancybox-active')) {
    certificateSlideDot.forEach((item) => {
      item.classList.add('active')
    })
  }

  var projectsPageSwiper = new Swiper('.projectsPage__item-hidden', {
    spaceBetween: 50,
    slidesPerView: 3,

    breakpoints: {
      1081: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 1.1,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    },
  })

  if (innerWidth <= 577) {
    var technologySwiper = new Swiper('.technology__content', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    })

    var projectsHiddenSwiper = new Swiper('.projects__hidden-swiper', {
      spaceBetween: 50,
      slidesPerView: 3,

      breakpoints: {
        1081: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 1.1,
          spaceBetween: 30,
        },
        480: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        320: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
      },
    })
  }
})
