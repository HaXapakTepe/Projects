$(document).ready(function () {


  var tooltipSlider = document.querySelector('.scalability__item-tooltips');

  noUiSlider.create(tooltipSlider, {
    start: 150,
    tooltips: true,
    range: {
      'min': 100,
      'max': 1000
    },
    format: wNumb({
      decimals: 0,
    })
  }).on('update', function (values, handle, unencoded) {
    const numViews = document.querySelector("#numViews")
    numViews.innerHTML = values * 2520
    const totalSum = document.querySelector("#totalSum")
    totalSum.innerHTML = values * 128
  });

  (function initPlayVideo() {
    var $videoCover = $(".video__play");
    var $videoPlayerIframe = $(".video iframe");

    $videoCover.on("click", function () {
      $videoCover.fadeOut();
      $videoPlayerIframe[0].src += "&autoplay=1";
    });
  })();


  $('#up').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  })

  const menuLinks = document.querySelectorAll('.link[data-goto]');

  setTimeout(() => {
    if (menuLinks.length > 0) {
      menuLinks.forEach(link => {
        link.addEventListener('click', onMenuLinkClick);
      });

      function onMenuLinkClick(e) {
        const link = e.target;
        if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
          const gotoBlock = document.querySelector(link.dataset.goto);
          let gotoBlockValue;
          if (innerWidth >= 992) {
            gotoBlockValue = gotoBlock.getBoundingClientRect().top;
          }
          if (innerWidth < 992) {
            gotoBlockValue = gotoBlock.getBoundingClientRect().top;
          }
          window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth',
          });
          e.preventDefault();
        };
      };
    };
  }, 500);

  if (window.innerWidth >= 992) {
    particlesJS.load('particles-js', 'plugins/particles/particles.json');
  }

  $("select").styler();

  var workerSwiper = new Swiper('.worker__swiper', {
    // loop: true,
    allowTouchMove: false,
    spaceBetween: 30,
    speed: 100,
    pagination: {
      el: '.worker__pagination',
    },
    navigation: {
      nextEl: '.worker-button-next',
      prevEl: '.worker-button-prev',
    },
    breakpoints: {
      300: {
        loopedSlides: 1,
        slidesPerView: 1,
      },
      730: {
        loopedSlides: 3,
        slidesPerView: 3,
      },
      1000: {
        loopedSlides: 3,
        slidesPerView: 3,
      },
      1300: {
        loopedSlides: 4,
        slidesPerView: 4,
      },
    },
    on: {
      slidePrevTransitionStart: function () {
        if (workerSwiper.realIndex === 4) {
          workerSwiper.slideToLoop(4);
        }
      }
    }
  });
  wpaginationSliders();
  $(window).resize(function () {
    wpaginationSliders();
  });

  function wpaginationSliders() {
    var allSlides = workerSwiper.pagination.bullets.length;
    $('#wns').html('' + allSlides);
  }


  $('.worker-button-next').click(function () {
    if ($(window).width() > 1300) {
      var page = workerSwiper.realIndex + 1;
      $('#wcp').html('' + page);
    }
  });
  $('.worker-button-prev').click(function () {
    if ($(window).width() > 1300) {
      var page = workerSwiper.realIndex + 1;
      $('#wcp').html('' + page);
    }
  });


  var mySwiper = new Swiper('.gallery__slider', {
    // loop: true,
    allowTouchMove: false,
    // centeredSlides: true,
    spaceBetween: 30,
    speed: 100,
    pagination: {
      el: '.gallery__pagination',
    },
    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev',
    },
    breakpoints: {
      300: {
        // loopedSlides: 1,
        slidesPerView: 1,
        // slidesPerGroup: 1,
      },
      730: {
        // loopedSlides: 3,
        slidesPerView: 3,
        // slidesPerGroup: 3,
      },
      1000: {
        // loopedSlides: 3,
        slidesPerView: 3,
        // slidesPerGroup: 3,
      },
    },
    // on: {
    //   slidePrevTransitionStart: function () {
    //     if (mySwiper.realIndex === 6) {
    //       mySwiper.slideToLoop(6);
    //     }
    //   }
    // }
  });
  paginationSliders();
  $(window).resize(function () {
    paginationSliders();
  });

  function paginationSliders() {
    var allSlides = mySwiper.pagination.bullets.length;
    $('#ns').html(2 + allSlides);
  }


  $('.gallery-button-next').click(function () {
    if ($(window).width() > 1000) {
      var page = mySwiper.realIndex + 1;
      $('#cp').html('' + page);
    } else {
      var page = mySwiper.realIndex + 1;
      $('#cp').html('' + page);
    }
  });
  $('.gallery-button-prev').click(function () {
    if ($(window).width() > 1000) {
      var page = mySwiper.realIndex + 1;
      $('#cp').html('' + page);
    } else {
      var page = mySwiper.realIndex + 1;
      $('#cp').html('' + page);
    }
  });

  var mySwiperReviews = new Swiper('.reviews__slider', {
    loop: true,
    loopedSlides: 1,
    slidesPerView: 1,
    slidesPerGroup: 1,
    allowTouchMove: false,
    centeredSlides: true,
    spaceBetween: 300,
    speed: 1000,
    pagination: {
      el: '.reviews__pagination',
    },
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
  });

  var allSlidesReviews = mySwiperReviews.pagination.bullets.length;
  $('#nsReviews').html('0' + allSlidesReviews);


  $(window).on('load', function () {
    setTimeout(function () {
      $(document).scrollTop(0)
    }, 0);
    if ($(window).width() > 1024) {

      wow = new WOW({
        animateClass: 'animate__animated',
        mobile: false,
        offset: 200
      })
      wow.init();
    }

    $preloader = $('.preloader'),
      $loader = $preloader.find('.preloader__image');
    $loader.delay(400).fadeOut();
    $preloader.delay(500).fadeOut('slow');

  });


  $('.reviews-button-next').click(function () {
    var pageReviews = mySwiperReviews.realIndex + 1;
    $('#cpReviews').html('0' + pageReviews);
  });

  $('.reviews-button-prev').click(function () {
    var pageReviews = mySwiperReviews.realIndex + 1;
    $('#cpReviews').html('0' + pageReviews);
  });

  $("#phone").mask("+7 (999) 999-9999");
  $("#phoneModal").mask("+7 (999) 999-9999");


  $(".modalbox").fancybox({
    'afterLoad': function () {
      var value = $(this.opts.$orig).attr('rel');
      $(this.$content).find('[name="user_city"]').val(value)
    }
  });
  $('.modal__form').on('submit', function (event) {
    event.preventDefault();
    if ($(this).find('.name').val() == '' ||
      $(this).find('.number').val() == '' ||
      $(this).find('.email').val() == '') {
      $(this).find('.result').addClass('result--error').removeClass('result--black').html('<span>Все поля обязательны для заполнения</span>');
    } else {
      $.post("submit.php", $(this).serialize(), function (data) {
        $('.modal__form').find(".result").addClass('result--black').removeClass('result--error').html(data);
        $('.modal__form')[0].reset();
      });
    }
  });

  if ($(window).width() > 1024) {

    $(this).find('.nav__logo').addClass('wow animate__animated animate__bounceInDown').css({
      animationDelay: '1s',
      animateDuration: '1s'
    });

    $(this).find('.nav__phone').addClass('wow animate__animated animate__bounceInUp').css({
      animationDelay: '1s',
      animateDuration: '1s'
    });

    $(this).find('.nav__title').addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '1.2s',
      animateDuration: '1s'
    });

    $(this).find('.button').eq(0).addClass('wow animate__animated animate__bounceIn').css({
      animationDelay: '.8s',
      animateDuration: '1s'
    });
    $(this).find('.button').eq(1).addClass('wow animate__animated animate__bounceIn').css({
      animationDelay: '.9s',
      animateDuration: '1s'
    });
    $(this).find('.button').eq(2).addClass('wow animate__animated animate__bounceInRight').css({
      animationDelay: '.6s',
      animateDuration: '1s'
    });

    $(this).find('.gallery__sliderNavigation').addClass('wow animate__animated animate__bounceInLeft').css({
      animationDelay: '.6s',
      animateDuration: '1s'
    });

    $(this).find('.title').eq(0).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(1).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(2).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(3).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(4).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(5).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(6).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(7).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(8).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(9).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(10).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.title').eq(11).addClass('wow animate__animated animate__backInLeft').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });

    $(this).find('.text').eq(0).addClass('wow animate__animated animate__backInRight').css({
      animationDelay: '.3s',
      animateDuration: '1s'
    });
    $(this).find('.text').eq(1).addClass('wow animate__animated animate__backInRight').css({
      animationDelay: '.3s',
      animateDuration: '1s'
    });
    $(this).find('.text').eq(2).addClass('wow animate__animated animate__backInRight').css({
      animationDelay: '1.3s',
      animateDuration: '1s'
    });

    $(this).find('.gallery__slider').eq(0).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });

    $(this).find('.benefits__item').eq(0).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.benefits__item').eq(1).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.5s',
      animateDuration: '1s'
    });
    $(this).find('.benefits__item').eq(2).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.6s',
      animateDuration: '1s'
    });
    $(this).find('.benefits__item').eq(3).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.7s',
      animateDuration: '1s'
    });
    $(this).find('.benefits__item').eq(4).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.benefits__item').eq(5).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.5s',
      animateDuration: '1s'
    });
    $(this).find('.benefits__item').eq(6).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.6s',
      animateDuration: '1s'
    });
    $(this).find('.benefits__item').eq(7).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.7s',
      animateDuration: '1s'
    });

    $(this).find('.required__content').eq(0).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.7s',
      animateDuration: '1s'
    });
    $(this).find('.required__content').eq(1).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.8s',
      animateDuration: '1s'
    });
    $(this).find('.required__content').eq(2).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.9s',
      animateDuration: '1s'
    });
    $(this).find('.required__content').eq(3).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '1s',
      animateDuration: '1s'
    });
    $(this).find('.required__content').eq(4).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.required__content').eq(5).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '1.2s',
      animateDuration: '1s'
    });
    $(this).find('.required__content').eq(6).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '1.3s',
      animateDuration: '1s'
    });
    $(this).find('.required__content').eq(7).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '1.4s',
      animateDuration: '1s'
    });
    $(this).find('.required__content').eq(8).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '1.5s',
      animateDuration: '1s'
    });
    $(this).find('.required__content').eq(9).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '1.6s',
      animateDuration: '1s'
    });
    $(this).find('.required__item-img').addClass('wow animate__animated animate__fadeInRight').css({
      animationDelay: '.1s',
      animateDuration: '1s'
    });

    $(this).find('.scalability__inner').eq(0).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.9s',
      animateDuration: '1s'
    });
    $(this).find('.scalability__content-item').eq(0).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.1s',
      animateDuration: '1s'
    }).removeClass("animate__animated");
    $(this).find('.scalability__content-item').eq(1).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.2s',
      animateDuration: '1s'
    }).removeClass("animate__animated");
    $(this).find('.scalability__content-item').eq(2).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.3s',
      animateDuration: '1s'
    }).removeClass("animate__animated");
    $(this).find('.scalability__content-item').eq(3).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.1s',
      animateDuration: '1s'
    }).removeClass("animate__animated");
    $(this).find('.scalability__content-item').eq(4).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.2s',
      animateDuration: '1s'
    }).removeClass("animate__animated");

    $(this).find('.clients__inner').eq(0).addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(0).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.8s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(1).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.9s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(2).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(3).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(4).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.8s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(5).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.9s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(6).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(7).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(8).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.8s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(9).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.9s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(10).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(11).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(12).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(13).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(14).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(15).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(16).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(17).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(18).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });
    $(this).find('.clients__item').eq(19).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });



    $(this).find('.about__inner').eq(0).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.7s',
      animateDuration: '1s'
    });
    $(this).find('.about__item').eq(1).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.8s',
      animateDuration: '1s'
    });
    $(this).find('.about__item-text').eq(2).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.8s',
      animateDuration: '1s'
    });
    $(this).find('.about__item-title').eq(3).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.9s',
      animateDuration: '1s'
    });
    $(this).find('.about__item-text').eq(4).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '5s',
      animateDuration: '1s'
    });
    $(this).find('.about__item-image').eq(5).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });


    $(this).find('.reviews__slider').eq(0).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.7s',
      animateDuration: '1s'
    });
    $(this).find('.reviews__slide-img').eq(1).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.8s',
      animateDuration: '1s'
    });
    $(this).find('.reviews__slide-title').eq(2).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.8s',
      animateDuration: '1s'
    });
    $(this).find('.reviews__slide-icon').eq(3).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '.9s',
      animateDuration: '1s'
    });
    $(this).find('.reviews__slide-text').eq(4).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '1s',
      animateDuration: '1s'
    });
    $(this).find('.reviews__slide-price').eq(5).addClass('wow animate__animated animate__flipInX').css({
      animationDelay: '1.1s',
      animateDuration: '1s'
    });


    $(this).find('.worker__swiper').eq(0).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.9s',
      animateDuration: '1s'
    });


    // $(this).find('.info__item').eq(0).addClass('wow animate__animated animate__flipInY').css({
    //   animationDelay: '.7s',
    //   animateDuration: '1s'
    // }).removeClass("animate__animated");
    // $(this).find('.info__item').eq(1).addClass('wow animate__animated animate__flipInY').css({
    //   animationDelay: '.8s',
    //   animateDuration: '1s'
    // }).removeClass("animate__animated");
    // $(this).find('.info__item').eq(2).addClass('wow animate__animated animate__flipInY').css({
    //   animationDelay: '.9s',
    //   animateDuration: '1s'
    // }).removeClass("animate__animated");
    // $(this).find('.info__item').eq(3).addClass('wow animate__animated animate__flipInY').css({
    //   animationDelay: '1s',
    //   animateDuration: '1s'
    // }).removeClass("animate__animated");

    // $(this).find('.cases__content').eq(0).addClass('wow animate__animated animate__zoomIn').css({
    //   animationDelay: '.1s',
    //   animateDuration: '1s'
    // }).removeClass("animate__animated");
    // $(this).find('.cases__content').eq(1).addClass('wow animate__animated animate__zoomIn').css({
    //   animationDelay: '.2s',
    //   animateDuration: '1s'
    // }).removeClass("animate__animated");
    // $(this).find('.cases__content').eq(2).addClass('wow animate__animated animate__zoomIn').css({
    //   animationDelay: '.3s',
    //   animateDuration: '1s'
    // }).removeClass("animate__animated");

    $(this).find('.city__map').addClass('wow animate__animated animate__zoomIn').css({
      animationDelay: '.5s',
      animateDuration: '1s'
    });

    $(this).find('.city__item').eq(0).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.1s',
      animateDuration: '1s'
    }).removeClass("animate__animated");
    $(this).find('.city__item').eq(1).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.2s',
      animateDuration: '1s'
    }).removeClass("animate__animated");
    $(this).find('.city__item').eq(2).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.3s',
      animateDuration: '1s'
    }).removeClass("animate__animated");
    $(this).find('.city__item').eq(3).addClass('wow animate__animated animate__flipInY').css({
      animationDelay: '.4s',
      animateDuration: '1s'
    }).removeClass("animate__animated");

    $(this).find('.footer__logo').addClass('wow animate__animated animate__fadeInLeft').css({
      animationDelay: '.2s',
      animateDuration: '1s'
    });
    $(this).find('.footer__text').addClass('wow animate__animated animate__fadeInUp').css({
      animationDelay: '.2s',
      animateDuration: '1s'
    });
    $(this).find('.footer__mail').addClass('wow animate__animated animate__fadeInRight').css({
      animationDelay: '.2s',
      animateDuration: '1s'
    });
    $(this).find('.footer__phone').addClass('wow animate__animated animate__fadeInRight').css({
      animationDelay: '.2s',
      animateDuration: '1s'
    });
  }

  var image = $('.city__map-img');


  var resizing,
    body = $(body),
    win = $(window),
    diffW = win.width() - image.width(),
    lastw = win.innerWidth(),
    lasth = win.innerHeight();

  var resize = function () {
    var win = $(window),
      width = win.width(),
      height = win.height();
    if (resizing) {
      return;
    }
    if (lastw !== width || lasth !== height) {
      resizing = true;
      image.mapster('resize', width - diffW, 0, 200);
      lastw = width;
      lasth = height;
      setTimeout(function () {
        resizing = false;
        resize();
      }, 200);
    } else {

    }
  };
  $(window).bind('resize', resize);

  var areas = $.map($('area[value]'), function (el) {
    return {
      key: $(el).attr('data-key'),
      toolTip: $(el).attr('value'),
    };
  });

  image.mapster({
    fillColor: "494563",
    fillOpacity: 1,
    strokeOpacity: 1,
    showToolTip: true,
    mapKey: 'data-key',
    isSelectable: false,
    areas: areas,
    toolTipContainer: '<div class="tooltipInfo"></div>',
    render_highlight: {
      strokeColor: 'd8a7b6',
      strokeWidth: 3,
      fillColor: 'f22866',
      stroke: true,
    },
  });
  $('area').mapster('set', 'data-key');

});