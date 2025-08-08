const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

//! export way
// module.exports = add;
// module.exports = mult;
// This is only possible for one fxn

// for two you have to do differently
// module.exports.add = add;
// module.exports.mult = mult;

// one more easy way
module.exports = { add, mult, sub, div };
