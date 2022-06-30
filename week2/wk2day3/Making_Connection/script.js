var requests = document.querySelector("#connectRequest");
var connections = document.querySelector("#conNum");

function addConnect(element){
    var connect = document.querySelector(element);
    connect.remove();
    requests.innerText--;
    connections.innerText++;
}

function removeConnect(element){
    var connect = document.querySelector(element);
    connect.remove();
    requests.innerText--;
}

function editProfile(){
    var user = document.querySelector("#profileName");
    user.innerText = "Sonny Chhuon";

    var image = document.querySelector("#profilePic")
    image.src = "images/user.png"

    var location = document.querySelector("#location");
    location.innerText = "San Jose"
}