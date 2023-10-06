const mapSection = document.querySelector('.map-1');

if (mapSection) {
  ymaps.ready(init);
  ymaps.ready(init2);

  function init() {
    let map = new ymaps.Map('map-1', {
      center: [55.763407, 37.619234], // ваши данные
      zoom: 18,
    });

    let placemark = new ymaps.Placemark([55.763407, 37.619234], {}, {});

    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }
  function init2() {
    let map = new ymaps.Map('map-2', {
      center: [56.019857, 92.838702], // ваши данные
      zoom: 18,
    });

    let placemark = new ymaps.Placemark([56.019857, 92.838702], {}, {});

    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }
}
