var arr = ["a", "b", "c", "d", "e"];
var arr2 = ["f", "g", "h", "i", "j", "k", ...arr];
console.log(arr2);

console.log("--------------------------------");


var obj = { name: "Alice", age: 10 };
var obj2 = { ...obj };
obj2.name = "Ali";
obj2.age = 22;
obj.age = 31;
console.log(obj);
console.log(obj2);

console.log("--------------------------------");
