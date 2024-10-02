<script>
    import { fade } from "svelte/transition";
    import Chart from "./components/Chart.svelte";
    import PageTitle from "./components/PageTitle.svelte";
    
    export let data;
</script>
<div in:fade={{ duration: 800 }} style="width: 90%; text-align:center">
    <PageTitle title={'Overview'} subheading={'your browsing session at a glance 🕶'}/>

    <div class="stats3">
        <p class="stat">
            <span>HTTP Requests</span>
            <span class="content">{data.stats.totalRequests}</span>
        </p>
        <p class="stat">
            <span>Sites Visited</span>
            <span class="content">{Object.keys(data.sitesVisited).length}</span>
        </p>
        <p class="stat">
            <span>Servers Hit</span>
            <span class="content">{data.hosts.length}</span>
        </p>
    </div>
    <div class="stats2">
        <Chart title={"Resource Types"} labels={Object.keys(data.stats.resources)} data={Object.values(data.stats.resources)}/>
        <Chart title={"Status Codes"} labels={Object.keys(data.stats.statusCodes)} data={Object.values(data.stats.statusCodes)}/> 
    </div>
    <br>
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
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    font-size: 3em;
}
.stat {
    position: relative;
    text-align: center;
    border-radius: .3em;
    padding: .5em;
    /* box-shadow: #363636a4 0px 2px 5px; */
}
.stat > span:first-child {
    transition: all .3s;
}

.stat:hover > span:first-child{
    font-size: 1.5em;
}

</style>