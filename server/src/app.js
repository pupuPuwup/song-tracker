const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `hello ${req.body.email}, your user was registered`
    })
})

const port = 8081;
app.listen(port, console.log(`server run on port ${port}`))