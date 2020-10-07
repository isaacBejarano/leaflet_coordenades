"use strict";
// npm i @types/leaflet => Leaflet + Typescript -> Leaflet is type "L"
// DOM refs
var markerAddress = document.querySelector("#outlet-address span");
var markerGPS = document.querySelector("#outlet-gps span");
var mapCenter = document.querySelector("#map-center span");
// Pointer - instances
var catalunyaSq = new Pointer(41.387011, 2.170048, "Plaça Catalunya");
var balmes16 = new Pointer(41.386923, 2.165952, "C/ Balmes, 16");
// DOM - feedback <- Plç.Catalunya
markerAddress.textContent = balmes16.AdresstoString();
markerGPS.textContent = balmes16.GPStoString();
mapCenter.textContent = catalunyaSq.AdresstoString() + ". " + catalunyaSq.GPStoString();
// L.map + L.map.zomm  [0-18]
var mapBCN = L.map("barcelona");
var minZ = 4; // ~ Spain
var maxZ = 16; // ~ Plç.Catalunya
mapBCN.setView(catalunyaSq.getCoordinates, minZ); // ~ Spain
// effect -> zoom in
var zoomIncrement = 4;
var zommSpeed = 250;
var _loop_1 = function (i) {
    setTimeout(function () { return mapBCN.setZoom(i + zoomIncrement); }, i * zommSpeed);
};
for (var i = minZ; i < maxZ; i += zoomIncrement) {
    _loop_1(i);
}
// add Tiles
var tile_url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // open tiles
var attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
L.tileLayer(tile_url, { attribution: attribution }).addTo(mapBCN);
// marker
// prettier-ignore
L.marker(balmes16.getCoordinates)
    .addTo(mapBCN)
    .bindPopup("\n\t\t<b class=\"d-block pb-2\">Restaurant Centfocs</b>\n\t\t<span class=\"d-block\">Mediterranean Restaurant</span>\n\t\t<span class=\"d-block\">Carrer de Balmes, 16, 08007 Barcelona</span>\n\t");
