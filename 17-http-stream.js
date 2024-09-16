var http=require('http')
var fs=require('fs')

http.
    createServer((req,res) =>{
        // const text=fs.readFileSync('./content/big.txt' , 'utf-8')
        // res.end(text)
        const fileStream = fs.createReadStream('./content/big.txt' , 'utf8');
        fileStream.on('open', () =>{
            fileStream.pipe(res)          //fileStream.pipe() is pushing from the ReadStream to the WriteStream
        })
        fileStream.on('error', (err) =>{
            res.end(err)
        })
    })
    .listen(5000)