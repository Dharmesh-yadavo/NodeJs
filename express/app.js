import express from "express";
import { PORT } from "./env.js";
import path from "path";
// import fetch from "node-fetch";

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

  //! In newer version of Node.js (14.8+), you can use top-level await without needing to wrap it in an async function.
  // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // const data = await response.json();
  // console.log(data);

  //! importing css
  // app.use(express.static("public"));
  //* static path
  const staticPath = path.join(import.meta.dirname, "public");
  app.use(express.static(staticPath));

  const homePagePath = path.join(import.meta.dirname, "public", "index.html");
  res.sendFile(homePagePath);
});

//! Dynamic routing:
app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`<h1>My username is ${req.params.username} </h1>`);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  // const formatedSlug = req.params.slug.replaceAll("-", " ");
  const formatedSlug = req.params.slug.replaceAll(/-/g, " ");
  res.send(`<h1>Article ${formatedSlug} by ${req.params.username} </h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at: ${PORT}`);
});
