import https from "https";
import readline from "readline";

// Create a readline interface (rl) to manage the input/output streams.
const rl = readline.createInterface({
  input: process.stdin, // Read from the standard input (keyboard).
  output: process.stdout, // Write to the standard output (console).
});

const apiKey = "0a1e0be63a67e65dec3a6410";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

// Start the asynchronous process: make a GET request to the exchange rate API.
https.get(url, (response) => {
  // This callback function executes when the response headers are received.
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    // 1. Parse the complete JSON data string into a JavaScript object.
    // 2. Access the 'conversion_rates' object, which contains all exchange rates relative to USD.
    const rates = JSON.parse(data).conversion_rates;

    rl.question("Enter the amount in USD: ", (amount) => {
      rl.question(
        "Enter the target currency(e.g., INR, EUR, NPR): ",
        (currency) => {
          const rate = rates[currency.toUpperCase()];

          if (rate) {
            console.log(
              `${amount} USD is approximately ${convertCurrency(
                amount,
                rate
              )} ${currency}`
            );
          } else {
            console.log("Invalid code of currency");
          }
          rl.close();
        }
      );
    });
  });
});
