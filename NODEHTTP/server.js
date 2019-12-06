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

        let status = 404;
        const response = {
            success: false,
            data: null
        };

        if(method === 'GET' && url === '/todos'){
            status = 200;
            response.success = true;
            response.data = todos;
        }else if (method === 'POST' && url == '/todos'){
            // Have to send it through JSON.parse for it to be an object
            const {id, text} = JSON.parse(body);

            if(!id || !text){
                staus = 400;
                response.data = null;
            }else{
                todos.push({id, text});
                status = 201;
                response.sucess = true;
                response.data = todos;
            }

        }

        res.writeHead(200, {
            'Content-Type': 'application/json',
            'X-powered-By' : 'Node.js'
        })

        res.end(JSON.stringify(response));
    });

});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
