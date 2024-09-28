<script>
    import SummaryPage from "./SummaryPage.svelte";
    import Header from "./components/Header.svelte";
    import Loader from "./components/Loader.svelte";
    import SitesPage from "./SitesPage.svelte";
    import HelpPage from "./HelpPage.svelte";

    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    

    let selectedPage = "Summary";
    let data;

    onMount(async () => {
        data = await window.api.loadSession();
        console.log(data);
    });
</script>

<div class="container">    
    <div class="sidebar">
        <button class:highlighted={selectedPage === "Summary"} on:click={() => selectedPage = "Summary"} title="overview" class="menu_item"><i class="fa fa-desktop" aria-hidden="true"></i></button>
        <button class:highlighted={selectedPage === "Explore"} on:click={() => selectedPage = "Explore"} title="explore" class="menu_item"><i class="fa fa-map-o" aria-hidden="true"></i></button>
        <button class:highlighted={selectedPage === "Help"} on:click={() => selectedPage = "Help"} title="help" class="menu_item"><i class="fa fa-question" aria-hidden="true"></i></button>
    </div>
    <div in:fade={{ duration: 1000 }} class="dashboard">
        {#if data}
            <Header data={data}/>
            {#if selectedPage === "Summary"}
                <SummaryPage data={data}/>
            {:else if selectedPage === "Explore"}
                <SitesPage data={data} />
            {:else if selectedPage === "Help"}
                <HelpPage />
            {/if}
        {:else}
            <Loader /> 
        {/if}   
    </div>    
</div>

<style>

button {
    all: unset;
    width: 100%;
}

* {
    font-size: 1rem;
}

.dashboard {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1em;
    padding-left: 6em;
}

.container {
    display: flex;
    width: 100%;
}

.sidebar {
    width: 4em;
    position: fixed;
    top: 3em;
}

.menu_item {
    margin: .5em 0em;
    /* padding: .5em; */
    min-height: 2em;
    font-size: 1em;
    color: #9a9b9c;
    text-align: center;
}

.menu_item:hover {
    cursor: pointer;
    transform: scale(1.1); 
    color: #363636;
    border-right: solid #363636 1px;
}

.highlighted {
    transform: scale(1.1);
    color: #363636;
    border-right: solid #363636 1px;
}
</style>
