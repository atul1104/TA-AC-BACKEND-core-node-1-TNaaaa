var http = require('http');

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req.method);
  res.statusCode = 201;
  res.setHeader('content-Type', 'text/html');
  res.end('<h1>Welcome to AltCampus</h1>');
}

server.listen(4444, () => {
  console.log('Server is listening on port 4444');
});
