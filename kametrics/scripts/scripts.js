document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')

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

  // if (burger) {
  //   menuItem.forEach((item) => {
  //     item.addEventListener('click', () => {
  //       burger.classList.toggle('active')
  //       menu.classList.remove('active')
  //       body.classList.remove('no-scroll')
  //     })
  //   })
  // }

  const marqueeInner = document.querySelector('.marquee__inner')
  if (marqueeInner) {
    const images = marqueeInner.querySelectorAll('.marquee__img')
    const imageWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[0]).marginRight)

    marqueeInner.style.width = imageWidth * images.length + 'px'

    const cloneFirstElement = images[0].cloneNode(true)
    marqueeInner.appendChild(cloneFirstElement)

    function animateMarquee() {
      marqueeInner.style.transform = 'translateX(0)'

      const animationDuration = (imageWidth * images.length) / 100
      marqueeInner.style.animationDuration = animationDuration + 's'
      marqueeInner.style.animationIterationCount = 'infinite'
    }

    animateMarquee()
  }

  const accordion = document.querySelectorAll('.accordion')

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

  if (document.querySelector('.reviews__swiper')) {
    var reviewsSwiper = new Swiper('.reviews__swiper', {
      slidesPerView: 3.5,
      spaceBetween: 20,
      breakpoints: {
        993: {
          slidesPerView: 3.5,
        },
        769: {
          slidesPerView: 2,
        },
        577: {
          slidesPerView: 2,
        },
        391: {
          slidesPerView: 1.2,
        },
        320: {
          slidesPerView: 1.01,
        },
      },
      navigation: {
        nextEl: `.reviews__arrow-next`,
        prevEl: `.reviews__arrow-prev`,
      },
    })
  }

  if (document.querySelector('.cases__swiper')) {
    var casesSwiper = new Swiper('.cases__swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        993: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 2,
        },
        577: {
          slidesPerView: 1.8,
        },
        391: {
          slidesPerView: 1.2,
        },
        320: {
          slidesPerView: 1.1,
        },
      },
    })
  }
})

// if (document.querySelector('[name="phone"]')) {
//   const element = document.querySelector('[name="phone"]')
//   const maskOptions = {
//     mask: '+{7} 000 000 00 00',
//   }
//   const mask = IMask(element, maskOptions)
// }
// $(document).ready(function () {})
