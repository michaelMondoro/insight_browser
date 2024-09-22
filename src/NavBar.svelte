<script>
    let requestCount = 0;
    window.api.updateRequestCount(() => {requestCount+=1})
</script>
<main>
    <div class="banner">
        <span>
            <i class="icon fa fa-angle-left" onclick="goBack()"></i>
            <i class="icon fa fa-angle-right" onclick="goForward()"></i>
        </span>
        <span>
            <span contenteditable bind:textContent={requestCount} id="count" class="highlight" data-tooltip="requests">0</span>
            <span id="status" class="status"></span>
            <button onclick="stopSession()"><span>stop</span></button>
        </span>
    </div>
    <script>
        function goBack() {
            var webview = document.getElementById("webpage");
            webview.goBack();
        }

        function goForward() {
            var webview = document.getElementById("webpage");
            webview.goForward()
        }

        function stopSession() {
            window.api.stopSession();
        }
    </script>
</main>

<style>
button {
    appearance: none;
    background-color:rgba(255, 255, 255, 0);
    border: solid grey 1px;
    padding: .5em 1em;
    border-radius: .2em;
    transition: all .5s;
}
button:hover {
    cursor: pointer;
    border-radius: 1em;
    color:white;
    background-color: black;
}
button:hover > span {
    display: none;
}
button:hover::before {
    content: 'end session';
}
#count {
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    color: rgb(74, 166, 91);
    width: 5em;
    text-align: right;
}
.highlight:hover {
    cursor: pointer;
    color: var(--highlight-color);
    transition: all .2s;
}

[data-tooltip] {
    position:relative;
}
[data-tooltip]:hover::after {
    display: block;
    position: absolute;
    top: 2em;
    right: 1em;
    /* right: 3em; */
    font-size: 13px;
    font-family: "Montserrat", sans-serif;
    border-radius: 3px;
    color: black;
    content: attr(data-tooltip);
    background: #fefefeed;
    box-shadow: 1px 1px 3px grey;
    padding: 1em;
}

.icon {
    padding: 3px;
    margin: 5px;
    font-size: 25px!important;
    cursor: pointer;
    transition: all .2s;
}
.icon:hover {
    color: var(--highlight-color);
    transform: scale(1.2);

}

.status {
    height: 15px;
    width: 15px;
    background-color: #259d2d;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 1px 1px 3px grey;
}

.banner {
    display: flex;
    justify-content: space-between;
    padding: 2em 1em 1em 1em;
}
</style>