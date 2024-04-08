//npm or better node.js here before pushing

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

function getContentType(filePath) {
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg', 
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    };

    return mimeTypes[extname] || 'application/octet-stream';
}

const server = http.createServer(function(request, response) {
    let filePath = 'bin' + (request.url === '/' ? '/index.html' : request.url);
    const absoluteFilePath = path.join(__dirname, 'public', filePath);

    fs.readFile(absoluteFilePath, function(error, data) {
        if (error) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('File not found');
        } else {
            const contentType = getContentType(filePath);
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(data);
        }
    });
});

server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong", error);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
});