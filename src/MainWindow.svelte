<script>

</script>

<div class="container center_align">
    <!-- <div class="intro center_align">
        <p class="desc desc1">the Greek word <b>ὅραμα</b> | (hor'-am-ah) means sight or vision</p> 
        <p class="desc desc2">so often we go about our digital lives travelling around the internet, not realizing where we and our data are going</p>
        <p class="desc desc3"><b>horama</b> provides a vision of your digital life</p>
        <button onclick="initSession()" class="start_button highlight"><u>begin</u></button>
    </div> -->
    <form on:submit|preventDefault={()=>console.log('searching')} class="search_form center_align" onsubmit="" id="search_form">
        <input class="search" type="text" id="search_input" placeholder="search" on:load={document.getElementById("search_input").focus()}>
    </form>   
    <script src="../renderer.js"></script>
    <script>
        //     window.electronAPI.startSession();
        //     window.electronAPI.search(input.value);
        // });
    </script>   
</div>
    


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@100&display=swap');


.center_align {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container {
    height: 100vh;
    padding: 0;
    font-family: "Montserrat", sans-serif;
}


.search_form {
    width: 100%;
    height: 100%;
}
input {
    all: unset;
}

.search {
    border: none;
    text-align: left;
    border-bottom: solid black 1px;
    width: 10%;
    transform: all 3s;
    animation:  3s ease forwards fadeInSearch ;
}
/*
Animations
*/
@keyframes fadeInSearch {
    0% {width: 0%}
    100% {width: 35%}
}
</style>
