let a = 20;
let b = 5;
//Arithmetic operators
console.log("Addition:", a + b );
console.log("Subtraction:", a - b );
console.log("Multiplication:", a * b );
console.log("Division:", a / b );
console.log("Reminder:", a % b );

//Comparision Operators
console.log("a is greater:", a>b );
console.log("a is equal to b", a === b);

//Logical Operators
console.log("Both conditions:", a>10 && b<10);
console.log("At least one:", a<10 || b<10);

// Increment and Decrement

let count = 10;

count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);

// Real-Life Practice - Student Marks

let maths = 80;
let science = 75;
let english = 85;

let total = maths + science + english;
let percentage = total / 3;

console.log("Total Marks:", total);
console.log("Percentage:", percentage);

// Check result
console.log("Passed:", percentage >= 40);