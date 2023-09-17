const http = require('http');
const {createReadStream} = require('fs');

PORT = 3000;

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/big_file.txt',{
        encoding: 'utf-8'
    });
    fileStream.on('data', (chunk) => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (error) =>{
        console.log(error)
    })
})

server.listen(PORT)
console.log(`Server listening on port${PORT}`)