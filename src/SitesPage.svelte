<script>
    import Select from "./components/Select.svelte";
    import Map from "./components/Map.svelte";
    import Chart from "./components/Chart.svelte";
    import { fade } from "svelte/transition";

    export let data;

    let dropdown = false
    let selectedSite;
    let siteData;

    function selectSite(event) {
        selectedSite = event.detail;
        siteData = data.hosts[selectedSite];
    }
</script>
<div in:fade={{ duration: 800 }} class="container">
    <div style="width: 100%; text-align:left;">
        <h2>Explore</h2>
        <p class="subheading"> check out the sites you visited in more depth 🌐</p>
    </div>
    
    <Select on:click={() => dropdown = !dropdown} on:select={selectSite} data={data}/>
    {#each Object.keys(data.sitesVisited) as site}
        {#if selectedSite == site && !dropdown}
            <div class="header">
                <h3>{selectedSite}</h3>
                <h4>{siteData.ip}</h4>
                <h4>{`${siteData.geo.city}, ${siteData.geo.country}`}</h4>
            </div>
            <div class="stats">
                <p>You visited <b>{selectedSite}</b> - sending a total of <u>{data.sitesVisited[selectedSite].requests.length}</u> HTTP requests</p>
                <p><b>{site}</b> in turn - sent HTTP requests to <u>{Object.keys(data.sitesVisited[selectedSite].externalRequests).length}</u> other websites/servers</p>
            </div>
            <Map type="site" data={data} site={selectedSite}/>
        {/if}
    {/each}
</div>
<br>
<br>
<style>
h2 {
    margin-bottom: 0em;
}

h4 {
    margin: .5em 0em;
    color:rgb(115, 113, 113);
}

.subheading {
    color:rgb(115, 113, 113);
    margin: 0;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    text-align: center;
}
.stats {
    text-align:left; 
    width: 100%;
}
.header {
    text-align: left;
    width: 100%;
}
</style>