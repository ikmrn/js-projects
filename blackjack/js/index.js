document.addEventListener("DOMContentLoaded", function () {
  // Initialize variables
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let sum = firstCard + secondCard;
  let hasBlackjack = false;
  let isAlive = true;

  let message = "";

  // Access elements from the HTML
  let startBtn = document.getElementById("start-btn");
  let newCardBtn = document.getElementById("newcard-btn");
  let messageEl = document.getElementById("message-el");
  let sumEl = document.getElementById("sum-el");
  let cardsEl = document.getElementById("cards-el");

  let cards = [firstCard, secondCard];

  // Function to start the game
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
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
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
  startBtn.addEventListener("click", renderGame);
  newCardBtn.addEventListener("click", newCard);
});
