const tableBody = document.querySelector("tbody");
let newTransactionsData = [];



export function fillTable(transaction) {
    let newRow = document.createElement("tr");
    newRow.classList.add("p-3");
    newRow.innerHTML = `
    <td>${transaction.customer_name}</td>
                <td>${transaction.date}</td>
                <td class="bg-orange-300">${transaction.amount}</td>`;
    tableBody.appendChild(newRow);
}

export function baseTable(customersData, transactionsData) {
    tableBody.innerHTML=""
  transactionsData.forEach((transaction) => {
    let customer = customersData.find((c) => c.id == transaction.customer_id);
    transaction.customer_name = customer.name;
fillTable(transaction);
  });
  newTransactionsData = transactionsData;
}

export function filterByName (customerName){
    tableBody.innerHTML=""
    let customerTransactions = newTransactionsData.filter(
        (t) => t["customer_name"].toLowerCase().includes(customerName.toLowerCase()) );
    customerTransactions.forEach(transaction => {
    fillTable(transaction);
});
}

export function filterByAmount (min,max){
    tableBody.innerHTML=""
    let max1=max||10000000000;
    console.log(max1);
let rangeTransactions = newTransactionsData.filter(
    (t) => max1 >= t.amount && t.amount >= min);
rangeTransactions.forEach(transaction => {
    fillTable(transaction);
});
}

