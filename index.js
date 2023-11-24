const http = require("node:http");

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  res.writeHead(200, { "content-type": "application/JSON" });
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
