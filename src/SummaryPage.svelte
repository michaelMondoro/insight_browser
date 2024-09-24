<script>
    import Map from "./Map.svelte";

    export let data;
    console.log(data.hosts);
</script>

<h2>Summary</h2>
<div class="stats">
    <div class="stats">
        <h3 class="stat" title="your location"><i class="fa fa-map-marker" aria-hidden="true"></i> <span>{data.location.city + ", " + data.location.country} </span></h3>
        <h3 class="stat" title="your ip"><i class="fa fa-address-card" aria-hidden="true"></i> {data.userIP} </h3>
        <h3 class="stat"><i class="fa fa-mail-forward" aria-hidden="true"></i> {data.count} Requests</h3>
        <h3 class="stat"><i class="fa fa-wifi" aria-hidden="true"></i> {Object.keys(data.hosts).length} Hosts </h3>
    </div>
    <Map data={data}/>
</div>

<style>
.stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    width: 100%;
}
.stat {
    text-align: left;
}

</style>