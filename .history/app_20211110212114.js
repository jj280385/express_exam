// include express from node_modules
const express = require('express')
const app = express()

// Define server related variables
const port = 3000

// Require express-handlebars here
const exphbs = require('express-handlebars')

// Setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main_page' }))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

//Handle request and response here 
app.get('/', (req, res) => {
    res.render('front_page')
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