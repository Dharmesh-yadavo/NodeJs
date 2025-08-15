import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";

const PORT = 3001;

const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "content-type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-type": "text / plain" });
    res.end("404 page not found");
  }
};

const server = createServer((req, res) => {
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
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server runing at https://localhost:${PORT}`);
});
