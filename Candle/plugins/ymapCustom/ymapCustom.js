var points = [
  [
    '<div class="map-baloon"><p></p><p>ул. Елшанская, 9, Саратов, Саратовская обл., 410086</p></div>',
    '51.6104650554028',
    '45.909690299999994',
  ],
]

ymaps.ready(function () {
  myCollection = new ymaps.GeoObjectCollection()
  myMap = new ymaps.Map('mapYandex', {
    center: [51.6104650554028, 45.909690299999994],
    zoom: 14,
    controls: ['zoomControl'],
  })
  if ($(window).width() < 1024) {
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
        iconImageHref: '../images/icons/marker.svg',
        iconImageSize: [34, 46],
        balloonLayout: 'default#imageWithContent',
      }
    )
    myCollection.add(myPlacemark)
    myMap.geoObjects.add(myPlacemark)
    myMap.events.add('click', function (e) {
      console.log('hi')
      myMap.balloon.close()
    })
  }

  myMap.geoObjects.add(myCollection)
  myPlacemark.events.add('click', function (event) {
    event.preventDefault()
  })
})
