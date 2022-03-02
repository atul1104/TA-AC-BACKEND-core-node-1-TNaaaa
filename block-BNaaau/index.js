var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req, res);
}

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
