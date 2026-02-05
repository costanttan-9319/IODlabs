// Array with 5 elements representing car brands
let carBrands = ["Toyota", "Honda", "Ford", "Mercedes", "BMW"];

//Replace the value of the element at position 1 and 4.
carBrands[0] = "Hyundai";
carBrands[3] = "Audi";

//Add a new element to the beginning of the array
carBrands.unshift("Chevrolet");

//Remove the element at the end of the array
carBrands.pop();

//Print the array to the console.
console.log(carBrands);
