const { writeFile } = require("fs/promises")

const createBigFile = async () =>{
    await writeFile("./data/big_file.txt", "This is a big file, \"Hello world\"".repeat(10000))
}
createBigFile()
/*
const {createReadStream} = require('fs')

const stream = createReadStream('./data/big_file.txt',{
    encoding: 'utf-8'
})

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end',()=> {
    console.log('Lectura terminada')
})
stream.on('error',(err) => {
    console.log(err)
})*/