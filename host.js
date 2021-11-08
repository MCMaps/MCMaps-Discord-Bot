var http = require('http');

http.createServer(function (req, res) {
  res.write("MCMaps Discord Bot is: Online!");
  res.end();
}).listen(8080);