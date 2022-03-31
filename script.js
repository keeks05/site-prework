/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
// Global variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
const gamePlaying = false;
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const volume = 0.5;
  
startBtn.addEventListener('click', () => {
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
})

 stopBtn.addEventListener('click', () => {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
})