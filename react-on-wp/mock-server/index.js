const express = require('express')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}]`, req.url)
    console.log(req.body)
    next()
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use((req, res, next) => {
    setTimeout(next, 700)
})
app.use(require('./api'))

app.get('/', (req, res) => res.send('hello'))

module.exports = app


