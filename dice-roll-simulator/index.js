let buttonE1 = document.getElementById("roll-button");
let diceE1 = document.getElementById("dice");
let rollHistoryE1 = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
  let rollResult = Math.floor(Math.random()*6) +1 ;
  let diceFace = getDiceFace(rollResult);
  diceE1.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}