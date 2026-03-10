class Calculator {
    constructor() {
        // Part 2: Generate a random ID (OOP Instantiation)
        this.id = Math.floor(Math.random() * 1000000);
    }

    // Part 1: Library logic
    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    }
}

module.exports = Calculator;