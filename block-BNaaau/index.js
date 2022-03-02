var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var parsedURL = url.parse(req.url, true);
  console.log(parsedURL.pathname);
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(parsedURL.query));
}

server.listen(2345, () => {
  console.log('Server is listening on port 2345');
});
