// include express from node_modules
const express = require('express')
const app = express()

// Define server related variables
const port = 3000

//Handle request and response here 
app.get('/', req, res => {
    res.send(`This is express web.`)
})

//Start and listen the server
app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})