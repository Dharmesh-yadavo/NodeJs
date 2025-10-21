import express from "express";

import { shortenedRoutes } from "./router/shortener.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(shortenedRoutes);

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server runing at https://localhost:${PORT}`);
});
