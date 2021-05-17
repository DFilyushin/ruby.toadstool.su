ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [52.285577, 76.940947],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            clusterize: true,
            clusterDisableClickZoom: true
        });
    objectManager.objects.options.set('preset', 'islands#blueCircleDotIcon');
    objectManager.clusters.options.set('preset', 'islands#blueClusterIcons');

    myMap.geoObjects.add(objectManager);

    $.getJSON("js/orgs.json", function (json) {
        json.forEach(function (currentValue, index, array) {
                mark = new ymaps.Placemark(currentValue.coords, {
                    content: currentValue.name,
                    balloonContent: currentValue.description
                })
                myMap.geoObjects.add(mark)
            }
        )
    })
}
