<script>
    export let query = '';
</script>

<div class="container center_align">
    <webview id="webpage" src={`https://duckduckgo.com/?q=${encodeURIComponent(query)}`} style="width: 100%; height: 100%;"></webview>
</div>

<style>
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
</style>