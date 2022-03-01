var http = require('http');

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  res.end('welcome');
}

server.listen(4444, () => {
  console.log('Server is listening on port 4444');
});
