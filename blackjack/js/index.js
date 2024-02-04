document.addEventListener("DOMContentLoaded", function () {
  let firstCard = 6;
  let secondCard = 9;
  let sum = firstCard + secondCard;
  let hasBlackjack = false;
  let isAlive = true;

  let message = "";

  let startBtn = document.getElementById("start-btn");

  function startGame() {
    if (sum < 21) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "You win! You've hot Blackjack";
      hasBlackjack = true;
    } else {
      message = "You're out of the game";
      isAlive = false;
    }
    console.log(message);
  }

  startBtn.addEventListener("click", startGame);
});
