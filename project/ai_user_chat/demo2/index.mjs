import http from 'node:http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('服务器运行在 http://localhost:3000/');
});