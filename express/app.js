import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World !</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>Hello About Page !</h1>");
// });

// console.log(process);

// const PORT = 3000;
// const PORT = process.env.PORT;

app.get("/", (req, res) => {
  // these will not work in
  // console.log(__dirname);
  // console.log(__filename);
  //* alternative of dirname:
  // console.log(import.meta.dirname);
  //* alternative of filename:
  // console.log(import.meta.filename);
  // const __filename = new URL(import.meta.url).pathname;
  // console.log(__filename);
  // res.send("Hi");

  //! importing css
  // app.use(express.static("public"));
  //* static path
  const staticPath = path.join(import.meta.dirname, "public");
  app.use(express.static(staticPath));

  const homePagePath = path.join(import.meta.dirname, "public", "index.html");
  res.sendFile(homePagePath);
});

app.listen(PORT, () => {
  console.log(`Server is running at: ${PORT}`);
});
