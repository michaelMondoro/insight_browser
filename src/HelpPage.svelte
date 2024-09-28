<script>
    import Accordion from "./components/Accordion.svelte";
    import PageTitle from "./components/PageTitle.svelte";

</script>

<div class="container">
    <PageTitle title={'Help'} subheading={'questions are good❓'}/>
    <Accordion title={'This Stuff'} content={'<p>hi mom</p><pre><code>echo "hello world!"</code></pre>'}/>
</div>

<style>
.container {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header {
    text-align: left;
    width: 100%;
}

</style>