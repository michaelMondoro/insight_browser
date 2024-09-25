<script>
    import { onMount } from "svelte";
    import SummaryPage from "./SummaryPage.svelte";
    import Header from "./components/Header.svelte";
    import Loader from "./components/Loader.svelte";
    import Select from "./components/Select.svelte";

    let selectedPage = "Summary";
    let loading = true;
    $: data = undefined;

    onMount(async () => {
        data = await window.api.loadSession();
        loading = false;
        console.log(data);
    })
</script>

<div class="container">    
    <div class="sidebar">
        <button class:highlighted={selectedPage === "Summary"} on:click={() => selectedPage = "Summary"} title="summary" class="menu_item"><i class="fa fa-desktop" aria-hidden="true"></i></button>
        <button class:highlighted={selectedPage === "Hosts"} on:click={() => selectedPage = "Hosts"} title="hosts" class="menu_item"><i class="fa fa-server" aria-hidden="true"></i></button>
        <button class:highlighted={selectedPage === "Requests"} on:click={() => selectedPage = "Requests"} title="requests" class="menu_item"><i class="fa fa-mail-forward" aria-hidden="true"></i></button>
    </div>
    <div class="dashboard">
        {#if selectedPage === "Summary"}
            {#if loading}
                <Loader />
            {:else}
            <Header data={data}/>
            <SummaryPage data={data}/>
            {/if}
        {:else if selectedPage === "Hosts"}
            <Header data={data}/>
            <Select data={data}/>
        {:else if selectedPage === "Requests"}
            <Header data={data}/>
            <h2>Requests</h2>
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
    /* justify-content: space-between; */
    align-items: center;
    flex-direction: column;
    padding: 1em;
}

.container {
    display: grid;
    grid-template-columns: 1fr 10fr;
    height: 100%;
}

.sidebar {
    height: 100%;
    min-width: 4em;
    max-width: 6em;
}

.menu_item {
    margin: .5em;
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
