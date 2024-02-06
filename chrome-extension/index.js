document.addEventListener("DOMContentLoaded", function () {
  // Initialize constants
  const inputEl = document.getElementById("input-el");
  const inputBtn = document.getElementById("input-btn");
  const ulEl = document.getElementById("ul-el");
  const deleteBtn = document.getElementById("delete-btn");
  const tabBtn = document.getElementById("tab-btn");

  // Retrieve leads from local storage
  let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];
  render(myLeads);

  function save(value) {
    myLeads.push(value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  }

  function render(leads) {
    let listItems = "";
    leads.forEach((element) => {
      listItems += `
        <li>
          <a href="${element}" target="blank">
            ${element}
          </a>
        </li>`;
    });
    ulEl.innerHTML = listItems;
  }

  // Event listeners
  // Save input
  inputBtn.addEventListener("click", function () {
    save(inputEl.value);
  });

  inputEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      save(inputEl.value);
    }
  });

  // Save Tabs
  tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      console.log(tabs[0]);
      save(tabs[0].url);
    });
  });

  // Delete Tabs
  deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
  });
});
