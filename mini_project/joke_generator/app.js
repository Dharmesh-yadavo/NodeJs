// Import the 'https' module, which is a core Node.js module for making secure (SSL/TLS) network requests.
import https from "https";
// Import the 'chalk' library to easily apply styles (colors, bold, etc.) to text output in the console.
import chalk from "chalk";

// Define the main function to fetch and display a joke.
const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  // Use the https.get() method to make a GET request to the specified URL.
  // This is an asynchronous operation.
  https.get(url, (res) => {
    // The callback function is executed once the initial request is sent
    // and the response (res) object is received.

    // Initialize an empty string variable to accumulate the incoming data chunks.
    let data = "";

    // Set up an event listener for the 'data' event.
    // This event fires when a chunk of data is received from the server.
    res.on("data", (chunk) => {
      data += chunk;
    });

    // Set up an event listener for the 'end' event.
    // This event fires when the entire response has been received.
    res.on("end", () => {
      // Parse the complete, accumulated data string (which is JSON format)
      // into a JavaScript object.
      const joke = JSON.parse(data);
      console.log(`Here is a random ${joke.type}`);
      console.log(chalk.red(joke.setup));
      console.log(chalk.blue.bgRed.bold(joke.punchline));
    });

    // Set up an event listener for the 'error' event.
    // This catches network-related errors during the request (e.g., connection issues).
    res.on("error", (err) => {
      console.log(`Error fetching the joke, ${err.message}`);
    });
  });
};

// Call the function to initiate the joke fetching process.
getJoke();
