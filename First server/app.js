const http = require('http');

/* function requestListener(req, res) {
  console.log(req);
}

http.createServer(requestListener); */

const server = http.createServer( function(req, res){
  console.log(req);
  process.exit(); // stop the event loop
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Server running on address http://localhost:${PORT} ')
});