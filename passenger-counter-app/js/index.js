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
});
