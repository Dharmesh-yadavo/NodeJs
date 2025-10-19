import express from "express";

const app = express();

//~ app - This variable holds the created Express app, which you can use to:
//~ Define routes (app.get(), app.post(), etc.)
//~ Configure middleware (app.use())
//~ Start the server (app.listen())

const PORT = 3003;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});
//! single line HTML code
app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

//! Can add multiple line HTML code
app.get("/contact", (req, res) => {
  return res.send(`<div class="url-shortener shortener-content">
      <h1 class="form-title">URL Shortener</h1>
      <form class="shortener-form" id="shorten-form">
        <div>
          <label for="url">Enter URL: </label>
          <input type="url" name="url" id="url" required />
        </div>
        <div>
          <label for="shortCode">Enter Short Code: </label>
          <input
            class="shortCode"
            type="text"
            name="shortCode"
            id="shortCode"
            required
          />
        </div>
        <button type="submit">Shorten</button>
      </form>

      <h2>Shortened URLs</h2>
      <ul id="shortened-urls"></ul>
    </div>`);
});

app.listen(PORT, () => {
  console.log(`Server is runing at ${PORT}`);
});
