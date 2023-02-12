// server.js

var http = require('http');
var hostname = require('os').hostname();
var port = process.env.PORT || 8888;

var server = http.createServer(function handleRequest (request, response) {
  response.end('[' + hostname + '] Serving requests from myapp. Request URL:' + request.url);
});

server.listen(port, function () {
  console.log('Server listening on port', port);
});