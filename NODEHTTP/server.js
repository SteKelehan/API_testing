const http = require('http');

const todos = [
    {id: 1, text: 'one'},
    {id: 2, text: 'one'},
    {id: 3, text: 'one'},
]

const server = http.createServer((req, res) => {
    const { headers, url, method } = req;
    console.log(headers, url, method);
    // Same as below but adding the satus code
    //res.setHeader('Content-Type', 'application/json');
    //res.setHeader('X-Powered-By', 'NodeJS');
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'NodeJS'
    })

    let body = [];
    req.on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    })

    res.end(
        JSON.stringify({
            success: true,
            data: todos
        
    }));
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
