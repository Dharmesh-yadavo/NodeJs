import { readFile, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";

import express from "express";

const app = express();

const PORT = 3003;
const DATA_FILE = path.join("data", "links.json");

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links, null, 2));
};

app.get("/", async (req, res) => {
  try {
    const file = await readFile(path.join("views", "index.html"));
    const links = await loadLinks();
    const content = file.toString().replaceAll(
      "{{ shortened_urls }}",
      Object.entries(links)
        .map(
          ([shortCode, url]) =>
            `<li><a href = "/${shortCode}" target = "_blank"> ${req.host}/${shortCode} </a> - ${url}</li>`
        )
        .join("")
    );
    res.send(content);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { url, shortCode } = req.body;
    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
    const links = await loadLinks();
    if (links[finalShortCode]) {
      return res
        .status(400)
        .send("Short code already exists. Please choose another. ");
    }
    links[finalShortCode] = url;
    await saveLinks(links);

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();
    if (!links[shortCode]) return res.status(404).send("404 error occured");
    return res.redirect(links[shortCode]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server runing at https://localhost:${PORT}`);
});
