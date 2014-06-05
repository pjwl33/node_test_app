var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp) {
  resp.writeHead(200);
  fs.readFile('index.html', function(err, cont) {
    resp.write(cont);
    resp.end();
  });
}).listen(8080);

console.log('Listening to port 8080...');