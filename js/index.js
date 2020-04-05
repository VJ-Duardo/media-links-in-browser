var thisSite = "https://vj-duardo.github.io/media-links-in-browser/";
var regex = thisSite + '\\??';

var inputField = document.getElementById("url");
var video = document.getElementById("video");

inputField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        startFromInput();
    }
});


function startFromUrl() {
    let url = window.location.href.replace(new RegExp(regex,"g"), '');
    inputField.value = url;
    video.src = url;
}

function startFromInput(){
    window.location.href = thisSite + "?" + inputField.value;
}


startFromUrl();