var http = require('http');

var server = http.createServer(handleRequest);

var parsedURL = url.parse(req.url);
var pathaname = parsedURL.pathname;

function handleRequest(req, res) {
  console.log(req.method, req.url);
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Homepage');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>This is all about NodeJS</h2>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>Page Not Found</h2>');
  }
}

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
