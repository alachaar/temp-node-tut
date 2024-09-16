const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// });

//Using Event Emitter API
const server=http.createServer()
//emits request event
//subscribe to it / listen for it / respond to it
server.on('request',(req,res) =>{        // We listen for request event server has the method on it extends the class EventEmitter
    res.end('Welcome')
})

server.listen(5000);