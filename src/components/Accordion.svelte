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
    <button on:click={() => showContents = !showContents} style="border-bottom: solid #363636 1px;"><input readonly bind:value={title}/><i class="icon fa fa-angle-down"></i></button>
    {#if showContents}
    <div class="content">
        <p contenteditable bind:innerHTML={content}></p>
    </div>  
    {/if}
</div>

<style>
button {
    all: unset;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.select {
    padding: .5em;
    border-radius: 0px;
    cursor: pointer;
    width: 100%;
    z-index: 1;
    position: relative;
}

.content {
    padding: .5em;
}

input {
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    width: 90%;
}
</style>