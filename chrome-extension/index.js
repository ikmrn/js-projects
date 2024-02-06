document.addEventListener("DOMContentLoaded", function () {
  // Initialize constants
  const inputEl = document.getElementById("input-el");
  const inputBtn = document.getElementById("input-btn");
  const ulEl = document.getElementById("ul-el");

  // Retrieve leads from local storage
  let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];

  function saveLead() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
  }

  function renderLeads() {
    let listItems = "";
    myLeads.forEach((element) => {
      listItems += `
        <li>
          <a href="${element}" target="_blank">
            ${element}
          </a>
        </li>`;
    });
    ulEl.innerHTML = listItems;
  }

  inputBtn.addEventListener("click", saveLead);
  inputEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      saveLead();
    }
  });
  

  // Initial rendering of leads
  renderLeads();
});
