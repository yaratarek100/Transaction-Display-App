import { newTransactionsData } from "./myTable.js";
const ctx = document.getElementById('myChart').getContext('2d');
let currentChart = null; 


export function setChart(customerId,customerName){
  
  let dateList=[];
  let amountList=[];

  let customerTransactions = newTransactionsData.filter(
    (t) => t.customer_id==customerId );
customerTransactions.forEach(transaction => {
  dateList.push(transaction.date);
  amountList.push(transaction.amount);

  
  
})

new Chart(ctx, {
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
