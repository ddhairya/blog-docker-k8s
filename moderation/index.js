const express = require('express')
const app = express()
const route = require('./routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/moderation',route)

app.listen(5051, () =>{
    console.log("Server is running on Port 5051")
})