const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const conn = net.createConnection({
  host: "localhost", // change to IP address of computer, more on that below
  port: 3000,
});

conn.on("connect", () => {
  console.log("Connected to server");
  rl.question("Enter file path: ", (fileName) => {
    conn.write(fileName);
    rl.close();
  });
});

conn.on("data", (data) => {
  console.log(data.toString());
});
