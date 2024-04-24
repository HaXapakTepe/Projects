$(document).ready(function () {

  var dropdownBtn = document.querySelectorAll('.dropdown-js'),
    backBtn = document.querySelectorAll('.menu__dropdown-back');

  function showMenu(event) {
    let dropdown = event.currentTarget.lastElementChild
    event.preventDefault();
    var initialHeight = dropdown.scrollHeight + "px";
    dropdown.style.display = 'block';
    setTimeout(function () {
      dropdown.style.height = initialHeight;
    }, 0);
  };

  function hideMenu(event) {
    var dropdown = event.currentTarget.lastElementChild
    dropdown.style.height = '0'
  };

  dropdownBtn.forEach(function (elem) {
    if (window.innerWidth >= 992) {
      elem.addEventListener('mouseover', showMenu);
      elem.addEventListener('mouseleave', hideMenu);
    }
  });

  const menuItemLink = document.querySelectorAll(".menu__item-link")

  menuItemLink.forEach((item) => {
    item.addEventListener("click", function () {
      menuItemLink.forEach((item) => {
        item.classList.remove('menu__item-link--open');
      })
      this.classList.add('menu__item-link--open');
    })
  })

  backBtn.forEach(item => {
    item.addEventListener('click', function () {
      menuItemLink.forEach(elem => {
        elem.classList.remove('menu__item-link--open');
      })
    })
  })


  const body = document.querySelector("body");
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".menu");

  if (burger) {
    $(document).on('click', function (e) {
      if (!$(e.target).closest(".active").length) {
        burger.classList.remove("active");
        menu.classList.remove("active");
        body.classList.remove("no-scroll")
      }
    })

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      body.classList.toggle("no-scroll")
    });
  }

  if (document.querySelector('.downPayment-step')) {
    var pledgeFlatStep = document.querySelectorAll('.downPayment-step');
    pledgeFlatStep.forEach(item => {
      noUiSlider.create(item, {
        start: [500000],
        connect: [true, false],
        step: 500000,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          'min': [1100000],
          'max': [5500000]
        },
      });

      let pips = item.noUiSlider.pips({
        mode: 'positions',
        values: [0, 50, 100],
        format: wNumb({
          suffix: 'млн ₽'
        })
      });
      let attr = pips.querySelectorAll("[data-value]")
      let elem2 = Array.from(attr).splice(0, 3)
      elem2.forEach(function (el) {
        let i = el.dataset.value.substr(0, 1)
        el.innerHTML = i + " млн ₽"
      })
      let elem = Array.from(attr).splice(1, 3)
      elem.forEach(function (el) {
        let i = el.dataset.value.substr(0, 2)
        el.innerHTML = i + " млн ₽"
      })
      item.noUiSlider.on('update', function (values, handle) {
        item.previousElementSibling.innerHTML = values[handle] + " ₽";
      });
    })
  }

  if (document.querySelector('.housingCost-step')) {
    var pledgeFlatStep = document.querySelectorAll('.housingCost-step');
    pledgeFlatStep.forEach(item => {
      noUiSlider.create(item, {
        start: [6500000],
        connect: [true, false],
        step: 100000,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          'min': [1500000],
          'max': [60000000]
        },
      });

      let pips = item.noUiSlider.pips({
        mode: 'positions',
        values: [0, 50, 100],
        format: wNumb({
          suffix: 'млн ₽'
        })
      });
      let attr = pips.querySelectorAll("[data-value]")
      let elem2 = Array.from(attr).splice(0, 3)
      elem2.forEach(function (el) {
        let i = el.dataset.value.substr(0, 1)
        el.innerHTML = i + " млн ₽"
      })
      let elem = Array.from(attr).splice(1, 3)
      elem.forEach(function (el) {
        let i = el.dataset.value.substr(0, 2)
        el.innerHTML = i + " млн ₽"
      })
      item.noUiSlider.on('update', function (values, handle) {
        item.previousElementSibling.innerHTML = values[handle] + " ₽";
      });
    })
  }

  if (document.querySelector('.pledgeFlat-step')) {
    var pledgeFlatStep = document.querySelectorAll('.pledgeFlat-step');
    pledgeFlatStep.forEach(item => {
      noUiSlider.create(item, {
        start: [6500000],
        connect: [true, false],
        step: 50000,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          'min': [500000],
          'max': [15000000]
        },
      });

      let pips = item.noUiSlider.pips({
        mode: 'positions',
        values: [0, 50, 100],
        format: wNumb({
          suffix: '₽'
        })
      });
      let attr = pips.querySelectorAll("[data-value]")
      let elem = Array.from(attr).splice(1)
      elem.forEach(function (el) {
        let i = el.dataset.value.substr(0, 1)
        el.innerHTML = i + " млн ₽"
      })
      let elem2 = Array.from(attr).splice(2, 3)
      elem2.forEach(function (el) {
        let i = el.dataset.value.substr(0, 2)
        el.innerHTML = i + " млн ₽"
      })
      item.noUiSlider.on('update', function (values, handle) {
        item.previousElementSibling.innerHTML = values[handle] + " ₽";
      });
    })
  }

  if (document.querySelector('.pledgeFlat-year')) {
    var pledgeFlatYear = document.querySelectorAll('.pledgeFlat-year');

    pledgeFlatYear.forEach(elem => {
      noUiSlider.create(elem, {
        start: [5],
        connect: [true, false],
        step: 1,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          'min': [1],
          '50%': [5],
          'max': [10]
        },
      });

      let pips = elem.noUiSlider.pips({
        mode: 'positions',
        values: [0, 50, 100],
        format: wNumb({
          suffix: ' год',
        }),
      });
      let attrYear = pips.querySelectorAll("[data-value]")

      let elem3 = Array.from(attrYear).splice(1, 2)
      elem3.forEach(function (el) {
        let i = el.dataset.value.substr(0, 1)
        el.innerHTML = i + " лет"
      })
      let elem4 = Array.from(attrYear).splice(2, 3)
      elem4.forEach(function (el) {
        let i = el.dataset.value.substr(0, 2)
        el.innerHTML = i + " лет"
      })
      elem.noUiSlider.on('update', function (values, handle) {
        elem.previousElementSibling.innerHTML = values[handle] + " лет";

        values.forEach(item => {
          var value = Number(item) % 10 === 0 ? 5 : Number(item) % 10
          if (value === 1) {
            elem.previousElementSibling.innerHTML = values[handle] + " год";
          } else if (value <= 4) {
            elem.previousElementSibling.innerHTML = values[handle] + " годa";
          } else if (value <= 5) {
            elem.previousElementSibling.innerHTML = values[handle] + " лет";
          }
        })
      });
    })
  }

  if (document.querySelector('.cashForm-step')) {
    var cashFormStep = document.querySelectorAll('.cashForm-step');
    cashFormStep.forEach(item => {
      noUiSlider.create(item, {
        start: [1500000],
        connect: [true, false],
        step: 5000,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          'min': [100000],
          'max': [5000000]
        },
      });

      let pips = item.noUiSlider.pips({
        mode: 'positions',
        values: [0, 50, 100],
        format: wNumb({
          suffix: '₽'
        })
      });
      let attr = pips.querySelectorAll("[data-value]")
      let elem = Array.from(attr).splice(1)
      elem.forEach(function (el) {
        let i = el.dataset.value.substr(0, 1)
        el.innerHTML = i + " млн ₽"
      })
      item.noUiSlider.on('update', function (values, handle) {
        item.previousElementSibling.innerHTML = values[handle] + " ₽";
      });
    })
  }

  if (document.querySelector('.cashForm-year')) {
    var cashFormYear = document.querySelectorAll('.cashForm-year');

    cashFormYear.forEach(elem => {
      noUiSlider.create(elem, {
        start: [1],
        connect: [true, false],
        step: 1,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          'min': [1],
          '50%': [3],
          'max': [5]
        },
      });

      let pips = elem.noUiSlider.pips({
        mode: 'positions',
        values: [0, 50, 100],
        format: wNumb({
          suffix: ' год',
        }),
      });
      let attrYear = pips.querySelectorAll("[data-value]")

      let elem3 = Array.from(attrYear).splice(1, 2)
      elem3.forEach(function (el) {
        let i = el.dataset.value.substr(0, 1)
        el.innerHTML = i + " лет"
      })

      let elem2 = Array.from(attrYear).splice(1, 1)
      elem2.forEach(function (el) {
        let i = el.dataset.value.substr(0, 1)
        el.innerHTML = i + " года"
      })
      elem.noUiSlider.on('update', function (values, handle) {
        elem.previousElementSibling.innerHTML = values[handle] + " лет";

        values.forEach(item => {
          var value = Number(item) % 10 === 0 ? 5 : Number(item) % 10
          if (value === 1) {
            elem.previousElementSibling.innerHTML = values[handle] + " год";
          } else if (value <= 4) {
            elem.previousElementSibling.innerHTML = values[handle] + " годa";
          } else if (value <= 5) {
            elem.previousElementSibling.innerHTML = values[handle] + " лет";
          }
        })
      });
    })
  }


  if (document.querySelector(".select-js-main")) {
    select = $('.select-js-main').selectize({
      selectSmartPositioning: false,
      selectVisibleOptions: 5
    });
  }

  $(".date").mask("99.99.9999");
  $(".phone").mask("+7 (999) 999-99-99");

  const driverAdd = document.querySelector("#driverAdd")

  if (driverAdd) {
    driverAdd.addEventListener("click", () => {
      const CalcFormClone = document.querySelectorAll(".calcForm__container--clone")
      const lastClone = CalcFormClone[CalcFormClone.length - 1];
      const CalcFormCloneItem = lastClone.cloneNode(true);

      lastClone.insertAdjacentHTML("afterend", '')
      const clones = document.querySelector('.calcForm__container');
      clones.appendChild(CalcFormCloneItem);
    })
  }


  const formTargetAll = document.querySelectorAll('.purpose__target');
  const calcFormAttention = document.querySelector(".purpose__attention")

  formTargetAll.forEach((element, index) => {
    element.addEventListener("click", function (event) {
      if (index === 1) {
        calcFormAttention.style.opacity = "1";
        calcFormAttention.style.zIndex = "0";
        calcFormAttention.style.visibility = "visible";
      } else {
        calcFormAttention.style.opacity = "0";
        calcFormAttention.style.zIndex = "-1";
        calcFormAttention.style.visibility = "hidden";
      }
    })
  });


  const localeDate = {
    format: "DD.MM.YYYY",
    customRangeLabel: "Custom",
    daysOfWeek: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
  }

  $('input[name="daterangeFrom"]').daterangepicker({
      singleDatePicker: true,
      autoApply: true,
      locale: localeDate,
    },
    function (start, end, label) {
      $('input[name="daterangeTo"]').val(start.add(1, "years").format("DD.MM.YYYY"));
    }
  );

  $('input[name="daterangeTo"]').daterangepicker({
      singleDatePicker: true,
      autoApply: true,
      startDate: moment().add(1, "years"),
      period: "year",
      locale: localeDate,
    },
    function (start, end, label) {}
  );

  $('input[name="daterange"]').daterangepicker({
      singleDatePicker: true,
      autoApply: true,
      locale: localeDate,
    },
    function (start, end, label) {
      $('input[name="daterangeMonth"]').val(start.add(1, "month").format("DD.MM.YYYY"));
    }
  );

  $('input[name="daterangeMonth"]').daterangepicker({
      singleDatePicker: true,
      autoApply: true,
      startDate: moment().add(1, "month"),
      period: "month",
      locale: localeDate,
    },
    function (start, end, label) {}
  );


  $('.company__content-title, .accordion__content-title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
  });


  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.tabjs-info');

  targetMap.forEach(elem => {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      var target = this.getAttribute('data-target');
      map.forEach(elem => {
        elem.classList.remove('tabjs-info-opacity', 'tabjs-info-active');
      });
      targetMap.forEach(elem => {
        elem.classList.remove('tabjs-active');
      });
      this.classList.add('tabjs-active');
      var cat = document.querySelector('[data-info="' + target + '"]');
      cat.classList.add('tabjs-info-active');
      setTimeout(() => {
        cat.classList.add('tabjs-info-opacity');
      }, 400);
    });
  });

  var targetType = document.querySelectorAll('[data-type]'),
    tab = document.querySelectorAll('.tabjs-list');

  targetType.forEach(elem => {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      var type = this.getAttribute('data-type');
      tab.forEach(elem => {
        elem.classList.remove('tabjs-info-opacity', 'tabjs-info-active');
      });
      targetType.forEach(elem => {
        elem.classList.remove('tabjs-active');
      });
      this.classList.add('tabjs-active');
      var cat = document.querySelector('[data-list="' + type + '"]');
      cat.classList.add('tabjs-info-active');
      setTimeout(() => {
        cat.classList.add('tabjs-info-opacity');
      }, 400);
    });
  });

  var targetOsago = document.querySelectorAll('[data-osago]'),
    tabOsago = document.querySelectorAll('.osago-list');

  targetOsago.forEach(elem => {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      var type = this.getAttribute('data-osago');
      tabOsago.forEach(elem => {
        elem.classList.remove('osago-info-opacity', 'osago-info-active');
      });
      targetOsago.forEach(elem => {
        elem.classList.remove('osago-active');
      });
      this.classList.add('osago-active');
      var cat = document.querySelector('[data-item="' + type + '"]');
      cat.classList.add('osago-info-active');
      setTimeout(() => {
        cat.classList.add('osago-info-opacity');
      }, 400);
    });
  });

  var targetAccident = document.querySelectorAll('[data-accident]'),
    tabAccident = document.querySelectorAll('.accident-list');

  targetAccident.forEach(elem => {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      var type = this.getAttribute('data-accident');
      tabAccident.forEach(elem => {
        elem.classList.remove('accident-info-opacity', 'accident-info-active');
      });
      targetAccident.forEach(elem => {
        elem.classList.remove('accident-active');
      });
      this.classList.add('accident-active');
      var cat = document.querySelector('[data-elem="' + type + '"]');
      cat.classList.add('accident-info-active');
      setTimeout(() => {
        cat.classList.add('accident-info-opacity');
      }, 400);
    });
  });

  var targetMortgage = document.querySelectorAll('[data-mortgage]'),
    tabAccident = document.querySelectorAll('.mortgage-list');

  targetMortgage.forEach(elem => {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      var type = this.getAttribute('data-mortgage');
      tabAccident.forEach(elem => {
        elem.classList.remove('mortgage-info-opacity', 'mortgage-info-active');
      });
      targetMortgage.forEach(elem => {
        elem.classList.remove('mortgage-active');
      });
      this.classList.add('mortgage-active');
      var cat = document.querySelector('[data-element="' + type + '"]');
      cat.classList.add('mortgage-info-active');
      setTimeout(() => {
        cat.classList.add('mortgage-info-opacity');
      }, 400);
    });
  });


  const newsSwiper = new Swiper('.news__swiper', {
    navigation: {
      nextEl: '.news__next',
      prevEl: '.news__prev',
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
        spaceBetween: 27,
      },
      768: {
        slidesPerView: 2.1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2.1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      }
    }
  })
});