const http = require('http');
const url = require('url');

const requestListener = function (req, res) {
    const reqUrl = url.parse(req.url).pathname;
    res.statusCode = 200;
    if (req.method == 'GET') {
        if (reqUrl === '/') {
            res.end('Hello, World!\n');
        } else if (reqUrl === '/liveness-probe') {
            res.end('Health!\n');
        }
    }
};

const server = http.createServer(requestListener);
server.listen(80);
console.log('Server running!\n');
