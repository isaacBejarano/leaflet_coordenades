mapBCN.addEventListener("click", function (e: L.LeafletMouseEvent) {
	// 1. Point - user new instances
	let newPoint = new Point(e.latlng.lat, e.latlng.lng, "new Address");

	// 3. DOM - feedback update
	markerAddress.classList.add("d-none");
	markerGPS.children[1].textContent = newPoint.GPStoString();

	// 6. Marker - update
	marker.removeFrom(mapBCN); // remove old
	marker =
		// prettier-ignore
		L.marker(newPoint.getCoordinates) // update
		.addTo(mapBCN)
		.bindPopup(`
			<b class="d-block pb-2">New Geo Location</b>
			<span class="d-block"><b>Lat:</b> ${newPoint.latitudeToString()}</span>
			<span class="d-block"><b>Long:</b> ${newPoint.longitudeToString()}</span>
		`);

	// 4. L.Map -> view + zoom update
	mapBCN.setView(newPoint.getCoordinates, mapBCN.getMaxZoom());
});
