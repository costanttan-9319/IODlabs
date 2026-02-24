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
 

