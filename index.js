//Instantiating; Calling Express Server
//const dotenv = require('dotenv').config() --> require('dotenv).config()
require('dotenv').config() //Allows Stashing Of Artificial '.env' Variable In Separate File
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


console.log(process.env.PORT)
console.log(process.env.HOME)
console.log(process.env.USER)
console.log(process.env.API_SECRET)
const PORT = process.env.PORT || 5000 //Fallback




//Instance Of Express App
const server = express()


//Middleware Called
server.use(express.json())
server.use(cors())
server.use(morgan())


//Endpoints
server.get('/', (req, res) => {
    res.send(
    `<h1>Web45 Rocks!</h1>`
    )
})

server.get('/api', (req, res) => {
    res.json({
        message: 'Web45 Is Awesome'
    })
})


//Launch
server.listen(PORT, () => {
    console.log(`Listening On ${PORT}`)
})