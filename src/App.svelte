<script>
    import SearchWindow from "./SearchWindow.svelte";
    import NavBar from "./components/NavBar.svelte";
    import Dashboard from "./Dashboard.svelte"
    import { onMount } from "svelte";

    $: screen = "main";
    let searchQuery = "";

    onMount(() => {
        const currentScreen = sessionStorage.getItem('currentScreen');
        screen = currentScreen ? currentScreen : 'main';
        searchQuery = "";
    });

    function changeScreen(newScreen) {
        screen = newScreen;
        sessionStorage.setItem('currentScreen', screen);
    }
</script>

<!-- Main Screen -->
{#if screen === "main"}
<div class="container center_align">
    <form on:submit|preventDefault={() => {window.api.startSession();changeScreen("search");}} class="search_form center_align" onsubmit="" id="search_form">
        <input bind:value={searchQuery} class="search" type="text" id="search_input" placeholder="search" on:load={document.getElementById("search_input").focus()}>
    </form>   
</div>
<!-- Search Result Screen -->
{:else if screen === "search"}
<div style="height: 100%; width: 100%; display: flex; flex-direction: column">
    <NavBar on:home={() => {screen = "main"; searchQuery = ""}} on:update={() => { window.api.stopSession();changeScreen("dashboard")}}/>
    <SearchWindow query={searchQuery}/>
</div>
<!-- Dashboard -->
{:else if screen === "dashboard"}
    <Dashboard />
{/if}

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

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
