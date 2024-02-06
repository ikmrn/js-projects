document.addEventListener("DOMContentLoaded", function () {
  // Initialize variables
  let sum = 0;
  let hasBlackjack = false;
  let isAlive = false;
  let player = {
    name: "Kamran",
    chips: 145,
  };

  let message = "";

  // Access elements from the HTML
  let startBtn = document.getElementById("start-btn");
  let newCardBtn = document.getElementById("newcard-btn");
  let messageEl = document.getElementById("message-el");
  let sumEl = document.getElementById("sum-el");
  let cardsEl = document.getElementById("cards-el");

  let playerEl = document.getElementById("player-id");
  playerEl.textContent = `${player.name}: $${player.chips}`;

  // Function to start the game
  function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
  }

  // Function to render the game
  function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0, n = cards.length; i < n; i++) {
      cardsEl.textContent += `${cards[i]} `;
    }

    if (sum < 21) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "You win! You've hot Blackjack";
      hasBlackjack = true;
    } else {
      message = "You're out of the game";
      isAlive = false;
    }

    // Update the message, sum, and cards displayed on the HTML page
    messageEl.textContent = message;
    sumEl.textContent = `Sum: ${sum}`;
  }

  // Function to draw a new card
  function newCard() {
    if (isAlive && !hasBlackjack) {
      let card = getRandomCard();
      sum += card;
      cards.push(card);
      renderGame();
    }
  }

  function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;
    if (number > 10) {
      return 10;
    } else if (number === 1) {
      return 1;
    } else {
      return number;
    }
  }

  // Add an event listener to the buttons
  startBtn.addEventListener("click", startGame);
  newCardBtn.addEventListener("click", newCard);
});
