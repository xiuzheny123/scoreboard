let homescore = 0
let guestscore = 0

function addToHome(score){
    homescore+=score
    document.getElementById("home-score").textContent = homescore
}
function  addToGuest(score){
    guestscore+=score
    document.getElementById("guest-score").textContent = guestscore
}
function reset(){
    homescore = 0
    guestscore = 0
    document.getElementById("home-score").textContent = homescore
    document.getElementById("guest-score").textContent = guestscore
}