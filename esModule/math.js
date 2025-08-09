const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

//! Named Export for single files
// export const mult = (a, b) => a * b;
// export const div = (a, b) => a / b;

//! default exports
// export default mult;

//! Named Export  / Alias Export
//! export all at once
export { add, sub, mult, div };
