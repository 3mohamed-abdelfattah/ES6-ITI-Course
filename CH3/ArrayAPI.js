
let fruits = ["apple", "orange", "banana", "mango", "strawberry"]

var result = fruits.every(indx => indx[0] == "a")
console.log(result)

console.log('--------------------------------')

let fruits2 = ["apple", "arange", "aanana", "aango", "atrawberry"]

var result2 = fruits2.every(indx => indx[0] == "a")
console.log(result2)

console.log('--------------------------------')

var mapping = fruits.map(f => `I love to eat ${f}`)
console.log(mapping)


console.log('--------------------------------')

var find = fruits.find(f => f === `banana`)
console.log(find)