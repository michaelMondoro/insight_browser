<script>
    export let data;

    let showOptions = false;
    let selectedSite = "select";
</script>

<div class="select">
    <button on:click={() => showOptions = !showOptions} style="border-bottom: solid #363636 1px;"><input readonly bind:value={selectedSite}/></button>
    {#if showOptions}
    <div class="options">
        {#each data.sitesVisited as site}
            <button on:click={(e) => {selectedSite = e.currentTarget.dataset.value; showOptions = !showOptions}} class="site" data-value="{new URL(site).hostname}"><p>{ new URL(site).hostname }</p></button>    
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
}
.site:hover {
    color: #9a9b9c;
    transform: scale(1.01);
    transition: all .3s;
}
.options {
}

input {
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
}
</style>