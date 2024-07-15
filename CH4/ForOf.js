let fruits = ["apple", "orange", "banana", "mango", "strawberry"];

for (let fruit of fruits) {
    console.log(fruit);
}

console.log('--------------------------------')


let employeeMap = new Map();
employeeMap.set("Mohamed", 3440);
employeeMap.set("Ahmed", 180000);

for (let [name, salary] of employeeMap) {
    console.log(`Employee Name: ${name}, Employee Salary: ${salary}`);
}

// Employee Name: Mohamed, Employee Salary: 3440
// Employee Name: Ahmed, Employee Salary: 180000

console.log('--------------------------------')



let uniqueNumbers = new Set([1, 2, 3, 4, 5]);

for (let number of uniqueNumbers) {
    console.log(number);
}


// 1
// 2
// 3
// 4
// 5
console.log('--------------------------------')
