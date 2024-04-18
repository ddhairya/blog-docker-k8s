const express = require('express')
const app = express()
const route = require('./routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use("/event", route)

app.listen(6000, ()=>{
    console.log("Server is listening on port 6000")
})