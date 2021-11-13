// include express from node_modules
const express = require('express')
const app = express()

// Define server related variables
const port = 3000

//Handle request and response here 
app.get('/', (req, res) => {
    res.render('main')
})

app.get('/about', (req, res) => {
    res.send(`This is about page.`)
})

app.get('/portfolio', (req, res) => {
    res.send(`This is portfolio page.`)
})

app.get('/contact', (req, res) => {
    res.send(`This is contact page.`)
})

//Start and listen the server
app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})