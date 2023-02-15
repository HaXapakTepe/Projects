$(document).ready(function () {

  select = $('.select-js-main').selectize({
    selectSmartPositioning: false,
    selectVisibleOptions: 5
  });

  const header = document.querySelector(".header")

  const menuLinks = document.querySelectorAll('href');

  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const link = e.target;
      if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
        const gotoBlock = document.querySelector(link.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - header.offsetHeight;
        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth',
        });
        e.preventDefault();
      };
    };
  };


  // $('select').styler()

  const requestCity = document.querySelector(".requestCity")
  const requestCityLinkYes = document.querySelector(".requestCity__link--yes")
  const requestCityLinkNo = document.querySelector(".requestCity__link--no")
  let isDropdawnOpened = false;

  requestCityLinkYes.addEventListener("click", () => {
    requestCity.classList.remove("requestCity--active")
  })

  requestCityLinkNo.addEventListener("click", () => {
    requestCity.classList.remove("requestCity--active")
    const dropdown = document.querySelector(".jq-selectbox__dropdown")
    dropdown.style.display = "block";
    dropdown.style.zIndex = "100";
    isDropdawnOpened = true
  })

  $(document).on('mouseup', function (e) { // При нажатии на документ
    const dropdown = document.querySelector(".jq-selectbox__dropdown")
    if (dropdown.style.display === "block" && isDropdawnOpened) {
      dropdown.style.display = "none";
    }
    isDropdawnOpened = false
  });


  setTimeout(() => {
    requestCity.classList.add("requestCity--active")
  }, 300);



  const loaders = document.querySelectorAll('.track__preloader');

  loaders.forEach(loader => {
    setTimeout(() => {
      loader.classList.add('track__preloader--notActive')
    }, Math.floor(Math.random() * 2500));
  })

  const menu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu__link");
  const burger = document.querySelector(".header__burger");

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  $(function () {
    $(".important__question").click(function (event) {
      if ($(".important__inner").hasClass("one")) {
        $(".important__question").not($(this)).removeClass("active");
        $(".important__answer").not($(this).next()).slideUp(380);
      }
      $(this).toggleClass("active").next().slideToggle(380);
    });
  });


  $(document).on("click", function (event) {
    if (!$(event.target).closest(".active").length) {
      $(".important__question").removeClass("active");
      $(".important__answer").not($(this).next()).slideUp(380);
    }
  });

  $(".phone-js").mask("+7 (999) 999-9999");

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".active").length) {
      $(".menu").removeClass("active");
      burger.classList.remove("active");
    }
    e.stopPropagation();
  });

  const sliderTrack = new Swiper(".track__swiper", {
    navigation: {
      prevEl: ".track-prev",
      nextEl: ".track-next",
    },
    pagination: {
      el: ".track-pagination",
      clickable: true,
    },

    breakpoints: {
      993: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 15,
        pagination: {
          dynamicBullets: false,
        },
      },
      577: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      360: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
        pagination: {
          dynamicBullets: true,
        },
      },
    },
  });

  const sliderReviews = new Swiper(".reviews__swiper", {
    navigation: {
      prevEl: ".reviews-prev",
      nextEl: ".reviews-next",
    },
    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },

    breakpoints: {
      993: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 15,
        pagination: {
          dynamicBullets: false,
        },
      },
      577: {
        slidesPerView: 1.3,
        spaceBetween: 15,
      },
      360: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
        pagination: {
          dynamicBullets: true,
        },
      },
    },
  });

  const sliderVictory = new Swiper(".victory__swiper", {
    navigation: {
      prevEl: ".victory-prev",
      nextEl: ".victory-next",
    },
    pagination: {
      el: ".victory-pagination",
      dynamicBullets: 3,
      clickable: true,
    },
    breakpoints: {
      1081: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
        spaceBetween: 30,
        pagination: {
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      },
      993: {
        grid: {
          rows: 1,
        },
        spaceBetween: 30,
        slidesPerView: 3,
      },
      768: {
        grid: {
          rows: 1,
        },
        slidesPerView: 2.2,
        spaceBetween: 30,
        // pagination: {
        //   dynamicBullets: false,
        // },
      },
      577: {
        grid: {
          rows: 1,
        },
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      390: {
        slidesPerView: 1.4,
        spaceBetween: 15,
      },
      360: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
        pagination: {
          type: "bullets",
          dynamicBullets: true,
        },
      },
    },
  });

  const sliderMedia = new Swiper(".media__swiper", {
    navigation: {
      prevEl: ".media-prev",
      nextEl: ".media-next",
    },
    pagination: {
      el: ".media-pagination",
      clickable: true,
    },
    breakpoints: {
      993: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 15,
        pagination: {
          dynamicBullets: false,
        },
      },
      577: {
        slidesPerView: 1.3,
        spaceBetween: 15,
      },
      360: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
        pagination: {
          dynamicBullets: true,
        },
      },
    },
  });


  $(".modalBox").fancybox();
});