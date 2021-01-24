const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use((req, res) => {
    res.send('Hello, pikachu!')
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`)
})