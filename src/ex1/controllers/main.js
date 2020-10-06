"use strict";
// (pre) Leaflet + Typescript -> Leaflet is type "L" -> npm i @types/leaflet
// DOM refs
var outletPlace = document.querySelector("#outlet-place span");
var outletLat = document.querySelector("#outlet-lat span");
var outletLong = document.querySelector("#outlet-long span");
// instances
(function () {
    new Coordinate(41.387011, 2.170048, "Plaça Catalunya");
    new Coordinate(41.386923, 2.165952, "Balmes, 16");
})();
// outlet <- Plç.Catalunya
outletPlace.textContent = Coordinate.getlist[0].getPlace;
outletLat.textContent = "" + Coordinate.getlist[0].getLatitude; // str
outletLong.textContent = "" + Coordinate.getlist[0].getLongitude; // str
// Map setup
var zoom = 16;
// prettier-ignore
var myMap = L.map("mapid")
    .setView([
    Coordinate.getlist[0].getLatitude,
    Coordinate.getlist[0].getLongitude
], zoom);
// OpenStreetMap
var tile_url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // open tiles
var attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
L.tileLayer(tile_url, { attribution: attribution }).addTo(myMap); // tiles ~ geographic images... get myMap injected
// marker
var marker = L.marker([Coordinate.getlist[0].getLatitude, Coordinate.getlist[0].getLongitude]).addTo(myMap);
// popup
var popup = marker.bindPopup("<b>Hello world!</b><br />I am a popup.");
popup.openPopup(); // IIFn
