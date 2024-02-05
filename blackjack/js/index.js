document.addEventListener("DOMContentLoaded", function () {
  // Initialize variables
  let firstCard = 6;
  let secondCard = 9;
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

  let cards = [firstCard, secondCard]

  // Function to start the game
  function renderGame() {
      cardsEl.textContent = "Cards: "
      for (let i = 0, n = cards.length; i < n; i++) {
        cardsEl.textContent += `${cards[i]} `
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
    let card = 6
    sum += card
    cards.push(card)
    renderGame()
  }


  // Add an event listener to the buttons
  startBtn.addEventListener("click", renderGame);
  newCardBtn.addEventListener("click", newCard);
});
