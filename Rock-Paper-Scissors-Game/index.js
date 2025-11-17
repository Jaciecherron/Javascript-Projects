let buttons = document.querySelectorAll("button");

let resultE1 = document.getElementById("result");

let playerScoreE1 = document.getElementById("user-score");

let computerScoreE1 = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach ((button) => {
  button.addEventListener("click", () => {
    let result = playRound(button.id, computerPlay());
    resultE1.textContent = result;
    });
});