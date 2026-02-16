//Module 3 labs JS Fundamentals
// Question 1 what are the results of these expressions?

// console.log is added to show i have checked my work after answering.
console.log ("" + 1 + 0)    // 10            The operator with strongs causes "1" and "0" to be in its position , in this case its 10. They are viewed as strings not numbers. 
console.log ("" - 1 + 0)    // -1            The "-" will only recognise numbers so automatically converts "" into 0 and 0-1+0= -1.
console.log (true + false)  // 1            js maths operates convertstrue into 1 and false into 0 so = 1.
console.log (!true)         // False            The "!" will flip the boolean value.
console.log (6 / "3")       // 2            "/" sign will force "3" to be 3 hence 6/3=2.
console.log ("2" * "3")     // 6            "*" sign will force both "2" and "3" to be 2 and 3 hence 2*3=6
console.log (4 + 5 + "px")  // 9px          By order matter, 4+5=9 , 9+"px" = 9px (it is consider a string).
console.log ("$ " + 4 + 5)   // $ 45           Since it starts with "" first, the 4 and 5 will be in thier position in this case 45. "$ " + 45 = $ 45 (it is consider a string)
console.log ("4" - 2)       // 2.             The minus sign will recognise numbers hence since its "4" , 4 is recognise and 4-2=2.
console.log ("4px" - 2)     // NaN            The minus will try to recignise "4px" as number but failed because of the px. Hence it will give Not A Number. 
console.log (" -9 " + 5)    //  -9 5            The "" in the front forces the digits to stay in its position literally including the _spacing_ , hence -9 5 (consdiered as string))
console.log (" -9 " - 5)   // -14            The minus have seen the value in the "" as number in this case -9 hence -9-5=-14.
console.log (null + 1)      // 1               null will become 0 when turn into a math value during mth operations
console.log (undefined + 1)  // NaN            underfined = NaN
console.log (undefined == null)  // true        undefined and null are in a common type in the == context
console.log (undefined === null)  // false        But when with stricter equality operator like === then they will not be equal
console.log (" \t \n" - 2)  // -2               \t is tab and \n is newlines (functions) and not a character, minus will try to make the "" infront value to 0. hence 0 -2 = -2.

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
let a = "2", b = "3";
let result = `${a} + ${b} is `;

result += (a + b < 10) ? 'less than 10' : 'greater than 10' ;

console.log(result);

// Bsically '+=' acts as a addition operator. changing values of 'a' and 'b' into numbers, if its less than 10 it will print 'a + b is less than 10' else 'a + b is more than 10'. However once it is replace to a string value like "2" and "3", it not perform math functions but string functoin instead, which in this case '23' which will print '2 + 3 is greater than 10'.

//5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.
//Function expression syntax
const getGreeting = function(name) {
  return 'Hello ' + name + '!';
};

console.log(getGreeting("World")); 

//Arrow function syntax
const getGreeting2 = name => `Hello ${name}!`;

console.log(getGreeting2("World")); 