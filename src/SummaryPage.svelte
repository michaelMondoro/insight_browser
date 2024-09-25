<script>
    import Map from "./components/Map.svelte";
    import Chart from "./components/Chart.svelte";
    
    export let data;
</script>
<div style="width: 100%;">
    <h3>Summary</h3>
</div>

<div class="stats3">
    <p class="stat">
        <span>Requests</span>
        <span class="content">{data.stats.totalRequests}</span>
    </p>
    <p class="stat">
        <span>Sites Visited</span>
        <span class="content">{data.sitesVisited.length}</span>
    </p>
    <p class="stat">
        <span>Servers Hit</span>
        <span class="content">{Object.keys(data.hosts).length}</span>
    </p>
</div>
<Map data={data}/>
<br>
<div class="stats2">
    <Chart title={"Resource Types"} labels={Object.keys(data.stats.resources)} data={Object.values(data.stats.resources)}/>
    <Chart title={"Status Codes"} labels={Object.keys(data.stats.statusCodes)} data={Object.values(data.stats.statusCodes)}/> 
</div>


<style>
.stats3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2em;
    width: 100%;
}

.stats2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    width: 100%;
}
.stat > .content {
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    font-size: 3em;
}
.stat {
    position: relative;
    text-align: center;
    border-radius: .3em;
    padding: .5em;
    /* box-shadow: #363636a4 2px 2px 3px; */
}

h3 {
    text-align: left;
}

.stat::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #cecfcf;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.stat:hover::before {
  transform: translate(-50%, 0) scaleX(.5);
}

</style>