// var http = require('http');
// var message = "Hello world!";

// var makeRequest = function(message) {
//   var options = {
//     host: 'localhost', port: 5000, path: '/', method: 'POST'
//   };

//   var request = http.request(options, function(resp) {
//     resp.on('data', function(data){
//       console.log(data);
//     });
//   });

//   request.write(message);
//   request.end();
// };

// exports = makeRequest;
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer();
// var message

// server.on('request', function(req, resp) {
//   resp.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
//   fs.readFile('views/index.html', function(err, content) {
//     resp.end(content);
//   });
// });

// server.on('close', function(req, resp){
//   console.log("Closing down the server...");
// });

// server.listen(5000);
// console.log('Listening to port 5000...');

// exports.goodbye = function() {
//   console.log("bye bye");
// };


// var fs = require('fs');
// var file = fs.createReadStream('index.html');

// file.pipe(process.stdout, {end: false});

// file.on("end", function() {
//   console.log('--File Complete--');
// });


// var events = require('events');
// var EventEmitter = events.EventEmitter;

// var chat = new EventEmitter();
// var users = [], chatlog = [];

// chat.on('message', function(message) {
//   chatlog.push(message);
// });

// chat.on('join', function(nickname) {
//   users.push(nickname);
// });
//chat.emit('message', 'herro world');




//HEROKU NODE APP CODE

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
