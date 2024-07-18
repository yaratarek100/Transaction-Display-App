import { setChart } from "./modules/myChat.js";
import { filterByName, filterByAmount, baseTable } from "./modules/myTable.js";

let customerInput = document.querySelector("#customer-input");
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
}


// table filtration
customerInput.addEventListener("input",()=>{
  filterByName(customerInput.value);
})
minAmount.addEventListener("input",()=>{
  filterByAmount(minAmount.value,maxAmount.value);
})
maxAmount.addEventListener("input",()=>{
  filterByAmount(minAmount.value,maxAmount.value);
})

  main();


// async function fetchData() {
//   try {
//     const response = await await fetch("https://api.jsonbin.io/v3/b/6696c957acd3cb34a867122b/latest", {
//       method: "GET",
//       headers: {
//         "X-Master-Key": "$2a$10$MZ2x/unHrl1bm2mv9ovgHeodbEhblvxNSZfYSLRGw3PMe9eNpTof2",
//       },
//     });

//     if (!response.ok) {
//       throw new Error("network response was not ok." + response.statusText);
//     }

//     const data = await response.json();
//     return data.record;
//   } catch (error) {
//     console.log("There was a problem with fetch the data.", error);
//   }
// }

// let myUrl = "https://api.jsonbin.io/v3/b/6696c957acd3cb34a867122b/latest";
