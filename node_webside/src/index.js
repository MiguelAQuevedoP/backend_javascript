import express from 'express'

const PORT = 3000

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <h1>Pagina de inicio</h1>
    <p><strong>Prueba: </strong>Ésta pagina es parte de un ejercicio de un curso de node de Faztdev</p>
    <a href = "https://www.faztweb.com">Ir a la web de FaztDev</a>
    `)
})
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.listen(PORT)
console.log(`Listening on port ${PORT}`)