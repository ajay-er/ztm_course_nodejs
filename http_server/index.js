//*time to make node servers 

const http = require('http');

const PORT = 3000;

const server = http.createServer((req,res)=>{
     res.writeHead(200,{
        'Content-Type':'text/plain',
     });
     res.end('Hello!Am genious..heehheehe');
});

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`);
});// 127.0.0.1 => localhost

// we don't explicitly call the server.on() method in the code example,
//  it is still being called internally by the server.listen() method to register a listener for the listening event.
