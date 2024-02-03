document.addEventListener("DOMContentLoaded", function () {
  // Greet the user
  let name = "Ibragimov Kamran";
  let greet = "Welcome back";
  let welcomeEl = document.getElementById("welcome-el");
  welcomeEl.textContent = `${greet} ${name}!`;

  // Declare variables for buttons and count
  let incrementBtn = document.getElementById("increment-btn");
  let resetBtn = document.getElementById("reset-btn");
  let saveBtn = document.getElementById("save-btn");
  let countElement = document.getElementById("count");
  let count = 0;
  
   // Function to reset the count
  function reset() {
    count = 0;
    countElement.textContent = count;
  }

  // Function to increment the count
  function increment() {
    count++;
    countElement.textContent = count;
  }

  // Function to save the current count and append it to the DOM
  // Then reset the count
  function save() {
    var parentElement = document.querySelector("body > div");
    var newSave = document.createElement("span");
    newSave.textContent = count;
    parentElement.appendChild(newSave);
    console.log(count);

    reset();
  }

  // Listen for click events on the buttons
  incrementBtn.addEventListener("click", increment);
  resetBtn.addEventListener("click", reset);
  saveBtn.addEventListener("click", save);
});
