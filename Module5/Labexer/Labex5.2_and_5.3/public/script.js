let currentOp = null;

/**
 * 1. SET OPERATION
 * Triggered when clicking +, -, X, or ÷
 */
function setOp(op) {
    currentOp = op;
    console.log("Operation set to:", op);
    
    // UI Polish: Remove 'active' highlight from all buttons
    const allOpButtons = document.querySelectorAll('.op-btn');
    allOpButtons.forEach(btn => btn.classList.remove('active'));

    // UI Polish: Add 'active' highlight to the button that was just clicked
    // We find the button by checking which one has the matching onclick text
    event.currentTarget.classList.add('active');

    // Optional: Show the selected operator in the result box temporarily
    const display = document.getElementById('result-display');
    display.innerText = `Selected: ${op.toUpperCase()}`;
    display.classList.remove('result-shown'); // Keep it grey while selecting
}

/**
 * 2. RUN CALCULATION
 * Triggered when clicking the = button
 */
function runcalculation() {
    const val1 = document.getElementById('num1').value;
    const val2 = document.getElementById('num2').value;
    const display = document.getElementById('result-display');

    if (!val1 || !val2) {
        alert("Please enter both numbers!");
        return;
    }

    if (!currentOp) {
        alert("Please select an operator (+, -, X, or ÷) first!");
        return;
    }

    // Hits your Node.js server on Port 3888
    const url = `http://localhost:3888/calculator/${currentOp}?num1=${val1}&num2=${val2}`;
    
    console.log("Fetching from:", url);

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Server issues');
            return response.json();
        })
        .then(data => {
            // Update the text with the result from the server
            display.innerText = data.result;
            
            // UI Polish: Add the class that turns the text BLACK (from your CSS)
            display.classList.add('result-shown');
        })
        .catch(error => {
            console.error('Fetch Error:', error);
            display.innerText = "OFFLINE";
            display.classList.remove('result-shown');
        });
}

/**
 * 3. RESET LOGIC
 * Clears inputs, results, and active button states
 */
function resetAll() {
    // Clear Inputs
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    
    // Reset Result Box
    const display = document.getElementById('result-display');
    display.innerText = "Results";
    display.classList.remove('result-shown'); // Turn back to grey
    
    // Clear Active Buttons
    document.querySelectorAll('.op-btn').forEach(btn => btn.classList.remove('active'));
    
    // Reset Variable
    currentOp = null;
    console.log("Calculator Reset");
}

// Attach the resetAll function to the button (if not using onclick in HTML)
document.getElementById('reset-btn').addEventListener('click', resetAll);