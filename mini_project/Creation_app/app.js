// Import the 'readline' module to handle interactive command-line input/output.
import readline from "readline";
// Import the 'fs' (File System) module to perform file operations (like writing a file).
import fs from "fs";

// Create a readline interface (rl) to read from standard input (process.stdin)
// and write to standard output (process.stdout).
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//* We can't call rl.question twice in a row without waiting for the first one to finish.
// This is a crucial note! 'rl.question' is asynchronous and must wait for a user's
// response before the next one is called. This is handled correctly inside the callbacks below.

// Define the main function that will handle the file creation process.
const fileCreation = () => {
  // First, prompt the user to enter the desired file name.
  rl.question("Enter the file name: ", (fileName) => {
    // This callback function runs once the user provides the file name.

    // Second, prompt the user for the content they want inside the file.
    rl.question("Enter the content for the file: ", (content) => {
      // This callback function runs once the user provides the file content.

      // Use fs.writeFile to asynchronously write data to a file.
      // 1. Path: Uses a template literal to create the filename: `${fileName}.txt`
      // 2. Data: The 'content' provided by the user.
      // 3. Encoding: 'utf-8' is a standard text encoding.
      // 4. Callback: A function that runs once the write operation is complete (or fails).
      fs.writeFile(`${fileName}.txt`, content, "utf-8", (err) => {
        if (err) {
          console.error(`"Error writing the file: ", ${err.message}`);
        } else {
          console.log(`File ${fileName}.txt created sucessfully! `);
        }

        // After the file operation is complete (success or failure),
        // close the readline interface to exit the program cleanly.
        rl.close();
      });
    });
  });
};

// Execute the fileCreation function to start the program.
fileCreation();
