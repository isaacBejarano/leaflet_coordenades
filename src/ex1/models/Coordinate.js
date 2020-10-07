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
    Object.defineProperty(Point.prototype, "getLatitude", {
        // getters
        get: function () {
            return this.latitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "getLongitude", {
        get: function () {
            return this.longitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "getPlace", {
        get: function () {
            return this.place;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point, "getlist", {
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
    // methods
    Point.prototype.AdresstoString = function () {
        return this.place;
    };
    Point.prototype.GPStoString = function () {
        return this.latitude + ", " + this.longitude;
    };
    Point.list = [];
    return Point;
}());
