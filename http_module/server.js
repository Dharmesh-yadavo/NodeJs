const http = require("http");

// web server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>I am Dharmesh Yadav</h1>");
    res.end();
  }
  if (req.url === "/about") {
    res.setHeader("Content-type", "text/plain");
    res.write("I am a Full-stack Devloper ");
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`🔥 Listening on PORT ${PORT}`);
});
