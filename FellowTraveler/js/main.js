$(document).ready(function () {
  $.mask.definitions['B'] = '[012]'
  $.mask.definitions['C'] = '[0123]'
  $.mask.definitions['D'] = '[012345]'
  $('.num').mask('9?99')
  $('.numTwo').mask('99?9')
  $('.time').mask('BC:D9')

  $('.accordion__box').click(function () {
    $(this).toggleClass('in').next().slideToggle()
  })

  const localeDate = {
    format: 'DD.MM.YYYY',
    customRangeLabel: 'Custom',
    daysOfWeek: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  }

  const inputRange = document.querySelectorAll('input[name="range"]')

  inputRange?.forEach((elem) => {
    $(elem).daterangepicker({
      singleDatePicker: true,
      autoApply: true,
      locale: localeDate,
      minDate: new Date(),
    })
  })

  const safetySwiper = new Swiper('.safety__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.safety__pagination',
      type: 'bullets',
      clickable: true,
    },
  })

  const topSwiper = new Swiper('.top__swiper', {
    slidesPerView: 1,
    effect: 'fade',
    navigation: {
      nextEl: '.top__swiper-prev',
      prevEl: '.top__swiper-next',
    },
  })
})
