import express from 'express'

const PORT = 3000

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.listen(PORT)
console.log(`Listening on port ${PORT}`)