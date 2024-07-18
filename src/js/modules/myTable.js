import { setChart } from "./myChat.js";

const tableBody = document.querySelector("tbody");

export let newTransactionsData = [];

export function fillTable(customerTransactions) {
  tableBody.innerHTML = ``;

  customerTransactions.forEach((transaction) => {
    let newRow = document.createElement("tr");
    newRow.classList.add("border");
    newRow.id =(`${transaction.customer_id}`);
    newRow.innerHTML = `
        <td class="py-3 px-12 pl-16">${transaction.id}</td>
        <td class="py-3 px-12">${transaction.customer_name}</td>
                    <td class="py-3 px-12">${transaction.date}</td>
                    <td class="py-3 px-12 pr-16">${transaction.amount}</td>`;
    tableBody.appendChild(newRow);

    newRow.addEventListener("click",()=>{
      setChart(transaction.customer_id)
  });
})}

export function baseTable(customersData, transactionsData) {
  transactionsData.forEach((transaction) => {
    let customer = customersData.find((c) => c.id == transaction.customer_id);
    transaction.customer_name = customer.name;
  });
  newTransactionsData = transactionsData;
  fillTable(newTransactionsData);
}

export function filterTable(min, max, name) {
    
  let max1 = max || 10000000000;
  let rangeTransactions = newTransactionsData.filter(
    (t) => max1 >= t.amount && t.amount >= min
  );
  filterByName(name, rangeTransactions);
}

export function filterByName(customerName, array) {
  let transactionlist = array || newTransactionsData;
  let customerTransactions = transactionlist.filter((t) =>
    t["customer_name"].toLowerCase().includes(customerName.toLowerCase())
  );

  fillTable(customerTransactions);
}
