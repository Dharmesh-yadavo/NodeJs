import { createReadStream, createWriteStream } from "fs";
import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const writableStream = createWriteStream(outputFilePath);

// const readableStream = createReadStream(inputFilePath, {
//   encoding: "utf-8",
//   highWaterMark: 16,
// });

// readableStream.pipe(writableStream);

//!
// Listen for data chunks
readableStream.on("data", (chunk) => {
  console.log("Buffer (chunk):", Buffer.from(chunk)); // Convert the chunk to a buffer
  console.log("Received chunk:", chunk); // Logs each 16-byte chunk
  writableStream.write(chunk); // Write each chunk to output file
});

// Handle stream end
readableStream.on("end", () => {
  console.log("File read completed.");
  writableStream.end();
});
