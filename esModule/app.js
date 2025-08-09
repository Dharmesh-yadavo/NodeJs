//~ Import way
//! Default Import
// import mult from "./math.js";
// * in default export as we are exporting one file only then we can change while importing
// import multiply from "./math.js";

//! Named Import
// import { mult, div } from "./math.js";
// import { add, sub, mult, div } from "./math.js";

// console.log(mult(20, 3));
// console.log(multiply(20, 3));
// console.log(add(2, 3));
// console.log(sub(2, 3));
// console.log(div(2, 3));

//! Aliased Import
import * as math from "./math.js";
console.log(math.add(2, 3));
console.log(math.mult(2, 3));
console.log(math.sub(2, 3));
console.log(math.div(2, 3));
