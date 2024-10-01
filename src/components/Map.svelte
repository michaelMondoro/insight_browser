<script>
	import L from 'leaflet';
    import { onMount } from 'svelte';
	
	export let data;
	export let site = undefined;

	let map;
	let mapData;
	let DefaultIcon = L.icon({
		iconUrl: "../public/marker-icon.png",
		shadowUrl: "../public/marker-shadow.png",
		iconSize: [24,36],
      	iconAnchor: [12,36]
	});
	L.Marker.prototype.options.icon = DefaultIcon;

	async function load() {
		var latlngs = [];

		mapData = data.sitesVisited[site].externalRequests;
		
		if (data !== null && map) {
			for (let host in mapData) {
				let hostData = mapData[host];
				let lat = hostData.geo.coordinates.latitude + (Math.random() * (.01 - .02) + .02)
				let long = hostData.geo.coordinates.longitude + (Math.random() * (.01 - .02) + .02)
				
				var marker = L.marker([lat, long])
				marker.bindPopup(`<b>${host} (${mapData[host].requests.length})</b> <br>[${hostData.ip}]`)
				marker.bindTooltip(`<b>${host}</b>`);
				marker.addTo(map);

				latlngs.push([host,lat,long]);
			}

			if (site) {
				var siteGeo = data.sitesVisited[site].geo;
				var marker = L.circle([siteGeo.coordinates.latitude, siteGeo.coordinates.longitude],{
					color:"blue", 
					fillColor:"blue", 
					radius: 5000})
				marker.bindTooltip(`<b>${site}</b><br>` + siteGeo.city + ", " + siteGeo.country)
				marker.addTo(map);

				// line for initial request
				var lineCoords = [[siteGeo.coordinates.latitude, siteGeo.coordinates.longitude],[data.location.coordinates.latitude, data.location.coordinates.longitude]];
				var polyline = L.polyline(lineCoords, {color: 'red', weight: 2})
				polyline.bindTooltip(`initial request to <b>${site}</b>`, {sticky: true})
				polyline.addTo(map);
				// draw lines for secondary requests
				for (let i in latlngs) {
					const latlng = [latlngs[i][1], latlngs[i][2]]
					var lineCoords = [[siteGeo.coordinates.latitude, siteGeo.coordinates.longitude],latlng];
					var polyline = L.polyline(lineCoords, {color: 'blue', weight: 2})
					polyline.bindTooltip(`${site} -> ${latlngs[i][0]}`, {sticky: true})
					polyline.addTo(map);
				}
			}
		}
	}

	function createMap() {
		map = L.map("map",{}).setView([data.location.coordinates.latitude, data.location.coordinates.longitude], 5);
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 30,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		var marker = L.circle([data.location.coordinates.latitude, data.location.coordinates.longitude],{
			color:'red', 
			fillColor:"#f03", 
			radius: 5000})
		marker.bindTooltip("<b>Your Location</b><br>" + data.location.city + ", " + data.location.country)
		marker.addTo(map);
	}

	onMount( () => {
		createMap();
		load();
	})

</script>

<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="" />
</svelte:head>

<div style="width: 100%; height:40em; display:flex; justify-content:center;">
	<div style="width: 90%; height: 100%">
		<div id="map" style="height: 100%; box-shadow: rgb(183, 179, 179) 1px 1px 7px;"></div>
	</div>
</div>

<style>
</style>
