<script>
    import SearchWindow from "./SearchWindow.svelte";
    import NavBar from "./NavBar.svelte";
    import Dashboard from "./Dashboard.svelte"
    import { onDestroy, onMount } from "svelte";
    
    $: screen = "dashboard";
    let searchQuery;

    onMount(() => {
        // const val = localStorage.getItem('screen');
        // const query = localStorage.getItem('searchQuery');
        // console.log(`${val} -- ${query}`); 
        // if (val) screen = val;
        // if (query) searchQuery = searchQuery;
    })


</script>

<!-- Main Screen -->
{#if screen === "main"}
<div class="container center_align">
    <form on:submit|preventDefault={() => {window.api.startSession();screen = "search";}} class="search_form center_align" onsubmit="" id="search_form">
        <input bind:value={searchQuery} class="search" type="text" id="search_input" placeholder="search" on:load={document.getElementById("search_input").focus()}>
    </form>   
</div>
<!-- Search Result Screen -->
{:else if screen === "search"}
<div style="height: 100%; width: 100%; display: flex; flex-direction: column">
    <NavBar on:update={() => { window.api.stopSession();screen = "dashboard"}}/>
    <SearchWindow query={searchQuery}/>
</div>
{:else if screen === "dashboard"}
    <Dashboard />
{/if}

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@100&display=swap');

.center_align {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container {
    height: 100vh;
    padding: 0;
    font-family: "Montserrat", sans-serif;
}


.search_form {
    width: 60%;
    height: 100%;
}
input {
    all: unset;
}

.search {
    border: none;
    text-align: left;
    border-bottom: solid black 1px;
    width: 10%;
    transform: all 3s;
    animation:  3s ease forwards fadeInSearch ;
}
/*
Animations
*/
@keyframes fadeInSearch {
    0% {width: 0%}
    100% {width: 75%;}
}
</style>
