
var array = [1, 2, , 4, , 6, , 8, 9]
var [x, , , , y = "Default Value", , z, ...w] = array

console.log(x);
console.log(y);
console.log(z);
console.log(w);

console.log("--------------------------------");


var obj = {
    name: "ES6",
    main: "JavaScript",
    born: 2015
};

var { name: x, main: y, born, instructor = "Default Value" } = obj;

console.log(x);
console.log(y);
console.log(born);
console.log(instructor);