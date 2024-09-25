<script>
    import SearchWindow from "./SearchWindow.svelte";
    import NavBar from "./components/NavBar.svelte";
    import Dashboard from "./Dashboard.svelte"
    import { onMount } from "svelte";

    $: screen = "main";
    let searchQuery;

    onMount(() => {
        const currentScreen = sessionStorage.getItem('currentScreen');
        screen = currentScreen ? currentScreen : 'main';
    });

    function changeScreen(newScreen) {
        screen = newScreen;
        sessionStorage.setItem('currentScreen', screen);
    }
</script>

<!-- Main Screen -->
{#if screen === "main"}
<div class="container center_align">
    <form on:submit|preventDefault={() => {window.api.startSession();changeScreen("search")}} class="search_form center_align" onsubmit="" id="search_form">
        <input bind:value={searchQuery} class="search" type="text" id="search_input" placeholder="search" on:load={document.getElementById("search_input").focus()}>
    </form>   
</div>
<!-- Search Result Screen -->
{:else if screen === "search"}
<div style="height: 100%; width: 100%; display: flex; flex-direction: column">
    <NavBar on:update={() => { window.api.stopSession();changeScreen("dashboard")}}/>
    <SearchWindow query={searchQuery}/>
</div>
<!-- Dashboard -->
{:else if screen === "dashboard"}
    <Dashboard />
{/if}

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@100&display=swap');

.center_align {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container {
    height: 100%;
    padding: 0;
    font-family: "Montserrat", sans-serif;
}


.search_form {
    width: 60%;
    height: 100%;
}
input {
    all: unset;
    font-size: 1.2em;
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
