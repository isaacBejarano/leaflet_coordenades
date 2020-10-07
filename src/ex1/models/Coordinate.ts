class Point {
	private static readonly list: Point[] = [];
	private coordinates: [number, number];

	constructor(
		// prettier-ignore
		private latitude: number,
		private longitude: number,
		private place: string
	) {
		this.coordinates = [this.latitude, this.longitude];
		Point.list.push(this); // instances[]
	}

	// getters
	get getLatitude() {
		return this.latitude;
	}

	get getLongitude() {
		return this.longitude;
	}

	get getPlace() {
		return this.place;
	}

	static get getlist() {
		return Point.list;
	}

	get getCoordinates(): [number, number] {
		return this.coordinates;
	}

	// methods
	AdresstoString() {
		return this.place;
	}
	GPStoString() {
		return this.latitude + ", " + this.longitude;
	}
}
