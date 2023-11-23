const fs = require("node:fs");

const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

fs.readFile("./file.txt", (error, data) => {
  if (error) {
    console.log(erro);
  } else {
    console.log(data);
  }
});

fs.writeFileSync("./greet.txt", "Hello world!");
