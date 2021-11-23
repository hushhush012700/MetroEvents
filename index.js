const express = require('express')
const app = express()
const userData = require('./metroevents.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Metro Events")
})

app.get('/useraccounts', (req, res) => {
    res.send(userData)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})