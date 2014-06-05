var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp) {
  resp.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('index.html', function(err, content) {
    resp.end(content);
  });
}).listen(8080);

console.log('Listening to port 8080...');