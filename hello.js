// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, resp) {
//   resp.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
//   fs.readFile('index.html', function(err, content) {
//     resp.end(content);
//   });
// }).listen(5000);

// console.log('Listening to port 5000...');

var express = require('express');
var logfmt = require('logfmt');
var app = express();
var fs = require('fs');

app.use(logfmt.requestLogger());

app.get('/', function(req, resp) {
  fs.readFile('views/index.html', function(err, content) {
    resp.write(content);
  });
});

app.get('/welcome', function(req, resp) {
  fs.readFile('views/welcome.html', function(err, content) {
    resp.write(content);
  });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log('Listening on ' + port);
});
