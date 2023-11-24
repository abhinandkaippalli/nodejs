const fs = require("node:fs");

const buffer = Buffer.alloc(12); // Create a buffer of size 10 bytes

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: buffer.length, //data in chunks of 2 bytes 
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});
