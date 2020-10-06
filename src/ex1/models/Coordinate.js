"use strict";
var Coordinate = /** @class */ (function () {
    function Coordinate(
    // prettier-ignore
    latitude, longitude, place) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.place = place;
        Coordinate.list.push(this); // instances[]
    }
    Object.defineProperty(Coordinate.prototype, "getLatitude", {
        // getters
        get: function () {
            return this.latitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coordinate.prototype, "getLongitude", {
        get: function () {
            return this.longitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coordinate.prototype, "getPlace", {
        get: function () {
            return this.place;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coordinate, "getlist", {
        get: function () {
            return Coordinate.list;
        },
        enumerable: false,
        configurable: true
    });
    Coordinate.list = [];
    return Coordinate;
}());
