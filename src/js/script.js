import { setChart,graphBox, tableDiv, body } from "./modules/myChat.js";
import { filterTable, baseTable } from "./modules/myTable.js";

let customerInput = document.querySelector("#customer-input");
let xIcon = document.querySelector(".graph-box span");
let minAmount = document.querySelector("#min");
let maxAmount = document.querySelector("#max");

async function fetchData(url) {
  try {
    const response = await await fetch(url);

    if (!response.ok) {
      throw new Error("network response was not ok." + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There was a problem with fetch the data.", error);
  }
}

async function main() {

  // fill the table
  let myUrl = "http://localhost:3000/";
  let customersData = await fetchData(myUrl + "customers"); // id, name
  let transactionsData = await fetchData(myUrl + "transactions"); // id, customer-id, date, amount
  baseTable(customersData, transactionsData);

//chart 
setChart(2);
}

xIcon.addEventListener("click",()=>{
  graphBox.style.display="none";
  tableDiv.style.display="flex";
  body.style.overflow="auto";
})

// table filtration
customerInput.addEventListener("input",()=>{
  filterTable (minAmount.value,maxAmount.value,customerInput.value)
})
minAmount.addEventListener("input",()=>{
  filterTable (minAmount.value,maxAmount.value,customerInput.value)
})
maxAmount.addEventListener("input",()=>{
  filterTable (minAmount.value,maxAmount.value,customerInput.value)
})






  main();

