const http = require('http');

const server = http.createServer( function(req, res){
  console.log(req.url, req.method, req.headers);
  res.setHeaders('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete coding</title></head>');
  res.write('<body><h1>Like and share</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Server running on address http://localhost:${PORT}')
});