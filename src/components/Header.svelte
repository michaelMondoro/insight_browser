<script>
    import { fade } from "svelte/transition";
    export let data;
</script>

<div in:fade={{ duration: 800 }} class="header">
    <h3>Your Info</h3>
    <br><br>
    <h4 class="" title="your ip">{data.userIP} </h4>
    <h4 class="" title="your location">{data.location.city + ", " + data.location.country}</h4>   
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
}

.header {
    width: 100%;
    text-align: left;
    /* font-family: 'Raleway', sans-serif; */
    font-family: 'Courier New', Courier, monospace;
}
</style>