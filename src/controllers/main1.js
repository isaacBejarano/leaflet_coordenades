"use strict";
// (pre) npm i @types/leaflet -> Leaflet type "L"
// (pre) npm i @types/node
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marker = exports.markerGPS = exports.markerAddress = exports.mapBCN = void 0;
var leaflet_1 = __importDefault(require("leaflet"));
var Pointer_1 = __importDefault(require("../models/Pointer")); // JS module
require("../views/main.css"); // CSS module
// 1. Point - instances
(function () {
    new Pointer_1.default(41.386983, 2.170078, "Plaça Catalunya");
    new Pointer_1.default(41.386891, 2.166002, "Carrer de Balmes, 16, 08007 Barcelona");
})();
// 2. map - starting center ~ Plç.Catalunya
var mapCenter = document.querySelector("#map-center span");
mapCenter.textContent = Pointer_1.default.getlist[0].AdressToString() + ". " + Pointer_1.default.getlist[0].GPStoString();
// 3. DOM - feedback
var markerAddress = document.querySelector("#outlet-address");
exports.markerAddress = markerAddress;
var markerGPS = document.querySelector("#outlet-gps");
exports.markerGPS = markerGPS;
markerAddress.children[1].textContent = Pointer_1.default.getlist[1].AdressToString();
markerGPS.children[1].textContent = Pointer_1.default.getlist[1].GPStoString();
// 4. L.Map -> view + zoom setup
var minZoom = 5; // ~ Spain
var maxZoom = 16; // ~ Plç.Catalunya
var mapBCN = 
// prettier-ignore
leaflet_1.default.map("barcelona")
    .setView(Pointer_1.default.getlist[0].getCoordinates, minZoom); // ~ Spain
exports.mapBCN = mapBCN;
// 5. Tiles - add
var tile_url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // open tiles
var attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
var tiles = 
// prettier-ignore
leaflet_1.default.tileLayer(tile_url, { attribution: attribution })
    .addTo(mapBCN);
// 6. Marker - add
var marker = leaflet_1.default.marker(Pointer_1.default.getlist[1].getCoordinates)
    // prettier-ignore
    .addTo(mapBCN).bindPopup("\n\t\t\t<b class=\"d-block pb-2\">Restaurant Centfocs</b>\n\t\t\t<span class=\"d-block\">Meditearranean Restaurant</span>\n\t\t\t<span class=\"d-block\">" + Pointer_1.default.getlist[1].AdressToString() + "</span>\n\t\t");
exports.marker = marker;
// 7. Zoom -> effect zoom in
var zoomIncrement = 0.5;
var zommSpeed = 275;
var _loop_1 = function (i) {
    setTimeout(function () { return mapBCN.setZoom(i + zoomIncrement); }, i * zommSpeed);
};
for (var i = minZoom; i < maxZoom; i += zoomIncrement) {
    _loop_1(i);
}
