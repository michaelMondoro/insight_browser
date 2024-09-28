<script>
    import Select from "./components/Select.svelte";
    import Map from "./components/Map.svelte"
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
    <h3>Sites Visited</h3>
    <Select on:click={() => dropdown = !dropdown} on:select={selectSite} data={data}/>
    {#each Object.keys(data.sitesVisited) as site}
        {#if selectedSite == site && !dropdown}
            <div class="header">
                <h3>{selectedSite}</h3>
                <h4>{siteData.ip}</h4>
                <h4>{`${siteData.geo.city}, ${siteData.geo.country}`}</h4>
            </div>
            <Map type="site" data={data} site={selectedSite}/>
        {/if}
    {/each}
</div>
<br>
<br>
<style>
h4 {
    margin: .5em 0em;
    color:rgb(115, 113, 113);
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
}

.header {
    text-align: left;
    width: 90%;
}
</style>