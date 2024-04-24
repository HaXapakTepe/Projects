$(document).ready(function () {
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const menuItems = document.querySelectorAll('.menu__item')
	const up = document.querySelector('.up')
	const marqueeInner = document.querySelectorAll('.marquee__inner')
	const whySlide = document.querySelectorAll('.why__item')
	const howBoxItem = document.querySelectorAll('.how__box-item')
	const language = document.querySelectorAll('.language__item')

	const toggleMenu = () => {
		menu.classList.toggle('menu--active')
		burger.classList.toggle('burger--active')
		body.classList.toggle('no-scroll')
	}

	function clickOutsideMenu(event) {
		if (!cookie.contains(event.target)) {
			if (!menu.contains(event.target) && !burger.contains(event.target)) {
				menu.classList.remove('menu--active')
				burger.classList.remove('burger--active')
				body.classList.remove('no-scroll')
			}
		}
	}

	menuItems?.forEach((item, index) => {
		item.addEventListener('click', () => {
			menu.classList.remove('menu--active')
			body.classList.remove('no-scroll')
		})
	})

	language?.forEach(item => {
		item.addEventListener('click', function () {
			language.forEach(item => {
				item.classList.remove('language__item--active')
			})
			this.classList.add('language__item--active')
		})
	})

	if (innerWidth > 992) {
		function delay() {
			menuItems.forEach((item, index) => {
				const delay = (index + 1) * 0.1
				item.style.animationDelay = `${delay}s`
			})
		}
		delay()

		function reverseDelay() {
			menuItems.forEach((item, index) => {
				const reverseDelay = (menuItems.length - index) * 0.1
				item.style.animationDelay = `${reverseDelay}s`
			})
		}
	}

	burger?.addEventListener('click', () => {
		toggleMenu()
		if (innerWidth > 992) {
			delay()
			if (!burger.classList.contains('burger--active')) {
				reverseDelay()
			}
		}
	})

	document.addEventListener('click', clickOutsideMenu)

	up?.addEventListener('click', scrollToTop)
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	if (marqueeInner) {
		marqueeInner.forEach(element => {
			const images = element.querySelectorAll('.marquee__img')
			const imageWidth =
				images[0].offsetWidth +
				parseInt(getComputedStyle(images[0]).marginRight)

			element.style.width = imageWidth * images.length + 'px'

			const cloneFirstElement = images[0].cloneNode(true)
			element.appendChild(cloneFirstElement)

			function animateMarquee() {
				element.style.transform = 'translateX(0)'

				const animationDuration = (imageWidth * images.length) / 100
				element.style.animationDuration = animationDuration + 's'
				element.style.animationIterationCount = 'infinite'
			}

			animateMarquee()
		})
	}

	const cookie = document.querySelector('.cookie')

	document.addEventListener('click', clickOutsideMenu)

	if (cookie) {
		cookie.addEventListener('click', event => {
			event.stopPropagation()
		})

		cookie.classList.add('cookie--active')
		const cookieBtn = cookie.querySelector('.btn')

		cookieBtn?.addEventListener('click', e => {
			e.preventDefault()
			cookie.classList.remove('cookie--active')
		})

		cookie.addEventListener('click', e => {
			if (!e.target.closest('.cookie__wrapper')) {
				cookie.classList.remove('cookie--active')
			}
		})
	}

	Fancybox.bind('[data-fancybox]')

	setTimeout(function () {
		$(document).scrollTop(0)
	}, 0)
	wow = new WOW({
		animateClass: 'animate__animated',
		offset: 200,
	})
	wow.init()

	howBoxItem?.forEach((element, index) => {
		if (index % 2 === 0) {
			element.classList.add('how__box-item--right')
		} else {
			element.classList.add('how__box-item--left')
		}
	})

	$(this)
		.find('.how__box-item--left')
		.addClass('wow animate__animated animate__fadeInRight animate__fadeIn')
		.css({
			animationDelay: '.0s',
			animateDuration: '.1s',
		})

	$(this)
		.find('.how__box-item--right')
		.addClass('wow animate__animated animate__fadeInLeft animate__fadeIn')
		.css({
			animationDelay: '.0s',
			animateDuration: '.1s',
		})

	if (innerWidth < 577) {
		whySlide.forEach((element, index) => {
			if (index % 2 === 0) {
				element.classList.add('why__item--right')
			} else {
				element.classList.add('why__item--left')
			}
		})

		$(this)
			.find('.why__item--left')
			.addClass('wow animate__animated animate__fadeInRight animate__fadeIn')
			.css({
				animationDelay: '.0s',
				animateDuration: '.1s',
			})

		$(this)
			.find('.why__item--right')
			.addClass('wow animate__animated animate__fadeInLeft animate__fadeIn')
			.css({
				animationDelay: '.0s',
				animateDuration: '.1s',
			})
	}

	if (document.querySelector('[name="phone"]')) {
		const element = document.querySelector('[name="phone"]')
		const maskOptions = {
			mask: '+{7} (000) 000-00-00',
		}
		const mask = IMask(element, maskOptions)
	}

	if (document.querySelector('.who__swiper')) {
		const whoSwiper = new Swiper('.who__swiper', {
			slidesPerView: 4,
			spaceBetween: 30,
			initialSlide: 1,

			pagination: {
				el: '.who__pagination',
				clickable: true,
			},
			breakpoints: {
				993: {
					slidesPerView: 4,
					spaceBetween: 50,
				},
				769: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				577: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				480: {
					slidesPerView: 2.7,
					spaceBetween: 30,
					centeredSlides: true,
				},
				414: {
					slidesPerView: 2.2,
					spaceBetween: 30,
					centeredSlides: true,
				},
				376: {
					slidesPerView: 1.8,
					spaceBetween: 30,
					centeredSlides: true,
				},
				280: {
					slidesPerView: 1.9,
					spaceBetween: 30,
					centeredSlides: true,
				},
			},
		})
	}

	if (innerWidth > 576) {
		if (document.querySelector('.why__swiper')) {
			const whySwiper = new Swiper('.why__swiper', {
				slidesPerView: 3,
				spaceBetween: 25,
				navigation: {
					nextEl: `.why__arrow-next`,
					prevEl: `.why__arrow-prev`,
				},
				breakpoints: {
					993: {
						slidesPerView: 3,
						spaceBetween: 25,
					},
					769: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					577: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				},
			})
		}
	}

	var points = [
		[
			'<div class="map-baloon"><p>Москва, улица Строителей</p></div>',
			'55.692582',
			'37.533565',
		],
	]

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
