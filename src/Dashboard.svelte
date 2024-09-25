<script>
    import { onMount } from "svelte";
    import SummaryPage from "./SummaryPage.svelte";
    import Header from "./components/Header.svelte";
    import Loader from "./components/Loader.svelte";
    import Select from "./components/Select.svelte";

    let selectedPage = "Summary";

</script>

<div class="container">    
    <div class="sidebar">
        <button class:highlighted={selectedPage === "Summary"} on:click={() => selectedPage = "Summary"} title="summary" class="menu_item"><i class="fa fa-desktop" aria-hidden="true"></i></button>
        <button class:highlighted={selectedPage === "Hosts"} on:click={() => selectedPage = "Hosts"} title="hosts" class="menu_item"><i class="fa fa-server" aria-hidden="true"></i></button>
        <button class:highlighted={selectedPage === "Requests"} on:click={() => selectedPage = "Requests"} title="requests" class="menu_item"><i class="fa fa-mail-forward" aria-hidden="true"></i></button>
    </div>
    <div class="dashboard">
        {#await window.api.loadSession()}
            <Loader /> 
        {:then data} 
        {console.log(data)}
        <Header data={data}/>
            {#if selectedPage === "Summary"}
                <SummaryPage data={data}/>
            {:else if selectedPage === "Hosts"}
                <h3>Hosts</h3>
                <Select data={data}/>
            {:else if selectedPage === "Requests"}
                <h3>Requests</h3>
            {/if}
        {/await} 
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
}

.sidebar {
    width: 4em;
    position: fixed;
    top: 0;
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
