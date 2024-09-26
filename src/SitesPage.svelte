<script>
    import Select from "./components/Select.svelte";
    import Map from "./components/Map.svelte"

    export let data;
    let selectedSite;
    
    function selectSite(data) {
        selectedSite = data.detail;
    }
</script>

<h3>Sites Visited</h3>
<Select on:select={selectSite} data={data}/>
{#each Object.keys(data.sitesVisited ) as site}
    {#if selectedSite == site}
        <h3>{site}</h3>
        <Map type="site" data={data} site={selectedSite}/>
    {/if}
{/each}

<style>

</style>