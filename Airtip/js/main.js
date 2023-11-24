$(document).ready(function () {
  const privacy = document.querySelector('.privacy')
  const allow = document.querySelector('.link--allow')
  const deny = document.querySelector('.link--deny')

  // if (localStorage.user !== "save") {
  //   privacy.style.opacity = 0;
  //   privacy.style.display = "block";
  //   setTimeout(() => {
  //     privacy.style.opacity = 1;
  //   }, 300);
  // }

  if (allow) {
    allow.addEventListener('click', (e) => {
      e.preventDefault()
      localStorage.setItem('user', 'save')
      privacy.style.opacity = 0
      setTimeout(() => {
        privacy.style.display = 'none'
      }, 380)
    })
  }

  if (deny) {
    deny.addEventListener('click', (e) => {
      e.preventDefault()
    })
  }

  $('#much').mask('9999 AED')

  const cardInputMuch = document.querySelector('.card__input--much')
  const cardMuchItem = document.querySelectorAll('.card__much-item')

  if (cardMuchItem) {
    cardMuchItem.forEach((item) => {
      item.addEventListener('click', function () {
        let txt = item.innerText
        cardInputMuch.value = txt
      })
    })
  }

  const progressArray = document.querySelectorAll('.progress-bar')

  progressArray.forEach((progress) => {
    const total = progress.dataset.total
    const currentValue = progress.dataset.current

    const percents = ((currentValue / total) * 100).toFixed()

    progress.setAttribute('data-percent', percents >= 100 ? 100 : percents)

    $(progress).loading()
  })

  const ratings = document.querySelectorAll('.rating')

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

  const body = document.querySelector('body')
  const burger = document.querySelector('.nav__burger')
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
})
