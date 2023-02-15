$(".modalBox").fancybox();

// Slider for .info
if (document.querySelector(".info__images-slider")) {
  var swiperImages = new Swiper(".info__images-slider", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".info__text-next",
      prevEl: ".info__text-prev",
    },
  });

  var swiperText = new Swiper(".info__text-slider", {
    spaceBetween: 20,
    autoHeight: true,
  });

  swiperImages.controller.control = swiperText;
  swiperText.controller.control = swiperImages;
}

// Buy-buttons
$(".popular__buy").next().slideUp(0);
$(".popular__buy").click(function () {
  $(this).toggleClass("in").next().slideToggle(380);
  $(this).toggleClass("popular__buy--active");
  $(".popular__buy").not(this).removeClass("in").next().slideUp(380);
  $(".popular__buy").not(this).removeClass("popular__buy--active");
});

$(".product__cards-buy").next().slideUp(0);
$(".product__cards-buy").click(function () {
  $(this).toggleClass("in").next().slideToggle(380);
  $(this).toggleClass("product__cards-buy--active");
  $(".product__cards-buy").not(this).removeClass("in").next().slideUp(380);
  $(".product__cards-buy").not(this).removeClass("product__cards-buy--active");
});

// Sliders for .product
if (document.querySelector(".product__cards-slider--posuda")) {
  var swiperCards = new Swiper(".product__cards-slider--posuda", {
    spaceBetween: 60,
    navigation: {
      nextEl: ".product__navigation-next",
      prevEl: ".product__navigation-prev",
    },
  });

  var swiperInfo = new Swiper(".product__info-slider--posuda", {
    spaceBetween: 60,
    autoHeight: true,
  });

  swiperCards.controller.control = swiperInfo;
  swiperInfo.controller.control = swiperCards;

  var productPagination1 = $(".product__pagination-item--posuda");

  productPagination1.on("click", function () {
    productPagination1.removeClass("product__pagination-item--active");
    $(this).addClass("product__pagination-item--active");
    swiperCards.slideTo($(this).index());
  });

  swiperCards.on("slideChange", function () {
    productPagination1.removeClass("product__pagination-item--active");
    $(".product__pagination--posuda")
      .find(
        ".product__pagination-item:nth-child(" +
        (swiperCards.activeIndex + 1) +
        ")"
      )
      .addClass("product__pagination-item--active");
  });
}

if (document.querySelector(".product__cards-slider--mylo")) {
  var swiperCardsMylo = new Swiper(".product__cards-slider--mylo", {
    spaceBetween: 60,
    navigation: {
      nextEl: ".product__navigation-next",
      prevEl: ".product__navigation-prev",
    },
  });

  var swiperInfoMylo = new Swiper(".product__info-slider--mylo", {
    spaceBetween: 60,
    autoHeight: true,
  });

  swiperCardsMylo.controller.control = swiperInfoMylo;
  swiperInfoMylo.controller.control = swiperCardsMylo;

  var productPagination2 = $(".product__pagination-item--mylo");

  productPagination2.on("click", function () {
    productPagination2.removeClass("product__pagination-item--active");
    $(this).addClass("product__pagination-item--active");
    swiperCardsMylo.slideTo($(this).index());
  });

  swiperCardsMylo.on("slideChange", function () {
    productPagination2.removeClass("product__pagination-item--active");
    $(".product__pagination--mylo")
      .find(
        ".product__pagination-item:nth-child(" +
        (swiperCardsMylo.activeIndex + 1) +
        ")"
      )
      .addClass("product__pagination-item--active");
  });
}

// Form validation
if (document.querySelectorAll(".connect__form-input")) {
  var formInputs = document.querySelectorAll(".connect__form-input");
  var formCheckbox = document.querySelector(".connect__form-checkbox");

  $(".phone-js").mask("+7 (999)-999-99-99", {
    autoclear: false
  });

  formInputs.forEach(function (e) {
    setTimeout(function () {
      e.addEventListener("keyup", function () {
        if (validateForm(formInputs, formCheckbox)) {
          sibmit.removeAttribute("disabled");
        } else {
          sibmit.setAttribute("disabled", "disabled");
        }
      });
      e.addEventListener("blur", function () {
        if (!validateForm(formInputs, formCheckbox)) {
          sibmit.setAttribute("disabled", "disabled");
        }
      });
      formCheckbox.addEventListener("change", function (e) {
        if (!validateForm(formInputs, formCheckbox)) {
          sibmit.setAttribute("disabled", "disabled");
        } else {
          sibmit.removeAttribute("disabled");
        }
      });
    }, 0);
  });

  function validateForm(formList, formCheckbox) {
    var list = Array.from(formList);
    for (var i = 0; i < list.length; i++) {
      if (!list[i].value || !formCheckbox.checked) {
        return false;
      }
    }
    return true;
  }
}

