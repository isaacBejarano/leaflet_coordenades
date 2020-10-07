"use strict";
var Pointer = /** @class */ (function () {
    function Pointer(
    // prettier-ignore
    latitude, longitude, place) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.place = place;
        this.coordinates = [this.latitude, this.longitude];
        Pointer.list.push(this); // instances[]
    }
    Object.defineProperty(Pointer.prototype, "getLatitude", {
        // getters
        get: function () {
            return this.latitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pointer.prototype, "getLongitude", {
        get: function () {
            return this.longitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pointer.prototype, "getPlace", {
        get: function () {
            return this.place;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pointer, "getlist", {
        get: function () {
            return Pointer.list;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pointer.prototype, "getCoordinates", {
        get: function () {
            return this.coordinates;
        },
        enumerable: false,
        configurable: true
    });
    // methods
    Pointer.prototype.AdresstoString = function () {
        return this.place;
    };
    Pointer.prototype.GPStoString = function () {
        return this.latitude + ", " + this.longitude;
    };
    Pointer.list = [];
    return Pointer;
}());
