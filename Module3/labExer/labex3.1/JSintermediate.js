//  1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.

function ucFirstLetters(str) {
  let words = str.split(" ");
  let result = [];

  // A classic, manual for-loop
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word[0].toUpperCase() + word.substring(1);
    result.push(capitalized);
  }

  return result.join(" ");
}

console.log(ucFirstLetters("los angeles"));
// Testing with different strings
console.log(ucFirstLetters("sydney australia"));
console.log(ucFirstLetters("a sunny day"));

// 2. a)Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise.

function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  }
  return str;
}

console.log(truncate("This text will be truncated if it is too long", 25));

// b) Write another variant of the truncate function that uses a conditional operator.

/* 

const truncate = (str, max) => (str.length > max) ? str.slice(0, max) + '...' : str;

console.log(truncate('This text will be truncated if it is too long', 25)); 

*/

// 3. Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips: https://developer.mozilla.org/en- US/docs/Web/JavaScript/Reference/Global_Objects/Array
// a) Add 2 new values to the end

const animals = ["Tiger", "Giraffe"];
animals.push("Elephant", "Monkey");
console.log(animals);

//b) Add 2 new values to the beginning
animals.unshift("Lion", "Zebra");
console.log(animals);

// c) Sort the values alphabetically
animals.sort();
console.log(animals);

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
  let middleIndex = Math.floor(animals.length / 2);
  animals.splice(middleIndex, 1, newValue);
}

replaceMiddleAnimal("Snake");
console.log(animals);

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.
function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase()),
  );
}

console.log(findMatchingAnimals("e"));
console.log(findMatchingAnimals("s"));

//  4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. The function should remove all dashes, and uppercase the first letter of each word after a dash.

function camelCase(cssProp) {
  const words = cssProp.split("-");
  const result = words.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result.join("");
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

// b) Variant 1: Using a standard 'for' loop
function camelCaseFor(cssProp) {
  const words = cssProp.split("-");
  let result = words[0]; // Start with the first word (lowercase)

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return result;
}

// b) Variant 2: Using a 'for...of' loop
function camelCaseForOf(cssProp) {
  const words = cssProp.split("-");
  let result = "";
  let isFirst = true;

  for (const word of words) {
    if (isFirst) {
      result += word.toLowerCase();
      isFirst = false;
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  }
  return result;
}

console.log(camelCase("margin-left"));
console.log(camelCaseFor("background-image"));
console.log(camelCaseForOf("display"));

// c)With and Without Conditional Operator

// Without Conditional Operator
function camelCaseNoConditional(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

//With Conditional Operator
function camelCaseWithConditional(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("");
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

//5.
// a) Explain why the above code returns the wrong answer
// My understanding is that we are doing mathematical functions but "console.log(fixedTwenty + fixedTen)" the "+" sign makes the 0.20 a string instead of a number. So a correct way of making the code works is to make the 0.20 and 0.10 a numebr which in this case we can fix it by using, console.log(Number(fixedTwenty) + Number(fixedTen));

// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
// Logic is to add the numbers first before using toFixed as it will turn numbers into strings for better display, however we need to return it in float results which means in number form, hence,  let finalResult = Number(fixedString); will make the result in numbers.
function currencyAddition(float1, float2) {
  let sum = float1 + float2;

  let fixedString = sum.toFixed(2);

  let finalResult = Number(fixedString);

  return finalResult;
}

console.log(currencyAddition(0.1, 0.2));
console.log(0.3 === currencyAddition(0.1, 0.2));

// c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful.
//The logic is to add a decision maker 'switch' so that the operation knows to perform addition when a '+' is present and divide when '/' is present. And also 'invalid' 


function currencyOperation(float1, float2, operation) {
  let result;
  switch (operation) {
    case "+":
      result = float1 + float2;
      break;
    case "-":
      result = float1 - float2;
      break;
    case "*":
      result = float1 * float2;
      break;
    case "/":
      result = float1 / float2;
      break;
    default:
      return "Invalid operation";
  }
  return Number(result.toFixed(2));
}

console.log(currencyOperation(0.1, 0.2, '+')); 
console.log(currencyOperation(0.3, 0.1, '-')); 
console.log(currencyOperation(10, 3, '/'));    
console.log(currencyOperation(0.2, 0.1, '*')); 

// d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.

function currencyOperation(float1, float2, operation, numDecimals = 2) {
    let result;

    // 1. Perform the requested math operation
    switch (operation) {
        case '+':
            result = float1 + float2;
            break;
        case '-':
            result = float1 - float2;
            break;
        case '*':
            result = float1 * float2;
            break;
        case '/':
            result = float1 / float2;
            break;
        default:
            return "Invalid operation";
    }

    // 2. Rounding Logic:
    // We use numDecimals (1-10) instead of a hardcoded 2.
    // toFixed rounds it to a String, Number() converts it back to a Float.
    return Number(result.toFixed(numDecimals));
}

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true