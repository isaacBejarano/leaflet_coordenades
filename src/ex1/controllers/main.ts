// npm i @types/leaflet => Leaflet + Typescript -> Leaflet is type "L"

// DOM refs
const markerAddress = document.querySelector("#outlet-address span") as HTMLSpanElement;
const markerGPS = document.querySelector("#outlet-gps span") as HTMLSpanElement;
const mapCenter = document.querySelector("#map-center span") as HTMLSpanElement;

// Point - instances
const catalunyaSq = new Point(41.387011, 2.170048, "Plaça Catalunya");
const balmes16 = new Point(41.386923, 2.165952, "C/ Balmes, 16");

// DOM - feedback <- Plç.Catalunya
markerAddress.textContent = balmes16.AdresstoString();
markerGPS.textContent = balmes16.GPStoString();
mapCenter.textContent = catalunyaSq.AdresstoString() + ". " + catalunyaSq.GPStoString();

// L.map + L.map.zomm  [0-18]
let mapBCN: L.Map = L.map("barcelona");
const minZ: number = 4; // ~ Spain
const maxZ: number = 16; // ~ Plç.Catalunya

mapBCN.setView(catalunyaSq.getCoordinates, minZ); // ~ Spain

// FX: zoom in
let zoomIncrement: number = 4;
let zommSpeed: number = 250;

for (let i = minZ; i < maxZ; i += zoomIncrement) {
	setTimeout(() => mapBCN.setZoom(i + zoomIncrement), i * zommSpeed);
}

// add Tiles
const tile_url: string = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // open tiles
const attribution: string = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';

L.tileLayer(tile_url, { attribution }).addTo(mapBCN);

// marker
// var marker = L.marker(balmes16.getCoordinates).addTo(mapBCN);

// popup
// var popup = marker.bindPopup("<b>Hello world!</b><br />I am a popup.");
// popup.openPopup(); // IIFn
