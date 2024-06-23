// Function to handle key press event and store the name in localStorage
function handleKeyPress(event) {
    localStorage.setItem('customerName', event.target.value);
}

// Function to display the stored name in an element with the ID customerName
function displayCustomerName() {
    var customerName = localStorage.getItem('customerName');
    if (customerName) {
        document.getElementById('customerName').textContent = customerName;
    }
}

// Attach event listener for index.html
document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.getElementById('userName');
    if (inputField) {
        inputField.addEventListener('input', handleKeyPress);
    }
    
    var customerNameElement = document.getElementById('customerName');
    if (customerNameElement) {
        displayCustomerName();
    }
});
