<script>
    import { createEventDispatcher } from 'svelte';
    const endSessionDispatcher = createEventDispatcher();
    const homeDispatcher = createEventDispatcher();

    export let darkMode;
    console.log(darkMode)
    let requestCount = 0;
    window.api.updateRequestCount(() => {requestCount+=1})
</script>
<main>
    <div class="banner {darkMode ? `dark`: ''}">
        <span>
            <button unset on:click={() => homeDispatcher('home')}><i class="icon fa fa-home" ></i></button>
            <button unset on:click={() => document.getElementById("webpage").goBack()}><i class="icon fa fa-angle-left" onclick="goBack()"></i></button>
            <button unset on:click={() => document.getElementById("webpage").goForward()}><i class="icon fa fa-angle-right" onclick="goForward()"></i></button>
        </span>
        <span>
            <span contenteditable bind:textContent={requestCount} id="count" class="highlight" data-tooltip="requests">0</span>
            <span id="status" class="status"></span>
            <button class="end {darkMode ? `dark-button`: ''}" on:click={() => {endSessionDispatcher('update', true)}}><span>stop</span></button>
        </span>
    </div>
</main>

<style>

button[unset] {
    all:unset;
}

.dark-button > span {
    color:#eeeeee;
}

.end {
    appearance: none;
    background-color:rgba(255, 255, 255, 0);
    border: solid grey 1px;
    padding: .5em 1em;
    border-radius: .2em;
    transition: all .5s;
}
.end:hover {
    cursor: pointer;
    border-radius: 1em;
    color:white;
    background-color: #363636;
}
.end:hover > span {
    display: none;
}
.end:hover::before {
    content: 'end session';
}
#count {
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    color: rgb(74, 166, 91);
    width: 5em;
    text-align: right;
}
.highlight:hover {
    cursor: pointer;
    color: var(--highlight-color);
    transition: all .2s;
}

[data-tooltip] {
    position:relative;
}
[data-tooltip]:hover::after {
    display: block;
    position: absolute;
    top: 2em;
    right: 1em;
    /* right: 3em; */
    font-size: 13px;
    font-family: "Montserrat", sans-serif;
    border-radius: 3px;
    color: black;
    content: attr(data-tooltip);
    background: #fefefeed;
    box-shadow: 1px 1px 3px grey;
    padding: 1em;
}

.icon {
    padding: 3px;
    margin: 5px;
    font-size: 25px!important;
    cursor: pointer;
    transition: all .2s;
}
.icon:hover {
    color: var(--highlight-color);
    transform: scale(1.2);

}

.status {
    height: 15px;
    width: 15px;
    background-color: #259d2d;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 1px 1px 3px grey;
}

.banner {
    display: flex;
    justify-content: space-between;
    padding: 2em 1em 1em 1em;
}

.dark {
    background-color: #161616;
    color: #eeeeee;
}
</style>