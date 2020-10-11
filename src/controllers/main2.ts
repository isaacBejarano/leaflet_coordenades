import L from "leaflet";
import Pointer from "../models/Pointer"; // JS module
import { mapBCN, markerAddress, markerGPS, markerOne } from "./main1"; // JS module

let markerNext: L.Marker = markerOne;

mapBCN.addEventListener("click", function (e: L.LeafletMouseEvent) {
	// 1. Point - user new instances
	let newPoint = new Pointer(e.latlng.lat, e.latlng.lng, "new Address");

	// 3. DOM - feedback update
	markerAddress.classList.add("d-none");
	markerGPS.children[1].textContent = newPoint.GPStoString();

	// 6. Marker - update
	markerNext.removeFrom(mapBCN); // remove old

	// L.marker(newPoint.getCoordinates)
	markerNext = L.marker(newPoint.getCoordinates) // update marker
		.addTo(mapBCN).bindPopup(`
			<b class="d-block pb-2">New Geo Location</b>
			<span class="d-block"><b>Lat:</b> ${newPoint.latitudeToString()}</span>
			<span class="d-block"><b>Long:</b> ${newPoint.longitudeToString()}</span>
		`);

	// 4. L.Map -> view + zoom update
	mapBCN.setView(newPoint.getCoordinates, mapBCN.getMaxZoom());
});
