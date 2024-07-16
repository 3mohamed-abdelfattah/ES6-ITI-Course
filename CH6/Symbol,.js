var x = Symbol("1")
var y = Symbol("1")

// Unique Values !!!!
console.log(x == y);
console.log(x === y);

console.log(`=============================`);

var a = Symbol.for("1")
var b = Symbol.for("1")
console.log(a == b);
console.log(a === b);

console.log(`=============================`);

console.log(Symbol.keyFor(x));
console.log(y.description);
console.log(Symbol.keyFor(a));
console.log(Symbol.keyFor(b));

console.log(`=============================`);

