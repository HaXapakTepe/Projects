document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')
  const tabs = document.querySelectorAll('.tab__target')
  const pages = document.querySelectorAll('.tab__info')

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })

  const blogTargetItems = document.querySelectorAll('.blog__target-item')
  const blogLinks = document.querySelectorAll('.blog__link')

  blogTargetItems.forEach((item) => {
    item.addEventListener('click', () => {
      const category = item.textContent.trim()

      blogTargetItems.forEach((targetItem) => {
        targetItem.classList.remove('blog__target-item--active')
      })
      item.classList.add('blog__target-item--active')

      blogLinks.forEach((link) => {
        const linkCategory = link.querySelector('.blog__link-accent').textContent.trim()

        if (category === 'Все' || category === linkCategory) {
          link.style.display = 'block'
        } else {
          link.style.display = 'none'
        }
      })
    })
  })

  tabs?.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('tab__target--active'))
      pages.forEach((page) => {
        page.classList.remove('tab__info--active')
        setTimeout(() => {
          page.classList.remove('tab__info--opacity')
        }, 380)
      })

      tab.classList.add('tab__target--active')
      pages[idx].classList.add('tab__info--active')

      setTimeout(() => {
        pages[idx].classList.add('tab__info--opacity')
      }, 380)
    })
  })

  const toggleMenu = () => {
    menu.classList.toggle('menu--active')
    burger.classList.toggle('burger--active')
    body.classList.toggle('no-scroll')
  }

  const clickOutsideMenu = (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      menu.classList.remove('menu--active')
      burger.classList.remove('burger--active')
      body.classList.remove('no-scroll')
    }
  }

  burger.addEventListener('click', toggleMenu)
  document.addEventListener('click', clickOutsideMenu)

  const videoBox = document.querySelectorAll('.video__box')

  videoBox?.forEach((elem) => {
    const videoImg = elem.querySelector('.video__img')
    const videoHidden = elem.querySelector('.video__hidden')?.firstElementChild
    videoImg.addEventListener('click', () => {
      videoHidden.click()
    })
  })

  const accordion = document.querySelectorAll('.accordion')
  const accordionReverse = document.querySelectorAll('.accordion-reverse')

  accordion?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()
      const content = acc.querySelector('.accordion__content')
      // const content = acc.nextElementSibling
      if (acc.classList.contains('accordion--active')) {
        acc.classList.remove('accordion--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  if (innerWidth < 993) {
    accordionReverse?.forEach((acc) => {
      acc.addEventListener('click', (e) => {
        e.preventDefault()
        // const content = acc.querySelector('.accordion__content')
        const content = acc.previousElementSibling
        console.log(acc)
        if (acc.classList.contains('accordion--active')) {
          acc.classList.remove('accordion--active')
          content.style.maxHeight = '0'
        } else {
          acc.classList.add('accordion--active')
          content.style.maxHeight = content.scrollHeight + 'px'
        }
      })
    })
  }

  var systemSwiper = new Swiper('.system__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    navigation: {
      nextEl: `.system__arrow-next`,
      prevEl: `.system__arrow-prev`,
    },
  })

  var tipSwiper = new Swiper('.top__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    navigation: {
      nextEl: `.top__arrow-next`,
      prevEl: `.top__arrow-prev`,
    },
    pagination: {
      el: '.top__swiper-pagination',
    },
  })

  var clientsSwiper = new Swiper('.clients__swiper', {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 6,
    navigation: {
      nextEl: `.clients__arrow-next`,
      prevEl: `.clients__arrow-prev`,
    },
    breakpoints: {
      993: {
        slidesPerView: 5,
      },
      769: {
        slidesPerView: 4,
      },
      577: {
        slidesPerView: 3,
      },
      374: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })

  var teamsSwiper = new Swiper('.teams__swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 29,
    navigation: {
      nextEl: `.teams__arrow-next`,
      prevEl: `.teams__arrow-prev`,
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 2,
      },
      577: {
        slidesPerView: 2,
      },
      376: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })

  var certificatesSwiper = new Swiper('.certificates__swiper', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: `.certificates__arrow-next`,
      prevEl: `.certificates__arrow-prev`,
    },
    breakpoints: {
      993: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 3,
      },
      577: {
        slidesPerView: 2,
      },
      414: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })

  var customerReviewsSwiper = new Swiper('.customerReviews__swiper', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: `.customerReviews__arrow-next`,
      prevEl: `.customerReviews__arrow-prev`,
    },
    breakpoints: {
      993: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 3,
      },
      577: {
        slidesPerView: 2,
      },
      430: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })

  var blogReviewsSwiper = new Swiper('.blog__swiper', {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: `.blog__arrow-next`,
      prevEl: `.blog__arrow-prev`,
    },
    breakpoints: {
      993: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 1,
      },
      430: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })

  var servicesSwiper = new Swiper('.services__swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: `.services__arrow-next`,
      prevEl: `.services__arrow-prev`,
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 2,
      },
      577: {
        slidesPerView: 2,
      },
      376: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })

  if (document.querySelector('[name="phone"]')) {
    const element = document.querySelector('[name="phone"]')
    const maskOptions = {
      mask: '+{7} 000 000 00 00',
    }
    const mask = IMask(element, maskOptions)
  }

  var points = [
    [
      '<div class="map-baloon"><p>г. Набережные Челны, пр-кт Набережночелнинский, 21</p></div>',
      '55.710235',
      '52.356007',
    ],
  ]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [55.710235, 52.356007],
        zoom: 15,
        controls: ['zoomControl', 'geolocationControl', 'trafficControl'],
      })

      if (innerWidth < 1024) {
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
            iconImageHref: '../assets/images/icons/loca-shadow.svg',
            iconImageSize: [90, 99],
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

// $(document).ready(function () {})
