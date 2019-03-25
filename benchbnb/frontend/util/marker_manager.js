

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        console.log("Time to UPYDATE")
        for (let i = 0; i < benches.length; i++) {
            let bench = benches[i];
            if (this.markers[bench.id] === undefined) {
                this.createMarkerFromBench(bench);
            }
        }
    }

    createMarkerFromBench(bench) {
        this.markers[bench.id] = bench;
        const location = { lat: bench.lat, lng: bench.lng }
        let marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: bench.description,
        });
        marker.setMap(this.map);
    }
}