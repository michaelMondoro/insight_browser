<script>
    import { onMount } from "svelte";

    export let data;
    export let type;

    let requests;
    let hosts;
    $: sortRequests = (col) => {
        requests.sort((a,b) => a[col].localeCompare(b[col]));
        requests = requests;
    }
    $: sortHosts = (col) => {
        hosts.sort((a,b) => b[col] - a[col]);
        hosts = hosts;
    }

    onMount(() => {
        requests = data.requests
        hosts = Object.keys(data.externalRequests).map((key) => {
            return {
                name: key,
                geo: data.externalRequests[key].geo,
                ip: data.externalRequests[key].ip,
                asn: data.externalRequests[key].asn,
                requests: data.externalRequests[key].requests.length
            }});
    });

</script>

<table class="requests">
    {#if type === "requests" && requests}
        <tr>
            <th on:click={() => sortRequests('resourceType')}>type</th>
            <th>status code</th>
            <th>url</th>
            <th>referrer</th>
        </tr>
        {#each requests as request (request)}
            <tr>
                <td>{request.resourceType}</td>
                <td>{request.statusCode}</td>
                <td>{request.url}</td>
                <td>{request.referrer}</td>
            </tr>
        {/each}
    {:else if type === "hosts" && hosts}
        <tr>
            <th>host</th>
            <th>location</th>
            <th>ip</th>
            <th>org</th>
            <th on:click={() => sortHosts('requests')}>requests</th>
        </tr>
        {#each hosts as host (host)}
            <tr>
                <td>{host.name}</td>
                <td>{host.geo.city}, {host.geo.country_code}</td>
                <td>{host.ip}</td>
                <td>{host.asn.org}</td>
                <td>{host.requests}</td>
            </tr>
        {/each}
    {/if}

</table>

<style>
.requests {
    max-width: 100%;
    width: 100%;
    text-align: left;
}
th, td {
    /* border: 1px solid #ddd;  */
    overflow: hidden;
    text-overflow: ellipsis; 
    word-break: break-all;
    padding: .5em;
    min-width: 6em;
}

th {
    border-bottom: solid #ddd 1px;
    background-color: #fafafa;
    border-radius: 3px;
}
</style>