if (document.querySelectorAll(".modal__form-input")) {
  var formInputsModal = document.querySelectorAll(".modal__form-input");
  var formCheckboxModal = document.querySelector(".modal__form-checkbox");

  $(".phone-js").mask("+7 (999)-999-99-99", {
    autoclear: false
  });

  formInputsModal.forEach(function (e) {
    setTimeout(function () {
      e.addEventListener("keyup", function () {
        if (validateFormModal(formInputsModal, formCheckboxModal)) {
          sibmitModal.removeAttribute("disabled");
        } else {
          sibmitModal.setAttribute("disabled", "disabled");
        }
      });
      e.addEventListener("blur", function () {
        if (!validateFormModal(formInputsModal, formCheckboxModal)) {
          sibmitModal.setAttribute("disabled", "disabled");
        }
      });
      formCheckboxModal.addEventListener("change", function (e) {
        if (!validateFormModal(formInputsModal, formCheckboxModal)) {
          sibmitModal.setAttribute("disabled", "disabled");
        } else {
          sibmitModal.removeAttribute("disabled");
        }
      });
    }, 0);
  });

  function validateFormModal(formListModal, formCheckboxModal) {
    var listModal = Array.from(formListModal);
    for (var i = 0; i < listModal.length; i++) {
      if (!listModal[i].value || !formCheckboxModal.checked) {
        return false;
      }
    }
    return true;
  }
}

// Animated apple and orange
var rellax = new Rellax(".rellax", {
  center: true,
});

// Slider for .reviews
if (document.querySelector(".reviews__slider")) {
  var swiperReviews = new Swiper(".reviews__slider", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".reviews__slider-next",
      prevEl: ".reviews__slider-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        autoHeight: true,
      },
      401: {
        slidesPerView: 1,
        autoHeight: true,
      },
      577: {
        autoHeight: true,
      },
      769: {
        autoHeight: true,
      },
      993: {
        slidesPerView: 2,
        autoHeight: false,
      },
    },
  });
}

// Burger-menu
$(".burger").on("click", function () {
  $(this).toggleClass("burger--active");
  $(".header").toggleClass("header--active");

  if (document.querySelector(".burger--active"))
    $("body").css("overflow", "hidden");
  else $("body").css("overflow", "auto");
});

$(".header__mask").on("click", function () {
  $(".burger").removeClass("burger--active");
  $(".header").removeClass("header--active");
  $("body").css("overflow", "auto");
});

// Sliders for .product
if (document.querySelector(".popular__slider")) {
  var swiperPopular = new Swiper(".popular__slider", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".product__navigation-next",
      prevEl: ".product__navigation-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      401: {
        slidesPerView: 2,
      },
    },
  });
}

// Smooth scroll
var navItem = document.querySelectorAll(".nav__item");
var headerH = $(".header").innerHeight();
console.log();

$(".header__logo").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: 0
  }, 500);
});

navItem.forEach(function (e, index) {
  e.addEventListener("click", function () {
    $(".burger").removeClass("burger--active");
    $(".header").removeClass("header--active");
    $("body").css("overflow", "auto");

    if (index == 0) {
      var scroll = $(".info").offset().top;
      $("html, body").animate({
        scrollTop: scroll - headerH - 20
      }, 500);
    } else if (index == 1) {
      var scroll = $(".product").offset().top;
      $("html, body").animate({
        scrollTop: scroll - headerH - 20
      }, 500);
    } else if (index == 2) {
      var scroll = $(".reviews").offset().top;
      $("html, body").animate({
        scrollTop: scroll - headerH - 20
      }, 500);
    }
  });
});