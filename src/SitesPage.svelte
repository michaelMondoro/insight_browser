<script>
    import Select from "./components/Select.svelte";
    import Map from "./components/Map.svelte";
    import Chart from "./components/Chart.svelte";
    import { fade } from "svelte/transition";
    import PageTitle from "./components/PageTitle.svelte";

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
    <PageTitle title={'Explore'} subheading={'check out the sites you visited in more depth 🌐'}/>
    
    <Select on:click={() => dropdown = !dropdown} on:select={selectSite} data={data}/>
    {#each Object.keys(data.sitesVisited) as site}
        {#if selectedSite == site && !dropdown}
            <div in:fade={{ duration: 800 }} style="width: 100%">
                <div class="header">
                    <h3>{selectedSite}</h3>
                    <h4>{siteData.ip}</h4>
                    <h4>{`${siteData.geo.city}, ${siteData.geo.country}`}</h4>
                </div>
                <div class="stats">
                    <p>You visited <b>{selectedSite}</b> - sending a total of <u>{data.sitesVisited[selectedSite].requests.length}</u> HTTP requests</p>
                    <p><b>{site}</b> in turn - sent HTTP requests to <u>{Object.keys(data.sitesVisited[selectedSite].externalRequests).length}</u> other websites/servers</p>
                </div>
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