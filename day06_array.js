// Day 6 - Arrays

let students = ["Sonika", "Annu", "Monu"];

console.log(students);

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

students.push("Ashu");

console.log(students);

students.pop();

console.log(students);

students[1] = "Ashu";

console.log(students);

let students = ["Sonika", "Annu", "Monu"];

console.log(students.length);

students.push("Ashu");

console.log(students);
console.log("Total students:", students.length);

let students = ["Sonika", "Annu", "Monu"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

let students = ["Sonika", "Annu", "Monu"];

students.unshift("Ashu");

console.log(students);