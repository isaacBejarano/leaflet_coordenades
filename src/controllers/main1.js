"use strict";
// (pre) npm i @types/leaflet -> Leaflet type "L"
// (pre) npm i @types/node
// 1. Point - instances
(function () {
    new Point(41.386983, 2.170078, "Plaça Catalunya");
    new Point(41.386891, 2.166002, "Carrer de Balmes, 16, 08007 Barcelona");
})();
// 2. map - starting center ~ Plç.Catalunya
var mapCenter = document.querySelector("#map-center span");
mapCenter.textContent = Point.getlist[0].AdressToString() + ". " + Point.getlist[0].GPStoString();
// 3. DOM - feedback
var markerAddress = document.querySelector("#outlet-address");
var markerGPS = document.querySelector("#outlet-gps");
markerAddress.children[1].textContent = Point.getlist[1].AdressToString();
markerGPS.children[1].textContent = Point.getlist[1].GPStoString();
// 4. L.Map -> view + zoom setup
var minZoom = 5; // ~ Spain
var maxZoom = 16; // ~ Plç.Catalunya
var mapBCN = 
// prettier-ignore
L.map("barcelona")
    .setView(Point.getlist[0].getCoordinates, minZoom); // ~ Spain
// 5. Tiles - add
var tile_url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // open tiles
var attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
var tiles = 
// prettier-ignore
L.tileLayer(tile_url, { attribution: attribution })
    .addTo(mapBCN);
// 6. Marker - add
var marker = 
// prettier-ignore
L.marker(Point.getlist[1].getCoordinates)
    .addTo(mapBCN)
    .bindPopup("\n\t\t<b class=\"d-block pb-2\">Restaurant Centfocs</b>\n\t\t<span class=\"d-block\">Meditearranean Restaurant</span>\n\t\t<span class=\"d-block\">" + Point.getlist[1].AdressToString() + "</span>\n\t");
// 7. Zoom -> effect zoom in
var zoomIncrement = 0.5;
var zommSpeed = 275;
var _loop_1 = function (i) {
    setTimeout(function () { return mapBCN.setZoom(i + zoomIncrement); }, i * zommSpeed);
};
for (var i = minZoom; i < maxZoom; i += zoomIncrement) {
    _loop_1(i);
}
