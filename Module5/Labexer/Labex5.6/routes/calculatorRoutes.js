const express = require('express');
const router = express.Router();

/**
 * BACK-END MATH LOGIC
 * We use parseInt() to convert the strings from the URL into numbers.
 */

// 1. Addition
router.get('/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1 + num2;
    
    console.log(`[MATH] Addition: ${num1} + ${num2} = ${result}`);
    res.json({ result: result });
});

// 2. Subtraction
router.get('/subtract', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1 - num2;
    
    console.log(`[MATH] Subtraction: ${num1} - ${num2} = ${result}`);
    res.json({ result: result });
});

// 3. Multiplication
router.get('/multiply', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1 * num2;
    
    console.log(`[MATH] Multiplication: ${num1} * ${num2} = ${result}`);
    res.json({ result: result });
});

// 4. Division
router.get('/divide', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    
    // Safety check for dividing by zero
    if (num2 === 0) {
        console.log(`[MATH] Division Error: Attempted to divide by zero.`);
        res.json({ result: "Cannot divide by zero" });
    } else {
        const result = num1 / num2;
        console.log(`[MATH] Division: ${num1} / ${num2} = ${result}`);
        res.json({ result: result });
    }
});

// Export the router so server.js can use it
module.exports = router;