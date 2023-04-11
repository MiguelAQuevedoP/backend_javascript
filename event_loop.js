/*console.log('first')
setTimeout(()=> {
    console.log('second')
},3000)*/
PORT = 3000;

const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to the server!')
    }else if(req.url === '/about'){
        /*
        //blocking code
        for(let i = 0; i < 1000; i++){
            console.log(Math.random() * i)
        }*/

        res.end('This is about page')
    }else{
        res.end(`
            <h1>Error 404</h1>
            <p>The page you are looking for does not exist</p>
            <a href="/">regresar a la pagina principal</a>
        `)
    }
})
server.listen(PORT)
console.log(`Server is running on port ${PORT}`)