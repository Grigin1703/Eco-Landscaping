
function init(){
    let map = new ymaps.Map('map-test', {
        center: [39.959435727091865,-83.00002229314384],
        zoom: 16
    });

    let placemark = new ymaps.Placemark([39.96130778416243,-82.99908350801343], {}, {


    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты 
    map.geoObjects.add(placemark);
}

ymaps.ready(init);