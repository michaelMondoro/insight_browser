<script>
    import Select from "./components/Select.svelte";
    import Map from "./components/Map.svelte"

    export let data;

    let dropdown = false
    let selectedSite;
    
    function selectSite(data) {
        selectedSite = data.detail;
    }
</script>

<h3>Sites Visited</h3>
<Select on:click={() => dropdown = !dropdown} on:select={selectSite} data={data}/>
{#each Object.keys(data.sitesVisited) as site}
    {#if selectedSite == site && !dropdown}
        <h3>{site}</h3>
        <Map type="site" data={data} site={selectedSite}/>
    {/if}
{/each}

<style>

</style>