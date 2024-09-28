<script>
    import { onMount } from "svelte";

    export let query = '';
    let webview;

    onMount(() => {
        webview.addEventListener("will-navigate", (data) => {window.api.visitSite(data.url)})
    })
</script>

<div class="container center_align">
    <webview bind:this={webview} id="webpage" src={`https://safe.duckduckgo.com/?q=${encodeURIComponent(query)}`} style="width: 100%; height: 100%"></webview>
</div>

<style>
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
    background-color: #eeeeee;
}
</style>