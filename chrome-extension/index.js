document.addEventListener("DOMContentLoaded", function () {
  // Initialize constants
  const inputEl = document.getElementById("input-el");
  const inputBtn = document.getElementById("input-btn");
  const ulEl = document.getElementById("ul-el");
  const li = document.createElement("li");
  let myLeads = [];

  function saveLead() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    listItems = "";

    myLeads.forEach((element) => {
      listItems += `<li><a href="${element}" target="blank">${element}</a></li>`;
    });
    ulEl.innerHTML = listItems;
  }
  inputBtn.addEventListener("click", saveLead);
  inputEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      saveLead();
    }
  });
});
