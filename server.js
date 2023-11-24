const http = require('http');
const fs = require('fs');
// const path = require('path');
const _ = require('lodash');


const server = http.createServer((req, res) => {

    // Loadash
    const num = _.random(0, 20);
    console.log(num);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', 'about');
            res.end();
            return; // Don't proceed with reading a file in this case
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Check if the file exists
    fs.exists(path, (exists) => {
        if (!exists) {
            console.log('File not found: ', path);
            res.statusCode = 404;
            path = './views/404.html';
        }

        // Read the file
        fs.readFile(path, (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.end(data);
            }
        });
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on requests to port 3000');
});
