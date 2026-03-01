/**
 * Lab Exercise 4.2 - JavaScript Logic
 * 1. Get data (two numbers) - Requirement A
 * 2. Choose an operator - Requirement B
 * 3. Get the result - Requirement C
 * 4. Reset the screen - Requirement D
 */

/**
 * Lab Exercise 4.2 - JavaScript Logic
 * 1. Get data (two numbers) - Requirement A
 * 2. Choose an operator - Requirement B
 * 3. Get the result - Requirement C
 * 4. Reset the screen - Requirement D
 */

// Variable to store the selected operation
let selectedOperator = null;

// Select the relevant HTML elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result-display');
const opButtons = document.querySelectorAll('.op-btn');
const resetButton = document.getElementById('reset-btn');

// --- Requirement B: Choose an operator ---
// We loop through each operator button and add a click listener
opButtons.forEach(button => {
    button.addEventListener('click', () => {
        // We get the operator (+, -, *, /) from the 'data-op' attribute in your HTML
        selectedOperator = button.getAttribute('data-op');
        
        // Visual feedback (optional): highlights the active button
        opButtons.forEach(btn => btn.style.backgroundColor = ""); 
        button.style.backgroundColor = "#ff9f0a"; 
    });
});

// --- Requirement A & C: Get Data and Calculate Result ---
function calculate() {
    // STRING TO NUMBER CONVERSION
    // We grab the .value (string) and convert it to a Number
    const number1 = Number(num1Input.value);
    const number2 = Number(num2Input.value);

    // Basic Validation: Ensure the user typed numbers and picked an operator
    if (num1Input.value === "" || num2Input.value === "") {
        alert("Please enter both numbers first!");
        return;
    }
    if (!selectedOperator) {
        alert("Please select an operator (+, -, *, /)");
        return;
    }

    let result = 0;

    // CUSTOM LOGIC (Requirement C) - No eval() used per security note
    switch (selectedOperator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            // Prevent division by zero
            if (number2 === 0) {
                result = "Error: Div by 0";
            } else {
                result = number1 / number2;
            }
            break;
        default:
            result = "Error";
    }

    // Update the display with the final result
    resultDisplay.innerText = result;
    
    // 👇 ADD THIS: Turn result text BLACK after calculation
    resultDisplay.classList.add('result-shown');
}

// --- Requirement D: Reset the screen ---
resetButton.addEventListener('click', () => {
    // Clear the input boxes
    num1Input.value = "";
    num2Input.value = "";
    
    // Reset the display and variables
    resultDisplay.innerText = "Results";
    
    // 👇 ADD THIS: Turn result text back to GREY
    resultDisplay.classList.remove('result-shown');
    
    selectedOperator = null;
    
    // Clear visual button highlights
    opButtons.forEach(btn => btn.style.backgroundColor = "");
});