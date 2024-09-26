<script>
    import { onMount } from "svelte";
    import Chart from 'chart.js/auto';

    export let data;
    export let labels;
    export let title;
    let chartTag;
    let chart;

    onMount(() => {
        chart = new Chart(chartTag, {
            type: 'pie',
            title: title,
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 205, 155)',
                    'rgb(255, 99, 44)',
                    'rgb(189, 162, 235)',
                    'rgb(214, 205, 86)',
                    'rgb(255, 49, 65)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                plugins: {legend: {display: false}},
                responsive: true,
                maintainAspectRatio: false
            }
        });
    })
    
    window.addEventListener("resize", () => {chart.render()})
</script>
<div class="container">
    <h3>{title}</h3>
    <div style="display: relative; width: 25vw;">
        <canvas bind:this={chartTag} id="myChart"></canvas>
    </div>
</div>
<style>
.container {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}
</style>