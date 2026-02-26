/*                        ==============Question 1=============

1. makeCounter below is a decorator function which creates and returns a function that
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

function makeCounter(startFrom, incrementBy) {
  //added a startfrom function. added another parameter incrementBy)
  let currentCount = startFrom;

  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter(10, 7); //part b changed it into 10, part c added increment by 7

counter1(); // part a is 1. part b is 11 because it started from 10. part c makes it 17.
counter1(); // part a is 2. part b is 12. part c is 24

//creating the 2nd counter
let counter2 = makeCounter(30, 5); //part b change it to 30, part c added increment by 5

counter2(); // part a is 1. part b is 31. part c is 35.
counter1(); // part a is 3 as it remembers previous 1+1 and adds new +1 hence 3 which proves that counter2 is independent from counter1. part b is 13. part c is 31













/*                       ==============Question 2=============

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

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

//part c adding a fifth test, 100ms x 110)
const longTimer = setTimeout(delayMsg, 11000, "#5: Delayed by 11 seconds");

//part d prevent fifth test from printing
clearTimeout(longTimer);

console.log("#5 timer is cancelled");

/*
printed:
#4: Not delayed at all
#5 timer is cancelled
#3: Delayed by 0ms
#2: Delayed by 20ms
#1: Delayed by 100ms
*/







//                       ==============Question 3 skipped=============





/*                       ==============Question 4=============

4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
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












/*.                       ==============Question 5=============

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
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works

setTimeout(() => car.description(), 200); //fails in the beginning. Part a)

// b) Change the year for the car by creating a clone of the original and overriding it

let updateCar = {
  ...car,
  year: 2024,
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
  model: "M5",
  year: 2020,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

const boundDescription = car2.description.bind(car2);

setTimeout(boundDescription, 200);

/* e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d)
*/

let car2Clone = {
  ...car2,
  model: "M6",
};

setTimeout(boundDescription, 400);

car2.description();
car2Clone.description();










/*                       ==============Question 6=============

6. Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.

a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters
*/

Function.prototype.delay = function (ms) {
  const originalFunction = this;

  /* b) Use apply to improve your solution so that delayed functions can take any number of
parameters */

  return function (...args) {
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











/*                       ==============Question 7=============
7. The following DigitalClock class uses an interval to print the time every second once
started, until stopped.

a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied.
*/

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

//Create a new class PrecisionClock that inherits from DigitalClock
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}


/*
b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.
*/

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    super.display();

    let date = new Date();
    let [hours, mins] = [date.getHours(), date.getMinutes()];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;

    const currentTime = `${hours}:${mins}`;

    if (currentTime === this.wakeupTime) {
      console.log("Wake Up");
      this.stop();
    }
  }
}


//testing my logic for part a
const myPrecisionClock = new PrecisionClock("my precision clock:", 500);
myPrecisionClock.start();

//testing my logic for part b
const myAlarmClock = new AlarmClock("Alarm Clock:", "07:00");
myAlarmClock.start();













/*                       ==============Question 8=============
.
8. Using the following starter code, create a decorator function to validate function arguments
as strings. Test it by decorating the given orderItems function below.

a) Create a decorator function validateStringArg(fn) which will validate an
argument passed to fn to ensure that it is a string, throwing an error if not

b) Extend orderItems to use the ... rest operator, allowing multiple item name
arguments, and include them all in the returned string

c) Extend the decorator function to validate as strings all arguments passed to fn

d) When testing the decorated function, use try-catch blocks to handle errors thrown for
non-string arguments
*/


// a) Create a decorator function to validate a single string argument
function validateStringArg(fn) {
    return function(arg) {
        if (typeof arg !== 'string') {
            throw new Error("Argument must be a string");
        }
        return fn(arg);
    };
}

function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}

// Initial test for Part a
const validatedOrderItem1 = validateStringArg(orderItems);

try {
    console.log(validatedOrderItem1("Apple Watch")); 
} catch (error) {
    console.log(error.message);
}

// --- For part B, C, and D, I will be creating validatedOrderItem2 ---

// c) Extend the decorator to validate ALL arguments (multi-argument version)
function validateAllStringArgs(fn) {
    return function(...args) {
        for (let arg of args) {
            if (typeof arg !== 'string') {
                throw new Error("Argument must be a string");
            }
        }
        return fn(...args);
    };
}

// b) Extend orderItems to use the rest operator
function orderItemsMulti(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`;
}

// d) Test the extended version with try-catch
const validatedOrderItem2 = validateAllStringArgs(orderItemsMulti);

try {
    console.log(validatedOrderItem2("Apple Watch", "iPhone", "iPad")); // Multi-string test
} catch (error) {
    console.log(error.message);
}

try {
    console.log(validatedOrderItem2(123)); // Non-string test
} catch (error) {
    console.log(error.message);
}








/*                       ==============Question 9=============

9. We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.

a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below

b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it

c) Update the testing code to catch rejected promises and print a different message

d) Try to update the then and catch messages to include the random delay value
*/


// a) & b) 
function randomDelay() {
    return new Promise((resolve, reject) => {
        // Generate a random delay between 1 and 20 seconds
        const delaySeconds = Math.floor(Math.random() * 20) + 1;
        const delayMs = delaySeconds * 1000;

        setTimeout(() => {
            // b) If delay is even, resolve. If odd, reject.
            if (delaySeconds % 2 === 0) {
                resolve(delaySeconds);
            } else {
                reject(delaySeconds);
            }
        }, delayMs);
    });
}

// c) & d) Update testing code to handle both then/catch and include the delay value
randomDelay()
    .then((seconds) => {
        console.log(`Success! There was a delay of ${seconds} seconds.`);
    })
    .catch((seconds) => {
        console.log(`Failure! The odd delay of ${seconds} seconds resulted in a rejection.`);
    });










/*                       ==============Question 10=============   
/*
10.Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
comments before the function.)
a) Write a new version of this function using async/await
b) Test both functions with valid and invalid URLs
c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
using Promise.all to combine the results.
*/



import fetch from 'node-fetch'
globalThis.fetch = fetch

function fetchURLData1(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}

// Part a
async function fetchURLData2(url) {
    const response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
}

// Part c
async function fetchAllURLData(urls) {
    // Create an array of promises by calling our fetch function for each URL
    const fetchPromises = urls.map(url => fetchURLData2(url));
    
    // Use Promise.all to execute all fetches concurrently
    return await Promise.all(fetchPromises);
}

//Part b

const validURL = 'https://jsonplaceholder.typicode.com/todos/1';
const invalidURL = 'https://jsonplaceholder.typicode.com/invalid/url';

// Testing data 1 
fetchURLData1(validURL)
    .then(data => console.log('Data 1 (Valid) Success:', data))
    .catch(error => console.error('Data 1 (Valid) Error:', error.message));

// Testing data 2 (New Async/Await version - Valid)
try {
    const data2 = await fetchURLData2(validURL);
    console.log('Data2 (Valid) Success:', data2);
} catch (error) {
    console.error('Data2 (Valid) Error:', error.message);
}

// Testing Data 2 (New Async/Await version - Invalid)
try {
    await fetchURLData2(invalidURL);
} catch (error) {
    console.log('Data 2 (Invalid) Expected Error:', error.message);
}

// Testing Part C Extension array of URLs
const urlList = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2'
];

try {
    const allData = await fetchAllURLData(urlList);
    console.log('Part C (Promise.all) Success:', allData);
} catch (error) {
    console.error('Part C Error:', error.message);
}