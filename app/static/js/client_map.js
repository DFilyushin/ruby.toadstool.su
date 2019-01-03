ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [52.285577, 76.940947],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            clusterize: true,
            gridSize: 64,
            hasBalloon: false,
            hasHint: false,
            clusterDisableClickZoom: true
        });
    objectManager.objects.options.set('preset', 'islands#blueCircleDotIcon');
    objectManager.clusters.options.set('preset', 'islands#lightBlueClusterIcons');
    myMap.geoObjects.add(objectManager);

    var myPlKsk1 = new ymaps.Placemark([52.278761, 76.969738], {content: 'Ремсервис ПВ', balloonContent: 'Ремсервис ПВ'});
    var myPlKsk2 = new ymaps.Placemark([52.281137, 76.973077], {content: 'Ремсервис 2007', balloonContent: 'Ремсервис 2007'});
    var myPlKsk3 = new ymaps.Placemark([52.288885, 76.953229], {content: 'Сокол', balloonContent: 'Сокол'});
    var myPlKsk4 = new ymaps.Placemark([52.293652, 76.952540], {content: 'Прометей', balloonContent: 'Прометей'});
    var myPlKsk5 = new ymaps.Placemark([52.296481, 76.950663], {content: 'Сокол-1', balloonContent: 'Сокол-1'});
    var myPlKsk6 = new ymaps.Placemark([52.300103, 76.951629], {content: 'Аскен', balloonContent: 'Аскен'});
    var myPlKsk7 = new ymaps.Placemark([52.281164, 76.970295], {content: 'Алем-2014', balloonContent: 'Алем-2014'});
    var myPlKsk8 = new ymaps.Placemark([52.269432, 76.974189], {content: 'Валентина', balloonContent: 'Валентина'});
    var myPlKsk9 = new ymaps.Placemark([52.268239, 76.943496], {content: 'Кереку', balloonContent: 'Кереку'});
    var myPlKsk10 = new ymaps.Placemark([52.300895, 76.919167], {content: 'Береговое', balloonContent: 'Береговое'});
    var myPlKsk11 = new ymaps.Placemark([52.293486, 76.938220], {content: 'Томир', balloonContent: 'Томир'});
    var myPlKsk12 = new ymaps.Placemark([52.293486, 76.938220], {content: 'Перфектум', balloonContent: 'Перфектум'});
    var myPlKsk13 = new ymaps.Placemark([52.292193, 76.959935], {content: 'Северяне', balloonContent: 'Северяне'});
    var myPlKsk14 = new ymaps.Placemark([52.266777, 76.956450], {content: 'Ваш дом', balloonContent: 'Ваш дом'});
    var myPlKsk15 = new ymaps.Placemark([52.251206, 76.953035], {content: 'ИП Искакова', balloonContent: 'ИП Искакова'});

    myMap.geoObjects.add(myPlKsk1);
    myMap.geoObjects.add(myPlKsk2);
    myMap.geoObjects.add(myPlKsk3);
    myMap.geoObjects.add(myPlKsk4);
    myMap.geoObjects.add(myPlKsk5);
    myMap.geoObjects.add(myPlKsk6);
    myMap.geoObjects.add(myPlKsk7);
    myMap.geoObjects.add(myPlKsk8);
    myMap.geoObjects.add(myPlKsk9);
    myMap.geoObjects.add(myPlKsk10);
    myMap.geoObjects.add(myPlKsk11);
    myMap.geoObjects.add(myPlKsk12);
    myMap.geoObjects.add(myPlKsk13);
    myMap.geoObjects.add(myPlKsk14);
    myMap.geoObjects.add(myPlKsk15);
    myPlacemark = new ymaps.Placemark([52.251206, 76.953035 ], { content: 'Москва!', balloonContent: 'Столица России' });

    //objectManager.add(myPlacemark1);
    //objectManager.add(myPlacemark2);
    //objectManager.add(myPlacemark3);
}