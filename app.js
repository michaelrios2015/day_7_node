// So this is node at it's simpliest... 

// once we start using express I don't think we use these two.. but maybe.. 
const http = require('http');
const hostname = '127.0.0.1';

// this we use 
const port = 3000;

// so express is not super different but does simplfy some of this 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Fordham GO RAMS!!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
