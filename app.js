const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  // Serve index.html for all requests
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading index.html');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
