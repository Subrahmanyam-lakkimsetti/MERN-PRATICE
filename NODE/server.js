const http = require('node:http');

const server = http.createServer((req, res) => {
  res.end('hello');
});

server.listen(1102, () => {
  console.log('----server srarted----');
});
