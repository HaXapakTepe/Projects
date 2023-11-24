document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const menuClose = menu?.querySelector('.menu__close');
  const menuListItem = menu?.querySelectorAll('.menu__list-item');
  const tabs = document.querySelectorAll('.tab__target');
  const pages = document.querySelectorAll('.tab__info');
  const boxes = document.querySelectorAll('.tab__box');
  const scrollArrow = document.querySelector('.scrollArrow');
  const infoSwiper = document.querySelectorAll('.info__elem-swiper');
  const casesArrowNextTop = document.querySelector('.cases__arrow-next--top');
  const cardArrowNextTop = document.querySelector('.card__arrow-next--top');
  const goto = document.querySelector('.goto');
  const allSwipers = [];

  Fancybox.bind('[data-fancybox]', {});

  goto.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/#offers-section';
  });

  tabs?.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('tab__target--active'));
      pages.forEach((page) => {
        page.classList.remove('tab__info--active');
        setTimeout(() => {
          page.classList.remove('tab__info--opacity');
        }, 380);
      });
      boxes.forEach((box) => {
        box.classList.remove('tab__box--active');
        setTimeout(() => {
          box.classList.remove('tab__box--opacity');
        }, 380);
      });
      tab.classList.add('tab__target--active');
      pages[idx].classList.add('tab__info--active');
      boxes[idx].classList.add('tab__box--active');
      setTimeout(() => {
        pages[idx].classList.add('tab__info--opacity');
        boxes[idx].classList.add('tab__box--opacity');
      }, 380);
    });
  });

  window?.addEventListener('scroll', function () {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 100) {
      scrollArrow.classList.add('scrollArrow--alt');
    } else {
      scrollArrow.classList.remove('scrollArrow--alt');
    }
  });

  scrollArrow?.addEventListener('click', function () {
    if (scrollArrow.classList.contains('scrollArrow--alt')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return false;
    } else {
      const footer = document.querySelector('.footer');
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  });

  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  casesArrowNextTop?.addEventListener('click', function () {
    toTop();
  });

  cardArrowNextTop?.addEventListener('click', function () {
    toTop();
  });

  burger?.addEventListener('click', () => {
    menu.classList.add('menu--active');
    body.classList.add('no-scroll');
  });

  menuClose?.addEventListener('click', () => {
    menu.classList.remove('menu--active');
    body.classList.remove('no-scroll');
  });

  menuListItem?.forEach((item) => {
    item?.addEventListener('click', () => {
      menu.classList.remove('menu--active');
      body.classList.remove('no-scroll');
    });

    item.addEventListener('mouseover', function () {
      menuListItem.forEach((item) => {
        item.classList.remove('menu__list-item--active');
      });
      this.classList.add('menu__list-item--active');
    });
  });

  if (document.querySelector('[name="phone"]')) {
    const phone = document.querySelectorAll('[name="phone"]');
    phone.forEach((element) => {
      const maskOptions = {
        mask: '+{7} (000) 000 00 00',
      };
      const mask = IMask(element, maskOptions);
      element.addEventListener('click', (e) => {
        element.value = '+7 ';
      });
    });
  }

  const casesSwiper = new Swiper('.details__swiper', {
    navigation: {
      nextEl: `.details__arrow-next`,
      prevEl: `.details__arrow-prev`,
    },
    pagination: {
      el: `.details__pagination`,
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
        spaceBetween: 26,
      },
      769: {
        slidesPerView: 2.1,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      481: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      280: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
    },
  });

  if (document.querySelector('.card__swiper')) {
    const aboutSwiper = new Swiper('.card__swiper', {
      autoHeight: true,
      pagination: {
        el: '.card__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      navigation: {
        nextEl: `.card__arrow-next`,
        prevEl: `.card__arrow-prev`,
      },
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }

  if (document.querySelector('.about__swiper')) {
    const aboutSwiper = new Swiper('.about__swiper', {
      navigation: {
        nextEl: `.about__arrow-next`,
        prevEl: `.about__arrow-prev`,
      },
      pagination: {
        el: `.about__swiper-pagination`,
      },
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }

  infoSwiper?.forEach((swiper, index) => {
    allSwipers.push(setSwiper(index + 1));
  });

  function setSwiper(index) {
    return new Swiper(`.info__elem-swiper--${index}`, {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: `.info__elem-pagination--${index}`,
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        769: {
          slidesPerView: 2.1,
          spaceBetween: 15,
        },
        577: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        481: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        280: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
      },
    });
  }

  if (innerWidth < 769) {
    if (document.querySelector('.info__elem-block')) {
      const infoElemBlockSwiper = new Swiper('.info__elem-block', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        centeredSlidesBounds: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        on: {
          click: function (e) {
            console.log(e);
            infoElemBlockSwiper.slideTo(e.clickedIndex);
          },
        },
        breakpoints: {
          280: {
            spaceBetween: 12,
          },
        },
      });
    }
  }

  if (document.querySelector('.cases__swiper')) {
    const casesSwiper = new Swiper('.cases__swiper--index', {
      navigation: {
        nextEl: `.cases__arrow-next`,
        prevEl: `.cases__arrow-prev`,
      },
      pagination: {
        el: `.cases__pagination`,
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
          spaceBetween: 26,
        },
        769: {
          slidesPerView: 2.1,
          spaceBetween: 15,
        },
        577: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        481: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        280: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
      },
    });

    const casesSwiperAlt = new Swiper('.cases__swiper--alt', {
      slidesPerView: 1,
      spaceBetween: 26,
      autoHeight: true,
      navigation: {
        nextEl: `.cases__arrow-next`,
        prevEl: `.cases__arrow-prev`,
      },
      pagination: {
        el: `.cases__pagination`,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      breakpoints: {
        993: {
          spaceBetween: 26,
        },
        280: {
          spaceBetween: 10,
        },
      },
    });
  }

  if (innerWidth < 993) {
    if (document.querySelector('.log__swiper')) {
      const casesSwiper = new Swiper('.log__swiper', {
        pagination: {
          el: `.log__pagination`,
        },
        breakpoints: {
          993: {
            slidesPerView: 3,
            spaceBetween: -10,
          },
          769: {
            slidesPerView: 2.1,
            spaceBetween: -10,
          },
          577: {
            slidesPerView: 1.1,
            spaceBetween: -10,
          },
          481: {
            slidesPerView: 1.1,
            spaceBetween: -10,
          },
          280: {
            slidesPerView: 1.1,
            spaceBetween: -10,
          },
        },
      });
    }
  }

  var points = [
    [
      '<div class="map-baloon"<p>Московская область, Балашиха, парк Пехорка</p></div>',
      '55.801289',
      '37.945873',
    ],
  ];

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection();

      myMap = new ymaps.Map('mapYandex', {
        center: [55.801289, 37.945873],
        zoom: 14,
        controls: ['zoomControl', 'geolocationControl', 'trafficControl'],
      });

      if (window.innerWidth < 1024) {
        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');
      }

      for (i = 0; i < points.length; i++) {
        var myPlacemark = new ymaps.Placemark(
          [points[i][1], points[i][2]],
          {
            balloonContent: points[i][0],
          },
          {
            iconLayout: 'default#image',
            balloonLayout: 'default#imageWithContent',
          }
        );
        myCollection.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark);

        myMap.events.add('click', function (e) {
          myMap.balloon.close();
        });
      }

      myMap.geoObjects.add(myCollection);

      myPlacemark.events.add('click', function (event) {
        event.preventDefault();
      });
    });
  }
});
