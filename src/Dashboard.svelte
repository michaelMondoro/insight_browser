<script>
    import { onMount } from "svelte";
    import SummaryPage from "./SummaryPage.svelte";
    import Header from "./Header.svelte";

    let selectedPage = "Summary";
    let loading = true;
    $: data = undefined;
    onMount(async () => {
        console.log('loading data....');
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
                <div style="height: 100%; display: flex; flex-direction: column; justify-content:center; align-items:center">
                    <span class="loader"></span>
                </div>
            {:else}
            <Header data={data}/>
            <SummaryPage data={data}/>
            {/if}
        {:else if selectedPage === "Hosts"}
            <Header data={data}/>
            <h2>Hosts</h2>
        {:else if selectedPage === "Requests"}
            <Header data={data}/>
            <h2>Requests</h2>
        {/if}
    </div>    
</div>


<style>
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #4a76e8;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation .5s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
} 
:root {
    --success-value: 10%;
    --request-value: 0%;
    --circle-size: 8em;
    --success-color: rgb(40, 128, 10);
    --post-color: rgb(47, 130, 232);
    --fail-color: rgb(247, 55, 55);
    --circle-bg: rgb(212, 209, 209);
}
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
    width: 50px;
}

.menu_item {
    margin: .5em;
    padding: .5em;
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

@media screen and (max-width: 800px) {
  .stats {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
