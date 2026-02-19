//Module 3 labs JS Fundamentals
// Question 1 what are the results of these expressions?

// console.log is added to show i have checked my work after answering.
console.log("" + 1 + 0); // 10            The operator with strongs causes "1" and "0" to be in its position , in this case its 10. They are viewed as strings not numbers.
console.log("" - 1 + 0); // -1            The "-" will only recognise numbers so automatically converts "" into 0 and 0-1+0= -1.
console.log(true + false); // 1            js maths operates convertstrue into 1 and false into 0 so = 1.
console.log(!true); // False            The "!" will flip the boolean value.
console.log(6 / "3"); // 2            "/" sign will force "3" to be 3 hence 6/3=2.
console.log("2" * "3"); // 6            "*" sign will force both "2" and "3" to be 2 and 3 hence 2*3=6
console.log(4 + 5 + "px"); // 9px          By order matter, 4+5=9 , 9+"px" = 9px (it is consider a string).
console.log("$ " + 4 + 5); // $ 45           Since it starts with "" first, the 4 and 5 will be in thier position in this case 45. "$ " + 45 = $ 45 (it is consider a string)
console.log("4" - 2); // 2.             The minus sign will recognise numbers hence since its "4" , 4 is recognise and 4-2=2.
console.log("4px" - 2); // NaN            The minus will try to recignise "4px" as number but failed because of the px. Hence it will give Not A Number.
console.log(" -9 " + 5); //  -9 5            The "" in the front forces the digits to stay in its position literally including the _spacing_ , hence -9 5 (consdiered as string))
console.log(" -9 " - 5); // -14            The minus have seen the value in the "" as number in this case -9 hence -9-5=-14.
console.log(null + 1); // 1               null will become 0 when turn into a math value during mth operations
console.log(undefined + 1); // NaN            underfined = NaN
console.log(undefined == null); // true        undefined and null are in a common type in the == context
console.log(undefined === null); // false        But when with stricter equality operator like === then they will not be equal
console.log(" \t \n" - 2); // -2               \t is tab and \n is newlines (functions) and not a character, minus will try to make the "" infront value to 0. hence 0 -2 = -2.

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
// "let addition = three + four" The addition is wrong because "3" and "4" are strings term and it will print 34 in string term. Doesn't perform addition operator. So we can fix them by writing Number(three) + Number(four) and the operator will look for number instead.
// "let lessThan1 = three < four will print true" It prints correct answer however it is by chance, both is strings and letters are being considered in this term, not the numbers. To fix it, we have to Number(three) < Number(four)
// "let lessThan2 = thirty < four will print true" This is wrong because they are using strings, letter are being considered not the number. To fix it, we have to Number(thirty) < Number(four)

// 3. Which of the following console.log messages will print? Why?
// if (0) console.log('#1 zero is true')     No     The number 0 is false in JS
// if ("0") console.log('#2 zero is true')   Yes    It is a string, hence it will print 0
// if (null) console.log('null is true')     No     null represents "nothing" so not printing anything.
// if (-1) console.log('negative is true')   Yes    -1 is a number hence true
// if (1) console.log('positive is true').   Yes     1 is a number hence true

// 4. Rewrite this 'if' using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = "2",
  b = "3";
let result = `${a} + ${b} is `;

result += a + b < 10 ? "less than 10" : "greater than 10";

console.log(result);

// Bsically '+=' acts as a addition operator. changing values of 'a' and 'b' into numbers, if its less than 10 it will print 'a + b is less than 10' else 'a + b is more than 10'. However once it is replace to a string value like "2" and "3", it not perform math functions but string functoin instead, which in this case '23' which will print '2 + 3 is greater than 10'.

//5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.
//Function expression syntax
const getGreeting = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreeting("World"));

//Arrow function syntax
const getGreeting2 = (name) => `Hello ${name}!`;

console.log(getGreeting2("World"));

//  a) Complete the inigo object by adding a lastName property and including it in the greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
  name: "Westley",
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya", // Part a
  numFingers: 6, //Part b

  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; //Part a
    console.log(greeting + this.getCatchPhrase(person));
  },

  getCatchPhrase(person) {
    return person.numFingers === 6 //Part b
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.";
  },
};

// If using arrow function syntax it will be (part c)
// getCatchPhrase: (person) => person.numFingers === 6
//  ? "You killed my father. Prepare to die."
//  : "Nice to meet you."
//};

inigo.greeting(westley);
inigo.greeting(rugen);

// 7. The following object represents a basketball game and keeps track of the score as the game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
  score: 0,
  fouls: 0, //Part c
  
  freeThrow() {
    this.score++;
    return this; //part a
  },

  basket() {
    this.score += 2;
    return this; //part a
  },

  threePointer() {
    this.score += 3;
    return this; //part a
  },

  //part c
  foul() {
    this.fouls++; 
    return this;  
  },

halfTime() {
    console.log(`Halftime score is ${this.score} (${this.fouls} fouls)`);
    return this;
  },

// part b New method to print the final score
  fullTime() {
   console.log(`Full time final score is ${this.score} (${this.fouls} fouls)`);
    return this;
  }

};

//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .foul()
  .fullTime(); //part c

//PART D
// Above is test 1, it will print Halftime score is 9 (0 fouls), Full time final score is 9 (1 fouls)


// Test 2
// .basket()
// .foul()
// .foul()
//.freeThrow()
// .basket()
// .threePointer()
// .halfTime()
// .foul()
// .fullTime();
// Test 2 will print Halftime score is 9 (2 fouls) , Full time final score is 9 (3 fouls)

//Test 3 
// .basket()
// .foul()
// .foul()
//.freeThrow()
// .basket()
// .threePointer()
// .halfTime()
// .foul()
// .threePointer()
// .threePointer()
// .fullTime();
// Test 2 will print Halftime score is 9 (2 fouls) , Full time final score is 15 (3 fouls)



// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.

const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
};

function printObjectProperties(obj) {
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
    }
}

printObjectProperties(sydney);

// b. Create a new object for a different city with different properties and call your function again with the new object.

const singapore = {
  name: 'Singapore',
  population: 6_000_000,
  state: 'Singapore',
  founded: '9 August 1965',
  timezone: 'Asia/Singapore',
};

function printObjectProperties(obj) {
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
    }
}

printObjectProperties(singapore);


// 9. Use the following variables to understand how JavaScript stores objects by reference. 
//a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)


let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports; //new container, moreSports
moreSports.push('Basketball');


console.log(teamSports);
console.log(moreSports);


// b) Create a new dog2 variable equal to dog1 and give it a new value

let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Rex';

console.log(dog1);
console.log(dog2);


//c) Create a new cat2 variable equal to cat1 and change its name property

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1;
cat2.name = 'Luna';
console.log(cat1.name); 
console.log(cat2.name); 