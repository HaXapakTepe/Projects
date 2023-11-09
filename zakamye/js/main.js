$(document).ready(function () {
  const contentArticleBox = document.querySelectorAll('.content__article-box')

  if (contentArticleBox) {
    contentArticleBox.forEach((item) => {
      item.addEventListener('mouseenter', function () {
        contentArticleBox.forEach((item) => {
          item.classList.remove('content__article-box--big')
        })
        this.classList.add('content__article-box--big')
      })
    })
  }

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })
  Fancybox.bind('.fancy', {
    // Your custom options
  })

  const fancy = document.querySelectorAll('.fancy')
  const fancyModal = document.querySelectorAll('.fancyModal')
  fancy.forEach((el, i) => {
    el.dataset.src = `#modalbox-${i + 1}`
    fancyModal.forEach((el, i) => {
      el.id = `modalbox-${i + 1}`
    })
  })

  if (document.querySelector('.select')) {
    $(document).ready(function () {
      $('.select').select2()
    })
  }

  const localeDate = {
    format: 'DD.MM.YYYY',
    customRangeLabel: 'Custom',
    daysOfWeek: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  }

  $('input[name="daterangeFrom"]').daterangepicker(
    {
      singleDatePicker: true,
      autoApply: true,
      locale: localeDate,
    },
    function (start, end, label) {
      $('input[name="daterangeTo"]')
    }
  )

  $('input[name="daterangeTo"]').daterangepicker(
    {
      singleDatePicker: true,
      autoApply: true,
      locale: localeDate,
    },
    function (start, end, label) {
      $('input[name="daterangeTo"]')
    }
  )

  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')
  const burgerClose = document.querySelector('.burgerClose')

  if (burger) {
    burgerClose.addEventListener('click', () => {
      burger.classList.remove('active')
      menu.classList.remove('active')
      body.classList.remove('no-scroll')
    })

    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      }
      e.stopPropagation()
    })

    // menuItem.forEach((item) => {
    //   item.addEventListener('click', () => {
    //     burger.classList.toggle('active')
    //     menu.classList.remove('active')
    //     body.classList.remove('no-scroll')
    //   })
    // })

    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
    })
  }

  if (innerWidth <= 576) {
    $('.footer__sections-title').click(function () {
      $(this).toggleClass('active').next().slideToggle()
      $('.footer__sections-title').not(this).removeClass('active').next().slideUp()
    })
    $('.footer__contacts-title').click(function () {
      $(this).toggleClass('active').next().slideToggle()
      $('.footer__contacts-title').not(this).removeClass('active').next().slideUp()
    })
    // $('.footer__sections-title').click(function () {
    //   $(this).toggleClass('active').next().slideToggle()
    // })
    // $('.footer__contacts-title').click(function () {
    //   $(this).toggleClass('active').next().slideToggle()
    // })
  }

  $('.case__accordion-title').click(function () {
    $(this).toggleClass('in').next().slideToggle()
    $('.case__accordion-title').not(this).removeClass('in').next().slideUp()
  })

  if (innerWidth <= 992) {
    const menuListLink = document.querySelectorAll('.menu__list-link')
    menuListLink.forEach((item) => {
      item.addEventListener('click', () => {
        item.parentNode.parentNode.parentNode.parentNode.previousElementSibling.click()
        burgerClose.click()
      })
    })

    burgerClose.addEventListener('click', () => {
      const menuItemLink = document.querySelectorAll('.menu__item-icon')
      menuItemLink.forEach((item) => {
        if (item.classList.contains('active')) {
          item.click()
        }
      })
    })

    $('.menu__item-icon').click(function () {
      $(this).toggleClass('active').parent().next().slideToggle()
      $('.menu__item-icon').not(this).removeClass('active').parent().next().slideUp()
    })
  }

  if (document.querySelector('.top__swiper')) {
    const projectsSwiper = new Swiper('.top__swiper', {
      loop: true,
      slidesPerView: 1,
    })
  }

  var points = [
    [
      '<div class="map-baloon"><p></p><p>г. Чистополь, К. Либкнехта, д. 22 Б</p></div>',
      '55.36448724804843',
      '50.64512057200493',
    ],
  ]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [55.36448724804843, 50.64512057200493],
        zoom: 14,
        controls: ['zoomControl', 'geolocationControl', 'trafficControl'],
      })

      if ($(window).width() < 1024) {
        myMap.behaviors.disable('scrollZoom')
        myMap.behaviors.disable('drag')
      }

      for (i = 0; i < points.length; i++) {
        var myPlacemark = new ymaps.Placemark(
          [points[i][1], points[i][2]],
          {
            balloonContent: points[i][0],
          },
          {
            iconLayout: 'default#image',
            // iconImageHref: '/wp-content/themes/partner_spaceapp/images/icons/marker.svg',
            // iconImageHref: './images/icons/marker.svg',
            iconImageSize: [48, 61],
            balloonLayout: 'default#imageWithContent',
          }
        )
        myCollection.add(myPlacemark)
        myMap.geoObjects.add(myPlacemark)

        myMap.events.add('click', function (e) {
          myMap.balloon.close()
        })
      }

      myMap.geoObjects.add(myCollection)

      myPlacemark.events.add('click', function (event) {
        event.preventDefault()
      })
    })
  }
})

