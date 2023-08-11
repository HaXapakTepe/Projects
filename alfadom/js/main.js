$(document).ready(function () {
  const closeModal = document.querySelectorAll('.sent__btn')
  const sentApplicationBtn = document.querySelectorAll('.sentApplication__btn')
  const applicationLink = document.querySelectorAll('.application__link')

  if (applicationLink) {
    applicationLink.forEach((item) => {
      item.addEventListener('click', function () {
        $.fancybox.close()
      })
    })
  }

  if (sentApplicationBtn) {
    sentApplicationBtn.forEach((item) => {
      item.addEventListener('click', function () {
        $.fancybox.close()
      })
    })
  }

  if (closeModal) {
    closeModal.forEach((item) => {
      item.addEventListener('click', function () {
        $.fancybox.close()
      })
    })
  }

  $('.choice__item-region').click(function () {
    $(this).toggleClass('in active').next().slideToggle()
    $('.choice__item-region').not(this).removeClass('in active').next().slideUp()
  })

  $().fancybox({})

  $('#phone').mask('+7 (999) 999-99-99')

  var substringMatcher = function (strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex

      matches = []

      substrRegex = new RegExp(q, 'i')

      $.each(strs, function (i, str) {
        if (substrRegex.test(str)) {
          matches.push(str)
        }
      })

      cb(matches)
    }
  }

  var states = [
    'Москва',
    'Екатеринбург',
    'Краснодар',
    'Саратов',
    'Санкт-Петербург',
    'Нижний-Новгород',
    'Уфа',
    'Челябинск',
    'Самара',
    'Тула',
  ]
  $('#cities .typeahead').typeahead(
    {
      highlight: true,
      minLength: 0,
      display: 'states',
    },
    {
      name: 'states',
      limit: 10,
      source: substringMatcher(states),
    }
  )

  var streets = [
    'ул. Пушкина, д. 1, кв. 5',
    'ул. Пушкина, д. 1, кв. 14',
    'ул. Пушкина, д. 1, кв. 7',
    'ул. Пушкина, д. 1, кв. 13',
    'ул. Пушкина, д. 1, кв. 15',
    'ул. Пушкина, д. 1, кв. 12-Новгород',
    'ул. Пушкина, д. 1, кв. 16',
  ]

  $('#theOutside .typeahead').typeahead(
    {
      highlight: true,
      minLength: 0,
      display: 'streets',
    },
    {
      name: 'streets',
      limit: 7,
      source: substringMatcher(streets),
    }
  )

  const mask = document.querySelector('.mask')
  const yourCityClose = document.querySelector('.yourCity__icon')
  const yourCity = document.querySelector('.yourCity')
  const btnNo = document.querySelector('#no')
  const btnYes = document.querySelector('#yes')

  yourCity.classList.add('active')

  mask.addEventListener('click', () => {
    mask.classList.remove('active')
  })

  yourCityClose.addEventListener('click', () => {
    yourCity.classList.remove('active')
    mask.classList.remove('active')
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.yourCity__icon').length) {
      yourCity.classList.remove('active')
    }
    e.stopPropagation()
  })

  btnYes.addEventListener('click', () => {
    mask.classList.remove('active')
  })

  btnNo.addEventListener('click', (e) => {
    mask.classList.remove('active')
    e.preventDefault()
    document.querySelector('.header__city').click()
  })

  if (window.innerWidth <= 576) {
    mask.classList.add('active')
    yourCity.classList.add('active')

    mask.addEventListener('click', () => {
      mask.classList.remove('active')
    })
  }

  const allLinks = document.querySelectorAll('.link[data-goto]')
  if (allLinks.length > 0) {
    allLinks.forEach((link) => {
      link.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
      const link = e.target
      if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
        const gotoBlock = document.querySelector(link.dataset.goto)
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY

        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth',
        })
        e.preventDefault()
      }
    }
  }

  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__link')

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.active').length) {
      $('.menu').removeClass('active')
      burger.classList.remove('active')
    }
    e.stopPropagation()
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

  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.form__content')

  targetMap.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      var target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('form__content--opacity', 'form__content--active')
      })
      targetMap.forEach((elem) => {
        elem.classList.remove('form__subtitle--active')
      })
      this.classList.add('form__subtitle--active')
      var cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('form__content--active')
      setTimeout(() => {
        cat.classList.add('form__content--opacity')
      }, 400)
    })
  })

  let no = document.querySelector('#no')
  let yes = document.querySelector('#yes')

  if (no) {
    no.addEventListener('mouseover', function () {
      yes.classList.add('yourCity__new')
    })
    no.addEventListener('mouseout', function () {
      yes.classList.remove('yourCity__new')
    })
  }
})
