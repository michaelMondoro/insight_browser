<script>
    export let data;
    export let type;

</script>

<table class="requests">
    {#if type === "requests"}
        <tr>
            <th>type</th>
            <th>status code</th>
            <th>url</th>
            <th>referrer</th>
        </tr>
        {#each data.requests as request}
            <tr>
                <td>{request.resourceType}</td>
                <td>{request.statusCode}</td>
                <td>{request.url}</td>
                <td>{request.referrer}</td>
            </tr>
        {/each}
    {:else if type === "hosts"}
        <tr>
            <th>host</th>
            <th>location</th>
            <th>ip</th>
            <th>org</th>
            <th>requests</th>
        </tr>
        {#each Object.keys(data.externalRequests) as requestHost}
            <tr>
                <td>{requestHost}</td>
                <td>{data.externalRequests[requestHost].geo.city}, {data.externalRequests[requestHost].geo.country_code}</td>
                <td>{data.externalRequests[requestHost].ip}</td>
                <td>{data.externalRequests[requestHost].asn.org}</td>
                <td>{data.externalRequests[requestHost].requests.length}</td>
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