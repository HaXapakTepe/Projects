$(document).ready(function () {
  const wrapFork = document.querySelector('.wrapper__inner--fork')
  const wrapScoop = document.querySelector('.wrapper__inner--scoop')
  const btnFork = document.querySelectorAll('.calculator__item-elem--fork')
  const btnScoop = document.querySelectorAll('.calculator__item-elem--scoop')

  btnFork.forEach((item) => {
    item.addEventListener('click', function () {
      wrapFork.classList.add('active')
      wrapScoop.classList.remove('active')
    })
  })

  btnScoop.forEach((item) => {
    item.addEventListener('click', function () {
      wrapScoop.classList.add('active')
      wrapFork.classList.remove('active')
    })
  })

  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')

  if (innerWidth <= 992) {
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active')
        menu.classList.remove('active')
      }
      e.stopPropagation()
    })

    menu.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
    })

    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
      })
    })

    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
      })
    })

    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
    })
  }

  const menuLinks = document.querySelectorAll('.goto[data-goto]')

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

  if (document.querySelector('.slider-tooltips')) {
    var tooltipSlider = document.querySelector('.slider-tooltips')

    noUiSlider.create(tooltipSlider, {
      start: 1,
      tooltips: true,
      range: {
        min: 0,
        max: 10,
      },

      format: wNumb({
        decimals: 0,
      }),
    })
  }
  if (document.querySelector('.slider-range')) {
    var rangeSlider = document.querySelector('.slider-range')

    noUiSlider.create(rangeSlider, {
      start: 2,
      tooltips: true,
      range: {
        min: 2,
        max: 7,
      },

      format: wNumb({
        decimals: 0,
      }),
    })
  }
  if (document.querySelector('.calculator__item-tooltips')) {
    var tooltipSlider = document.querySelector('.calculator__item-tooltips')

    noUiSlider.create(tooltipSlider, {
      start: 1,
      tooltips: true,
      range: {
        min: 0,
        max: 10,
      },

      format: wNumb({
        decimals: 0,
      }),
    })
  }

  if (document.querySelector('.calculator__item-range')) {
    var rangeSlider = document.querySelector('.calculator__item-range')

    noUiSlider.create(rangeSlider, {
      start: 2,
      tooltips: true,
      range: {
        min: 2,
        max: 7,
      },

      format: wNumb({
        decimals: 0,
      }),
    })
  }

  var targetCatalog = document.querySelectorAll('[data-targetCatalog]'),
    catalogItem = document.querySelectorAll('.catalog__item')

  targetCatalog.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-targetCatalog')
      catalogItem.forEach((elem) => {
        elem.classList.remove('catalog__item--opacity', 'catalog__item--active')
      })
      targetCatalog.forEach((elem) => {
        elem.classList.remove('catalog__box-btn--active')
      })
      this.classList.add('catalog__box-btn--active')
      var cat = document.querySelector('[data-infoCatalog="' + target + '"]')
      cat.classList.add('catalog__item--active')
      setTimeout(() => {
        cat.classList.add('catalog__item--opacity')
      }, 400)
    })
  })

  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.what__item')

  targetMap.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('what__item--opacity', 'what__item--active')
      })
      targetMap.forEach((elem) => {
        elem.classList.remove('what__box-btn--active')
      })
      this.classList.add('what__box-btn--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('what__item--active')
      setTimeout(() => {
        cat.classList.add('what__item--opacity')
      }, 400)
    })
  })

  var multiSwiper = new Swiper('.multi__swiper', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    direction: 'vertical',
    pagination: {
      el: '.multi__pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        direction: 'vertical',
      },
      320: {
        direction: 'horizontal',
      },
    },
  })

  var forkliftSwiper = new Swiper('.catalog__forklift', {
    effect: 'fade',
    autoHeight: true,
    spaceBetween: 40,
    navigation: {
      nextEl: '.catalog__forklift-next',
      prevEl: '.catalog__forklift-prev',
    },
    pagination: {
      el: '.catalog__forklift-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span data-goto=".section-catalog" class="' +
          className +
          ' goto' +
          '">' +
          (index + 1) +
          '</span>'
        )
      },
    },
  })

  var bucketSwiper = new Swiper('.catalog__bucket', {
    effect: 'fade',
    autoHeight: true,
    spaceBetween: 40,
    navigation: {
      nextEl: '.catalog__bucket-next',
      prevEl: '.catalog__bucket-prev',
    },
    pagination: {
      el: '.catalog__bucket-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span data-goto=".section-catalog" class="' +
          className +
          ' goto' +
          '">' +
          (index + 1) +
          '</span>'
        )
      },
    },
  })

  const licensesSwiper = new Swiper('.licenses__swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.licenses__next',
      prevEl: '.licenses__prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
    },
    spaceBetween: 30,
  })
})
