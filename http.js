const http = require('http')
let PORT = 3000

http.createServer((req, res)=>{
    console.log(req.url)
    if(req.url == '/login'){
        res.write('Welcome to the server!')
        return res.end()
    }else if(req.url == '/about'){
        res.write('about')
        return res.end()
    }else if(req.url == '/profile'){
        res.write('profile')
        return res.end()
    }

    res.write(`
    <h1>Not found, Error: 404></h1>
    <p>Esta pagina no fue encontrada o no existe, por favor verificar la <strong>url</strong></p>
    <a href = "/login">Volver a la pagina principal</a>
    `)
    return res.end()
    
    
}).listen(PORT, function() {
    console.log('Server running at http://localhost:%d', PORT);
});