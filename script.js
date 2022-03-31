/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
// Global variables
var pattern [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;


function startGame(){
  // Create game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}