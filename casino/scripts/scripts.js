document.addEventListener('DOMContentLoaded', () => {
	const accordion = document.querySelectorAll('.accordion')
	const accordionAlt = document.querySelectorAll('.accordionAlt')
	const contentCard = document.querySelectorAll('.content__card')
	const btn = document.querySelectorAll('.content__btn')
	const clearButton = document.querySelector('.filter__selected-clear')
	const sortRating = document.querySelector('.sort-rating')
	const sortPremium = document.querySelector('.sort-premium')
	const sortNovelty = document.querySelector('.sort-novelty')
	const contentCards = document.querySelector('.content__cards')
	const card = document.querySelectorAll('.content__card')

	card.forEach((item, index) => {
		item.dataset.num = index + 1
	})

	sortRating?.addEventListener('click', () => {
		const cardsArray = Array.from(card)

		cardsArray.sort((a, b) => {
			const ratingA = parseFloat(
				a.querySelector('.content__rating-num').textContent
			)
			const ratingB = parseFloat(
				b.querySelector('.content__rating-num').textContent
			)

			return ratingB - ratingA
		})

		contentCards.innerHTML = ''

		cardsArray.forEach(card => {
			contentCards.appendChild(card)
		})
	})

	sortPremium?.addEventListener('click', () => {
		const cardsArray = Array.from(card)

		cardsArray.sort((a, b) => {
			const ratingA = parseInt(
				a.querySelector('.content__bonus-text').getAttribute('data-fs')
			)
			const ratingB = parseInt(
				b.querySelector('.content__bonus-text').getAttribute('data-fs')
			)

			return ratingB - ratingA
		})

		contentCards.innerHTML = ''

		cardsArray.forEach(card => {
			contentCards.appendChild(card)
		})
	})

	sortNovelty?.addEventListener('click', () => {
		const cardsArray = Array.from(card)

		cardsArray.sort((a, b) => {
			const ratingA = a.querySelector('.content__card')
			const ratingB = b.querySelector('.content__card')

			return ratingB - ratingA
		})

		contentCards.innerHTML = ''

		cardsArray.forEach(card => {
			contentCards.appendChild(card)
		})
	})

	document.addEventListener('click', function (e) {
		const isAccordionClicked = e.target.closest('.accordion')
		const isAccordionAltClicked = e.target.closest('.accordionAlt')
		if (!isAccordionClicked) {
			accordion.forEach(acc => {
				const content = acc.querySelector('.accordion__content')
				acc.classList.remove('accordion--active')
				content.style.maxHeight = '0'
			})
		}
		if (!isAccordionAltClicked) {
			accordionAlt.forEach(acc => {
				const content = acc.querySelector('.accordionAlt__content')
				acc.classList.remove('accordionAlt--active')
				content.style.maxHeight = '0'
			})
		}
	})

	accordion?.forEach(acc => {
		acc.addEventListener('click', function (e) {
			const content = this.querySelector('.accordion__content')
			if (!this.classList.contains('accordion--active')) {
				accordion.forEach(otherAcc => {
					if (otherAcc !== this) {
						const otherContent = otherAcc.querySelector('.accordion__content')
						otherAcc.classList.remove('accordion--active')
						otherContent.style.maxHeight = '0'
					}
				})
				this.classList.add('accordion--active')
				content.style.maxHeight = content.scrollHeight + 'px'
			} else {
				this.classList.remove('accordion--active')
				content.style.maxHeight = '0'
			}
		})
	})

	accordionAlt?.forEach(acc => {
		acc.addEventListener('click', function (e) {
			const content = this.querySelector('.accordionAlt__content')
			if (!e.target.closest('.accordionAlt__content')) {
				if (!this.classList.contains('accordionAlt--active')) {
					accordionAlt.forEach(otherAcc => {
						if (otherAcc !== this) {
							const otherContent = otherAcc.querySelector(
								'.accordionAlt__content'
							)
							otherAcc.classList.remove('accordionAlt--active')
							otherContent.style.maxHeight = '0'
						}
					})
					this.classList.add('accordionAlt--active')
					content.style.maxHeight = content.scrollHeight + 'px'
				} else {
					this.classList.remove('accordionAlt--active')
					content.style.maxHeight = '0'
				}
			}
		})
	})

	btn.forEach(item => {
		item.addEventListener('mouseenter', () => {
			item.parentNode.parentNode.classList.add('content__card--hover')
		})

		item.addEventListener('mouseleave', () => {
			item.parentNode.parentNode.classList.remove('content__card--hover')
		})
	})

	contentCard.forEach(card => {
		const hiddenPay = card.querySelectorAll('.content__hidden-pay')

		hiddenPay.forEach(item => {
			const hiddenLinks = item.querySelectorAll('.content__hidden-link')

			for (let i = 6; i < hiddenLinks.length; i++) {
				hiddenLinks[i].style.display = 'none'
			}

			const lastButton = card.querySelector('.content__hidden-link--last')
			const text = lastButton?.querySelector('.content__hidden-more')
			lastButton?.addEventListener('click', function () {
				for (let i = 6; i < hiddenLinks.length; i++) {
					if (hiddenLinks[i].style.display === 'none') {
						hiddenLinks[i].style.display = 'flex'
						text.textContent = 'Скрыть'
					} else {
						hiddenLinks[i].style.display = 'none'
						text.textContent = `+${hiddenLinks.length - 6}`
					}
				}

				accordionAlt.forEach(acc => {
					acc.addEventListener('click', function () {
						const content = this.querySelector('.accordionAlt__content')
						content.classList.add('accordionAlt--active')
						content.style.maxHeight = content.scrollHeight + 'px'
					})
				})
			})
		})
	})

	const cards = document.querySelectorAll('.content__card')
	const showMoreButton = document.querySelector('.showMore')
	let currentIndex = 0
	const cardsToShow = 5

	function showNextCards() {
		for (let i = currentIndex; i < currentIndex + cardsToShow; i++) {
			if (cards[i]) {
				cards[i].style.display = 'flex'
				cards[i]?.classList.add('content__card--visible')
			}
		}
		currentIndex += cardsToShow
		if (currentIndex >= cards.length) {
			showMoreButton.style.display = 'none'
			cards.forEach(card => {
				card.classList.remove('content__card--visible')
			})
		}
	}

	showNextCards()

	showMoreButton.addEventListener('click', function () {
		showNextCards()
	})

	clearButton.addEventListener('click', function () {
		const checkboxes = document.querySelectorAll(
			'.filter__sort-label.label--alt .label__input'
		)
		const filterSelectedItem = document.querySelectorAll(
			'.filter__selected-item'
		)
		checkboxes.forEach(function (checkbox) {
			checkbox.checked = false
		})
		filterSelectedItem.forEach(function (item) {
			item.remove()
		})
	})

	const sortLabels = document.querySelectorAll('.filter__sort-label.label--alt')

	function removeParentItem(e) {
		const isClickedIcon = e.target.classList.contains('filter__selected-icon')
		const isChildOfClickedIcon =
			e.target.closest('.filter__selected-icon') !== null

		if (isClickedIcon || isChildOfClickedIcon) {
			const parentItem = e.target.closest('.filter__selected-item')
			const text = parentItem
				.querySelector('.filter__selected-text')
				.textContent.trim()

			sortLabels.forEach(function (label) {
				const labelText = label.querySelector('.label__text').textContent.trim()
				const checkbox = label.querySelector('.label__input')
				if (text === labelText) {
					checkbox.checked = false
				}
			})

			if (parentItem) {
				parentItem.remove()
			}
		}
	}

	const selected = document.querySelector('.filter__selected')

	selected.addEventListener('click', removeParentItem)

	sortLabels.forEach(function (label) {
		label.addEventListener('click', function () {
			const labelText = label.querySelector('.label__text').textContent
			const clone = document.createElement('div')

			clone.innerHTML = `
        <div class="filter__selected-item">
          <p class="filter__selected-text">
            ${labelText}
          </p>
          <i class="filter__selected-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
                <path d="M5.17151 10.8281L10.8284 5.17127" stroke="black" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.8285 10.8287L5.17163 5.17188" stroke="black" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </i>
        </div>`

			const selectedItemClone = clone.firstElementChild

			selectedItemClone.addEventListener('click', function (event) {
				event.stopPropagation()
			})

			const filterSelected = document.querySelector('.filter__selected')

			const checkbox = label.querySelector('.label__input')
			if (!checkbox.checked) {
				checkbox.checked = true
				filterSelected.prepend(selectedItemClone)
			} else {
				checkbox.checked = false
				const labelText = label.querySelector('.label__text').textContent.trim()
				const selectedItem = document.querySelectorAll('.filter__selected-item')

				selectedItem.forEach(item => {
					const filterSelectedText = item
						.querySelector('.filter__selected-text')
						.textContent.trim()

					if (labelText === filterSelectedText) {
						item.remove()
					}
				})
			}

			selectedItemClone
				.querySelector('.filter__selected-icon')
				.addEventListener('click', removeParentItem)
		})
	})
})
