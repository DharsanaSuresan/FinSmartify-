let expenses = [];
let totalAmount = 0;
let budget = 0;

// DOM elements
const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalExpensesDisplay = document.getElementById('total-expenses');
const budgetInput = document.getElementById('budgetInput');
const budgetAddBtn = document.getElementById('budgetAddBtn');
const totalBudgetDisplay = document.getElementById('totalBudget');
const budgetStatus = document.getElementById('budgetStatus');
const themeToggler = document.getElementById('themeToggler');

// Add expense
addBtn.addEventListener('click', () => {
  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  if (!category || amount <= 0 || !date) {
    alert("Please enter valid details");
    return;
  }

  const expense = { category, amount, date };
  expenses.push(expense);
  totalAmount += amount;

  updateTable();
  updateCards();

  categorySelect.value = "";
  amountInput.value = "";
  dateInput.value = "";
});

// Update expense table
function updateTable() {
  expenseTableBody.innerHTML = "";
  expenses.forEach((exp, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${exp.category}</td>
      <td>₹${exp.amount}</td>
      <td>${exp.date}</td>
      <td><button onclick="deleteExpense(${index})">Delete</button></td>
    `;

    expenseTableBody.appendChild(row);
  });
}

// Delete expense
function deleteExpense(index) {
  totalAmount -= expenses[index].amount;
  expenses.splice(index, 1);
  updateTable();
  updateCards();
}

// Budget
budgetAddBtn.addEventListener('click', () => {
  budget = Number(budgetInput.value);
  totalBudgetDisplay.textContent = "₹" + budget;
  updateCards();
  budgetInput.value = "";
});

function updateCards() {
  totalExpensesDisplay.textContent = "₹" + totalAmount;
  if (budget > 0) {
    const remaining = budget - totalAmount;
    budgetStatus.textContent = remaining >= 0 ? "₹" + remaining : "Over Budget!";
    budgetStatus.style.color = remaining >= 0 ? "green" : "red";
  }
}

// Current Date
function updateCurrentDate() {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById("current-date").textContent = currentDate;
}
setInterval(updateCurrentDate, 1000);

// Chart.js - smaller size
const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      { label: 'Expenses', data: [1000, 2000, 1500, 2500], backgroundColor: 'red' },
      { label: 'Savings', data: [5000, 4000, 4500, 3500], backgroundColor: 'green' }
    ]
  },
  options: { responsive: true, maintainAspectRatio: false }
});

// Dark/Light Mode
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Goals
document.getElementById("goalAddBtn").addEventListener("click", () => {
  const goalInput = document.getElementById("goalInput").value;
  if (goalInput.trim() !== "") {
    const goalDiv = document.createElement("div");
    goalDiv.textContent = "🎯 " + goalInput;
    document.getElementById("goalDisplay").appendChild(goalDiv);
    document.getElementById("goalInput").value = "";
  }
});


