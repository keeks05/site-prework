/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
// Global variables
var pattern [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('')

function startGame(){
  // Create game variables
  progress = 0;
  gamePlaying = true;
  

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}