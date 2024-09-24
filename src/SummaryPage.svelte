<script>
    import Map from "./Map.svelte";

    export let data;
</script>

<div class="stats">
    <div class="stats">
        <p class="stat"><i class="fa fa-mail-forward" aria-hidden="true"></i> {data.count} Requests</p>
        <p class="stat"><i class="fa fa-wifi" aria-hidden="true"></i> {Object.keys(data.hosts).length} Hosts </p>
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