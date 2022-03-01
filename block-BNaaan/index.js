var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
  res.end('Welcome To AltCampus');
}

server.listen(3000, () => {
  console.log('Server is listening on post 3000');
});
