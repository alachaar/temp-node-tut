const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
    } else if (req.url === '/about') {
        res.end('Here is our about page');
    } else {
        res.end(`
            <h1>Oops!!</h1>
            <p>The page that you are looking for is unavailable</p>
            <a href='/'>back home</a>
        `);
    }
});

server.listen(5000);
