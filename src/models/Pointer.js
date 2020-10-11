"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Object.defineProperty(Pointer, "getlist", {
        // getters
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
    // toString
    Pointer.prototype.AdressToString = function () {
        return this.place; // str
    };
    Pointer.prototype.GPStoString = function () {
        return this.latitude + ", " + this.longitude; // str
    };
    Pointer.prototype.latitudeToString = function () {
        return "" + this.latitude; // str
    };
    Pointer.prototype.longitudeToString = function () {
        return "" + this.longitude; // str
    };
    Pointer.list = [];
    return Pointer;
}());
exports.default = Pointer;
