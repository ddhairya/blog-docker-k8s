const express = require('express')
const app = express()
const route = require('./routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/post', route)

app.listen( 5000 , () => {
    console.log("Server is running at port 5000")
})


