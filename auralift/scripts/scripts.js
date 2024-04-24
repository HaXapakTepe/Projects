// $(document).ready(function () {
document.addEventListener('DOMContentLoaded', () => {
  const pinContainer = document.querySelectorAll('.pinCode')
  const burger = document.querySelector('.burger')
  const headerEl = document.querySelector('.header')
  const headerBoxEl = document.querySelector('.header__box')
  const tabs = document.querySelectorAll('.tab__target')
  const pages = document.querySelectorAll('.tab__info')
  const ratings = document.querySelectorAll('.rating')
  const greetingsEl = document.querySelector('.greetings')
  const paymentNotFoundEl = document.querySelector('.paymentNotFound')
  const donateEl = document.querySelectorAll('.donate')
  const successEl = document.querySelectorAll('.success')
  const entryEl = document.querySelector('.entry')
  const registrationEl = document.querySelector('.registration')
  const recoveryEl = document.querySelectorAll('.recovery')
  const confirmationEl = document.querySelectorAll('.confirmation')
  const shareEl = document.querySelector('.share')
  const placingAnOrderEl = document.querySelector('.placingAnOrder')
  const applicationEl = document.querySelector('.application')
  const notificationsEl = document.querySelector('.notifications')
  const deleteAccountEl = document.querySelector('.deleteAccount')
  const catalogFilterEl = document.querySelector('.catalog__filter')
  const catalogFilterCloseEl = catalogFilterEl?.querySelector('.catalog__filter-close')
  const filterOpenEl = document.querySelectorAll('.filter-open')
  // const contentFormEl = document.querySelector('.content__form')
  const contentFormIconEl = document.querySelectorAll('.content__form-icon')
  const catalogModalEl = document.querySelector('.catalog-modal')
  const catalogModalOpenEl = document.querySelector('.catalog-modal-open')
  const playerEl = document.querySelectorAll('.player')
  const blockItemEl = document.querySelectorAll('.block__item')
  const blockElemColorEl = document.querySelectorAll('.block__elem-color')
  const catalogSortingTextEl = document.querySelectorAll('.catalog__sorting-text')
  const blockElemCity = document.querySelector('.block__elem--city')
  const searchCityEl = blockElemCity?.querySelector('.search__input')
  const labelCityEl = blockElemCity?.querySelectorAll('.label')
  const servicesForm = document.querySelector('.services__form')
  const servicesFormSearch = servicesForm?.querySelector('.search__input')
  const servicesHiddenItem = servicesForm?.querySelectorAll('.services__search-item')
  const balance = document.querySelector('.balance')
  const searchInputBalance = balance?.querySelector('.search__input')
  const balanceOperation = balance?.querySelectorAll('.balance__operation')
  const linkRangeEl = document.querySelector('.link--range')
  const linkResetEl = document.querySelector('.link--reset')
  const range = document.getElementById('range')
  const searchEl = document.querySelector('.search')
  const detailsblockEl = document.querySelectorAll('.details__block')
  const accordionEl = document.querySelectorAll('.accordion')
  const accordionChild = document.querySelectorAll('.accordion-child')
  const accordionReverseEl = document.querySelectorAll('.accordion-reverse')
  const accordionALtEl = document.querySelectorAll('.accordion-alt')
  const detailsAccordionEl = document.querySelector('.details__accordion')
  const content = document.querySelector('.content')
  const catalog = document.querySelector('.catalog')
  const catalogSortEl = document.querySelector('.catalog__sort')
  const catalogSortBoxEl = document.querySelector('.catalog__sort-text')
  const catalogCardEl = document.querySelectorAll('.catalog__card')
  const popularityCardEl = document.querySelector('.catalog--popularity')
  const expensiveCardEl = document.querySelector('.catalog--expensive')
  const newCardEl = document.querySelector('.catalog--new')
  const cheaperCardEl = document.querySelector('.catalog--cheaper')
  const catalogSortHidden = document.querySelector('.catalog__sort-hidden')
  const radioButtons = catalogSortHidden?.querySelectorAll('.label__input.check')
  const catalogFilterIconEl = document.querySelectorAll('.catalog__filter-icon')
  const countEl = document.querySelectorAll('.count')
  const lunge = document.querySelectorAll('.lunge')
  const applicationTextAccent = document.querySelector('.application__text--accent')
  const backButton = document.querySelectorAll('.btn--prev')
  const continueButton = document.querySelectorAll('.btn--next')
  const contentQuestionEl = document.querySelectorAll('.content__question')
  const checkLastEl = document.querySelectorAll('.check--last')
  const profileCategory = document.querySelectorAll('.profile__category')
  const nameTheTask = document.querySelector('.nameTheTask')
  const questionForTheProblem = document.querySelector('.questionForTheProblem')
  const additionalQuestion = document.querySelector('.additionalQuestion')
  const taskDetails = document.querySelector('.taskDetails')
  const typeOfMeeting = document.querySelector('.typeOfMeeting')
  const whenServiceIsNeeded = document.querySelector('.whenServiceIsNeeded')
  const howMuchPay = document.querySelector('.howMuchPay')
  const deleteOrder = document.querySelector('.deleteOrder')
  const conductorWork = document.querySelector('.conductorWork')
  const period = document.querySelector('.period')
  const transaction = document.querySelector('.transaction')
  const deleteChat = document.querySelector('.deleteChat')
  const contentUserProfile = document.querySelectorAll('.content__user-profile')
  const chatTopIconOpen = document.querySelector('.chat__top-icon--open')
  const chatModal = document.querySelector('.chat__modal')
  const conductor = document.querySelector('.conductor')
  const avatar = document.querySelector('.avatar')
  const user = document.querySelector('.user')
  const userClose = document.querySelector('.user__close')
  const bell = document.querySelector('.bell')
  const bellOpen = document.querySelectorAll('.bell-open')
  const bellClose = document.querySelector('.bell__close')
  const calendarEl = document.querySelectorAll('.calendar')
  const calendarRange = document.querySelectorAll('.range-calendar')
  const services = document.querySelector('.services')
  const checkboxRange = document.querySelector('.checkbox--range')
  const order = document.querySelector('.order')
  const info = document.querySelector('.info')
  const profile = document.querySelector('.profile')
  const client = document.querySelector('.client')

  if (client) {
    const clientReviewsNum = document.querySelector('.client__reviews-num')
    const ratingItems = document.querySelectorAll('.client__rating-item')
    let totalRating = 0
    let totalVotes = 0

    ratingItems.forEach((item) => {
      const stars = Number(item.querySelector('.client__rating-num').textContent)
      const votes = Number(item.querySelector('.client__rating-all').textContent)
      totalRating += stars * votes
      totalVotes += votes
    })

    const votes = document.querySelectorAll('.client__rating-all')
    const clientRatingRed = document.querySelectorAll('.client__rating-red')

    const stars = Array.from(votes).map((vote) => Number(vote.textContent.trim()))
    const percentages = stars.map((star) => ((star / totalVotes) * 100).toFixed(2))

    clientRatingRed.forEach((red, index) => {
      red.style.width = `${percentages[index]}%`
    })

    const hotelRating = (totalRating / totalVotes).toFixed(1)
    clientReviewsNum.textContent = hotelRating

    const clientItemSwiper = document.querySelectorAll('.client__item-swiper')

    clientItemSwiper.forEach((swiper) => {
      const conductorSwiperImg = swiper.querySelectorAll('.client__item-img')
      const conductorSwiperNum = swiper.querySelector('.client__item-num')
      conductorSwiperNum.textContent = `Все ${conductorSwiperImg.length}`
    })
  }

  if (profile) {
    const profileReviewsBlock = profile.querySelector('.profile__reviews-block')
    const profileReviewshidden = profile.querySelector('.profile__reviews-hidden')
    const profileReviewsAccordion = profile.querySelector('.profile__reviews-accordion')
    const profileReviewsNull = profile.querySelector('.profile__reviews-null')
    if (profileReviewsNull != null) {
      if (profileReviewsBlock.firstElementChild == null) {
        profileReviewsNull.style.display = 'block'
        profileReviewshidden.style.display = 'none'
        profileReviewsAccordion.style.display = 'none'
      } else {
        profileReviewsNull.style.display = 'none'
        profileReviewshidden.style.display = 'block'
        profileReviewsAccordion.style.display = 'block'
      }
    }
  }

  // const dragArea = document.querySelector('.drag-area')
  // const blurOverlay = document.querySelector('.blur-overlay')
  // const chat = document.querySelector('.chat')

  // let currentDroppable = null

  // ball.onmousedown = function (event) {
  //   let shiftX = event.clientX - ball.getBoundingClientRect().left
  //   let shiftY = event.clientY - ball.getBoundingClientRect().top

  //   ball.style.position = 'absolute'
  //   ball.style.zIndex = 1000
  //   document.body.append(ball)

  //   moveAt(event.pageX, event.pageY)

  //   function moveAt(pageX, pageY) {
  //     ball.style.left = pageX - shiftX + 'px'
  //     ball.style.top = pageY - shiftY + 'px'
  //   }

  //   function onMouseMove(event) {
  //     moveAt(event.pageX, event.pageY)

  //     ball.hidden = true
  //     let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
  //     ball.hidden = false

  //     if (!elemBelow) return

  //     let droppableBelow = elemBelow.closest('.droppable')
  //     if (currentDroppable != droppableBelow) {
  //       if (currentDroppable) {
  //         // null если мы были не над droppable до этого события
  //         // (например, над пустым пространством)
  //         leaveDroppable(currentDroppable)
  //       }
  //       currentDroppable = droppableBelow
  //       if (currentDroppable) {
  //         // null если мы не над droppable сейчас, во время этого события
  //         // (например, только что покинули droppable)
  //         enterDroppable(currentDroppable)
  //       }
  //     }
  //   }

  //   document.addEventListener('mousemove', onMouseMove)

  //   ball.onmouseup = function () {
  //     document.removeEventListener('mousemove', onMouseMove)
  //     ball.onmouseup = null
  //   }
  // }

  // function enterDroppable(elem) {
  //   elem.style.background = 'pink'
  // }

  // function leaveDroppable(elem) {
  //   elem.style.background = ''
  // }

  // ball.ondragstart = function () {
  //   return false
  // }

  // dragArea.addEventListener('dragenter', (e) => {
  //   e.preventDefault()
  //   blurOverlay.classList.add('blur-overlay--active')
  // })

  // dragArea.addEventListener('dragover', (e) => {
  //   e.preventDefault()
  //   blurOverlay.classList.add('blur-overlay--active')
  // })

  // dragArea.addEventListener('dragleave', () => {
  //   blurOverlay.classList.remove('blur-overlay--active')
  // })

  // dragArea.addEventListener('drop', (e) => {
  //   e.preventDefault()
  //   blurOverlay.classList.remove('blur-overlay--active')
  // })
  if (info) {
    const text = document.querySelector('.info__item-text.info__item-text--accent.accordion')
    text.addEventListener('click', () => {
      if (text.classList.contains('accordion--active')) {
        text.textContent = 'Показать карту'
      } else {
        text.textContent = 'Скрыть карту'
      }
    })
  }

  if (order) {
    const orderItem = document.querySelectorAll('.order__item')

    orderItem.forEach((item) => {
      const deleteitem = item.querySelector('.order__item-hidden')
      item.addEventListener('mouseenter', () => {
        item.classList.add('order__item--viewed')
      })
      deleteitem.addEventListener('click', () => {
        deleteitem.parentNode.remove()
      })
    })
  }

  checkboxRange?.addEventListener('click', () => {
    const serviceNameBoxHidden = document.querySelector('.serviceName__box--hidden')
    if (checkboxRange.firstElementChild.checked) {
      serviceNameBoxHidden.classList.add('serviceName__box--active')
    } else {
      serviceNameBoxHidden.classList.remove('serviceName__box--active')
    }
  })

  if (services) {
    services.addEventListener('click', function (e) {
      e.preventDefault()
      const target = e.target
      if (target.classList.contains('label')) {
        target.classList.toggle('label--checked')
        if (target.classList.contains('label--checked')) {
          target.parentNode.classList.add('services__accordion-box--active')
        } else {
          target.parentNode.classList.remove('services__accordion-box--active')
        }
      }
    })
  }

  if (calendarRange) {
    calendarRange.forEach((item) => {
      new AirDatepicker(item, {
        range: true,
        multipleDatesSeparator: ' - ',
      })
    })
  }

  if (calendarEl) {
    calendarEl.forEach((item) => {
      new AirDatepicker(item, {
        // inline: true,
      })
    })
  }

  bellOpen.forEach((btn) => {
    btn?.addEventListener('click', () => {
      user.classList.remove('user--active')
      bell.classList.add('bell--active')
      document.body.classList.add('no-scroll')
    })
  })

  bellClose?.addEventListener('click', () => {
    bell.classList.remove('bell--active')
    document.body.classList.remove('no-scroll')
  })

  bell?.addEventListener('click', (e) => {
    if (!bell.contains(e.target.closest('.bell__inner'))) {
      bell.classList.remove('bell--active')
      document.body.classList.remove('no-scroll')
    }
  })

  avatar?.addEventListener('click', () => {
    bell.classList.remove('bell--active')
    user.classList.add('user--active')
    document.body.classList.add('no-scroll')
  })

  userClose?.addEventListener('click', () => {
    user.classList.remove('user--active')
    document.body.classList.remove('no-scroll')
  })

  user?.addEventListener('click', (e) => {
    if (!e.target.closest('.user__inner')) {
      user.classList.remove('user--active')
      document.body.classList.remove('no-scroll')
    }
  })

  if (conductor) {
    const conductorSwiperImg = conductor?.querySelectorAll('.conductor__swiper-img')
    const conductorSwiperNum = conductor?.querySelector('.conductor__swiper-num')
    conductorSwiperNum.textContent = `Все ${conductorSwiperImg.length}`
  }

  if (chatModal) {
    const chatModalBox = document.querySelectorAll('.chat__modal-box')
    chatTopIconOpen?.addEventListener('click', () => {
      chatModal.classList.add('chat__modal--active')
    })

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.chat__top-container')) {
        chatModal.classList.remove('chat__modal--active')
      }
    })

    chatModalBox.forEach((elem) => {
      elem.addEventListener('click', () => {
        chatModal.classList.remove('chat__modal--active')
      })
    })
  }

  contentUserProfile?.forEach((profile) => {
    const secure = profile.querySelector('.content__user-secure')
    secure.addEventListener('click', () => {
      profile.classList.toggle('content__user-profile--active')
    })
  })

  profileCategory?.forEach((category) => {
    const profileCategoryBlock = category.querySelectorAll('.profile__category-block')
    const profileCategoryAll = category.querySelectorAll('.profile__category-all')

    if (profileCategoryBlock.length > 7) {
      profileCategoryBlock.forEach((block) => {
        profileCategoryAll.forEach((text) => {
          text.textContent = `+${profileCategoryBlock.length - 7}`
        })
      })
    }

    if (profileCategoryBlock.length <= 7) {
      const lastBlock = profileCategoryBlock[profileCategoryBlock.length - 1]
      lastBlock.style.display = 'none'
    }
  })

  checkLastEl?.forEach((check) => {
    check.addEventListener('change', () => {
      if (check.checked) {
        check.parentNode.nextElementSibling.classList.remove('input--disabled')
      } else {
        check.parentNode.nextElementSibling.classList.add('input--disabled')
      }
    })
  })

  contentQuestionEl?.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      const contentInputEl = elem.querySelector('.content__question-input')
      const buttonElement = elem.querySelector('.btn--next')
      if (e.target.classList.contains('content__question-item')) {
        contentInputEl.value = e.target.textContent.trim()
        if (contentInputEl.value != '') {
          buttonElement?.classList.remove('btn--disabled')
        }
      }
    })
  })

  const blocksWithAdded = document.querySelectorAll('.questionnaire__clone')
  blocksWithAdded?.forEach((element) => addedBlock(element))

  function addedBlock(element) {
    const newDivHtml = `
      <div class="questionnaire__box-block questionnaire__box-block--row">
        <label class="questionnaire__label">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" />
          </svg>
          <input class="questionnaire__input input" type="text" placeholder="Введите адрес">
        </label>
        <i class="questionnaire__box-icon questionnaire__box-icon--alt questionnaire__box-icon--remove">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 4.9974H4.16667M4.16667 4.9974H17.5M4.16667 4.9974V16.6641C4.16667 17.1061 4.34226 17.53 4.65482 17.8426C4.96738 18.1551 5.39131 18.3307 5.83333 18.3307H14.1667C14.6087 18.3307 15.0326 18.1551 15.3452 17.8426C15.6577 17.53 15.8333 17.1061 15.8333 16.6641V4.9974H4.16667ZM6.66667 4.9974V3.33073C6.66667 2.8887 6.84226 2.46478 7.15482 2.15222C7.46738 1.83966 7.89131 1.66406 8.33333 1.66406H11.6667C12.1087 1.66406 12.5326 1.83966 12.8452 2.15222C13.1577 2.46478 13.3333 2.8887 13.3333 3.33073V4.9974M8.33333 9.16406V14.1641M11.6667 9.16406V14.1641" stroke="#344054" stroke-width="1.67" stroke-linecap="round" />
          </svg>
        </i>
      </div>`
    const listElement = element.querySelectorAll('.questionnaire__box-block')
    const addedBtn = element.querySelector('.link--create')

    listElement.forEach((item) => {
      addedBtn.addEventListener('click', () => {
        addedBtn.insertAdjacentHTML('beforeBegin', newDivHtml)

        const newBlock = addedBtn.previousElementSibling // Получить новый добавленный блок
        const removeEl = newBlock.querySelector('.questionnaire__box-icon--remove') // Получить ссылку на кнопку удаления в новом блоке

        removeEl.addEventListener('click', (e) => {
          const parentElement = removeEl.previousElementSibling
          parentElement.parentNode.remove()
        })
      })

      const removeEl = item.querySelector('.questionnaire__box-icon--remove')
      removeEl.addEventListener('click', (e) => {
        const parentElement = removeEl.previousElementSibling
        parentElement.parentNode.remove()
      })
    })
  }

  lunge.forEach((el) => {
    const lungeHiddenItem = el.querySelectorAll('.lunge__hidden-item')
    const lungeInput = el.querySelector('.lunge__input')

    lungeHiddenItem?.forEach(function (item) {
      const inputField = item.parentNode.previousElementSibling?.querySelector('.lunge__input')
      item.addEventListener('click', function () {
        inputField.value = item.textContent.trim()
        item.parentNode.previousElementSibling.click()
        lungeHiddenItem.forEach((item) => {
          item.classList.remove('lunge__hidden-item--active')
        })
        this.classList.add('lunge__hidden-item--active')
      })
    })

    lungeInput?.addEventListener('input', function () {
      const inputValue = lungeInput.value.toLowerCase()
      let match = false

      lungeHiddenItem.forEach((label) => {
        const dataContent = label.textContent.toLowerCase()

        if (dataContent.includes(inputValue)) {
          match = true
          label.style.display = 'flex'
        } else {
          label.style.display = 'none'
        }
      })
    })
  })

  countEl?.forEach((element) => {
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

  catalogFilterIconEl?.forEach((icon) => {
    icon.addEventListener('click', () => {
      icon.parentNode.remove()
    })
  })

  radioButtons?.forEach((button, idx) => {
    button.addEventListener('change', function () {
      catalogCardEl?.forEach((card) => {
        const catalogCardAbsentEl = card.querySelector('.catalog__card-absent')

        if (!catalogCardAbsentEl) {
          if (button.checked && idx == 1) {
            card.classList.remove('catalog__card--none')
          } else {
            card.classList.add('catalog__card--none')
          }
        }

        if (catalogCardAbsentEl) {
          if (button.checked && idx == 2) {
            card.classList.remove('catalog__card--none')
          } else {
            card.classList.add('catalog__card--none')
          }
        }

        if (button.checked && idx == 0) {
          card.classList.remove('catalog__card--none')
        }
      })
    })
  })

  catalogCardEl?.forEach((card) => {
    const catalogCardAbsentEl = card.querySelector('.catalog__card-absent')
    const catalogCardBtnEl = card.querySelector('.catalog__card-btn')

    if (catalogCardAbsentEl) {
      catalogCardBtnEl?.classList.add('btn--disabled')
    } else {
      catalogCardBtnEl?.classList.remove('btn--disabled')
    }
  })

  catalogSortEl?.addEventListener('click', (e) => {
    if (e.target.closest('.catalog__sort-item')) {
      const textContent = e.target.closest('.catalog__sort-item').textContent
      catalogSortBoxEl.textContent = textContent
      catalogSortBoxEl.parentNode.classList.remove('accordion--active')
    }
  })

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.catalog__sort')) {
      catalogSortBoxEl?.parentNode.classList.remove('accordion--active')
    }
  })

  detailsblockEl?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      const content = acc.nextElementSibling
      if (acc.classList.contains('details__block--active')) {
        acc.classList.remove('details__block--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('details__block--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  applicationTextAccent?.addEventListener('click', (e) => {
    if (applicationTextAccent.textContent.trim() == 'Подробнее') {
      applicationTextAccent.textContent = 'Скрыть'
    } else {
      applicationTextAccent.textContent = 'Подробнее'
    }
  })

  detailsAccordionEl?.addEventListener('click', (e) => {
    if (detailsAccordionEl.textContent.trim() == 'Показать ещё') {
      detailsAccordionEl.textContent = 'Скрыть'
    } else {
      detailsAccordionEl.textContent = 'Показать ещё'
    }
  })

  accordionEl?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()
      // const content = acc.querySelector('.accordion__content')
      const content = acc.nextElementSibling
      if (acc.classList.contains('accordion--active')) {
        acc.classList.remove('accordion--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  accordionChild?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()
      const content = acc.querySelector('.accordion-child__content')
      if (acc.classList.contains('accordion-child--active')) {
        acc.classList.remove('accordion-child--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion-child--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  accordionReverseEl?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()
      const content = acc.previousElementSibling
      if (acc.classList.contains('accordion-reverse--active')) {
        acc.classList.remove('accordion-reverse--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion-reverse--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  accordionALtEl?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()
      // const content = acc.querySelector('.accordion__content')
      const content = acc.parentNode.nextElementSibling
      if (acc.classList.contains('accordion-alt--active')) {
        acc.classList.remove('accordion-alt--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion-alt--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  catalogSortingTextEl?.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.classList.add('catalog__sorting-text--active')
      catalogSortingTextEl.forEach((block) => {
        if (block != item) {
          block.classList.remove('catalog__sorting-text--active')
        }
      })
    })
  })

  if (catalog) {
    const cards = catalog.querySelectorAll('.catalog__card')

    popularityCardEl?.addEventListener('click', () => {
      const cardsArray = Array.from(cards)

      cardsArray.sort((a, b) => {
        const ratingA = parseInt(a.querySelector('.catalog__card-rating').textContent)
        const ratingB = parseInt(b.querySelector('.catalog__card-rating').textContent)

        return ratingB - ratingA
      })

      const catalog = document.querySelector('.catalog__item')
      catalog.innerHTML = ''

      cardsArray.forEach((card) => {
        catalog.appendChild(card)
      })
    })

    expensiveCardEl?.addEventListener('click', () => {
      const cardsArray = Array.from(cards)

      cardsArray.sort((a, b) => {
        const ratingA = parseInt(a.querySelector('.catalog__card-price').textContent.replaceAll(' ', ''))
        const ratingB = parseInt(b.querySelector('.catalog__card-price').textContent.replaceAll(' ', ''))

        return ratingB - ratingA
      })

      const catalog = document.querySelector('.catalog__item')
      if (catalog) catalog.innerHTML = ''

      cardsArray.forEach((card) => {
        catalog.appendChild(card)
      })
    })

    cheaperCardEl?.addEventListener('click', () => {
      const cardsArray = Array.from(cards)

      cardsArray.sort((a, b) => {
        const ratingA = parseInt(a.querySelector('.catalog__card-price').textContent.replaceAll(' ', ''))
        const ratingB = parseInt(b.querySelector('.catalog__card-price').textContent.replaceAll(' ', ''))

        return ratingA - ratingB
      })

      const catalog = document.querySelector('.catalog__item')
      if (catalog) catalog.innerHTML = ''

      cardsArray.forEach((card) => {
        catalog.appendChild(card)
      })
    })
  }

  if (content) {
    const cards = content.querySelectorAll('.stock__item')
    const contentOrderItem = content.querySelectorAll('.content__order-item')
    const searchInput = content.querySelector('.search__input')
    const tabInfo = content.querySelectorAll('.tab__info')

    expensiveCardEl?.addEventListener('click', () => {
      const cardsArray = Array.from(cards)

      cardsArray.sort((a, b) => {
        const ratingA = parseInt(a.querySelector('.stock__item-price').textContent.replaceAll(' ', ''))
        const ratingB = parseInt(b.querySelector('.stock__item-price').textContent.replaceAll(' ', ''))

        return ratingB - ratingA
      })

      const stockGrid = document.querySelector('.stock__grid')
      if (content) stockGrid.innerHTML = ''

      cardsArray.forEach((card) => {
        stockGrid.appendChild(card)
      })
    })

    cheaperCardEl?.addEventListener('click', () => {
      const cardsArray = Array.from(cards)

      cardsArray.sort((a, b) => {
        const ratingA = parseInt(a.querySelector('.stock__item-price').textContent.replaceAll(' ', ''))
        const ratingB = parseInt(b.querySelector('.stock__item-price').textContent.replaceAll(' ', ''))

        return ratingA - ratingB
      })

      const stockGrid = document.querySelector('.stock__grid')
      if (content) stockGrid.innerHTML = ''

      cardsArray.forEach((card) => {
        stockGrid.appendChild(card)
      })
    })

    searchInput?.addEventListener('input', function () {
      const inputValue = searchInput.value.toLowerCase()
      let match = false

      contentOrderItem.forEach((elem) => {
        const contentOrderTitle = elem.querySelectorAll('.content__order-title')

        contentOrderTitle.forEach((text) => {
          const dataContent = text.textContent.toLowerCase()

          if (dataContent.includes(inputValue)) {
            match = true
            elem.style.display = 'block'
          } else {
            elem.style.display = 'none'
          }
        })
      })
    })

    // tabInfo?.forEach((info) => {
    //   const contentOrderItem = info.querySelectorAll('.content__order-item')
    //   const contentOrderNull = info.querySelector('.content__order-null')
    //   if (contentOrderItem.length == 0) {
    //     contentOrderNull.style.display = 'flex'
    //   } else {
    //     contentOrderNull.style.display = 'none'
    //   }
    // })
  }

  if (searchEl) {
    searchEl?.addEventListener('click', (e) => {
      const searchInputEl = document.querySelector('.search__input')
      if (e.target.classList.contains('search__box-item')) {
        searchInputEl.value = e.target.textContent.trim()
      }
    })

    document.addEventListener('click', (e) => {
      const searchInputEl = document.querySelector('.search__input')
      if (e.target.closest('.search')) {
        if (searchInputEl.focus) {
          searchInputEl.parentNode.classList.add('search__label--focus')
        }
      } else {
        searchInputEl.parentNode.classList.remove('search__label--focus')
      }
    })
  }

  if (range) {
    const lower = document.getElementById('lower-value')
    const upper = document.getElementById('upper-value')
    const inputs = [lower, upper]
    function rangeFunc() {
      inputs?.forEach(function (input, handle) {
        input.addEventListener('change', function () {
          range.noUiSlider.setHandle(handle, this.value)
        })
        input.addEventListener('keydown', function (e) {
          const values = range.noUiSlider.get()
          const value = Number(values[handle])
          const steps = range.noUiSlider.steps()
          const step = steps[handle]
          let position
          switch (e.which) {
            case 13:
              range.noUiSlider.setHandle(handle, this.value)
              break
            case 38:
              position = step[1]
              if (position === false) {
                position = 1
              }
              if (position !== null) {
                range.noUiSlider.setHandle(handle, value + position)
              }
              break
            case 40:
              position = step[0]
              if (position === false) {
                position = 1
              }
              if (position !== null) {
                range.noUiSlider.setHandle(handle, value - position)
              }
              break
          }
        })
      })
    }

    function noUiSliderCreate() {
      noUiSlider?.create(range, {
        connect: true,
        start: [0, 1000000],
        format: wNumb({
          decimals: 0,
        }),
        range: {
          min: 0,
          max: 1000000,
        },
      })
      range.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle]
      })
    }
    noUiSliderCreate()

    rangeFunc()

    linkResetEl?.addEventListener('click', () => {
      const labelInputEl = document.querySelectorAll('.label__input')

      labelInputEl.forEach((elem) => {
        elem.checked = false
      })

      lower.value = '0'
      upper.value = '1000000'

      range.noUiSlider.destroy()
      noUiSliderCreate()
    })

    linkRangeEl.addEventListener('click', () => {
      rangeFunc()
    })

    lower.addEventListener('focus', function () {
      lower.value = ''
    })

    upper.addEventListener('focus', function () {
      upper.value = ''
    })

    lower.addEventListener('input', function () {
      const inputValue = lower.value

      if (inputValue.length > 7) {
        lower.value = inputValue.slice(0, 7)
      }
    })

    upper.addEventListener('input', function () {
      const inputValue = upper.value

      if (inputValue.length > 7) {
        upper.value = inputValue.slice(0, 7)
      }
    })
  }

  searchInputBalance?.addEventListener('input', function () {
    const inputValue = searchInputBalance.value.toLowerCase()
    let match = false

    balanceOperation.forEach((elem) => {
      const balanceOperationText = elem.querySelectorAll('.balance__operation-text')

      balanceOperationText.forEach((text) => {
        const dataContent = text.textContent.toLowerCase()

        if (dataContent.includes(inputValue)) {
          match = true
          elem.style.display = 'flex'
        } else {
          elem.style.display = 'none'
        }
      })
    })
  })

  searchCityEl?.addEventListener('input', function () {
    const inputValue = searchCityEl.value.toLowerCase()
    let match = false

    labelCityEl.forEach((label) => {
      const dataContent = label.textContent.toLowerCase()

      if (dataContent.includes(inputValue)) {
        match = true
        label.style.display = 'flex'
      } else {
        label.style.display = 'none'
      }
    })
  })

  servicesFormSearch?.addEventListener('input', function () {
    const inputValue = servicesFormSearch.value.toLowerCase()
    let match = false

    servicesHiddenItem.forEach((item) => {
      const dataContent = item.textContent.toLowerCase()

      if (dataContent.includes(inputValue)) {
        match = true
        item.style.display = 'flex'
      } else {
        item.style.display = 'none'
      }
    })
  })

  const servicesSearch = document.querySelector('.services__search')

  if (servicesSearch) {
    servicesSearch.addEventListener('click', (e) => {
      const accordion = document.querySelector('.accordion')
      const servicesSearchHidden = document.querySelector('.services__search-hidden')
      const searchInputEl = document.querySelector('.search__input')
      if (e.target.classList.contains('services__search-item')) {
        searchInputEl.value = e.target.textContent.trim()
      }

      if (e.target.closest('.services__search-hidden')) {
        accordion.classList.remove('accordion--active')
        servicesSearchHidden.style.maxHeight = '0'
      }
    })
  }

  blockElemColorEl?.forEach((elem) => {
    const dataColor = elem.getAttribute('data-color')
    elem.style.backgroundColor = dataColor
  })

  blockItemEl?.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('block__item--active')
      blockItemEl.forEach((block) => {
        if (block != item) {
          block.classList.remove('block__item--active')
        }
      })
    })
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.block')) {
        item.classList.remove('block__item--active')
      }
      if (e.target.classList.contains('link')) {
        e.preventDefault()
        item.classList.remove('block__item--active')
      }
    })
  })

  filterOpenEl?.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault()
      catalogFilterEl.classList.add('catalog__filter--active')
      document.body.classList.add('no-scroll')
    })
  })

  catalogFilterCloseEl?.addEventListener('click', () => {
    catalogFilterEl.classList.remove('catalog__filter--active')
    document.body.classList.remove('no-scroll')
  })

  catalogFilterEl?.addEventListener('click', (e) => {
    if (!e.target.closest('.catalog__filter-inner')) {
      catalogFilterEl.classList.remove('catalog__filter--active')
      document.body.classList.remove('no-scroll')
    }
  })

  playerEl?.forEach((elem) => {
    const playerActionsPlayEl = elem.querySelector('.player__actions-play')
    playerActionsPlayEl.addEventListener('click', () => {
      elem.classList.toggle('player--active')
    })
  })

  // if (innerWidth <= 768) {
  //   document.addEventListener('click', () => {
  //     if (document.body.classList.contains('no-scroll')) {
  //       headerBoxEl?.classList.add('header__box--hidden')
  //     } else {
  //       headerBoxEl?.classList.remove('header__box--hidden')
  //     }
  //   })
  // }

  catalogModalOpenEl?.addEventListener('click', () => {
    burger.classList.toggle('burger--active')
    catalogModalEl.classList.toggle('catalog-modal--active')
    headerEl.classList.toggle('header--catalog')
    document.body.classList.toggle('no-scroll')
  })

  catalogModalEl?.addEventListener('click', (e) => {
    if (!e.target.closest('.catalog-modal__inner')) {
      burger.classList.remove('burger--active')
      catalogModalEl.classList.remove('catalog-modal--active')
      headerEl.classList.remove('header--catalog')
      document.body.classList.remove('no-scroll')
    }
  })

  contentFormIconEl?.forEach((elem) => {
    elem.addEventListener('click', function () {
      const contentFormInputEl = elem?.previousElementSibling
      if (contentFormInputEl.type === 'password') {
        contentFormInputEl.type = 'text'
      } else {
        contentFormInputEl.type = 'password'
      }
    })
  })

  if (greetingsEl) {
    greetingsEl.classList.add('greetings--active')
    const greetingsElBtn = greetingsEl.querySelector('.btn')

    greetingsElBtn?.addEventListener('click', (e) => {
      e.preventDefault()
      greetingsEl.classList.remove('greetings--active')
      document.body.classList.remove('no-scroll')
    })

    greetingsEl.addEventListener('click', (e) => {
      if (greetingsEl.classList.contains('greetings--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.greetings__inner')) {
        greetingsEl.classList.remove('greetings--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  if (donateEl) {
    donateEl.forEach((element) => {
      const donateElBtn = element?.querySelector('.btn')
      const donateCardEl = element?.querySelectorAll('.donate__card')
      const donateCloseEl = element?.querySelector('.donate__close')
      const donateOpenEl = document.querySelector('.donate-open')

      donateElBtn?.addEventListener('click', (e) => {
        e.preventDefault()
        donateEl.classList.remove('donate--active')
        document.body.classList.remove('no-scroll')
      })

      element?.addEventListener('click', (e) => {
        if (!e.target.closest('.donate__form')) {
          element.classList.remove('donate--active')
          document.body.classList.remove('no-scroll')
        }

        if (element.classList.contains('donate--active')) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
      })

      donateCloseEl?.addEventListener('click', () => {
        element.classList.remove('donate--active')
        document.body.classList.remove('no-scroll')
      })

      donateOpenEl?.addEventListener('click', () => {
        element.classList.add('donate--active')
        document.body.classList.add('no-scroll')
      })

      donateCardEl?.forEach((item) => {
        item.addEventListener('click', function () {
          const donateCheckEl = item.querySelector('.donate__check')
          donateCardEl.forEach((item) => {
            item.classList.remove('donate__card--check')
          })
          donateCheckEl.setAttribute('checked', true)
          this.classList.add('donate__card--check')
        })
      })
    })
  }

  successEl?.forEach((elem) => {
    const successElBtn = elem.querySelector('.btn')

    successElBtn?.addEventListener('click', (e) => {
      elem.classList.remove('success--active')
      document.body.classList.remove('no-scroll')
    })

    elem.addEventListener('click', (e) => {
      if (elem?.classList.contains('success--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.success__inner')) {
        elem.classList.remove('success--active')
        document.body.classList.remove('no-scroll')
      }
    })
  })

  if (paymentNotFoundEl) {
    const paymentNotFoundElBtn = paymentNotFoundEl.querySelectorAll('.btn')

    paymentNotFoundElBtn.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        paymentNotFoundEl.classList.remove('paymentNotFound--active')
        document.body.classList.remove('no-scroll')
      })
    })

    paymentNotFoundEl.addEventListener('click', (e) => {
      if (!e.target.closest('.paymentNotFound__inner')) {
        paymentNotFoundEl.classList.remove('paymentNotFound--active')
        document.body.classList.remove('no-scroll')
      }

      if (paymentNotFoundEl?.classList.contains('paymentNotFound--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })
  }

  if (entryEl) {
    const entryElBtn = entryEl.querySelector('.btn')
    const entryElCloseEl = entryEl.querySelector('.entry__close')
    const entryIconEl = entryEl.querySelectorAll('.entry__icon')
    const entryOpenEl = document.querySelectorAll('.entry-open')

    entryElBtn?.addEventListener('click', (e) => {
      e.preventDefault()
      entryEl.classList.remove('entry--active')
      document.body.classList.remove('no-scroll')
    })

    entryEl.addEventListener('click', (e) => {
      if (entryEl.classList.contains('entry--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.entry__inner')) {
        entryEl.classList.remove('entry--active')
        document.body.classList.remove('no-scroll')
      }
    })

    entryElCloseEl.addEventListener('click', () => {
      entryEl.classList.remove('entry--active')
      document.body.classList.remove('no-scroll')
    })

    entryIconEl?.forEach((elem) => {
      elem.addEventListener('click', function () {
        const entryInputEl = elem?.previousElementSibling
        if (entryInputEl.type === 'password') {
          entryInputEl.type = 'text'
        } else {
          entryInputEl.type = 'password'
        }
      })
    })

    entryOpenEl?.forEach((elem) => {
      elem.addEventListener('click', () => {
        registrationEl?.classList.remove('registration--active')
        burger.classList.remove('burger--active')
        catalogModalEl.classList.remove('catalog-modal--active')
        headerEl.classList.remove('header--catalog')
        setTimeout(() => {
          entryEl.classList.add('entry--active')
          document.body.classList.add('no-scroll')
        }, 380)
      })
    })
  }

  if (registrationEl) {
    const registrationElBtn = registrationEl.querySelector('.btn')
    const registrationElCloseEl = registrationEl.querySelector('.registration__close')
    const registrationIconEl = registrationEl.querySelectorAll('.registration__icon')
    const registrationOpenEl = document.querySelectorAll('.registration-open')

    registrationElBtn?.addEventListener('click', (e) => {
      e.preventDefault()
      registrationEl.classList.remove('registration--active')
      document.body.classList.remove('no-scroll')
    })

    registrationEl.addEventListener('click', (e) => {
      if (registrationEl?.classList.contains('registration--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.registration__form')) {
        registrationEl.classList.remove('registration--active')
        document.body.classList.remove('no-scroll')
      }
    })

    registrationElCloseEl.addEventListener('click', () => {
      registrationEl.classList.remove('registration--active')
      document.body.classList.remove('no-scroll')
    })

    registrationIconEl?.forEach((elem) => {
      elem.addEventListener('click', function () {
        const registrationInputEl = elem?.previousElementSibling
        if (registrationInputEl.type === 'password') {
          registrationInputEl.type = 'text'
        } else {
          registrationInputEl.type = 'password'
        }
      })
    })

    registrationOpenEl?.forEach((elem) => {
      elem.addEventListener('click', () => {
        entryEl.classList.remove('entry--active')
        setTimeout(() => {
          registrationEl?.classList.add('registration--active')
          document.body.classList.add('no-scroll')
        }, 380)
      })
    })
  }

  recoveryEl?.forEach((elem) => {
    const recoveryElClose = elem.querySelector('.recovery__close')
    const recoveryElBtn = elem.querySelector('.btn')
    const recoveryIconEl = elem?.querySelectorAll('.recovery__icon')
    const recoveryOpenEl = document.querySelectorAll('.recovery-open')

    recoveryElClose?.addEventListener('click', () => {
      elem.classList.remove('recovery--active')
      document.body.classList.remove('no-scroll')
    })

    recoveryElBtn?.addEventListener('click', () => {
      elem.classList.remove('recovery--active')
      document.body.classList.remove('no-scroll')
    })

    recoveryIconEl.forEach((elem) => {
      elem.addEventListener('click', function () {
        const recoveryInputEl = elem?.previousElementSibling
        if (recoveryInputEl.type === 'password') {
          recoveryInputEl.type = 'text'
        } else {
          recoveryInputEl.type = 'password'
        }
      })
    })

    elem.addEventListener('click', (e) => {
      if (registrationEl?.classList.contains('recovery--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.recovery__form')) {
        elem.classList.remove('recovery--active')
        document.body.classList.remove('no-scroll')
      }
    })

    recoveryOpenEl?.forEach((elem) => {
      elem.addEventListener('click', () => {
        entryEl.classList.remove('entry--active')
        setTimeout(() => {
          recoveryEl[0].classList.add('recovery--active')
          document.body.classList.add('no-scroll')
        }, 380)
      })
    })
  })

  if (shareEl) {
    const shareElCloseEl = shareEl.querySelector('.share__close')
    const shareLinkEl = shareEl?.querySelectorAll('.share__box-link')
    const shareIconClipboardEl = shareEl.querySelector('.share__icon--clipboard')
    const shareInputEl = shareEl.querySelector('.share__input')
    const shareOpenEl = document.querySelectorAll('.share-open')

    shareOpenEl?.forEach((elem) => {
      elem.addEventListener('click', () => {
        shareEl.classList.add('share--active')
        document.body.classList.add('no-scroll')
      })
    })

    shareElCloseEl?.addEventListener('click', () => {
      shareEl.classList.remove('share--active')
      document.body.classList.remove('no-scroll')
    })

    shareLinkEl?.forEach((elem) => {
      elem?.addEventListener('click', (e) => {
        shareEl.classList.remove('share--active')
        document.body.classList.remove('no-scroll')
      })
    })

    shareEl?.addEventListener('click', (e) => {
      if (shareEl?.classList.contains('share--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.share__form')) {
        shareEl.classList.remove('share--active')
        document.body.classList.remove('no-scroll')
      }
    })

    shareIconClipboardEl?.addEventListener('click', () => {
      window.navigator.clipboard.writeText(shareInputEl.value)
    })
  }

  if (placingAnOrderEl) {
    const placingAnOrderCloseEl = placingAnOrderEl?.querySelector('.placingAnOrder__close')
    const placingAnOrderBtnEl = placingAnOrderEl?.querySelector('.btn')
    const placingAnOrderCardEl = placingAnOrderEl?.querySelectorAll('.placingAnOrder__card')
    const placingAnOrderOpenEl = document.querySelectorAll('.placingAnOrder-open')

    placingAnOrderOpenEl?.forEach((elem) => {
      elem.addEventListener('click', () => {
        placingAnOrderEl.classList.add('placingAnOrder--active')
        document.body.classList.add('no-scroll')
      })
    })

    placingAnOrderCloseEl?.addEventListener('click', () => {
      placingAnOrderEl.classList.remove('placingAnOrder--active')
      document.body.classList.remove('no-scroll')
    })

    placingAnOrderBtnEl?.addEventListener('click', () => {
      placingAnOrderEl.classList.remove('placingAnOrder--active')
      document.body.classList.remove('no-scroll')
    })

    placingAnOrderEl?.addEventListener('click', (e) => {
      if (!e.target.closest('.placingAnOrder__form')) {
        placingAnOrderEl.classList.remove('placingAnOrder--active')
        document.body.classList.remove('no-scroll')
      }

      if (placingAnOrderEl?.classList.contains('placingAnOrder--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    placingAnOrderCardEl?.forEach((item) => {
      item.addEventListener('click', function () {
        const placingAnOrderCheckEl = item.querySelector('.placingAnOrder__check')
        placingAnOrderCardEl.forEach((item) => {
          item.classList.remove('placingAnOrder__card--check')
        })
        placingAnOrderCheckEl.setAttribute('checked', true)
        this.classList.add('placingAnOrder__card--check')
      })
    })
  }

  if (applicationEl) {
    const applicationCloseEl = applicationEl?.querySelector('.application__close')
    const applicationBtnEl = applicationEl?.querySelectorAll('.btn')
    const applicationOpenEl = document.querySelectorAll('.application-open')

    applicationOpenEl?.forEach((elem) => {
      elem.addEventListener('click', () => {
        applicationEl.classList.add('application--active')
        document.body.classList.add('no-scroll')
      })
    })

    applicationCloseEl?.addEventListener('click', () => {
      applicationEl.classList.remove('application--active')
      document.body.classList.remove('no-scroll')
    })

    applicationBtnEl.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        applicationEl.classList.remove('application--active')
        document.body.classList.remove('no-scroll')
      })
    })

    applicationEl?.addEventListener('click', (e) => {
      if (applicationEl.classList.contains('application--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.application__form')) {
        applicationEl.classList.remove('application--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  if (notificationsEl) {
    const notificationsElBtn = notificationsEl.querySelector('.btn')
    const notificationsOpenEl = document.querySelectorAll('.notifications-open')

    notificationsElBtn.addEventListener('click', (e) => {
      notificationsEl.classList.remove('notifications--active')
      document.body.classList.remove('no-scroll')
    })

    notificationsEl?.addEventListener('click', (e) => {
      if (notificationsEl.classList.contains('notifications--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.notifications__inner')) {
        notificationsEl.classList.remove('notifications--active')
        document.body.classList.remove('no-scroll')
      }
    })

    notificationsOpenEl.forEach((btn) => {
      btn.addEventListener('click', () => {
        notificationsEl.classList.add('notifications--active')
        document.body.classList.add('no-scroll')
      })
    })
  }

  if (deleteAccountEl) {
    const deleteAccountElBtn = deleteAccountEl.querySelectorAll('.btn')
    const deleteAccountOpenEl = document.querySelectorAll('.deleteAccount-open')

    deleteAccountElBtn.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        deleteAccountEl.classList.remove('deleteAccount--active')
        document.body.classList.remove('no-scroll')
      })
    })

    deleteAccountEl.addEventListener('click', (e) => {
      if (!e.target.closest('.deleteAccount__inner')) {
        deleteAccountEl.classList.remove('deleteAccount--active')
        document.body.classList.remove('no-scroll')
      }

      if (deleteAccountEl.classList.contains('deleteAccount--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    deleteAccountEl.addEventListener('click', () => {
      if (deleteAccountEl.classList.contains('deleteAccount--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    deleteAccountOpenEl.forEach((btn) => {
      btn.addEventListener('click', () => {
        deleteAccountEl.classList.add('deleteAccount--active')
        document.body.classList.add('no-scroll')
      })
    })
  }

  confirmationEl?.forEach((elem) => {
    const confirmationElBtn = elem.querySelector('.btn')
    const confirmationOpenEl = document.querySelectorAll('.confirmation-open')
    const confirmationOpenNextEl = document.querySelector('.confirmation-open-next')

    confirmationElBtn?.addEventListener('click', (e) => {
      e.preventDefault()
      elem.classList.remove('confirmation--active')
      document.body.classList.remove('no-scroll')
    })

    elem?.addEventListener('click', (e) => {
      if (!e.target.closest('.confirmation__form')) {
        elem.classList.remove('confirmation--active')
        document.body.classList.remove('no-scroll')
      }
    })

    elem.addEventListener('click', () => {
      if (elem.classList.contains('confirmation--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    confirmationOpenEl?.forEach((btn) => {
      btn.addEventListener('click', () => {
        confirmationEl[0].classList.add('confirmation--active')
        document.body.classList.add('no-scroll')
      })
    })

    confirmationOpenNextEl.addEventListener('click', () => {
      confirmationEl[0].classList.remove('confirmation--active')
      setTimeout(() => {
        confirmationEl[1].classList.add('confirmation--active')
        document.body.classList.add('no-scroll')
      }, 230)
    })
  })

  if (nameTheTask) {
    const nameTheTaskBtn = nameTheTask.querySelectorAll('.btn')
    const nameTheTaskBtnSave = nameTheTask.querySelector('.btn--save')
    const nameTheTaskInput = nameTheTask.querySelector('.content__question-input')
    const nameTheTaskOpen = document.querySelector('.nameTheTask-open')
    const nameTheTaskTitle = document.querySelector('.nameTheTask-title')

    nameTheTaskBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        nameTheTask.classList.remove('nameTheTask--active')
        document.body.classList.remove('no-scroll')
      })
    })

    nameTheTask?.addEventListener('click', (e) => {
      if (!e.target.closest('.nameTheTask__inner')) {
        nameTheTask.classList.remove('nameTheTask--active')
        document.body.classList.remove('no-scroll')
      }

      if (nameTheTask.classList.contains('nameTheTask--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    nameTheTask?.addEventListener('click', () => {
      if (nameTheTask.classList.contains('nameTheTask--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    nameTheTaskOpen?.addEventListener('click', () => {
      nameTheTask.classList.add('nameTheTask--active')
      document.body.classList.add('no-scroll')
    })

    nameTheTaskBtnSave?.addEventListener('click', () => {
      nameTheTaskTitle.textContent = nameTheTaskInput.value
    })
  }

  if (questionForTheProblem) {
    const questionForTheProblemBtn = questionForTheProblem.querySelectorAll('.btn')
    const questionForTheProblemOpen = document.querySelector('.questionForTheProblem-open')

    questionForTheProblemBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        questionForTheProblem.classList.remove('questionForTheProblem--active')
        document.body.classList.remove('no-scroll')
      })
    })

    questionForTheProblem?.addEventListener('click', (e) => {
      if (!e.target.closest('.questionForTheProblem__form')) {
        questionForTheProblem.classList.remove('questionForTheProblem--active')
        document.body.classList.remove('no-scroll')
      }

      if (questionForTheProblem.classList.contains('questionForTheProblem--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    questionForTheProblem?.addEventListener('click', () => {
      if (questionForTheProblem.classList.contains('questionForTheProblem--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    questionForTheProblemOpen?.addEventListener('click', () => {
      questionForTheProblem.classList.add('questionForTheProblem--active')
      document.body.classList.add('no-scroll')
    })
  }

  if (additionalQuestion) {
    const additionalQuestionBtn = additionalQuestion.querySelectorAll('.btn')
    const additionalQuestionOpen = document.querySelector('.additionalQuestion-open')

    additionalQuestionBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        additionalQuestion.classList.remove('additionalQuestion--active')
        document.body.classList.remove('no-scroll')
      })
    })

    additionalQuestion?.addEventListener('click', (e) => {
      if (!e.target.closest('.additionalQuestion__form')) {
        additionalQuestion.classList.remove('additionalQuestion--active')
        document.body.classList.remove('no-scroll')
      }

      if (additionalQuestion.classList.contains('additionalQuestion--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    additionalQuestion?.addEventListener('click', () => {
      if (additionalQuestion.classList.contains('additionalQuestion--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    additionalQuestionOpen?.addEventListener('click', () => {
      additionalQuestion.classList.add('additionalQuestion--active')
      document.body.classList.add('no-scroll')
    })
  }

  if (typeOfMeeting) {
    const typeOfMeetingBtn = typeOfMeeting.querySelectorAll('.btn')
    const typeOfMeetingOpen = document.querySelector('.typeOfMeeting-open')

    typeOfMeetingBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        typeOfMeeting.classList.remove('typeOfMeeting--active')
        document.body.classList.remove('no-scroll')
      })
    })

    typeOfMeeting?.addEventListener('click', (e) => {
      if (!e.target.closest('.typeOfMeeting__form')) {
        typeOfMeeting.classList.remove('typeOfMeeting--active')
        document.body.classList.remove('no-scroll')
      }

      if (typeOfMeeting?.classList.contains('typeOfMeeting--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    typeOfMeeting?.addEventListener('click', () => {
      if (typeOfMeeting.classList.contains('typeOfMeeting--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    typeOfMeetingOpen?.addEventListener('click', () => {
      typeOfMeeting.classList.add('typeOfMeeting--active')
      document.body.classList.add('no-scroll')
    })
  }

  if (taskDetails) {
    const taskDetailsBtn = taskDetails.querySelectorAll('.btn')
    const taskDetailsOpen = document.querySelector('.taskDetails-open')

    taskDetailsBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        taskDetails.classList.remove('taskDetails--active')
        document.body.classList.remove('no-scroll')
      })
    })

    taskDetails?.addEventListener('click', (e) => {
      if (!e.target.closest('.taskDetails__form')) {
        taskDetails.classList.remove('taskDetails--active')
        document.body.classList.remove('no-scroll')
      }

      if (taskDetails.classList.contains('taskDetails--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    taskDetails?.addEventListener('click', () => {
      if (taskDetails.classList.contains('taskDetails--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    taskDetailsOpen?.addEventListener('click', () => {
      taskDetails.classList.add('taskDetails--active')
      document.body.classList.add('no-scroll')
    })
  }

  if (whenServiceIsNeeded) {
    const whenServiceIsNeededBtn = whenServiceIsNeeded.querySelectorAll('.btn')
    const whenServiceIsNeededOpen = document.querySelector('.whenServiceIsNeeded-open')

    whenServiceIsNeededBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        whenServiceIsNeeded.classList.remove('whenServiceIsNeeded--active')
        document.body.classList.remove('no-scroll')
      })
    })

    whenServiceIsNeeded?.addEventListener('click', (e) => {
      if (!e.target.closest('.whenServiceIsNeeded__form')) {
        whenServiceIsNeeded.classList.remove('whenServiceIsNeeded--active')
        document.body.classList.remove('no-scroll')
      }

      if (whenServiceIsNeeded.classList.contains('whenServiceIsNeeded--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    whenServiceIsNeeded?.addEventListener('click', () => {
      if (whenServiceIsNeeded.classList.contains('whenServiceIsNeeded--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    whenServiceIsNeededOpen?.addEventListener('click', () => {
      whenServiceIsNeeded.classList.add('whenServiceIsNeeded--active')
      document.body.classList.add('no-scroll')
    })
  }

  if (howMuchPay) {
    const howMuchPayBtn = howMuchPay.querySelectorAll('.btn')
    const howMuchPayOpen = document.querySelector('.howMuchPay-open')

    howMuchPayBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        howMuchPay.classList.remove('howMuchPay--active')
        document.body.classList.remove('no-scroll')
      })
    })

    howMuchPay?.addEventListener('click', (e) => {
      if (!e.target.closest('.howMuchPay__form')) {
        howMuchPay.classList.remove('howMuchPay--active')
        document.body.classList.remove('no-scroll')
      }

      if (howMuchPay.classList.contains('howMuchPay--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    howMuchPay?.addEventListener('click', () => {
      if (howMuchPay.classList.contains('howMuchPay--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    howMuchPayOpen?.addEventListener('click', () => {
      howMuchPay.classList.add('howMuchPay--active')
      document.body.classList.add('no-scroll')
    })
  }

  if (deleteOrder) {
    const deleteOrderBtn = deleteOrder.querySelectorAll('.btn')

    deleteOrderBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        deleteOrder.classList.remove('deleteOrder--active')
        document.body.classList.remove('no-scroll')
      })
    })

    deleteOrder?.addEventListener('click', (e) => {
      if (!e.target.closest('.deleteOrder')) {
        deleteOrder.classList.remove('deleteOrder--active')
        document.body.classList.remove('no-scroll')
      }

      if (deleteOrder?.classList.contains('deleteOrder--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })
  }

  if (conductorWork) {
    const conductorWorkBtn = conductorWork.querySelectorAll('.btn')
    const conductorWorkBlockTextTop = conductorWork.querySelectorAll('.conductorWork__block-textTop')
    const conductorWorkBlockTextBot = conductorWork.querySelectorAll('.conductorWork__block-textBot')
    const conductorWorkOpen = document.querySelectorAll('.conductorWork-open')

    conductorWorkBlockTextTop?.forEach((item) => {
      item.addEventListener('click', function () {
        conductorWorkBlockTextTop.forEach((item) => {
          item.classList.remove('conductorWork__block-textTop--active')
        })
        this.classList.add('conductorWork__block-textTop--active')
      })
    })

    conductorWorkBlockTextBot?.forEach((item) => {
      item.addEventListener('click', function () {
        conductorWorkBlockTextBot.forEach((item) => {
          item.classList.remove('conductorWork__block-textBot--active')
        })
        this.classList.add('conductorWork__block-textBot--active')
      })
    })

    conductorWorkBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        conductorWork.classList.remove('conductorWork--active')
        document.body.classList.remove('no-scroll')
      })
    })

    conductorWork?.addEventListener('click', (e) => {
      if (!e.target.closest('.conductorWork__form')) {
        conductorWork.classList.remove('conductorWork--active')
        document.body.classList.remove('no-scroll')
      }

      if (conductorWork.classList.contains('conductorWork--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    conductorWork?.addEventListener('click', () => {
      if (conductorWork.classList.contains('conductorWork--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })

    conductorWorkOpen?.forEach((btn) => {
      btn?.addEventListener('click', () => {
        conductorWork.classList.add('conductorWork--active')
        document.body.classList.add('no-scroll')
      })
    })
  }

  if (period) {
    const periodBtn = period?.querySelectorAll('.btn')
    const periodOpen = document.querySelectorAll('.period-open')

    periodOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        period.classList.add('period--active')
        document.body.classList.add('no-scroll')
      })
    })

    periodBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        period.classList.remove('period--active')
        document.body.classList.remove('no-scroll')
      })
    })

    period?.addEventListener('click', (e) => {
      if (period.classList.contains('period--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.period__form')) {
        period.classList.remove('period--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  if (transaction) {
    const transactionClose = transaction?.querySelector('.transaction__close')

    transactionClose?.addEventListener('click', () => {
      transaction.classList.remove('transaction--active')
      document.body.classList.remove('no-scroll')
    })

    transaction?.addEventListener('click', (e) => {
      if (transaction.classList.contains('transaction--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.transaction__inner')) {
        transaction.classList.remove('transaction--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  if (deleteChat) {
    const deleteChatBtn = deleteChat.querySelectorAll('.btn')
    const deleteChatOpen = document.querySelector('.deleteChat-open')

    deleteChatOpen?.addEventListener('click', () => {
      deleteChat.classList.add('deleteChat--active')
      document.body.classList.add('no-scroll')
    })

    deleteChatBtn.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        deleteChat.classList.remove('deleteChat--active')
        document.body.classList.remove('no-scroll')
      })
    })

    deleteChat.addEventListener('click', (e) => {
      if (!e.target.closest('.deleteChat__inner')) {
        deleteChat.classList.remove('deleteChat--active')
        document.body.classList.remove('no-scroll')
      }

      if (deleteChat?.classList.contains('deleteChat--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const fullName = document.querySelector('.full-name')
  if (fullName) {
    const fullNameBtn = fullName?.querySelectorAll('.btn')
    const fullNameOpen = document.querySelectorAll('.full-name-open')

    fullNameOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        fullName.classList.add('full-name--active')
        document.body.classList.add('no-scroll')
      })
    })

    fullNameBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        fullName.classList.remove('full-name--active')
        document.body.classList.remove('no-scroll')
      })
    })

    fullName?.addEventListener('click', (e) => {
      if (fullName.classList.contains('full-name--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.full-name__inner')) {
        fullName.classList.remove('full-name--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const profilePhoto = document.querySelector('.profile-photo')
  if (profilePhoto) {
    const profilePhotoBtn = profilePhoto?.querySelectorAll('.btn')
    const profilePhotoOpen = document.querySelectorAll('.profile-photo-open')

    profilePhotoOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        profilePhoto.classList.add('profile-photo--active')
        document.body.classList.add('no-scroll')
      })
    })

    profilePhotoBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        profilePhoto.classList.remove('profile-photo--active')
        document.body.classList.remove('no-scroll')
      })
    })

    profilePhoto?.addEventListener('click', (e) => {
      if (profilePhoto.classList.contains('profile-photo--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.profile-photo__inner')) {
        profilePhoto.classList.remove('profile-photo--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const best = document.querySelector('.best')
  if (best) {
    const bestBtn = best?.querySelectorAll('.btn')
    const bestOpen = document.querySelectorAll('.best-open')

    bestOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        best.classList.add('best--active')
        document.body.classList.add('no-scroll')
      })
    })

    bestBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        best.classList.remove('best--active')
        document.body.classList.remove('no-scroll')
      })
    })

    best?.addEventListener('click', (e) => {
      if (best.classList.contains('best--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.best__inner')) {
        best.classList.remove('best--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const premium = document.querySelector('.premium')
  if (premium) {
    const premiumBtn = premium?.querySelectorAll('.btn')
    const premiumOpen = document.querySelectorAll('.premium-open')

    premiumOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        premium.classList.add('premium--active')
        document.body.classList.add('no-scroll')
      })
    })

    premiumBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        premium.classList.remove('premium--active')
        document.body.classList.remove('no-scroll')
      })
    })

    premium?.addEventListener('click', (e) => {
      if (premium.classList.contains('premium--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.premium__inner')) {
        premium.classList.remove('premium--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const premiumPlus = document.querySelector('.premiumPlus')
  if (premiumPlus) {
    const premiumPlusBtn = premiumPlus?.querySelectorAll('.btn')
    const premiumPlusOpen = document.querySelectorAll('.premiumPlus-open')

    premiumPlusOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        premiumPlus.classList.add('premiumPlus--active')
        document.body.classList.add('no-scroll')
      })
    })

    premiumPlusBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        premiumPlus.classList.remove('premiumPlus--active')
        document.body.classList.remove('no-scroll')
      })
    })

    premiumPlus?.addEventListener('click', (e) => {
      if (premiumPlus.classList.contains('premiumPlus--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.premiumPlus__inner')) {
        premiumPlus.classList.remove('premiumPlus--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const aboutMe = document.querySelector('.aboutMe')
  if (aboutMe) {
    const aboutMeBtn = aboutMe?.querySelectorAll('.btn')
    const aboutMeOpen = document.querySelectorAll('.aboutMe-open')

    aboutMeOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        aboutMe.classList.add('aboutMe--active')
        document.body.classList.add('no-scroll')
      })
    })

    aboutMeBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        aboutMe.classList.remove('aboutMe--active')
        document.body.classList.remove('no-scroll')
      })
    })

    aboutMe?.addEventListener('click', (e) => {
      if (aboutMe.classList.contains('aboutMe--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.aboutMe__inner')) {
        aboutMe.classList.remove('aboutMe--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const voiceMessage = document.querySelector('.voiceMessage')
  if (voiceMessage) {
    const voiceMessageBtn = voiceMessage?.querySelectorAll('.btn')
    const voiceMessageOpen = document.querySelectorAll('.voiceMessage-open')

    voiceMessageOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        voiceMessage.classList.add('voiceMessage--active')
        document.body.classList.add('no-scroll')
      })
    })

    voiceMessageBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        voiceMessage.classList.remove('voiceMessage--active')
        document.body.classList.remove('no-scroll')
      })
    })

    voiceMessage?.addEventListener('click', (e) => {
      if (voiceMessage.classList.contains('voiceMessage--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.voiceMessage__inner')) {
        voiceMessage.classList.remove('voiceMessage--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const education = document.querySelector('.education')
  if (education) {
    const educationBtn = education?.querySelectorAll('.btn')
    const educationOpen = document.querySelectorAll('.education-open')

    educationOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        education.classList.add('education--active')
        document.body.classList.add('no-scroll')
      })
    })

    educationBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        education.classList.remove('education--active')
        document.body.classList.remove('no-scroll')
      })
    })

    education?.addEventListener('click', (e) => {
      if (education.classList.contains('education--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.education__inner')) {
        education.classList.remove('education--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const activity = document.querySelector('.activity')
  if (activity) {
    const activityBtn = activity?.querySelectorAll('.btn')
    const activityOpen = document.querySelectorAll('.activity-open')

    activityOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        activity.classList.add('activity--active')
        document.body.classList.add('no-scroll')
      })
    })

    activityBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        activity.classList.remove('activity--active')
        document.body.classList.remove('no-scroll')
      })
    })

    activity?.addEventListener('click', (e) => {
      if (activity.classList.contains('activity--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.activity__inner')) {
        activity.classList.remove('activity--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const experience = document.querySelector('.experience')
  if (experience) {
    const experienceBtn = experience?.querySelectorAll('.btn')
    const experienceOpen = document.querySelectorAll('.experience-open')

    experienceOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        experience.classList.add('experience--active')
        document.body.classList.add('no-scroll')
      })
    })

    experienceBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        experience.classList.remove('experience--active')
        document.body.classList.remove('no-scroll')
      })
    })

    experience?.addEventListener('click', (e) => {
      if (experience.classList.contains('experience--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.experience__inner')) {
        experience.classList.remove('experience--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const achievements = document.querySelector('.achievements')
  if (achievements) {
    const achievementsBtn = achievements?.querySelectorAll('.btn')
    const achievementsOpen = document.querySelectorAll('.achievements-open')

    achievementsOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        achievements.classList.add('achievements--active')
        document.body.classList.add('no-scroll')
      })
    })

    achievementsBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        achievements.classList.remove('achievements--active')
        document.body.classList.remove('no-scroll')
      })
    })

    achievements?.addEventListener('click', (e) => {
      if (achievements.classList.contains('achievements--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.achievements__inner')) {
        achievements.classList.remove('achievements--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const miscellaneous = document.querySelector('.miscellaneous')
  if (miscellaneous) {
    const miscellaneousBtn = miscellaneous?.querySelectorAll('.btn')
    const miscellaneousOpen = document.querySelectorAll('.miscellaneous-open')

    miscellaneousOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        miscellaneous.classList.add('miscellaneous--active')
        document.body.classList.add('no-scroll')
      })
    })

    miscellaneousBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        miscellaneous.classList.remove('miscellaneous--active')
        document.body.classList.remove('no-scroll')
      })
    })

    miscellaneous?.addEventListener('click', (e) => {
      if (miscellaneous.classList.contains('miscellaneous--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.miscellaneous__inner')) {
        miscellaneous.classList.remove('miscellaneous--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const discount = document.querySelector('.discount')
  if (discount) {
    const discountBtn = discount?.querySelectorAll('.btn')
    const discountOpen = document.querySelectorAll('.discount-open')

    discountOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        discount.classList.add('discount--active')
        document.body.classList.add('no-scroll')
      })
    })

    discountBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        discount.classList.remove('discount--active')
        document.body.classList.remove('no-scroll')
      })
    })

    discount?.addEventListener('click', (e) => {
      if (discount.classList.contains('discount--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.discount__inner')) {
        discount.classList.remove('discount--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const addingAProduct = document.querySelector('.addingAProduct')
  if (addingAProduct) {
    const addingAProductBtn = addingAProduct?.querySelectorAll('.btn')
    const addingAProductOpen = document.querySelectorAll('.addingAProduct-open')

    addingAProductOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        addingAProduct.classList.add('addingAProduct--active')
        document.body.classList.add('no-scroll')
      })
    })

    addingAProductBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        addingAProduct.classList.remove('addingAProduct--active')
        document.body.classList.remove('no-scroll')
      })
    })

    addingAProduct?.addEventListener('click', (e) => {
      if (addingAProduct.classList.contains('addingAProduct--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.addingAProduct__inner')) {
        addingAProduct.classList.remove('addingAProduct--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const serviceName = document.querySelector('.serviceName')
  if (serviceName) {
    const serviceNameBtn = addingAProduct?.querySelectorAll('.btn')
    const serviceNameOpen = document.querySelectorAll('.serviceName-open')

    serviceNameOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        serviceName.classList.add('serviceName--active')
        document.body.classList.add('no-scroll')
      })
    })

    serviceNameBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        serviceName.classList.remove('serviceName--active')
        document.body.classList.remove('no-scroll')
      })
    })

    serviceName?.addEventListener('click', (e) => {
      if (serviceName.classList.contains('serviceName--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.serviceName__inner')) {
        serviceName.classList.remove('serviceName--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const yourOwnService = document.querySelector('.yourOwnService')
  if (yourOwnService) {
    const yourOwnServiceBtn = addingAProduct?.querySelectorAll('.btn')
    const yourOwnServiceOpen = document.querySelectorAll('.yourOwnService-open')

    yourOwnServiceOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        yourOwnService.classList.add('yourOwnService--active')
        document.body.classList.add('no-scroll')
      })
    })

    yourOwnServiceBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        yourOwnService.classList.remove('yourOwnService--active')
        document.body.classList.remove('no-scroll')
      })
    })

    yourOwnService?.addEventListener('click', (e) => {
      if (yourOwnService.classList.contains('yourOwnService--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.yourOwnService__inner')) {
        yourOwnService.classList.remove('yourOwnService--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const takeABreak = document.querySelector('.takeABreak')
  if (takeABreak) {
    const takeABreakBtn = takeABreak?.querySelectorAll('.btn')
    const takeABreakOpen = document.querySelectorAll('.takeABreak-open')

    takeABreakOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        takeABreak.classList.add('takeABreak--active')
        document.body.classList.add('no-scroll')
      })
    })

    takeABreakBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        takeABreak.classList.remove('takeABreak--active')
        document.body.classList.remove('no-scroll')
      })
    })

    takeABreak?.addEventListener('click', (e) => {
      if (takeABreak.classList.contains('takeABreak--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.takeABreak__inner')) {
        takeABreak.classList.remove('takeABreak--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const changePassword = document.querySelectorAll('.changePassword')
  if (changePassword) {
    changePassword.forEach((element) => {
      const changePasswordBtn = element?.querySelectorAll('.btn')
      const changePasswordOpen = document.querySelectorAll('.changePassword-open')
      const changePasswordLabelIcon = element.querySelectorAll('.changePassword__label-icon')
      changePasswordLabelIcon?.forEach((elem) => {
        elem.addEventListener('click', function () {
          const changePasswordInputEl = elem?.previousElementSibling
          if (changePasswordInputEl.type === 'password') {
            changePasswordInputEl.type = 'text'
          } else {
            changePasswordInputEl.type = 'password'
          }
        })
      })

      changePasswordOpen?.forEach((elem) => {
        elem.addEventListener('click', () => {
          element.classList.add('changePassword--active')
          document.body.classList.add('no-scroll')
        })
      })

      changePasswordBtn?.forEach((btn) => {
        btn?.addEventListener('click', (e) => {
          e.preventDefault()
          element.classList.remove('changePassword--active')
          document.body.classList.remove('no-scroll')
        })
      })

      element?.addEventListener('click', (e) => {
        if (element.classList.contains('changePassword--active')) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }

        if (!e.target.closest('.changePassword__inner')) {
          element.classList.remove('changePassword--active')
          document.body.classList.remove('no-scroll')
        }
      })
    })
  }

  const removingOrDisabling = document.querySelector('.removingOrDisabling')
  if (removingOrDisabling) {
    const removingOrDisablingBtn = removingOrDisabling?.querySelectorAll('.btn')
    const removingOrDisablingOpen = document.querySelectorAll('.removingOrDisabling-open')

    removingOrDisablingOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        removingOrDisabling.classList.add('removingOrDisabling--active')
        document.body.classList.add('no-scroll')
      })
    })

    removingOrDisablingBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        removingOrDisabling.classList.remove('removingOrDisabling--active')
        document.body.classList.remove('no-scroll')
      })
    })

    removingOrDisabling?.addEventListener('click', (e) => {
      if (removingOrDisabling.classList.contains('removingOrDisabling--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.removingOrDisabling__inner')) {
        removingOrDisabling.classList.remove('removingOrDisabling--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const phone = document.querySelector('.phone')
  if (phone) {
    const phoneBtn = phone?.querySelectorAll('.btn')
    const phoneOpen = document.querySelectorAll('.phone-open')

    phoneOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        phone.classList.add('phone--active')
        document.body.classList.add('no-scroll')
      })
    })

    phoneBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        phone.classList.remove('phone--active')
        document.body.classList.remove('no-scroll')
      })
    })

    phone?.addEventListener('click', (e) => {
      if (phone.classList.contains('phone--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.phone__inner')) {
        phone.classList.remove('phone--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const telegramAndWhatsApp = document.querySelector('.telegramAndWhatsApp')
  if (telegramAndWhatsApp) {
    const telegramAndWhatsAppBtn = telegramAndWhatsApp?.querySelectorAll('.btn')
    const telegramAndWhatsAppOpen = document.querySelectorAll('.telegramAndWhatsApp-open')

    telegramAndWhatsAppOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        telegramAndWhatsApp.classList.add('telegramAndWhatsApp--active')
        document.body.classList.add('no-scroll')
      })
    })

    telegramAndWhatsAppBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        telegramAndWhatsApp.classList.remove('telegramAndWhatsApp--active')
        document.body.classList.remove('no-scroll')
      })
    })

    telegramAndWhatsApp?.addEventListener('click', (e) => {
      if (telegramAndWhatsApp.classList.contains('telegramAndWhatsApp--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.telegramAndWhatsApp__inner')) {
        telegramAndWhatsApp.classList.remove('telegramAndWhatsApp--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const dateOfBirth = document.querySelector('.dateOfBirth')
  if (dateOfBirth) {
    const dateOfBirthBtn = dateOfBirth?.querySelectorAll('.btn')
    const dateOfBirthOpen = document.querySelectorAll('.dateOfBirth-open')

    dateOfBirthOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        dateOfBirth.classList.add('dateOfBirth--active')
        document.body.classList.add('no-scroll')
      })
    })

    dateOfBirthBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        dateOfBirth.classList.remove('dateOfBirth--active')
        document.body.classList.remove('no-scroll')
      })
    })

    dateOfBirth?.addEventListener('click', (e) => {
      if (dateOfBirth.classList.contains('dateOfBirth--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.dateOfBirth__inner')) {
        dateOfBirth.classList.remove('dateOfBirth--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const cooperation = document.querySelector('.cooperation')
  if (cooperation) {
    const cooperationBtn = cooperation?.querySelectorAll('.btn')
    const cooperationOpen = document.querySelectorAll('.cooperation-open')

    cooperationOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        cooperation.classList.add('cooperation--active')
        document.body.classList.add('no-scroll')
      })
    })

    cooperationBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        cooperation.classList.remove('cooperation--active')
        document.body.classList.remove('no-scroll')
      })
    })

    cooperation?.addEventListener('click', (e) => {
      if (cooperation.classList.contains('cooperation--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.cooperation__inner')) {
        cooperation.classList.remove('cooperation--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const category = document.querySelector('.category')
  if (category) {
    const categoryBtn = category?.querySelectorAll('.btn')
    const categoryOpen = document.querySelectorAll('.category-open')
    const categoryCreateIcon = category?.querySelectorAll('.category__create-icon')

    categoryCreateIcon.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        e.stopPropagation()
        icon.parentNode.remove()
      })
    })

    categoryOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        category.classList.add('category--active')
        document.body.classList.add('no-scroll')
      })
    })

    categoryBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        category.classList.remove('category--active')
        // document.body.classList.remove('no-scroll')
      })
    })

    category?.addEventListener('click', (e) => {
      if (category.classList.contains('category--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.category__inner')) {
        category.classList.remove('category--active')
        document.body.classList.remove('no-scroll')
      }

      const lungeInput = category?.querySelector('.lunge__input')
      if (e.target.classList.contains('category__create-text')) {
        lungeInput.value = e.target.textContent.trim()
      }
    })
  }

  const servicesModal = document.querySelector('.servicesModal')
  if (servicesModal) {
    const servicesModalBtn = servicesModal?.querySelectorAll('.btn')
    const servicesModalOpen = document.querySelectorAll('.servicesModal-open')

    servicesModalOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        servicesModal.classList.add('servicesModal--active')
        document.body.classList.add('no-scroll')
      })
    })

    servicesModalBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        servicesModal.classList.remove('servicesModal--active')
      })
    })

    servicesModal?.addEventListener('click', (e) => {
      if (servicesModal.classList.contains('servicesModal--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.servicesModal__inner')) {
        servicesModal.classList.remove('servicesModal--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const responseConfirmation = document.querySelector('.responseConfirmation')
  if (responseConfirmation) {
    const responseConfirmationBtn = responseConfirmation?.querySelectorAll('.btn')
    const responseConfirmationOpen = document.querySelectorAll('.responseConfirmation-open')

    responseConfirmationOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        responseConfirmation.classList.add('responseConfirmation--active')
        document.body.classList.add('no-scroll')
      })
    })

    responseConfirmationBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        responseConfirmation.classList.remove('responseConfirmation--active')
      })
    })

    responseConfirmation?.addEventListener('click', (e) => {
      if (responseConfirmation.classList.contains('responseConfirmation--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.responseConfirmation__inner')) {
        responseConfirmation.classList.remove('responseConfirmation--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const reasonForComplaint = document.querySelector('.reasonForComplaint')
  if (reasonForComplaint) {
    const reasonForComplaintBtn = reasonForComplaint?.querySelectorAll('.btn')
    const reasonForComplaintClose = reasonForComplaint?.querySelector('.reasonForComplaint__close')
    const reasonForComplaintOpen = document.querySelectorAll('.reasonForComplaint-open')

    const labelOther = reasonForComplaint.querySelectorAll('.label--other')

    reasonForComplaint.addEventListener('click', (e) => {
      labelOther?.forEach((label) => {
        const content = label.nextElementSibling

        if (label.firstElementChild.checked) {
          content.style.maxHeight = content.scrollHeight + 'px'
        } else {
          content.style.maxHeight = '0'
        }
      })
    })

    reasonForComplaintClose?.addEventListener('click', () => {
      reasonForComplaint.classList.remove('reasonForComplaint--active')
      document.body.classList.remove('no-scroll')
    })

    reasonForComplaintOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        reasonForComplaint.classList.add('reasonForComplaint--active')
        document.body.classList.add('no-scroll')
      })
    })

    reasonForComplaintBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        reasonForComplaint.classList.remove('reasonForComplaint--active')
      })
    })

    reasonForComplaint?.addEventListener('click', (e) => {
      if (reasonForComplaint.classList.contains('reasonForComplaint--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.reasonForComplaint__inner')) {
        reasonForComplaint.classList.remove('reasonForComplaint--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const modalInfo = document.querySelector('.modalInfo')
  if (modalInfo) {
    const modalInfoClose = modalInfo?.querySelector('.modalInfo__close')
    const modalInfoOpen = document.querySelectorAll('.modalInfo-open')

    modalInfoClose?.addEventListener('click', () => {
      modalInfo.classList.remove('modalInfo--active')
      document.body.classList.remove('no-scroll')
    })

    modalInfoOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        modalInfo.classList.add('modalInfo--active')
        document.body.classList.add('no-scroll')
      })
    })

    modalInfo?.addEventListener('click', (e) => {
      if (modalInfo.classList.contains('modalInfo--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.modalInfo__inner')) {
        modalInfo.classList.remove('modalInfo--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

  const socialMedia = document.querySelector('.socialMedia')
  if (socialMedia) {
    const blocksWithAdded = document.querySelectorAll('.socialMedia__clone')
    blocksWithAdded?.forEach((element) => addedBlock(element))

    function addedBlock(element) {
      const newDivHtml = `
      <div class="socialMedia__clone-box">
            <label class="socialMedia__clone-label">
              <span class="socialMedia__clone-span">http://</span>
              <input class="socialMedia__clone-input input" type="text" placeholder="Введите адрес">
            </label>
            <i class="socialMedia__clone-icon socialMedia__clone-icon--alt socialMedia__clone-icon--remove">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M2.5 4.9974H4.16667M4.16667 4.9974H17.5M4.16667 4.9974V16.6641C4.16667 17.1061 4.34226 17.53 4.65482 17.8426C4.96738 18.1551 5.39131 18.3307 5.83333 18.3307H14.1667C14.6087 18.3307 15.0326 18.1551 15.3452 17.8426C15.6577 17.53 15.8333 17.1061 15.8333 16.6641V4.9974H4.16667ZM6.66667 4.9974V3.33073C6.66667 2.8887 6.84226 2.46478 7.15482 2.15222C7.46738 1.83966 7.89131 1.66406 8.33333 1.66406H11.6667C12.1087 1.66406 12.5326 1.83966 12.8452 2.15222C13.1577 2.46478 13.3333 2.8887 13.3333 3.33073V4.9974M8.33333 9.16406V14.1641M11.6667 9.16406V14.1641"
                  stroke="#344054" stroke-width="1.67" stroke-linecap="round" />
              </svg>
            </i>
          </div>`
      const listElement = element.querySelectorAll('.socialMedia__clone-box')
      const addedBtn = element.querySelector('.link--create')
      let length = listElement.length

      listElement.forEach((item) => {
        addedBtn.addEventListener('click', () => {
          addedBtn.insertAdjacentHTML('beforeBegin', newDivHtml)

          const newBlock = addedBtn.previousElementSibling // Получить новый добавленный блок
          const removeEl = newBlock.querySelector('.socialMedia__clone-icon--remove') // Получить ссылку на кнопку удаления в новом блоке

          removeEl.addEventListener('click', (e) => {
            const parentElement = removeEl.previousElementSibling
            parentElement.parentNode.remove()
          })
        })

        const removeEl = item.querySelector('.socialMedia__clone-icon--remove')
        removeEl.addEventListener('click', (e) => {
          const parentElement = removeEl.previousElementSibling
          parentElement.parentNode.remove()
        })
      })
    }

    const socialMediaBtn = socialMedia?.querySelectorAll('.btn')
    const socialMediaOpen = document.querySelectorAll('.socialMedia-open')
    const addedBtn = socialMedia.querySelector('.link--create')

    socialMedia.addEventListener('click', (e) => {
      const socialMediaCloneBox = socialMedia.querySelectorAll('.socialMedia__clone-box')
      if (socialMediaCloneBox.length > 4) {
        addedBtn.classList.add('link--disabled')
      }
      if (socialMediaCloneBox.length < 5) {
        addedBtn.classList.remove('link--disabled')
      }
    })

    socialMediaOpen?.forEach((elem) => {
      elem.addEventListener('click', () => {
        socialMedia.classList.add('socialMedia--active')
        document.body.classList.add('no-scroll')
      })
    })

    socialMediaBtn?.forEach((btn) => {
      btn?.addEventListener('click', (e) => {
        e.preventDefault()
        socialMedia.classList.remove('socialMedia--active')
        document.body.classList.remove('no-scroll')
      })
    })

    socialMedia?.addEventListener('click', (e) => {
      if (socialMedia.classList.contains('socialMedia--active')) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (!e.target.closest('.socialMedia__inner') && !e.target.closest('.socialMedia__clone-box')) {
        socialMedia.classList.remove('socialMedia--active')
        document.body.classList.remove('no-scroll')
      }
    })
  }

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

  backButton.forEach((button) => {
    button.addEventListener('click', () => {
      const activeTab = button.closest('.tab__info--active')
      const previousTab = activeTab.previousElementSibling

      if (previousTab) {
        activeTab.classList.remove('tab__info--active')
        activeTab.classList.remove('tab__info--opacity')
        previousTab.classList.add('tab__info--active')

        setTimeout(() => {
          previousTab.classList.add('tab__info--opacity')
        }, 380)
      }
    })
  })

  continueButton.forEach((button) => {
    button.addEventListener('click', () => {
      const activeTab = button.closest('.tab__info--active')
      const nextTab = activeTab.nextElementSibling

      if (nextTab) {
        activeTab.classList.remove('tab__info--active')
        activeTab.classList.remove('tab__info--opacity')
        nextTab.classList.add('tab__info--active')

        setTimeout(() => {
          nextTab.classList.add('tab__info--opacity')
        }, 380)
      }
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

  if (document.querySelector('.news__swiper')) {
    const newsSwiper = new Swiper('.news__swiper', {
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
        nextEl: `.news__arrow-next`,
        prevEl: `.news__arrow-prev`,
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        540: {
          slidesPerView: 1,
        },
        360: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1.1,
        },
      },
    })
  }

  if (document.querySelector('.similar__swiper--alt')) {
    const newsSwiper = new Swiper('.similar__swiper--alt', {
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
        nextEl: `.similar__arrow-next`,
        prevEl: `.similar__arrow-prev`,
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 1.72,
        },
        540: {
          slidesPerView: 1.2,
        },
        360: {
          slidesPerView: 1.1,
        },
        320: {
          slidesPerView: 1.1,
        },
      },
    })
  }

  const allSwipers = []
  const stockSwiper = document.querySelectorAll('.stock__swiper')
  stockSwiper.forEach((swiper, index) => {
    allSwipers.push(setStockSwiper(index + 1))
  })
  function setStockSwiper(index) {
    return new Swiper(`.stock__swiper--${index}`, {
      slidesPerView: 4,
      spaceBetween: 24,
      navigation: {
        nextEl: `.stock__arrow-prev--${index}`,
        prevEl: `.stock__arrow-next--${index}`,
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2.3,
        },
        541: {
          slidesPerView: 2.3,
        },
        361: {
          slidesPerView: 1.6,
        },
        320: {
          slidesPerView: 1.1,
        },
      },
    })
  }

  if (document.querySelector('.reviews__swiper')) {
    const newsSwiper = new Swiper('.reviews__swiper', {
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
        nextEl: `.reviews__arrow-next`,
        prevEl: `.reviews__arrow-prev`,
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 1.9,
        },
        541: {
          slidesPerView: 1.74,
        },
        361: {
          slidesPerView: 1.2,
        },
        320: {
          slidesPerView: 1.1,
        },
      },
    })
  }

  if (document.querySelector('.recommendations__swiper')) {
    const newsSwiper = new Swiper('.recommendations__swiper', {
      slidesPerView: 3,
      spaceBetween: 24,
      breakpoints: {
        993: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 1.74,
        },
        541: {
          slidesPerView: 1.73,
        },
        361: {
          slidesPerView: 1.2,
        },
        320: {
          slidesPerView: 1.1,
        },
      },
    })
  }

  const donateAllSwiper = []
  const donateSwiper = document.querySelectorAll('.donate__swiper')
  donateSwiper?.forEach((swiper, index) => {
    donateAllSwiper.push(setDonateSwiper(index + 1))
  })
  function setDonateSwiper(index) {
    return new Swiper(`.donate__swiper--${index}`, {
      slidesPerView: 3.5,
      spaceBetween: 12,
      breakpoints: {
        993: {
          slidesPerView: 3.5,
        },
        769: {
          slidesPerView: 3.5,
        },
        541: {
          slidesPerView: 3.5,
        },
        360: {
          slidesPerView: 2.5,
        },
        320: {
          slidesPerView: 2.2,
        },
      },
    })
  }

  const conductorAllSwiper = []
  const conductorSwiper = document.querySelectorAll('.client__swiper')
  conductorSwiper?.forEach((swiper, index) => {
    conductorAllSwiper.push(setSwiper(index + 1))
  })
  function setSwiper(index) {
    return new Swiper(`.client__swiper--${index}`, {
      slidesPerView: 5,
      spaceBetween: 8,
      breakpoints: {
        993: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 5,
        },
        541: {
          slidesPerView: 4.4,
        },
        412: {
          slidesPerView: 3.2,
        },
        390: {
          slidesPerView: 2.9,
        },
        360: {
          slidesPerView: 2.5,
        },
        320: {
          slidesPerView: 2.1,
        },
      },
    })
  }

  if (document.querySelector('.client__item-swiper')) {
    const conductorItemSwiper = new Swiper('.client__item-swiper', {
      slidesPerView: 5,
      spaceBetween: 8,
      breakpoints: {
        993: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 4,
        },
        541: {
          slidesPerView: 3.4,
        },
        412: {
          slidesPerView: 2.2,
        },
        390: {
          slidesPerView: 2.9,
        },
        360: {
          slidesPerView: 2.5,
        },
        320: {
          slidesPerView: 2.1,
        },
      },
    })
  }

  if (document.querySelector('.conductor__swiper')) {
    const conductorSwiper = new Swiper('.conductor__swiper', {
      slidesPerView: 5,
      spaceBetween: 8,
      breakpoints: {
        993: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 5,
        },
        541: {
          slidesPerView: 4.4,
        },
        412: {
          slidesPerView: 3.2,
        },
        390: {
          slidesPerView: 2.9,
        },
        360: {
          slidesPerView: 2.5,
        },
        320: {
          slidesPerView: 2.1,
        },
      },
    })
  }

  if (document.querySelector('.client__swiper')) {
    const conductorSwiper = new Swiper('.client__swiper', {
      slidesPerView: 5,
      spaceBetween: 8,
      breakpoints: {
        993: {
          slidesPerView: 5.6,
        },
        768: {
          slidesPerView: 5,
        },
        541: {
          slidesPerView: 4.4,
        },
        412: {
          slidesPerView: 3.2,
        },
        390: {
          slidesPerView: 2.9,
        },
        360: {
          slidesPerView: 2.5,
        },
        320: {
          slidesPerView: 2.1,
        },
      },
    })
  }

  if (document.querySelector('.placingAnOrder__swiper')) {
    const newsSwiper = new Swiper('.placingAnOrder__swiper', {
      slidesPerView: 3.5,
      spaceBetween: 12,
      breakpoints: {
        993: {
          slidesPerView: 3.5,
        },
        769: {
          slidesPerView: 3.5,
        },
        541: {
          slidesPerView: 3.5,
        },
        360: {
          slidesPerView: 2.5,
        },
        320: {
          slidesPerView: 2.2,
        },
      },
    })
  }

  if (innerWidth <= 992) {
    if (document.querySelector('.how__target')) {
      const infoElemBlockSwiper = new Swiper('.how__target', {
        slidesPerView: 'auto',
        centeredSlidesBounds: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        on: {
          click: function (e) {
            infoElemBlockSwiper.slideTo(e.clickedIndex)
          },
        },
      })
    }

    if (document.querySelector('.content__swiper')) {
      const contentSwiper = new Swiper('.content__swiper', {
        slidesPerView: 1.4,
        spaceBetween: 8,
        breakpoints: {
          767: {
            slidesPerView: 1.4,
          },
          541: {
            slidesPerView: 1.1,
          },
          320: {
            slidesPerView: 1.01,
          },
        },
      })
    }
  }

  if (innerWidth <= 1366) {
    if (document.querySelector('.links')) {
      const infoElemBlockSwiper = new Swiper('.links', {
        slidesPerView: 'auto',
        centeredSlidesBounds: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        spaceBetween: 16,
        on: {
          click: function (e) {
            infoElemBlockSwiper.slideTo(e.clickedIndex)
          },
        },
      })
    }
  }

  var swiper = new Swiper('.details__swiperSmall', {
    direction: 'vertical',
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 8,
    freeMode: true,
    watchSlidesProgress: true,
  })
  var swiper2 = new Swiper('.details__bigSwiper', {
    effect: 'fade',
    pagination: {
      el: '.details__bigSwiper-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: swiper,
    },
  })

  pinContainer.forEach((code) => {
    code?.addEventListener('input', function (event) {
      const target = event.target
      const maxLength = parseInt(target.getAttribute('maxlength'))
      const myLength = target.value.length

      if (myLength >= maxLength) {
        const next = target.nextElementSibling
        while (next) {
          if (next.tagName.toLowerCase() === 'input') {
            next.focus()
            break
          }
          next = next.nextElementSibling
        }
      }

      if (myLength === 0) {
        const previous = target.previousElementSibling
        while (previous) {
          if (previous.tagName.toLowerCase() === 'input') {
            previous.focus()
            break
          }
          previous = previous.previousElementSibling
        }
      }

      if (target.value.length !== '') {
        target.classList.add('green')
      }
    })

    code?.addEventListener('keydown', function (event) {
      const target = event.target
      target.value = ''
      target.classList.remove('green')
    })
  })

  if (document.querySelector('[name="phone"]')) {
    const element = document.querySelector('[name="phone"]')
    const maskOptions = {
      mask: '+{7} 000 000 00 00',
    }
    const mask = IMask(element, maskOptions)
  }

  var points = [['<div class="map-baloon"><p>Москва, улица Строителей</p></div>', '55.692582', '37.533565']]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [55.692582, 37.533565],
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
