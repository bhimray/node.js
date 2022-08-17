var http = require('http')
var fs = require('fs')

http.createServer(function(req, res){
    //const text = fs.readFileSync('./content/big.txt', 'utf8')
    //res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })
}).listen(5000)

// default64kb
// last buffer -remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark:9000})//9000 bytes
//const stream= createReadStream('../content/big.txt', {encoding:'utf8'})
//stream.on('data', (result)=>{
// console.log(result)
//}
