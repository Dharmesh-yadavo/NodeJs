import express from "express";
import { PORT } from "./env.js";
import path from "path";
// import fetch from "node-fetch";

const app = express();

//! In newer version of Node.js (14.8+), you can use top-level await without needing to wrap it in an async function.
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await response.json();
console.log(data);

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World !</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>Hello About Page !</h1>");
// });

// console.log(process);

// const PORT = 3000;
// const PORT = process.env.PORT;

//! static path
// app.use(express.static("public"));
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  console.log(req.body);
  console.log(res);
  // these will not work in
  // console.log(__dirname);
  // console.log(__filename);
  //* alternative of dirname:
  // console.log(import.meta.dirname);
  //* alternative of filename:
  // console.log(import.meta.url);
  // const __filename = new URL(import.meta.url).pathname;
  // console.log(__filename);
  // res.send("Hi");
  //! Send Files in Express JS
  // const homePagePath = path.join(import.meta.dirname, "public", "index.html");
  // res.sendFile(homePagePath);
});

//! Dynamic routing:
// app.get("/profile/:username", (req, res) => {
//   console.log(req.params);
//   res.send(`<h1>My username is ${req.params.username} </h1>`);
// });

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  // const formatedSlug = req.params.slug.replaceAll("-", " ");
  const formatedSlug = req.params.slug.replaceAll(/-/g, " ");
  res.send(`<h1>Article ${formatedSlug} by ${req.params.username} </h1>`);
});

//! Query Parameters
// url=/product?search=phone&limit=2
// app.get("/product", (req, res) => {
//   console.log(req.query);
//   // res.send(`<h1>${req.query.search}</h1>`);
//   //* can do for multiple queries ... while writing URL add & in between
//   res.send(`<h1>${req.query.search} ---> ${req.query.limit}</h1>`);
// });

// !  How to Handle Form Submission in Express
// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.redirect("/");
// });

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  try {
    console.log(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

//! How to Handle a 404 Error Page
app.use((req, res) => {
  // return res.status(404).send("page not found");
  return res
    .status(404)
    .sendFile(path.join(import.meta.dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at: ${PORT}`);
});
