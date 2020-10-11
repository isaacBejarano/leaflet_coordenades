"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var leaflet_1 = __importDefault(require("leaflet"));
var Pointer_1 = __importDefault(require("../models/Pointer")); // JS module
var main1_1 = require("./main1"); // JS module
var markerNext = main1_1.markerOne;
main1_1.mapBCN.addEventListener("click", function (e) {
    // 1. Point - user new instances
    var newPoint = new Pointer_1.default(e.latlng.lat, e.latlng.lng, "new Address");
    // 3. DOM - feedback update
    main1_1.markerAddress.classList.add("d-none");
    main1_1.markerGPS.children[1].textContent = newPoint.GPStoString();
    // 6. Marker - update
    markerNext.removeFrom(main1_1.mapBCN); // remove old
    // L.marker(newPoint.getCoordinates)
    markerNext = leaflet_1.default.marker(newPoint.getCoordinates) // update marker
        .addTo(main1_1.mapBCN).bindPopup("\n\t\t\t<b class=\"d-block pb-2\">New Geo Location</b>\n\t\t\t<span class=\"d-block\"><b>Lat:</b> " + newPoint.latitudeToString() + "</span>\n\t\t\t<span class=\"d-block\"><b>Long:</b> " + newPoint.longitudeToString() + "</span>\n\t\t");
    // 4. L.Map -> view + zoom update
    main1_1.mapBCN.setView(newPoint.getCoordinates, main1_1.mapBCN.getMaxZoom());
});
