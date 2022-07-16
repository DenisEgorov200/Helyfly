ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [55.75749303, 37.61569861],
        zoom: 14
    });

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Встречаемся тут',
                balloonContent: 'Встречаемся тут'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './assets/images/icon/map-point.png',
                // Размеры метки.
                iconImageSize: [50, 60],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),
    
        myMap.geoObjects
            .add(myPlacemark)
}