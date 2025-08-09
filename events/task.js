//? Challenge: "Event Maestro: Handle It All!"

//! Objective
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.

const EventEmitter = require("events");

const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};

emitter.on("user-login", (userName) => {
  eventCounts["user-login"]++;
  console.log(`${userName} Logined`);
});

emitter.on("user-logout", (userName) => {
  eventCounts["user-logout"]++;
  console.log(`${userName} loged out`);
});

emitter.on("user-purchase", (userName, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${userName} purchased ${item}!`);
});

emitter.on("profile-update", (userName, field) => {
  eventCounts["profile-update"]++;
  console.log(`${userName} updated their ${field}!`);
});

emitter.on("summary", () => {
  console.log(eventCounts);
});

// Emit some events
emitter.emit("user-login", "Dharmesh");
emitter.emit("user-purchase", "Dharmesh", "Laptop");
emitter.emit("profile-update", "Dharmesh", "email");
emitter.emit("user-logout", "Dharmesh");

// Show the summary
emitter.emit("summary");
