<script>
    import Map from "./components/Map.svelte";
    import Chart from "./components/Chart.svelte";
    
    export let data;
</script>

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

</style>