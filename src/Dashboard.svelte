<script>
    import { onMount } from "svelte";

    onMount(async () => {
        console.log('loading data....');
        var data = await window.api.loadSession();
        console.log(data);
    })
</script>

<div class="dashboard">
    <h3>Dashboard</h3>
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
    animation: rotation 1s linear infinite;
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
    appearance: none;
    background-color:rgba(255, 255, 255, 0);
    border: solid grey 1px;
    padding: .5em 1em;
    border-radius: .2em;
    transition: all .5s;
}
button:hover {
    cursor: pointer;
    border-radius: 1em;
    color:white;
    background-color: black;
}
* {
    font-size: 1rem;
}
.dashboard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
}

.stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2em;
    /* width: 100%; */
}

@media screen and (max-width: 800px) {
  .stats {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
