(function(){

    var time = setInterval(timeDisplay, 1000);

    function timeDisplay() {
        const date = new Date();
        document.querySelector('.time').innerHTML = date.toLocaleTimeString();
    }

})();