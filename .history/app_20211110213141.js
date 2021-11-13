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

//Handle request and response here 
app.get('/', (req, res) => {
    res.render('front')
})

//Start and listen the server
app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})