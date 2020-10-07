"use strict";
mapBCN.addEventListener("click", function (e) {
    // 1. Point - user new instances
    var newPoint = new Point(e.latlng.lat, e.latlng.lng, "new Address");
    // 3. DOM - feedback update
    markerAddress.classList.add("d-none");
    markerGPS.children[1].textContent = newPoint.GPStoString();
    // 6. Marker - update
    marker.removeFrom(mapBCN); // remove old
    marker =
        // prettier-ignore
        L.marker(newPoint.getCoordinates) // update
            .addTo(mapBCN)
            .bindPopup("\n\t\t\t<b class=\"d-block pb-2\">New Geo Location</b>\n\t\t\t<span class=\"d-block\"><b>Lat:</b> " + newPoint.latitudeToString() + "</span>\n\t\t\t<span class=\"d-block\"><b>Long:</b> " + newPoint.longitudeToString() + "</span>\n\t\t");
    // 4. L.Map -> view + zoom update
    mapBCN.setView(newPoint.getCoordinates, mapBCN.getMaxZoom());
});
