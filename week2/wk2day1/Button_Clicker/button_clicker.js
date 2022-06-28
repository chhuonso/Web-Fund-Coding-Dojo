

function logIn_Out(){
    let btn = document.querySelector("#login-btn")
    btn.innerText = "Logout"
}

function removeButton(){
    let btn = document.querySelector("#def-btn")
    btn.remove()
}

function like(){
    let popup = document.querySelector(".popup-container")
    popup.style.visibility = "visible"
}