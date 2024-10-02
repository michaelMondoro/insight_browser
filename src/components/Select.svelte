<script>
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from 'svelte';
    
    const selectSiteDispatcher = createEventDispatcher();
    const clickDispatcher = createEventDispatcher();

    export let data;

    let showOptions = false;
    let selectedSite = "select";

    function selectSite(e) {
        selectedSite = e.currentTarget.dataset.value; 
        showOptions = !showOptions;
        selectSiteDispatcher('select', selectedSite);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div in:fade={{ duration: 800 }} on:click={()=>{clickDispatcher("click")}} class="select">
    <button on:click={() => showOptions = !showOptions} style="border-bottom: solid #363636 1px;"><input readonly bind:value={selectedSite}/></button>
    {#if showOptions}
    <div class="options">
        {#each Object.keys(data.sitesVisited) as site}
            <button on:click={selectSite} class="site" data-value="{site}"><p>{site}</p></button>    
        {/each}
    </div>    
    {/if}
</div>

<style>
button {
    all: unset;
    width: 100%;
}
.select {
    padding: 1em;
    border-radius: 0px;
    cursor: pointer;
    width: 50%;
    z-index: 1;
    position: relative;
}
.site:hover {
    color: #9a9b9c;
    transform: scale(1.01);
    transition: all .3s;
}
.options {
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 100;
    background-color: white;
    text-align: left;
}

input {
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
}
</style>