<script>
	import L from 'leaflet';
    import { onMount } from 'svelte';

	export let data;
	let map;
	
	// $: {
	// 	async function load() {
	// 		if (data !== null) {
	// 			for (let host in data) {
	// 				let lat = data[host].lat + (Math.random() * (.01 - .02) + .02)
	// 				let long = data[host].long + (Math.random() * (.01 - .02) + .02)
	// 				var marker = L.marker([lat, long])
	// 				marker.bindTooltip(`<b>${host} (${data[host].total})</b> <br>[${data[host].ip}]`)
	// 				marker.bindPopup(`<b>${host}</b>`);
	// 				marker.addTo(map);
	// 			}
	// 		}
	// 	}
	// 	load()
	// 	console.log(data)
	// }

	onMount(() => {
		map = L.map("map",{}).setView([data.location.coordinates.latitude, data.location.coordinates.longitude], 8);
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
	})
</script>

<svelte:head>
    <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin="" />
</svelte:head>

<div style="width: 100%; min-height: 20em; display:flex; justify-content:center">
	<div style="width: 100%; height: 100%">
		<div id="map" style="height: 100%; box-shadow: rgb(183, 179, 179) 1px 1px 7px;"></div>
	</div>
	<script>
		
	</script>
</div>
