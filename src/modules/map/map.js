window.INIT_MAP = function () {
  for (var id in window.MAPS) {
    if ($('#' + id).length) {
      const map = new ymaps.Map(id, {
        controls: ['fullscreenControl', 'zoomControl'],
        center:   window.MAPS[id],
        zoom:     10
      });

      map.geoObjects.add(new ymaps.Placemark(window.MAPS[id], {
        // balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
      }, {
        // preset: 'islands#icon',
        // iconColor: '#0095b6'
      }))
    }
  }
};