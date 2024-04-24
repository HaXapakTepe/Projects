document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const accordion = document.querySelectorAll('.accordion')
  const count = document.querySelectorAll('.count')
  const ratings = document.querySelectorAll('.rating')
  const detailsInfoItem = document.querySelectorAll('.details__info-item')
  const detailsFavorites = document.querySelectorAll('.details__favorites')
  const profileText = document.querySelectorAll('.profile__text')

  profileText.forEach((item) => {
    const span = item.querySelector('.profile__text-span')
    span.addEventListener('click', function () {
      profileText.forEach((item) => {
        item.parentNode.classList.remove('profile__text--active')
      })

      this.parentNode.classList.toggle('profile__text--active')

      if (span.parentNode.classList.contains('profile__text--active')) {
        span.textContent = 'Свернуть'
      } else {
        span.textContent = 'Развернуть'
      }
    })
  })

  detailsFavorites.forEach((item) => {
    item.addEventListener('click', function () {
      this.classList.toggle('details__favorites--active')
    })
  })

  detailsInfoItem.forEach((item) => {
    item.addEventListener('click', function () {
      detailsInfoItem.forEach((item) => {
        item.classList.remove('details__info-item--active')
      })
      this.classList.add('details__info-item--active')
    })
  })

  if (ratings.length > 0) {
    initRatings()
  }

  function initRatings() {
    let ratingActive, ratingValue

    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index]
      initRating(rating)
    }

    function initRating(rating) {
      initRatingVars(rating)

      setRatingActiveWidth()

      if (rating.classList.contains('rating')) {
        setRating(rating)
      }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active')
      ratingValue = rating.querySelector('.rating__value')
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05
      ratingActive.style.width = `${ratingActiveWidth}%`
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.rating__item')

      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index]

        ratingItem.addEventListener('mouseenter', function (e) {
          initRatingVars(rating)
          setRatingActiveWidth(ratingItem.value)
        })

        ratingItem.addEventListener('mouseleave', function (e) {
          setRatingActiveWidth()
        })

        ratingItem.addEventListener('click', function (e) {
          initRatingVars(rating)

          if (rating.dataset.ajax) {
            setRatingValue(ratingItem.value.rating)
          } else {
            ratingValue.innerHTML = index + 1
            setRatingActiveWidth()
          }
        })
      }
    }
  }

  count?.forEach((element) => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const num = element.querySelector('.count__num')
      let sum = +num.innerHTML

      if (e.classList.contains('count__plus')) {
        ++sum
        num.innerHTML = sum
      }
      if (e.classList.contains('count__minus')) {
        if (sum > 1) {
          --sum
          num.innerHTML = sum
        }
      }
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

  accordion?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()
      const content = acc.querySelector('.accordion__content')
      if (acc.classList.contains('accordion--active')) {
        acc.classList.remove('accordion--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  const contentFormIconEl = document.querySelectorAll('.elem__form-icon')

  contentFormIconEl?.forEach((elem) => {
    elem.addEventListener('click', function () {
      console.log(1)
      const contentFormInputEl = elem?.previousElementSibling
      if (contentFormInputEl.type === 'password') {
        contentFormInputEl.type = 'text'
      } else {
        contentFormInputEl.type = 'password'
      }
    })
  })

  var swiper = new Swiper('.details__swiperSmall', {
    slidesPerView: 4,
    spaceBetween: 12,
    loop: true,

    breakpoints: {
      993: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 4,
      },
      577: {
        slidesPerView: 3,
      },
      360: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  })
  var swiper2 = new Swiper('.details__bigSwiper', {
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.details__bigSwiper-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: swiper,
    },
  })

  var points = [
    [
      '<div class="map-baloon"><p>119311, г. Москва, Тц Универ Сити, площадь Джавахарлала Неру, 1</p></div>',
      '55.693297',
      '37.533984',
    ],
  ]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [55.693297, 37.533984],
        zoom: 16,
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
            // iconImageHref: '../img/icons/loca.svg',
            // iconImageSize: [48, 48],
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
