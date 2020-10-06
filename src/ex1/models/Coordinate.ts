class Coordinate {
	private static readonly list: Coordinate[] = [];

	constructor(
		// prettier-ignore
		private latitude: number,
		private longitude: number,
		private place: string
	) {
		Coordinate.list.push(this); // instances[]
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
		return Coordinate.list;
	}
}
