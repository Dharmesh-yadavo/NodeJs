// const path = require("path");
import path from "path";

// console.log(__dirname);
// console.log(__filename);

// school folder/students/data.txt

const filePath = path.join("folder", "students", "data.txt");

const parseData = path.parse(filePath);

const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);
const seprator = path.sep;

// console.log(filePath);

console.log({ parseData, resolvedPath, extname, basename, dirname, seprator });
