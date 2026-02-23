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

console.log(currencyOperation(0.1, 0.2, "+"));
console.log(currencyOperation(0.3, 0.1, "-"));
console.log(currencyOperation(10, 3, "/"));
console.log(currencyOperation(0.2, 0.1, "*"));

// d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.

function currencyOperation(float1, float2, operation, numDecimals = 2) {
  let result;

  // 1. Perform the requested math operation
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

  // 2. Rounding Logic:
  // We use numDecimals (1-10) instead of a hardcoded 2.
  // toFixed rounds it to a String, Number() converts it back to a Float.
  return Number(result.toFixed(numDecimals));
}

console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true

/* 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own. */

/*
Logic, 
Create a function.
Create an empty container.
Loop through every item in the array.
Check if container have this item.
Add it to the container.
Return the container.
*/

function unique(duplicatesArray) {
  const unique = [];

  for (let i = 0; i < duplicatesArray.length; i++) {
    let currentItem = duplicatesArray[i];
    if (!unique.includes(currentItem)) {
      unique.push(currentItem);
    }
  }

  return unique;
}

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const myArray = ["BMW", "Bentley", "Mercedes", "BMW", "Mercedes", "Bentley"];

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(myArray)); // [ 'BMW', 'Bentley', 'Mercedes' ]

/*
7. Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks.
*/

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

/* 
a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
Logic:
Create a function that find book by their id using .find()
find() looks for the first object that matches the id
When book is found, will return title, else, return "Book not found"
*/

function getBookTitle(bookId) {
  let match = books.find((book) => book.id === bookId);
  return match ? match.title : "Book not found";
}

console.log(getBookTitle(3)); 

/*
b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
Logic:
Create a filter function that returns an array of all old books wrtten before 1950.
*/

function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}

console.log(getOldBooks()); 
/* 
c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
Logic:
Add a 'classic' genre to all books using .map()
map() creates a NEW array. We use ...book to copy the old data
add the new 'genre' property
*/

function addGenre() {
  return books.map(book => {
    return { ...book, genre: 'classic' };
  });
}

console.log(addGenre());
/*
d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose
names start with authorInitial.
Logic:
Write a function getTitles(authorInitial) using map and filter
Filter only books where the author's name starts with the initial
Map only those filtered books
*/

function getTitles(authorInitial) {
  let filteredBooks = books.filter(book => book.author.startsWith(authorInitial));
  return filteredBooks.map(book => book.title);
}

console.log(getTitles('A'));

/*
e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date.

Logic:
Write a functionlatestBook() 
forEach to find the latest date
find to get the book object that matches the date
*/

function latestBook() {
  let latestYear = 0;

  books.forEach(book => {
    if (book.year > latestYear) {
      latestYear = book.year;
    }
  });
  return books.find(book => book.year === latestYear);
}

console.log(latestBook());


/* 
The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.
*/

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// logic: Create a secondary empty Map object to store the next set of contacts.

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map([
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
  ['Desmond', '0477558834'],
  ['Elson', '0455443323'],
  ['Frank', '0444448876']
]);


// c) Update the phone number for Caroline
// Logic: Her name already exists in phoneBookABC, so just change her number by using .set()

phoneBookABC.set('Caroline', '0455559876');

// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
//  logic: A function that loop through the Map and print each pair

function printPhoneBook(contacts) {
  for (let [name, number] of contacts) {
    console.log(`${name}: ${number}`);
  }
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map ([...phoneBookABC, ...phoneBookDEF]);

printPhoneBook(phoneBook);

// f) Print out the full list of names in the combined phone book
// print only names

function printOnlyNames(contacts) {
  console.log("Full List of Names;");
  for (let name of contacts.keys()) {
    console.log(name);
  }
}

printOnlyNames(phoneBook);

// 9. Given the below salaries object, perform the following tasks.
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

function sumSalaries(salaries) {
  let total = 0;
  for (let salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}

console.log(sumSalaries(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

function topEarner(salaries) {
  let highestSalary = 0;
  let topPerson = "";
  for (let[name, salary] of Object.entries(salaries)) {
    if (salary > highestSalary) {
      highestSalary = salary;
      topPerson = name;
    }
  }
  return topPerson;
}

console.log(topEarner(salaries));

/*
10. The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:
*/
// a) Print the total number of minutes that have passed so far today
const today = new Date ();
const totalMinutes = (today.getHours() * 60) + today.getMinutes();

console.log(totalMinutes + ' minutes have passed so far today.');

// b) Print the total number of seconds that have passed so far today
const totalSeconds = (totalMinutes * 60) + today.getSeconds();
console.log(totalSeconds + ' seconds have passed so far today.');

// c) Calculate and print your age as: 'I am x years, y months and z days old'
// logic: i need Years, Months and Days.

const birthday = new Date ('1996-08-27');

let years = today.getFullYear() - birthday.getFullYear(); // Full year is 30
let months = today.getMonth() - birthday.getMonth(); // not actually 30 so have to subtract (feb-aug) -6
let days = today.getDate() - birthday.getDate(); // how many days? (i am 27 , today is 23 so 23-27 = -4)

//adjustments for months
if (months < 0 || (months === 0 && days < 0)) {
  years--;
  months += 12;
}

//adjustments for days
if (days < 0) {
  months--;
  const daysInLastMonths = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  days += daysInLastMonths;
}

console.log(`I am ${years} years, ${months} months and ${days} days old`);

/*
d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
of days in between the two given dates.
*/

function daysInBetween(date1, date2) {
  const differenceInMs = Math.abs(date2 - date1);
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const days = Math.floor(differenceInMs / millisecondsInADay);

  return days;
}

const start = new Date('1996-08-27');
const end = new Date();
console.log(`There are ${daysInBetween(start, end)} days in between.`);