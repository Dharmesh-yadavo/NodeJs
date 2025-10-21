import { readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import crypto from "crypto";

const PORT = 3001;
const DATA_FILE = path.join("data", "links.json");

const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "content-type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("404 page not found");
  }
};

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

const server = createServer(async (req, res) => {
  //! Get method :
  if (req.method === "GET") {
    if (req.url === "/") {
      //   try {
      //     const data = await readFile(path.join("public", "index.html"));
      //     res.writeHead(200, { "content-type": "text/html" });
      //     res.end(data);
      //   } catch (error) {
      //     res.writeHead(404, { "Content-type": "text/html" });
      //     res.end("404 page not found");
      //   }
      return serveFile(res, path.join("public", "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      return serveFile(res, path.join("public", "style.css"), "text/css");
    } else if (req.url === "/links") {
      const links = await loadLinks();

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(links));
    }
    //! Link Redirection :
    else {
      const links = await loadLinks();
      const shortCode = req.url.slice(1);
      console.log("links red.", req.url);

      if (links[shortCode]) {
        res.writeHead(302, { location: links[shortCode] });
        return res.end();
      }

      res.writeHead(404, { "Content-type": "text/plain" });
      return res.end("Shortened URL is not found");
    }
  }
  //! Post method :
  else if (req.method === "POST" && req.url === "/shorten") {
    const links = await loadLinks();
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      const { url, shortCode } = JSON.parse(body);
      // ! if we not get this URL :
      if (!url) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("URL required");
      }
      // ! checking for duplicate URLs / shortCode :
      const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
      if (links[finalShortCode]) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Short code already exists. Please choose another. ");
      }
      // ! writing data to link.json :
      links[finalShortCode] = url;
      await saveLinks(links);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end();
    });
  } else {
    // This catches unhandled POST URLs, unhandled GET assets, PUT, DELETE, etc.
    res.writeHead(404, { "Content-type": "text/plain" });
    return res.end(`Cannot ${req.method} ${req.url}`);
  }
});

server.listen(PORT, () => {
  console.log(`Server runing at https://localhost:${PORT}`);
});
