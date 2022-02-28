var http = require('http');

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  res.end('Welcome to AltCampus');
}
server.listen(4000, () => {
  console.log('server is listening on port 4000');
});
