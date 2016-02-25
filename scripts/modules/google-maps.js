
(function setupGoogleMaps () {
    'use strict';

    var styles = [{
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [{
            "color": "#d6def0"
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "gamma": 0.01
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "saturation": -31
        }, {
            "lightness": -33
        }, {
            "weight": 2
        }, {
            "gamma": 0.8
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "lightness": 30
        }, {
            "saturation": 30
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "saturation": 20
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "lightness": 20
        }, {
            "saturation": -20
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#aab9ea"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#787878"
        }, {
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#aab9ea"
        }]
    }, {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "lightness": 10
        }, {
            "saturation": -30
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
            "saturation": "0"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
            "saturation": 25
        }, {
            "lightness": 25
        }, {
            "color": "#f0efee"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#b4b4b4"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fafafa"
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#aab9ea"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "lightness": -20
        }]
    }, {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }];
    var options = {
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
        center: new google.maps.LatLng(50.026911, 21.994237),
        zoom: 16,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: false,
        draggable: true,
        zoomControl: true,
        mapTypeId: 'Styled'
    };
    var div = document.getElementById('map');
    var map = new google.maps.Map(div, options);
    var styledMapType = new google.maps.StyledMapType(styles, {
        name: 'Styled'
    });
    map.mapTypes.set('Styled', styledMapType);
    var myMarker = new google.maps.Marker({
        position: new google.maps.LatLng(50.026911, 21.994237), // Position of placemarker
        map: map, // References the map object I defined earlier
        icon: 'img/placemark-icon.png' // Custom placemarker icon path
    });

    window.setupGoogleMaps = setupGoogleMaps;
}());
