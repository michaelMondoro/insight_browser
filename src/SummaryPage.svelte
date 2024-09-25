<script>
    import Map from "./components/Map.svelte";
    import Chart from "./components/Chart.svelte";
    
    export let data;
</script>
<div style="width: 100%;">
    <h3>Summary</h3>
</div>

<Map data={data}/>
<br>
<div class="stats">
    <Chart title={"Resources"} labels={Object.keys(data.stats.resources)} data={Object.values(data.stats.resources)}/>
    <Chart title={"Success Rate"} labels={Object.keys(data.stats.statusCodes)} data={Object.values(data.stats.statusCodes)}/> 
</div>


<style>
.stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    width: 100%;
}
.stat {
    text-align: left;
}
h3 {
    text-align: left;
}
</style>