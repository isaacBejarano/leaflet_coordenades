// (pre) npm i @types/leaflet -> Leaflet type "L"
// (pre) npm i @types/node

// 1. Point - instances
(() => {
	new Point(41.386983, 2.170078, "Plaça Catalunya");
	new Point(41.386891, 2.166002, "Carrer de Balmes, 16, 08007 Barcelona");
})();

// 2. map - starting center ~ Plç.Catalunya
const mapCenter = document.querySelector("#map-center span") as HTMLSpanElement;
mapCenter.textContent = Point.getlist[0].AdressToString() + ". " + Point.getlist[0].GPStoString();

// 3. DOM - feedback
const markerAddress = document.querySelector("#outlet-address") as HTMLParagraphElement;
const markerGPS = document.querySelector("#outlet-gps") as HTMLParagraphElement;

markerAddress.children[1].textContent = Point.getlist[1].AdressToString();
markerGPS.children[1].textContent = Point.getlist[1].GPStoString();

// 4. L.Map -> view + zoom setup
const minZoom: number = 5; // ~ Spain
const maxZoom: number = 16; // ~ Plç.Catalunya
const mapBCN: L.Map =
	// prettier-ignore
	L.map("barcelona")
	.setView(Point.getlist[0].getCoordinates, minZoom); // ~ Spain

// 5. Tiles - add
const tile_url: string = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // open tiles
const attribution: string = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
const tiles: L.TileLayer =
	// prettier-ignore
	L.tileLayer(tile_url, { attribution })
	.addTo(mapBCN);

// 6. Marker - add
let marker: L.Marker =
	// prettier-ignore
	L.marker(Point.getlist[1].getCoordinates)
	.addTo(mapBCN)
	.bindPopup(`
		<b class="d-block pb-2">Restaurant Centfocs</b>
		<span class="d-block">Meditearranean Restaurant</span>
		<span class="d-block">${Point.getlist[1].AdressToString()}</span>
	`);

// 7. Zoom -> effect zoom in
const zoomIncrement: number = 0.5;
const zommSpeed: number = 275;

for (let i = minZoom; i < maxZoom; i += zoomIncrement) {
	setTimeout(() => mapBCN.setZoom(i + zoomIncrement), i * zommSpeed);
}
