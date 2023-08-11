// var points = [
//   ['<div class="map-baloon"><p></p><p>1, корп. 2, микрорайон Смирновское Ущелье, Саратов, Россия</p></div>', "51.5360478", "45.9581039"],
// ];

var myMap
var oldCenter
var myCollection
var arrayBalloons = []

ymaps.ready(function () {
  // Коллекция гео-точек, добавленных на карту
  myCollection = new ymaps.GeoObjectCollection()
  // Помещаем карту в элемент DIV с id, равным «map»
  myMap = new ymaps.Map('mapYandex', {
    center: [51.5353048, 45.9802616], // Начальные значения центра карты
    zoom: 13, // Начальное значение зума карты
    controls: ['zoomControl'],
  })
  if ($(window).width() < 1024) {
    myMap.behaviors.disable('scrollZoom')
    myMap.behaviors.disable('drag')
  }
  // Перебираем в цикле точки, которые надо добавить на карту
  for (i = 0; i < points.length; i++) {
    var myPlacemark = new ymaps.Placemark(
      [points[i][1], points[i][2]],
      {
        //hintContent: points[i][0],
        balloonContent: points[i][0],
      },
      {
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        // iconImageHref: '../images/icons/marker-black.svg',
        // Размеры метки.
        iconImageSize: [64, 64],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-40, -50],
        balloonLayout: 'default#imageWithContent',
        balloonContentSize: [300, 120],
        balloonImageOffset: [-150, -150],
      }
    )
    // Не забываем добавить точку в коллекцию -
    //  впоследствии мы добавим всю коллекцию на карту
    myCollection.add(myPlacemark)
    arrayBalloons.push(myPlacemark)
    //myMap.geoObjects.add(myPlacemark);
    myMap.events.add('click', function (e) {
      console.log('hi')
      myMap.balloon.close()
    })
  }

  // Добавляем точки на карту
  myMap.geoObjects.add(myCollection)
  // Вычисляем необходимые координаты краёв карты и
  //  устанавливаем их для нашего экземпляра карты
  //myMap.setBounds( myCollection.getBounds() );
  myPlacemark.events.add('click', function (event) {
    event.preventDefault()
  })
})

function setCenter(x, y) {
  ymaps.ready(function () {
    myMap.setCenter([x, y], 13, {
      checkZoomRange: false,
    })
  })
}

function setCenterPos(x, y, i) {
  ymaps.ready(function () {
    myMap.setCenter([x, y], 13, {
      checkZoomRange: false,
    })
    oldCenter = myMap.getCenter()
  })
  $('body, html').animate(function () {
    scrollTo: $('.map-footer').offset().top
  })
  //arrayBalloons[i].balloon.open();
  return false
}

function overCenter(x, y) {
  ymaps.ready(function () {
    oldCenter = myMap.getCenter()
    setCenter(x, y)
  })
}

function oldPos() {
  ymaps.ready(function () {
    myMap.setCenter(oldCenter)
  })
}
