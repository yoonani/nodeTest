var http = require('http');

http.createServer( function(req, res) {
  res.Writehead(200, {'Content-Type': 'text.html'});
  res.end('Hello, World!');
}).listen(8080);
