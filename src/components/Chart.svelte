<script>
    import { onMount } from "svelte";

    export let data;
    export let labels;
    export let title;

    let chartTag;

    import Chart from 'chart.js/auto';
    import { getRelativePosition } from 'chart.js/helpers';

    onMount(() => {
        const chart = new Chart(chartTag, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: title,
                    data: data,
                    backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                onClick: (e) => {
                    const canvasPosition = getRelativePosition(e, chart);

                    // Substitute the appropriate scale IDs
                    const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
                    const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
                }
            }
        });
    })
</script>

<div style="display: relative; width: 100%;">
    <canvas bind:this={chartTag} id="myChart"></canvas>
</div>

<style>

</style>