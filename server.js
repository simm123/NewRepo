const http = require('http');
const server = http.createServer((req, res) =>{
    console.log(req.url)
    console.log(req.method);
    console.log(req.headers);
    res.setHeader
});
server.listen(80);
