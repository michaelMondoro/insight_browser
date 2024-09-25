<script>
    export let data;
</script>

<div class="header">
    <h4 class="" title="your ip">{data.userIP} </h4>
    <h4 class="" title="your location">{data.location.city + ", " + data.location.country}</h4>   
</div>

<style>
h4 {
    margin: 1em 0em;
}

.header {
    width: 100%;
    text-align: left;
    font-family: 'Raleway', sans-serif;
}
</style>