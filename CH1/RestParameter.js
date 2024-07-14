function adding1(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(x + y + z);
}

adding1(1, 2, 3, 4, 5)

console.log("--------------------------------");

function adding2(x, y, ...z) {
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(x + y + z);
}

adding2(1, 2, 3, 4, 5, 6, 7, 8, 10)
