const http = require("http");

http.createServer((req, res) => {
  res.write("status: online");
  res.end();
}).listen(8000);