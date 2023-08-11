$(document).ready(function () {

  const headerInner = document.querySelector(".header__inner");
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu__link");
  const listItem = document.querySelectorAll(".list__item");
  const catalog = document.querySelector(".header__catalog");
  const modal = document.querySelector(".modal");
  const modalItem = document.querySelectorAll(".modal__item");
  const inputBox = document.querySelector(".header__search-box");
  const search = document.querySelector(".icon-search");
  const closeBox = document.querySelector(".icon-close");
  const boxes = document.querySelectorAll(".card__info-box");
  const cardDetails = document.querySelectorAll(".cardDetails__info-box");
  const cardInfoOpacity = document.querySelectorAll(".cardDetails__info-block--opacity");
  const hidden = document.querySelectorAll(".card__info-hidden");
  const item = document.querySelector(".list__item");
  const filter = document.querySelector(".filter");
  const filterItem = document.querySelectorAll(".filter__item");
  const iconFilter = document.querySelector(".icon-filter");
  const filterHidden = document.querySelector(".filter__hidden");
  const extraText = document.querySelectorAll(".extra__text");
  const listText = document.querySelectorAll(".list__text");


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


  for (var i = 0; i < cardInfoOpacity.length; i++) {
    cardInfoOpacity[i].addEventListener('click', function () {
      for (var i = 0; i < cardInfoOpacity.length; i++) {
        cardInfoOpacity[i].classList.remove('active');
      }
      this.classList.add('active');
    });
  }


  $(document).on('click', function (e) {
    if (!$(e.target).closest(".active").length) {
      $('.list__text').removeClass('active');
      $('.extra__text').removeClass('active');
    }
    e.stopPropagation();
  })


  listText.forEach((item) => {
    item.addEventListener("click", (e) => {
      iconFilter.classList.remove("active");
    });
  });


  for (var i = 0; i < listText.length; i++) {
    listText[i].addEventListener('click', function () {
      for (var i = 0; i < listText.length; i++) {
        listText[i].classList.remove('active');
      }
      this.classList.add('active');
    });
  }


  for (var i = 0; i < extraText.length; i++) {
    extraText[i].addEventListener('click', function () {
      for (var i = 0; i < extraText.length; i++) {
        extraText[i].classList.remove('active');
      }
      this.classList.add('active');
    });
  }


  if ($('.cardDetails__info--open').find('.cardDetails__info-box').length > 3) {
    $('.cardDetails__tab').click(function () {
      $('.cardDetails__info--open .cardDetails__info-box:nth-child(n+4)').slideToggle('');
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        $(this).html('Скрыть');
      } else {
        $(this).html('Показать еще');
      }
    });
  } else {
    $('.cardDetails__tab').hide();
  }


  for (var i = 0; i < cardDetails.length; i++) {
    cardDetails[i].addEventListener('click', function () {
      for (var i = 0; i < cardDetails.length; i++) {
        cardDetails[i].classList.remove('active');
      }
      this.classList.add('active');
    });
  }


  $(document).on('click', function (e) {
    if (!$(e.target).closest(".header__search").length) {
      $('.header__search-box').removeClass('active');
    }
    e.stopPropagation();
  });


  $(document).on('click', function (e) {
    if (!$(e.target).closest(".header__wrapper").length) {
      if (item) {
        $('.filter').removeClass('active');
        iconFilter.classList.remove('active');
      }
    };
    e.stopPropagation();
  });


  $(document).on('click', function (e) {
    if (!$(e.target).closest(".active").length) {
      $('.modal').removeClass('active');
      catalog.classList.remove("active");
      if (item) {
        iconFilter.classList.remove('active');
      }
    };
    e.stopPropagation();
  });


  $(document).on('click', function (e) {
    if (!$(e.target).closest(".active").length) {
      $('.menu').removeClass('active');
      burger.classList.remove("active");
      iconFilter && iconFilter.classList.remove('active');
    }
    e.stopPropagation();
  });


  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      filter.classList.remove("active");
    });
  });


  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      iconFilter.classList.remove('active');
      filter.classList.remove("active");
      modal.classList.remove("active");
      inputBox.classList.remove("active");
    });
  });


  modalItem.forEach((item) => {
    item.addEventListener("click", () => {
      catalog.classList.remove("active");
      modal.classList.toggle("active");
      iconFilter.classList.remove('active');
    });
  });


  for (let index = 0; index < filterItem.length; index++) {
    filterItem[index].addEventListener("click", function () {
      for (let i = 0; i < filterItem.length; i++) {
        filterItem[i].classList.remove("active");
      };
      this.classList.add("active");
    });
  };


  if (item) {
    item.addEventListener("click", () => {
      filter.classList.add("active");
    });
  };


  if (item) {
    filterHidden.addEventListener("click", () => {
      iconFilter.classList.remove("active");
      filter.classList.remove("active");
    });
  };


  if (iconFilter) {
    headerInner.addEventListener("click", () => {
      iconFilter.classList.remove("active");
      filter.classList.remove("active");
    });
  }


  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    iconFilter.classList.remove('active');
    filter.classList.remove("active");
    modal.classList.remove("active");
    inputBox.classList.remove("active");
  });


  if (catalog) {
    catalog.addEventListener("click", () => {
      catalog.classList.toggle("active");
      modal.classList.toggle("active");
      filter && filter.classList.remove("active");
      iconFilter && iconFilter.classList.remove('active');
    });
  }


  if (search) {
    search.addEventListener("click", () => {
      inputBox.classList.toggle("active");
      filter && filter.classList.remove("active");
      iconFilter && iconFilter.classList.remove('active');
    });
  }


  closeBox.addEventListener("click", () => {
    inputBox.classList.remove("active");
  });


  if (item) {
    iconFilter.addEventListener("click", () => {
      iconFilter.classList.toggle("active");
      filter.classList.remove("active")
      listText.classList.remove("active");
    });
  };


  hidden.forEach(element => {
    element.addEventListener("click", (e) => {
      let children = e.currentTarget.children;
      [...children].forEach(c => {
        c.classList.remove("active")
      });
      if (e.target.tagName === "DIV") {
        e.target.classList.add("active")
      } else if (e.target.tagName === "SPAN") {
        e.target.parentNode.classList.add("active")
      }
    });
  });


  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  boxes.forEach(d => {
    d.addEventListener("click", handleClick);
  });


  const ratings = document.querySelectorAll(".rating");

  if (ratings.length > 0) {
    initRatings();
  };

  function initRatings() {
    let ratingActive, ratingValue;

    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    };

    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains("rating")) {
        setRating(rating);
      }
    };

    function initRatingVars(rating) {
      ratingActive = rating.querySelector(".rating__active");
      ratingValue = rating.querySelector(".rating__value");
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll(".rating__item");

      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];

        ratingItem.addEventListener("mouseenter", function (e) {
          initRatingVars(rating);
          setRatingActiveWidth(ratingItem.value);
        });

        ratingItem.addEventListener("mouseleave", function (e) {
          setRatingActiveWidth();
        });

        ratingItem.addEventListener("click", function (e) {
          initRatingVars(rating);

          if (rating.dataset.ajax) {
            setRatingValue(ratingItem.value.rating);
          } else {
            ratingValue.innerHTML = index + 1;
            setRatingActiveWidth();
          };
        });
      };
    };
  };


  var stepsSlider = document.getElementById('slider');
  var input0 = document.getElementById('input-with-keypress-0');
  var input1 = document.getElementById('input-with-keypress-1');
  var inputs = [input0, input1];

  if (item) {
    noUiSlider.create(stepsSlider, {
      start: [2000, 8000],
      connect: true,
      tooltips: [true, wNumb({
        decimals: 1
      })],
      range: {
        'min': [0],
        'max': 10000
      }
    });
  }

  if (item) {
    stepsSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });
  }


  $(".card__info-content").click(function () {
    $(this).toggleClass("in").next().slideToggle();
    $(".card__info-content").not(this).removeClass("in").next().slideUp();
  });


  $(function () {
    $('select').styler();
  });


  $(".details__content-text").click(function (event) {
    if ($(".details__content").hasClass("details__content--open")) {
      $(".details__content-text").not($(this)).removeClass("active");
      $(".details__content-list").not($(this).next()).slideUp(380);
    }
    $(this).toggleClass("active").next().slideToggle(380);
  });


  $(document).on("click", function (event) {
    if (!$(event.target).closest(".active").length) {
      $(".details__content-text").removeClass("active");
      $(".details__content-list").not($(this).next()).slideUp(380);
    }
  });


  $(".modalBox").fancybox();


  var swiperVideo = new Swiper(".video__swiper", {
    navigation: {
      prevEl: ".video__arrow-prev",
      nextEl: ".video__arrow-next",
    },
  });


  const swiperExtreme = new Swiper(".card__slider-extreme", {
    navigation: {
      prevEl: ".swiper-button-prev-extreme",
      nextEl: ".swiper-button-next-extreme",
    },

    breakpoints: {
      993: {
        spaceBetween: 22,
        slidesPerView: 5,
      },
      577: {
        slidesPerView: 4.7,
        spaceBetween: 15,
      },
      390: {
        slidesPerView: 4.7,
        spaceBetween: 15,
      },
    }
  });


  const swiperCooking = new Swiper(".card__slider-cooking", {
    navigation: {
      prevEl: ".swiper-button-prev-cooking",
      nextEl: ".swiper-button-next-cooking",
    },

    breakpoints: {
      993: {
        spaceBetween: 22,
        slidesPerView: 5,
      },
      577: {
        slidesPerView: 4.7,
        spaceBetween: 15,
      },
      390: {
        slidesPerView: 4.7,
        spaceBetween: 15,
      },
    }
  });


  const swiperBright = new Swiper(".card__slider-bright", {
    navigation: {
      prevEl: ".swiper-button-prev-bright",
      nextEl: ".swiper-button-next-bright",
    },

    breakpoints: {
      993: {
        spaceBetween: 22,
        slidesPerView: 5,
      },
      577: {
        slidesPerView: 4.7,
        spaceBetween: 15,
      },
      390: {
        slidesPerView: 4.7,
        spaceBetween: 15,
      },
    }
  });


  const swiperReviews = new Swiper(".reviews__wpapper", {

    breakpoints: {
      1441: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      769: {
        slidesPerView: 2.1,
        spaceBetween: 40,
      },
      577: {
        slidesPerView: 1.3,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    }
  });


  const swiperExtra = new Swiper(".extra__swiper", {
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
      820: {
        slidesPerView: 2.15,
        spaceBetween: 40,
      },
      576: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      320: {
        watchOverflow: true,
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
    }
  });


  const swiperReviewsDetails = new Swiper(".reviews__details-box", {
    navigation: {
      nextEl: '.reviews__next-details',
      prevEl: '.reviews__prev-details',
    },
    breakpoints: {

      993: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      769: {
        slidesPerView: 2.2,
        spaceBetween: 40,
      },
      577: {
        slidesPerView: 1.4,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    }
  });


  const swiperGiftDetails = new Swiper(".giftDetails__inner", {
    breakpoints: {
      820: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      576: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      320: {
        watchOverflow: true,
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
    }
  });

});