/* 1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1 
*/


/*
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
*/

/*
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.
*/


function makeCounter(startFrom, incrementBy) {   //added a startfrom function. added another parameter incrementBy)
    let currentCount = startFrom; 

    return function() {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

let counter1 = makeCounter(10, 7); //part b changed it into 10, part c added increment by 7

counter1(); // part a is 1. part b is 11 because it started from 10. part c makes it 17.
counter1(); // part a is 2. part b is 12. part c is 24

//creating the 2nd counter
let counter2 = makeCounter(30,5); //part b change it to 30, part c added increment by 5

counter2(); // part a is 1. part b is 31. part c is 35.
counter1(); // part a is 3 as it remembers previous 1+1 and adds new +1 hence 3 which proves that counter2 is independent from counter1. part b is 13. part c is 31
 

/*
2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?

It will print :
#4: Not delayed at all
#3: Delayed by 0ms
#2: Delayed by 20ms
#1: Delayed by 100ms

b) Rewrite delayMsg as an arrow function

Changing function delayMsg(msg) to a arrow function

c) Add a fifth test which uses a large delay time (greater than 10 seconds)

d) Use clearTimeout to prevent the fifth test from printing at all.
*/

const delayMsg = msg => {
console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//part c adding a fifth test, 100ms x 110)
const longTimer = setTimeout(delayMsg, 11000, '#5: Delayed by 11 seconds');

//part d prevent fifth test from printing 
clearTimeout(longTimer);

console.log("#5 timer is cancelled")

/*
printed:
#4: Not delayed at all
#5 timer is cancelled
#3: Delayed by 0ms
#2: Delayed by 20ms
#1: Delayed by 100ms
*/

/*
The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.
*/


const printFibionacci = () => {
    let a = 0;
    let b = 1;

    const intervalId = setInterval(() => {
        console.log(b);

        [a, b] = [b, a + b];
    }, 1000);
    return intervalId;
};

printFibionacci();

/*
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
*/

const printFibonacciTimeouts = () => {
    let A = 0;
    let B = 1;

    const run = () => {
        console.log(B);
        [A, B] = [B, A + B];
        setTimeout(run, 1000);
    };
    setTimeout(run, 1000);
};

printFibonacciTimeouts();

/*
c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.
*/

const printFibonacciLimit = (limit) => {
    let A1 = 0;
    let B1 = 1;
    let count = 0;

    const run = () => {
        if (count < limit) {
            console.log(B1);
            [A1, B1] = [B1, A1 + B1];
            
            count++;
            setTimeout(run, 1000);
        } else {
            console.log(`Finished printing ${limit} numbers.`);
        }
    };
    setTimeout(run, 1000);
};

printFibonacciLimit(5);

/*
5. The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout //fails. Why?

Ans: Is a calling problem because by typing setTimeout(car.description, 200), it sets it to global and global can't access the details. Unless we were to wrap or bind the codes for it to work. 
*/

/*
a) Fix the setTimeout call by wrapping the call to car.description() inside a
function
*/

let car = {
make: "Porsche",
model: '911',
year: 1964,

description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works

setTimeout(() => car.description(), 200); //fails in the beginning. Part a)

// b) Change the year for the car by creating a clone of the original and overriding it

let updateCar = {
    ...car,
    year: 2024
};

car.description(); 
updateCar.description();

/*
d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function :

for part D i will make another car for practice purposes and to not overwrite what iv'e done.
*/

let car2 = {
    make: "BMW",
    model: 'M5',
    year: 2020,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
}

const boundDescription = car2.description.bind(car2);

setTimeout(boundDescription, 200);

/* e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d)
*/

let car2Clone = {
    ...car2,
    model: 'M6'
};

setTimeout(boundDescription, 400);

car2.description();
car2Clone.description();

/*
6. Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.

a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters
*/

Function.prototype.delay = function(ms) {
    const originalFunction = this;

/* b) Use apply to improve your solution so that delayed functions can take any number of
parameters */

return function(...args) {
    setTimeout(() => {
        originalFunction.apply(this.args);
    }, ms);
    };
};

/*
c) Modify multiply to take 4 parameters and multiply all of them, and test that your
delay prototype function still works.
*/

function multiply(a, b, c, d) {
    console.log("--- Question 6: Delayed Multiply ---"); //part c is console.log("--- Question 6c: 4-Parameter Multiply ---");
    console.log(`Multiplication Result: ${a * b}`); // part c is console.log(`Result: ${a * b * c * d}`);
}


multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds. part c is multiply.delay(500)(5, 5, 4, 5); 



