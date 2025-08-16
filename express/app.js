import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World !</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello World !</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at: ${PORT}`);
});
