"use strict";
var Point = /** @class */ (function () {
    function Point(
    // prettier-ignore
    latitude, longitude, place) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.place = place;
        this.coordinates = [this.latitude, this.longitude];
        Point.list.push(this); // instances[]
    }
    Object.defineProperty(Point, "getlist", {
        // getters
        get: function () {
            return Point.list;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "getCoordinates", {
        get: function () {
            return this.coordinates;
        },
        enumerable: false,
        configurable: true
    });
    // toString
    Point.prototype.AdressToString = function () {
        return this.place; // str
    };
    Point.prototype.GPStoString = function () {
        return this.latitude + ", " + this.longitude; // str
    };
    Point.prototype.latitudeToString = function () {
        return "" + this.latitude; // str
    };
    Point.prototype.longitudeToString = function () {
        return "" + this.longitude; // str
    };
    Point.list = [];
    return Point;
}());
