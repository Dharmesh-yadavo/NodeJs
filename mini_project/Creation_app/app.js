import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//* We can't call rl.question twice in a row without waiting for the first one to finish.

const fileCreation = () => {
  rl.question("Enter the file name: ", (fileName) => {
    rl.question("Enter the content for the file: ", (content) => {
      fs.writeFile(`${fileName}.txt`, content, "utf-8", (err) => {
        if (err) {
          console.error(`"Error writing the file: ", ${err.message}`);
        } else {
          console.log(`File ${fileName}.txt created sucessfully! `);
        }
        rl.close();
      });
    });
  });
};

fileCreation();
