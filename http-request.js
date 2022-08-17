const http = require('http')

const server = http.createServer(
    (req, res)=>{
    if (req.url === '/'){
        res.end('Welcome the homepage')
    }
    if (req.url=== '/about'){
        res.end('This is about us')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>This is an error.</p>
        <a href='/'>back home</a>
        `
    )
})

server.listen(3000)