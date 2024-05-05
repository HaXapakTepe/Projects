document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const menu = document.querySelector('.menu')
	const close = document.querySelector('.menu__close')
	const tabs = document.querySelectorAll('.tab__target')
	const pages = document.querySelectorAll('.tab__info')
	const up = document.querySelector('.up')
	const removeMobile = document.querySelector('.removeMobile')

	function deleteMobile(el) {
		el.remove()
	}

	if (innerWidth < 577) {
		deleteMobile(removeMobile)
	}

	const burger = document.querySelector('.burger')

	const toggleMenu = e => {
		e.stopPropagation()
		menu.classList.toggle('menu--active')
		burger.classList.toggle('burger--active')
		body.classList.toggle('no-scroll')
	}

	const addMenu = e => {
		e.stopPropagation()
		menu.classList.add('menu--active')
		burger.classList.add('burger--active')
		body.classList.add('no-scroll')
	}

	const removeMenu = e => {
		e.stopPropagation()
		menu.classList.remove('menu--active')
		burger.classList.remove('burger--active')
		body.classList.remove('no-scroll')
	}

	const clickOutsideMenu = event => {
		if (!menu.contains(event.target) && !burger.contains(event.target)) {
			menu.classList.remove('menu--active')
			burger.classList.remove('burger--active')
			body.classList.remove('no-scroll')
		}
	}

	burger.addEventListener('click', toggleMenu)
	menu.addEventListener('click', addMenu)
	close.addEventListener('click', removeMenu)
	document.addEventListener('click', clickOutsideMenu)

	window?.addEventListener('scroll', function () {
		const scrollTop =
			document.documentElement.scrollTop || document.body.scrollTop
		if (scrollTop > 100) {
			up.classList.remove('up--hidden')
		} else {
			up.classList.add('up--hidden')
		}
	})

	document.addEventListener('click', function (event) {
		const language = document.querySelector('.language')

		if (!language.contains(event.target)) {
			language.classList.remove('language--active')
		} else {
			language.classList.add('language--active')
		}
	})

	function handleTabClick(
		tabs,
		pages,
		activeTabClass,
		activePageClass,
		opacityPageClass
	) {
		tabs.forEach((tab, idx) => {
			tab.addEventListener('click', () => {
				tabs.forEach(tab => tab.classList.remove(activeTabClass))
				pages.forEach(page => {
					page.classList.remove(activePageClass)
					page.classList.remove(opacityPageClass)
				})

				tab.classList.add(activeTabClass)
				pages[idx].classList.add(activePageClass)

				setTimeout(() => {
					pages[idx].classList.add(opacityPageClass)
				}, 380)
			})
		})
	}

	handleTabClick(
		tabs,
		pages,
		'tab__target--active',
		'tab__info--active',
		'tab__info--opacity'
	)

	up?.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})

	if (document.querySelector('[name="phone"]')) {
		const element = document.querySelector('[name="phone"]')
		const maskOptions = {
			mask: '+{7} 000 000 00 00',
		}
		const mask = IMask(element, maskOptions)
	}

	Fancybox.bind('[data-fancybox]', {})

	var promoSwiper = new Swiper('.promo__swiper', {
		loop: true,
		pagination: {
			el: '.promo__swiper-pagination',
			// clickable: true,
		},
	})

	var tasksSwiper = new Swiper('.tasks__swiper', {
		slidesPerView: 2,
		initialSlide: 1,
		spaceBetween: 5,
		navigation: {
			nextEl: '.tasks__arrow-next',
			prevEl: '.tasks__arrow-prev',
		},
		breakpoints: {
			577: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			},
		},
	})

	var teamSwiper = new Swiper('.team__swiper', {
		spaceBetween: 5,
		loop: true,
		navigation: {
			nextEl: '.team__arrow-next',
			prevEl: '.team__arrow-prev',
		},
		pagination: {
			el: '.team__swiper-pagination',
			// clickable: true,
		},
	})
})
