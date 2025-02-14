const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req received: ", req.url);
  routes(req.url, res);
});

const routes = (url, res) => {
  if (url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8"); // Spanish with tilde
    res.end("<h1> Hello, World con página! </h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page\n");
  }
};

server.listen(62232, () => {
  console.log("Server running at http://localhost:" + server.address().port);
});
