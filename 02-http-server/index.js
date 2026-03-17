import http from 'http';

const server = http.createServer((req, res)=>{
    res.end("Hello World from Node.js HTTP Server");
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})