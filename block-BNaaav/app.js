var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req, res);
    if (req.method === 'GET' && req.url === '/') {
      
  }
}

server.listen(3000, () => {
  console.log(`Server is Listening on port 3000`);
});
