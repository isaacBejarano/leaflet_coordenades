export default class Pointer {
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
	static get getlist() {
		return Pointer.list;
	}

	get getCoordinates(): [number, number] {
		return this.coordinates;
	}

	// toString
	AdressToString() {
		return this.place; // str
	}
	GPStoString() {
		return this.latitude + ", " + this.longitude; // str
	}
	latitudeToString() {
		return "" + this.latitude; // str
	}
	longitudeToString() {
		return "" + this.longitude; // str
	}
}
