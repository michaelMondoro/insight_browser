<script>
    import Select from "./components/Select.svelte";
    import Map from "./components/Map.svelte";
    import Chart from "./components/Chart.svelte";
    import Table from "./components/Table.svelte";
    import { fade } from "svelte/transition";
    import PageTitle from "./components/PageTitle.svelte";

    export let data;

    let dropdown = false
    let selectedSite;
    let siteData;
    let selectedTab = "map";

    function selectSite(event) {
        selectedSite = event.detail;
        siteData = data.sitesVisited[selectedSite];
    }
</script>
<div in:fade={{ duration: 800 }} class="container">
    <PageTitle title={'Explore'} subheading={'check out the sites you visited in more depth 🌐'}/>
    
    <Select on:click={() => dropdown = !dropdown} on:select={selectSite} data={data}/>
    {#each Object.keys(data.sitesVisited) as site}
        {#if selectedSite == site && !dropdown}
            <div in:fade={{ duration: 800 }} style="width: 100%">
                <div class="header">
                    <h3>{selectedSite}</h3>
                    <h4>{siteData.ip}</h4>
                    <h4>{`${siteData.geo.city}, ${siteData.geo.country}`}</h4>
                </div>
                <div class="stats">
                    <p>You visited <b>{selectedSite}</b> - sending a total of <u>{data.sitesVisited[selectedSite].requests.length}</u> HTTP requests</p>
                    <p><b>{site}</b> in turn - sent HTTP requests to <u>{Object.keys(data.sitesVisited[selectedSite].externalRequests).length}</u> other websites/servers</p>
                </div>
                <div class="options">
                    <button on:click={() => selectedTab = "map"} class="opt"><span>map</span></button>
                    <button on:click={() => selectedTab = "requests"} class="opt"><span>requests</span></button>
                    <button on:click={() => selectedTab = "external"} class="opt"><span>external</span></button>
                </div>
                <hr>
                {#if selectedTab === "map"}
                    <div in:fade={{ duration: 800 }} class="legend">
                        <p>This is the map 🌎 of your trip to visit <b>{selectedSite}</b></p>
                    </div>
                    <Map data={data} site={selectedSite}/>
                {:else if selectedTab === "requests"}
                <div in:fade={{ duration: 800 }} class="table_container">
                    <p>These are all the requests <b>you</b> 💻 sent to <b>{selectedSite}</b></p>
                    <Table type="requests" data={siteData} /> 
                </div>
                {:else if selectedTab === "external"}
                <div in:fade={{ duration: 800 }} class="table_container">
                    <p>These are all the sites <b>{selectedSite}</b> communicated 🚀 with when processing your requests</p>
                    <Table type="hosts" data={siteData} />
                </div>
                {/if}

            </div>
            
        {/if}
    {/each}
</div>
<br>
<br>
<style>


h4 {
    margin: .5em 0em;
    color:rgb(115, 113, 113);
}

.table_container {
    overflow-x:auto;
    width: 100%; 
    text-align:left;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    text-align: center;
}
.stats {
    text-align:left; 
    width: 100%;
}
.header {
    text-align: left;
    width: 100%;
}
.legend {
    text-align: left;
}

.options {
    text-align: left;
}

.opt {
    min-width: 6em;
    appearance: none;
    background-color:rgba(255, 255, 255, 0);
    border: solid grey 1px;
    padding: .5em 1em;
    border-radius: .2em;
    transition: all .5s;
}
.opt:hover {
    cursor: pointer;
    border-radius: 1em;
    color:white;
    background-color: #363636;
}
.opt:hover > span {
    display: none;
}
.opt:hover::before {
    content: 'show';
}
</style>