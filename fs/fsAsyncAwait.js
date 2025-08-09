const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

const filePath1 = __dirname;

// fs.promises
//   .readdir(filePath1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//! by async-await:
// const readFolder = async () => {
//   try {
//     const res = await fs.readdir(filePath1);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// readFolder();

//*-------------------------------------------------------------------------------------*
//* fsPromises.writeFile() : Writes data to a file asynchronously. If the file exists, it overwrites the content.
//! syntax: fs.Promises.writeFile(path, data, options);

//? path: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Specifies encoding (e.g., 'utf8'), mode, or flags.
//*-------------------------------------------------------------------------------------*

const writeFile = async () => {
  try {
    await fs.writeFile(filePath, "This is Initial data", "utf-8");
    console.log("File is created successfully");
  } catch (err) {
    console.log(err);
  }
};
// writeFile();

//*-------------------------------------------------------------------------------------*
//* Reading a File: fsPromises.readFile() : Reads the contents of a file asynchronously.
//! syntax: fsPromises.readFile(path, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*

const readFile = async () => {
  try {
    const res = await fs.readFile(filePath, "utf-8");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
// readFile();

//*-------------------------------------------------------------------------------------*
//* Appending Data: fsPromises.appendFile() : Adds content to the end of a file. If the file does not exist, it creates a new one.
//! syntax: fsPromises.appendFile(path, data, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*

const appendFile = async () => {
  try {
    await fs.appendFile(filePath, "\nThis is Updated data.", "utf-8");
    console.log("File updated successfully");
  } catch (err) {
    console.log(err);
  }
};
// appendFile();

//*-------------------------------------------------------------------------------------*
//* Deleting a File: fsPromises.unlink() : Deletes a file by its path.
//! syntax: fsPromises.unlink(path)

//? path: The file path to delete.
//*-------------------------------------------------------------------------------------*

const deleteFile = async () => {
  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully");
  } catch (err) {
    console.log(err);
  }
};
deleteFile();
