<script>
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from 'svelte';
    
    const clickDispatcher = createEventDispatcher();

    let showContents = false;
    export let title;
    export let content;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div in:fade={{ duration: 800 }} on:click={()=>clickDispatcher("click")} class="select">
    <button on:click={() => showContents = !showContents} style="border-bottom: solid #363636 1px;"><input readonly bind:value={title}/></button>
    {#if showContents}
    <div contenteditable bind:innerHTML={content}></div>  
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
    width: 100%;
    z-index: 1;
    position: relative;
}

input {
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
}
</style>