const swiper = new Swiper('.sliderWork__box', {
  mousewheel: {
    sensitivity: 1,
    releaseOnEdges: true,
    eventsTarget: '.sliderWork__box'
  },
  breakpoints: {
    993: {
      slidesPerView: 4,
    },
    577: {
      slidesPerView: 3.7,
    },
    391: {
      slidesPerView: 2.5,
    },
    320: {
      slidesPerView: 1.5,
    },
  }
});


var targetMap = document.querySelectorAll('[data-target]'),
  map = document.querySelectorAll('.type__image');

targetMap.forEach(elem => {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    var target = this.getAttribute('data-target');
    map.forEach(elem => {
      elem.classList.remove('type__image--opacity', 'type__image--active');
    });
    targetMap.forEach(elem => {
      elem.classList.remove('type__text--active');
    });
    this.classList.add('type__text--active');
    var cat = document.querySelector('[data-info="' + target + '"]');
    cat.classList.add('type__image--active');
    setTimeout(() => {
      cat.classList.add('type__image--opacity');
    }, 400);
  });
});


const swiperThree = new Swiper('.object__box', {

  breakpoints: {
    993: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    577: {
      slidesPerView: 1.8,
      spaceBetween: 15,
    },
    391: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 1.1,
      spaceBetween: 15,
    },
  }
});

$("#phone").mask("+7 (999) 999-9999");

const menuLinks = document.querySelectorAll('.link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(link => {
    link.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const link = e.target;
    if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
      const gotoBlock = document.querySelector(link.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    };
  };
};