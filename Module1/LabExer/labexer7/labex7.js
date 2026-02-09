//Create 4 functions for the 4 main mathematical operations (-,+,/,*)

//The subtraction function
function subtract(num1, num2) {
  return num1 - num2;
}
//To print on screen
console.log("subtract", subtract(5, 3));

//The addition function
function add(num1, num2) {
  return num1 + num2;
}
//To print on screen
console.log("add", add(5, 3));

//The division function
function divide(num1, num2) {
  return num1 / num2;
}
//To print on screen
console.log("divide", divide(6, 3));

//The multiplication function
function multiply(num1, num2) {
  return num1 * num2;
}
//To print on screen
console.log("multiply", multiply(5, 3));

//Greeting Function
function greet(name) {
  return "Hello, " + name;
}
//To print on screen
console.log(greet("Alice"));

//3 unit test for each function
//Testing addition function
function testAddition(num1, num2, expected) {
    let result = add(num1, num2);
    if (result === expected) {
        console.log("TEST PASSED");
    } else {
        console.error("TEST FAILED");
    }
}
testAddition(5,10,15);
testAddition(5,0,5);
testAddition(5,5,10);

//Testing subtraction function
function testSubtraction(num1, num2, expected) {
    let result = subtract(num1, num2);
    if (result === expected) {
        console.log("TEST PASSED");
    } else {
        console.error("TEST FAILED");
    }
}
testSubtraction(-20,-10,-30);
testSubtraction(5,0.1,4.9);
testSubtraction(15,6,5);

//Tesitng division function
function testDivision(num1, num2, expected) {
    let result = divide(num1, num2);
    if (result === expected) {
        console.log("TEST PASSED");
    } else {
        console.error("TEST FAILED");
    }
}
testDivision(6,-2,4);
testDivision(6,2,3);
testDivision(8,0.5,4);