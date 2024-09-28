<script>
    import { fade } from "svelte/transition";
    export let data;

    function parseTime(time) {
        const h = Math.floor(time / 3600);
        const m = Math.floor(time / 60);
        const sec = time % 60;
        return (h > 0) ? `${h}h ${m}m ${sec}s` : `${m}m ${sec}s` 
    }
</script>

<div in:fade={{ duration: 800 }} class="header">
    <!-- <h3>Your Info</h3> -->
    <br><br>
    <div class="grid">
        <h4 class="name">session time</h4><h4>{parseTime(data.time)}</h4>
        <h4 class="name">ip address</h4><h4>{data.userIP} </h4>
        <h4 class="name">location</h4><h4>{data.location.city + ", " + data.location.country}</h4>   
        <h4 class="name">operating system</h4><h4>{window.navigator.userAgentData.platform}</h4>
    </div>
</div>

<style>
h3 {
  position: relative;
  font-family: 'Poppins', sans-serif;
  display: inline;
}

/* h3::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #cecfcf;
  transform-origin: bottom left;
  transform: scaleX(0);
  transition: transform 0.5s ease; 
  animation: slideUnderline .5s forwards;
} */

/* @keyframes slideUnderline {
    from {transform: scaleX(0);}
    to {transform: scaleX(1);}
} */

h4 {
    margin: 0em 0em;
    padding: .2em .5em;
}

.header {
    width: 100%;
    text-align: left;
    /* font-family: 'Raleway', sans-serif; */
    font-family: 'Courier New', Courier, monospace;
}
.name {
    border-right: solid black 1px;
    text-align: right;
    color: #9a9b9c;
}

.grid {
    display: grid;
    grid-template-columns: auto 1fr;
}
</style>