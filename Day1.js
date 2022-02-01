//1.JavaScript Program to Add Two Numbers

// input numbers
const num1 = parseInt(prompt('Enter the first number'));
const num2 = parseInt(prompt('Enter the second number'));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);



// 2.JavaScript Program to Convert Kilometers to Miles
// taking kilometers input from the user
const kilometers = prompt("Enter value in kilometers: ")

// conversion factor
const factor = 0.621371
// calculate miles
const miles = kilometers * factor
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);


//3.JavaScript program to swap two variables
//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');
//create a temporary variable
let temp;
//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);