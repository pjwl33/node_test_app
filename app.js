var express = require('express');
var logfmt = require('logfmt');
var app = express();
var port = Number(process.env.PORT || 5000);

app.use(logfmt.requestLogger());
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);

app.get('/', function(req, resp) {
  resp.render("page");
});

app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection', function(socket) {
  socket.emit('message', {message: 'Welcome to Node.js Chat.r!'});
  socket.on('send', function(data) {
    io.sockets.emit('message', data);
  });
});

console.log("Listening on port " + port);