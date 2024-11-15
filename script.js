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
const budgetAddBtn = document.getElementById('budgetAddBtn');
const totalBudgetDisplay = document.getElementById('totalBudget');
const progressPercentageDisplay = document.getElementById('progressPercentage');

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
    totalAmountCell.textContent = totalAmount.toFixed(2);

    // Update progress bar and progress percentage display
    if (totalBudget !== 0) {
        updateProgressBar();
        updateProgressPercentageDisplay();
    }

    // Update total expenses display
    document.getElementById('total-expenses').textContent = '₹' + totalAmount.toFixed(2);

    // Clear input fields after adding expense
    categorySelect.value = '';
    amountInput.value = '';
    dateInput.value = '';
});

budgetAddBtn.addEventListener('click', function() {
    const budget = parseFloat(budgetInput.value);

    if (!isNaN(budget) && budget >= 0) {
        totalBudget = budget; // Update total budget
        updateTotalBudgetDisplay(); // Update total budget display

        // Update progress bar and progress percentage display if there are expenses
        if (totalAmount !== 0) {
            updateProgressBar();
            updateProgressPercentageDisplay();
        }

        budgetInput.value = ''; // Clear input after updating
    } else {
        alert('Please enter a valid budget amount');
    }
});

// Function to update total budget display
function updateTotalBudgetDisplay() {
    totalBudgetDisplay.textContent = '₹' + totalBudget.toFixed(2);
}

// Function to update progress percentage display
function updateProgressPercentageDisplay() {
    const progressPercentage = (totalAmount / totalBudget) * 100;
    progressPercentageDisplay.textContent = progressPercentage.toFixed(2) + '%';
}

// Function to update progress bar
function updateProgressBar() {
    const progressBar = document.querySelector('.progress circle');
    const progressPercentage = (totalAmount / totalBudget) * 100;
    progressBar.setAttribute('stroke-dasharray', progressPercentage + ', 100');
}

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
