//! Import way
// const add = require("./math");
// const mult = require("./math");
// This is not possible

// const { add, mult} = require("./math");

// const { add, mult, sub, div } = require("./math");

// console.log(add(2, 3));
// console.log(mult(2, 3));
// console.log(sub(2, 3));
// console.log(div(2, 3));

// One more way

const math = require("./math");

console.log(math.add(2, 3));
console.log(math.mult(2, 3));
console.log(math.sub(2, 3));
console.log(math.div(2, 3));
