let startE1 = document.getElementById("start");
let stopE1 = document.getElementById("stop");
let resetE1 = document.getElementById("reset");
let timerE1 = document.getElementById("timer");

let interval;
let timeleft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2,"0")}`;

  timerE1.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft --;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}