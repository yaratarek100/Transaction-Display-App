import { newTransactionsData } from "./myTable.js";
const ctx = document.getElementById('myChart').getContext('2d');
const customerSpan = document.getElementById('customer-span');
export const graphBox = document.querySelector('.graph-box');
export const tableDiv = document.querySelector('.table-div');
export const body = document.querySelector('body');
let currentChart = null;

export function setChart(customerId, customerName) {
  let dateList = [];
  let amountList = [];
  customerSpan.innerHTML=`${customerName}`;
  customerSpan.classList.add("text-blue-700");
  graphBox.style.display="flex";
  tableDiv.style.display="none";
  body.style.overflow="hidden";


  let customerTransactions = newTransactionsData.filter(
    (t) => t.customer_id === customerId
  );

  customerTransactions.forEach(transaction => {
    dateList.push(transaction.date);
    amountList.push(transaction.amount);
  });

  // Destroy the previous chart if it exists
  if (currentChart) {
    currentChart.destroy();
    currentChart = null; // Ensure the reference is cleared
  }

  // Create a new chart
  currentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dateList,
      datasets: [{
        label: `# of Amount`,
        data: amountList,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