var layouts = {
  L: {
    rotation: {
      A: 'c',
      c: 'd',
      d: 'h',
      h: 'g',
      g: 'A',
    },
    cells: {
      c: {
        layout: 'C',
        actions: {
          c: 'B',
          g: 'e',
          A: 'a',
        },
      },
      d: {
        layout: 'R',
        actions: {
          d: 'C',
          c: 'b',
          g: 'e',
          h: 'f',
          A: 'a',
        },
      },
      g: {
        layout: 'C',
        actions: {
          g: 'B',
          c: 'a',
          A: 'e',
        },
      },
      h: {
        layout: 'R',
        actions: {
          h: 'C',
          c: 'a',
          d: 'b',
          g: 'f',
          A: 'e',
        },
      },
    },
  },
  C: {
    rotation: {
      a: 'B',
      B: 'd',
      d: 'h',
      h: 'e',
      e: 'a',
    },
    cells: {
      a: {
        layout: 'L',
        actions: {
          a: 'A',
          e: 'g',
          B: 'c',
        },
      },
      d: {
        layout: 'R',
        actions: {
          d: 'C',
          h: 'f',
          B: 'b',
        },
      },
      e: {
        layout: 'L',
        actions: {
          e: 'A',
          a: 'c',
          B: 'g',
        },
      },
      h: {
        layout: 'R',
        actions: {
          h: 'C',
          d: 'b',
          B: 'f',
        },
      },
    },
  },
  R: {
    rotation: {
      e: 'a',
      f: 'e',
      C: 'f',
      b: 'C',
      a: 'b',
    },
    cells: {
      a: {
        layout: 'L',
        actions: {
          a: 'A',
          b: 'c',
          e: 'g',
          f: 'h',
          C: 'd',
        },
      },
      b: {
        layout: 'C',
        actions: {
          b: 'B',
          f: 'h',
          C: 'd',
        },
      },
      e: {
        layout: 'L',
        actions: {
          e: 'A',
          a: 'c',
          b: 'd',
          f: 'g',
          C: 'h',
        },
      },
      f: {
        layout: 'C',
        actions: {
          f: 'B',
          b: 'd',
          C: 'h',
        },
      },
    },
  },
}

var currentLayout = ''
var currentStates

/* Код ДдК ля рандома */
// var random = Math.round(0.5 + Math.random() * 5)

// if (random == 1) {
currentLayout = 'L'
currentStates = ['A', 'c', 'd', 'h', 'g']
// }

// if (random == 2) {
currentLayout = 'L'
currentStates = ['c', 'A', 'd', 'h', 'g']
// }

// if (random == 3) {
currentLayout = 'C'
currentStates = ['a', 'd', 'B', 'h', 'e']
// }

// if (random == 4) {
currentLayout = 'R'
currentStates = ['a', 'e', 'b', 'C', 'f']
// }

// if (random == 5) {
currentLayout = 'R'
currentStates = ['a', 'e', 'b', 'f', 'C']
// }
var parentWidth = $('.vertushka').width()

var elemWidth = parentWidth / 4
var elemHeight = 200
var largeElemWidth = elemWidth * 2
var largeElemHeigth = elemHeight * 2

function initPosition(elemWidth, elemHeight, largeElemWidth, largeElemHeigth) {
  return {
    a: { left: 0, top: 0, width: elemWidth, height: elemHeight },
    b: { left: elemWidth, top: 0, width: elemWidth, height: elemHeight },
    c: { left: largeElemWidth, top: 0, width: elemWidth, height: elemHeight },
    d: { left: elemWidth * 3, top: 0, width: elemWidth, height: elemHeight },
    e: { left: 0, top: elemHeight, width: elemWidth, height: elemHeight },
    f: { left: elemWidth, top: elemHeight, width: elemWidth, height: elemHeight },
    g: { left: largeElemWidth, top: elemHeight, width: elemWidth, height: elemHeight },
    h: { left: elemWidth * 3, top: elemHeight, width: elemWidth, height: elemHeight },
    A: { left: 0, top: 0, width: largeElemWidth, height: largeElemHeigth },
    B: { left: elemWidth, top: 0, width: largeElemWidth, height: largeElemHeigth },
    C: { left: largeElemWidth, top: 0, width: largeElemWidth, height: largeElemHeigth },
  }
}

var position = initPosition(elemWidth, elemHeight, largeElemWidth, largeElemHeigth)

$(window).on('resize', function (e) {
  var parentWidth = $('.vertushka').width()

  elemWidth = parentWidth / 4
  elemHeight = 200
  largeElemWidth = elemWidth * 2
  largeElemHeigth = elemHeight * 2

  position = initPosition(elemWidth, elemHeight, largeElemWidth, largeElemHeigth)
})

