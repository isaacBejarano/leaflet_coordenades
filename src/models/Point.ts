class Pointer {
	private static readonly list: Pointer[] = [];
	private coordinates: [number, number];

	constructor(
		// prettier-ignore
		private latitude: number,
		private longitude: number,
		private place: string
	) {
		this.coordinates = [this.latitude, this.longitude];
		Pointer.list.push(this); // instances[]
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
		return Pointer.list;
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
