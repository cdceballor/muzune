const http = require("http");
const { person } = require("../mock/person");

const processRequest = (req, res) => {
  const { method, url } = req;
  console.log(`Method: ${method}, URL: ${url}`);
  switch (method) {
    case "GET":
      switch (url) {
        case "/":
          handleGetRequest(req, res);
          break;
        case "/person":
          handleGetPerson(req, res);
          break;
        default:
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not Found");
      }
      break;
    case "POST":
      switch (url) {
        case "/":
          handlePostRequest(req, res);
          break;
        case "/person":
          handlePostPerson(req, res);
          break;
        default:
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not Found");
      }
      break;
    default:
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method Not Allowed");
  }
};

const handleGetRequest = (req, res) => {
  // Send a response with some data
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "GET request received" }));
};

const handleGetPerson = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(person));
};

const handlePostRequest = (req, res) => {
  const { body } = req;
  res.writeHead(200, { "Content-Type": "application/json" });
  console.log(`Received POST request with body: ${body}`);
  res.end(JSON.stringify({ message: "Post:", body: body }));
};

const handlePostPerson = (req, res) => {
  const { body } = req;
  res.writeHead(200, { "Content-Type": "application/json" });
  console.log(`Received POST request with body: ${body}`);
  res.end(JSON.stringify({ message: "Post Person:", body: body }));
};

const server = http.createServer(processRequest);
server.listen(1234, () => {
  console.log("Server is running at http://localhost:1234/");
});
