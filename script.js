console.log('Script.js loaded successfully');

let expenses = [];
let totalAmount = 0;
let totalBudget = 0; // Initialize total budget to zero

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expnese-table-body');
const totalAmountCell = document.getElementById('total-amount');
const budgetInput = document.getElementById('budgetInput');
const totalBudgetDisplay = document.getElementById('totalBudget');
const progressPercentageDisplay = document.getElementById('progressPercentage');
const budgetAddBtn = document.getElementById('budgetAddBtn');
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme-toggler');

// graph code start
const ctx = document.getElementById('myChart');

var myChart=new Chart(ctx, {
  type: "bar",
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
    datasets: [{
      label: 'expenses',
      data: [1200, 31900, 35000, 161115, 666002, 334093,22000,43456,51487,12340,4356,9867.8],
      borderWidth: 1

    },
    {
        label: 'savings',
        data: [123300, 222900, 34400, 41115, 605502, 8093,26400,24563,5187,234550,443556,23867.8],
        borderWidth: 1

      },],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

  
// graph code end

//notificatications
function showNotification(message) {
  const notificationContainer = document.getElementById('notification-container');

  // Create notification element
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.innerHTML = `
    <p>${message}</p>
    <button onclick="hideNotification(this)">Close</button>
  `;

  // Add notification to the container
  notificationContainer.appendChild(notification);

  // Show notification
  notification.style.display = 'block';
}

// Function to hide notification
function hideNotification(button) {
  const notification = button.parentNode;
  if (notification) {
    notification.style.display = 'none';
  }
}

// Show bill payment reminder notification
showNotification("Reminder: You have an upcoming bill payment due tomorrow.");

//notifaction code ends here

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }
    expenses.push({category, amount, date});

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;
    document.getElementById('total-expenses').textContent = '$' + totalAmount.toFixed(2);

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;
        document.getElementById('total-expenses').textContent = '$' + totalAmount.toFixed(2);

        expensesTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
});

// Function to update the current date
function updateCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-IN', options); // 'en-IN' for English (India)
    document.getElementById('current-date').textContent = formattedDate;
}

// Call the function to initially set the current date
updateCurrentDate();

// Update the current date every second (optional)
setInterval(updateCurrentDate, 1000);



budgetAddBtn.addEventListener('click', function() {
    const budget = parseFloat(budgetInput.value);

    if (!isNaN(budget) && budget >= 0) {
        // Update total budget
        totalBudgetDisplay.textContent = '₹' + budget.toFixed(2);
        // Clear input after updating
        budgetInput.value = '';
    } else {
        alert('Please enter a valid budget amount');
    }
});
document.getElementById("goalAddBtn").addEventListener("click", function() {
  var goalInput = document.getElementById("goalInput").value;
  if (goalInput.trim() !== "") {
    // Display the goal
    displayGoal(goalInput);
    // Clearing the input field after adding the goal
    document.getElementById("goalInput").value = "";
  } else {
    alert("Please enter a valid goal!");
  }
});

function displayGoal(goal) {
  // Create a new div element to display the goal
  var goalDiv = document.createElement("div");
  goalDiv.textContent = "New Goal: " + goal;
  // Append the goal div to the goalDisplay section
  document.getElementById("goalDisplay").appendChild(goalDiv);
}

