ymaps.ready(function () {
  const pointA = document.querySelector('#pointA')
  const pointB = document.querySelector('#pointB')

  var myMap = new ymaps.Map(
    'mapYandex',
    {
      center: [55.753994, 37.622093],
      zoom: 9,
    },
    {
      searchControlProvider: 'yandex#search',
    }
  )

  const routeCoords = {
    A: {},
    B: {},
  }

  // Слушаем клик на карте.
  myMap.events.add('click', function (e) {
    if (!Object.keys(routeCoords.A).length) {
      let coords = e.get('coords')
      let myPlacemark = createPlacemark(coords)
      placePlacemark(myPlacemark, 'A')
    } else if (!Object.keys(routeCoords.B).length) {
      let coords = e.get('coords')
      let myPlacemark = createPlacemark(coords)
      placePlacemark(myPlacemark, 'B')

      buildRoute(routeCoords.A, routeCoords.B)
    }
  })

  function placePlacemark(placemark, point) {
    placemark.options.set({
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: point === 'A' ? './images/icons/blue.svg' : './images/icons/orange.svg',
      // Размеры метки.
      iconImageSize: [20, 20],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-10, -10],
    })
    myMap.geoObjects.add(placemark)
    // Слушаем событие окончания перетаскивания на метке.
    placemark.events.add('dragend', function () {
      getAddress(placemark, point)
      routeCoords[point] = placemark
      buildRoute(routeCoords.A, routeCoords.B)
    })
    getAddress(placemark, point)
    routeCoords[point] = placemark
  }

  function buildRoute(from, to) {
    // Удаление текущего маршрута
    myMap.geoObjects.remove(activeRoure.get())

    var multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        // Точки маршрута. Точки могут быть заданы как координатами, так и адресом.
        referencePoints: [from, to],
      },
      {
        // Автоматически устанавливать границы карты так,
        // чтобы маршрут был виден целиком.
        boundsAutoApply: true,
        // Цвет второстепенного машрута
        routeStrokeColor: 'bebebe',
        // Цвет активного маршрута
        routeActiveStrokeColor: '0069bd',
        routeStrokeWidth: 8,
        wayPointFinishVisible: false,
        wayPointStartVisible: false,
      }
    )

    // Добавление маршрута на карту.
    myMap.geoObjects.add(multiRoute)
    // Сохранение активного маршрута
    activeRoure.set(multiRoute)
  }

  const activeRoure = {
    route: undefined,

    set: (inputroute) => {
      this.route = inputroute
    },
    get: () => {
      return this.route
    },
  }

  // Создание метки.
  function createPlacemark(coords) {
    return new ymaps.Placemark(
      coords,
      {
        iconCaption: 'поиск...',
      },
      {
        preset: 'islands#violetDotIconWithCaption',
        draggable: true,
      }
    )
  }

  // Определяем адрес по координатам (обратное геокодирование).
  function getAddress(placemark, point) {
    placemark.properties.set('iconCaption', 'поиск...')
    ymaps.geocode(placemark.geometry.getCoordinates()).then(function (res) {
      var firstGeoObject = res.geoObjects.get(0)

      point === 'A'
        ? (pointA.value = firstGeoObject.getAddressLine())
        : (pointB.value = firstGeoObject.getAddressLine())

      // placemark.properties.set({
      //   // Формируем строку с данными об объекте.
      //   iconCaption: [
      //     // Название населенного пункта или вышестоящее административно-территориальное образование.
      //     firstGeoObject.getLocalities().length
      //       ? firstGeoObject.getLocalities()
      //       : firstGeoObject.getAdministrativeAreas(),
      //     // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
      //     firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
      //   ]
      //     .filter(Boolean)
      //     .join(", "),
      //   // В качестве контента балуна задаем строку с адресом объекта.
      //   balloonContent: firstGeoObject.getAddressLine(),
      // });
    })
  }

  pointA.addEventListener('change', () => {
    let myGeocoder = ymaps.geocode(pointA.value)
    myGeocoder.then(function (res) {
      let firstGeoObject = res.geoObjects.get(0)
      coords = firstGeoObject.geometry.getCoordinates()

      if (!Object.keys(routeCoords.A).length) {
        let placemark = createPlacemark(coords)
        placePlacemark(placemark, 'A')
      } else {
        let placemark = routeCoords.A
        placemark.geometry.setCoordinates(coords)
        getAddress(placemark, 'A')
      }

      if (pointB.value !== '') {
        buildRoute(routeCoords.A, routeCoords.B)
      } else {
        myMap.panTo(coords)
      }
    })
  })

  pointB.addEventListener('change', () => {
    let myGeocoder = ymaps.geocode(pointB.value)
    myGeocoder.then(function (res) {
      let firstGeoObject = res.geoObjects.get(0)
      coords = firstGeoObject.geometry.getCoordinates()

      if (!Object.keys(routeCoords.B).length) {
        let placemark = createPlacemark(coords)
        placePlacemark(placemark, 'B')
      } else {
        let placemark = routeCoords.B
        placemark.geometry.setCoordinates(coords)
        getAddress(placemark, 'B')
      }

      if (pointA.value !== '') {
        buildRoute(routeCoords.A, routeCoords.B)
      } else {
        myMap.panTo(coords)
      }
    })
  })
})
