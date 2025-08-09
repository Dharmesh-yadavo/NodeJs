// Import EventEmitter Class
const EventEmitter = require("events");
// Create an instance of EventEmmiter
const emitter = new EventEmitter();

//! 1. Define an event listener (addListener)
// emitter.on("greet", () => {
//   console.log("Hello, Everyone");
// });

//! 2. Trigger (emit) the "greet" event
// emitter.emit("greet");

//* You can also pass arguments while emitting.

// emitter.on("greet", (userName) => {
//   console.log(`Hello, ${userName}. `);
// });
// emitter.emit("greet", "Dharmesh Yadav");

// ~

// emitter.on("greet", (userName, prof) => {
//   console.log(`hello ${userName}, You are a ${prof}, ri8`);
// });
// emitter.emit("greet", "Dharmesh Yadav", "Full-Stack Devloper");

//! but it's best idea to take a single argument as an object.

emitter.on("greet", (arg) => {
  console.log(`Hello ${arg.name}, You are a ${arg.prof}, ri8`);
});
emitter.emit("greet", { name: "Dharmesh Yadav", prof: "Full-Stack Devloper" });
