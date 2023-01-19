const net = require("net");
const fs = require("fs");

const server = net.createServer();

server.on("connection", (client) => {
  client.on("data", (data) => {
    const fileName = data.toString().trim();
    fs.readFile(fileName, "utf-8", (err, fileData) => {
      if (err) {
        console.log("File not found");
        client.write("File not found");
      } else {
        console.log("Data sent!");
        client.write(fileData);
      }
      client.end();
    });
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
