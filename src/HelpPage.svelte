<script>
    import Accordion from "./components/Accordion.svelte";
    import PageTitle from "./components/PageTitle.svelte";

</script>

<div class="container">
    <PageTitle title={'Help'} subheading={'questions are good❓'}/>
    <div class="questions">
        <Accordion title={"What am I looking at?"} content={"that is a good question"}/>
        <Accordion title={"What are these 'Resources' that my browser is requesting?"} content={"hahhaa funny"}/>
        <Accordion title={"Uuhhhh 'Status Codes'? What are those? "} content={"fair"}/>
        <Accordion title={"My location is not displayed correctly . . . how is that determined?"} content={"f;asflasklj"}/>
    </div>
</div>

<style>
.container {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.questions {
    width: 100%;
}
</style>