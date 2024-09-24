<script>
    export let data;
    console.log(data.hosts);
</script>

<h2>Summary</h2>
<div class="stats">
    <h3 class="stat" title="your location"><i class="fa fa-map-marker" aria-hidden="true"></i> {data.location.city + ", " + data.location.country} </h3>
    <h3 class="stat"><i class="fa fa-mail-forward" aria-hidden="true"></i> {data.count} Requests Sent</h3>
    <h3 class="stat" title="your ip"><i class="fa fa-address-card" aria-hidden="true"></i> {data.userIP} </h3>
    <!-- <h3 class="hover"><i class="fa fa-server" aria-hidden="true"></i> {globalMetrics.hosts} Servers Hit</h3> -->
    <h3 class="stat"><i class="fa fa-wifi" aria-hidden="true"></i> {Object.keys(data.hosts).length} Sites Visited </h3>
    <!-- <h3 class="hover"><i class="fa fa-clock-o" aria-hidden="true"></i> {sessionInfo} </h3> -->
</div>

<style>
.stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
}
.stat {
    text-align: center;
}

</style>