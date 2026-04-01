const Calculator = require('../libraries/calculator');
const Logger = require('../libraries/logger');

let myCalc = new Calculator();

const addNumbers = (req, res) => {
    let number1 = parseFloat(req.query.num1);
    let number2 = parseFloat(req.query.num2);
    let sum = myCalc.add(number1, number2);
    
    Logger.log(myCalc.id, `Addition: ${number1} + ${number2} = ${sum}`);
    res.status(200).json({ result: sum });
};

const subtractNumbers = (req, res) => {
    let number1 = parseFloat(req.query.num1);
    let number2 = parseFloat(req.query.num2);
    let difference = myCalc.subtract(number1, number2);
    
    Logger.log(myCalc.id, `Subtraction: ${number1} - ${number2} = ${difference}`);
    res.status(200).json({ result: difference });
};

const multiplyNumbers = (req, res) => {
    let number1 = parseFloat(req.query.num1);
    let number2 = parseFloat(req.query.num2);
    let product = myCalc.multiply(number1, number2);
    
    Logger.log(myCalc.id, `Multiplication: ${number1} * ${number2} = ${product}`);
    res.status(200).json({ result: product });
};

const divideNumbers = (req, res) => {
    let number1 = parseFloat(req.query.num1);
    let number2 = parseFloat(req.query.num2);

    // Error logic comes first to increase efficiemcy. Reject before calcualting.
    if (number2 === 0) {
        Logger.log(myCalc.id, `Division Attempt: ${number1} / ${number2} - Failed: Division by zero`);
        return res.status(400).json({ error: "Error" });
    }


    let result = myCalc.divide(number1, number2);
    Logger.log(myCalc.id, `Division: ${number1} / ${number2} = ${result}`);
    res.status(200).json({ result: result });
};

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
};