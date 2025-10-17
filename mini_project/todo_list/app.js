// Import the core Node.js module for interactive CLI input/output.
import readline from "readline";

// **New/Important:** This creates the interactive interface object for the CLI.
// It manages the standard input (what the user types) and output (what the program prints).
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// **Focus:** This is the application's state—the simple in-memory database.
const todos = [];

// Function to display the menu and prompt the user for input.
const showMenu = () => {
  console.log("1: Add a task");
  console.log("2: View Task");
  console.log("3: Exit");
  // **Focus/New/Important:** Calls rl.question, which is ASYNCHRONOUS.
  // It waits for user input, and once received, it calls the handleInput callback.
  rl.question("Choose an option: ", handleInput);
};

// Callback function to process the user's menu choice.
const handleInput = (option) => {
  if (option === "1") {
    // **Focus/New/Important:** Another ASYNCHRONOUS call to get the task string.
    // The callback (the arrow function) only runs AFTER the user types the task and presses Enter.
    rl.question("Enter the Task: ", (task) => {
      todos.push(task); // Updates the state (the todos array).
      console.log("Task added:", task);
      showMenu(); // **Focus:** Recalls showMenu to loop the application back to the main menu.
    });
  } else if (option === "2") {
    console.log("\nYour Todo Lists: ");
    // Uses forEach to iterate over and display the contents of the todos array.
    todos.forEach((curTask, index) => {
      console.log(`${index + 1}. ${curTask}`);
    });
    showMenu(); // **Focus:** Recalls showMenu to loop the application.
  } else if (option === "3") {
    console.log("\nGood Bye !!! ");
    // **Implicit Important:** The program exits naturally here because rl.close() is not called
    // and the event loop finishes once no more callbacks are pending (though typically rl.close()
    // is explicitly used for clean shutdown).
  } else {
    console.log("Invalid Option. Please try again");
    showMenu(); // **Focus:** Recalls showMenu to loop the application.
  }
};

// **Focus/New/Important:** This is the entry point that starts the entire interactive process.
showMenu();
