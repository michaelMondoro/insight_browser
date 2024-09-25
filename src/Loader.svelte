<script></script>

<div style="height: 100%; display: flex; flex-direction: column; justify-content:center; align-items:center">
    <span class="loader"></span>
</div>

<style>
    
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #4a76e8;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation .5s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
} 
</style>