// include express from node_modules
const express = require('express')
const app = express()

// Define server related variables
const port = 3000

// Require express-handlebars here
const exphbs = require('express-handlebars')

// Setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

//Routes setting 
app.get('/', (req, res) => {
    res.render('front')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})

app.get('/contact', (req, res) => {
        res.render('contact')
    })
    //Start and listen the server
app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})