var animations = []

var moveControl = {}

var vertushkaTimer

var ANIMATION_MANU = 400
var ANIMATION_AUTO = 800
var MOVE_CONTROL_DELAY = 400
var ROTATION_INTERVAL = 9000

function mousenotlongfunc() {
  if ($('#' + Object.keys(moveControl)[0]).is(':hover')) {
    $('#' + Object.keys(moveControl)[0]).trigger('mousemove', [true])
  }
}

$(document).ready(function () {
  $(function () {
    $('.vertushka__item').each(function (e) {
      $('.vertushka__item').each(function (e) {
        $(this)
          .attr('id', 'nav-fragment-' + e)
          .attr('data-pos', currentStates[e])
      })

      // if (e == random - 1) {
      // $(this)
      //   .addClass('vertushka__item--big')
      //   .find('.vertushka__text')
      //   .addClass('vertushka__text--big')
      // } else {
      // $(this)
      //   .removeClass('vertushka__item--big')
      //   .find('.vertushka__text')
      //   .removeClass('vertushka__text--big')
      // }
    })
  })

  $('.vertushka__item').mousemove(function (e, trigger, noAnimations) {
    if (!trigger) {
      if (moveControl[e.currentTarget.id]) {
        // мышь уже тут была
        if (moveControl[e.currentTarget.id] + MOVE_CONTROL_DELAY < e.timeStamp) {
          // мышь уже тут долго, продолжаем обработку
        } else {
          // мышь тут недолго
          var t = moveControl[e.currentTarget.id]
          moveControl = {}
          moveControl[e.currentTarget.id] = t // сбрасываем записи о мыши с прочих блоков
          var mousenotlong = window.setTimeout(
            window.mousenotlongfunc,
            MOVE_CONTROL_DELAY + moveControl[e.currentTarget.id] - e.timeStamp
          )
          return
        }
      } else {
        moveControl[e.currentTarget.id] = e.timeStamp //записываем время первого захода мыши на блок
        return
      }
    }

    if (animations.length) {
      return false
    }
    var layoutPos = layouts[currentLayout].cells[$(this).attr('data-pos')]
    if (layoutPos == undefined) {
      return false //====>>> по большой картинке
    }
    currentLayout = layoutPos.layout
    for (oldPos in layoutPos.actions) {
      var newPos = layoutPos.actions[oldPos]
      if (newPos == 'A' || newPos == 'B' || newPos == 'C') {
        //увеличение
        animations.push('Grows' + oldPos)

        if (!noAnimations) {
          var ANIM_RAND = ANIMATION_MANU //
        } else {
          var ANIM_RAND = 10
        }

        $('.vertushka__item')
        $('.vertushka__item[data-pos=' + oldPos + ']').animate(position[newPos], ANIM_RAND, function () {
          $('.vertushka__item[data-pos=' + oldPos + ']')
          animations.pop()
        })
        animations.push('GrowsImage' + oldPos)
        animations.pop()
      } else {
        if (oldPos == 'A' || oldPos == 'B' || oldPos == 'C') {
          //уменьшение
          animations.push('shrink' + oldPos)
          $('.vertushka__item[data-pos=' + oldPos + ']').animate(position[newPos], ANIM_RAND, function () {
            animations.pop()
          })
          if (!$(this).hasClass('vertushka__item--big')) {
            animations.push('shrinkImage' + oldPos)
            animations.pop()
          }
        } else {
          //перемещение
          animations.push('moving' + oldPos)
          $('.vertushka__item[data-pos=' + oldPos + ']').animate(position[newPos], ANIM_RAND, function () {
            animations.pop()
          })
        }
      }

      $('.vertushka__item[data-pos=' + oldPos + ']').attr('data-pos', newPos)
    }

    $('.vertushka__item').removeClass('vertushka__item--big')
  })
})

const arr = ['A', 'B', 'C', 'D', 'E', 'F']

const item = document.querySelectorAll('.vertushka__item')
const inner = document.querySelector('.vertushka__inner')
item?.forEach((elem) => {
  inner.addEventListener('mouseenter', () => {
    // Получаем элемент, который будем отслеживать
    var divElement = elem

    // Создаем экземпляр MutationObserver, передавая callback-функцию
    var observer = new MutationObserver(function (mutationsList) {
      // проходимся по всем мутациям
      for (var mutation of mutationsList) {
        // Проверяем, изменился ли атрибут data-pos
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-pos') {
          var newValue = divElement.getAttribute('data-pos')

          // Здесь можно добавить нужную логику для реагирования на изменение атрибута
          const dataPos = elem.getAttribute('data-pos')

          if (arr.includes(dataPos)) {
            elem.classList.add('vertushka__item--big')
          } else {
            elem.classList.remove('vertushka__item--big')
          }
        }
      }
    })

    // Настраиваем параметры для MutationObserver: отслеживание изменений атрибутов
    var config = { attributes: true }

    // Начинаем отслеживание изменений в указанном элементе
    observer.observe(divElement, config)
  })
})
