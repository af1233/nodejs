var http = require('http');

//create a server object:
const server= http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}) 

const port=3000;
const ip='127.0.0.1'//the server object listens on port 8080

server.listen(port, ip,()=>{
    console.log(`object: http://${ip}:${port}/ `)
})

     