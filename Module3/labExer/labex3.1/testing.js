



/*                       ==============Question 8=============
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










/*                       ==============Question 9=============   
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

function fetchURLDataV1(url) {
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
async function fetchURLDataV2(url) {
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
    const fetchPromises = urls.map(url => fetchURLDataV2(url));
    
    // Use Promise.all to execute all fetches concurrently
    return await Promise.all(fetchPromises);
}

//Part b

const validURL = 'https://jsonplaceholder.typicode.com/todos/1';
const invalidURL = 'https://jsonplaceholder.typicode.com/invalid/url';

// Testing V1 
fetchURLDataV1(validURL)
    .then(data => console.log('V1 (Valid) Success:', data))
    .catch(error => console.error('V1 (Valid) Error:', error.message));

// Testing V2 (New Async/Await version - Valid)
try {
    const dataV2 = await fetchURLDataV2(validURL);
    console.log('V2 (Valid) Success:', dataV2);
} catch (error) {
    console.error('V2 (Valid) Error:', error.message);
}

// Testing V2 (New Async/Await version - Invalid)
try {
    await fetchURLDataV2(invalidURL);
} catch (error) {
    console.log('V2 (Invalid) Expected Error:', error.message);
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