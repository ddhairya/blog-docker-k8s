const express = require('express')
const app = express()
const route = require('./routes')
const cors = require('cors')

app.use( express.json())
app.use(cors())

app.use("/comment",route)

app.listen(5001 , () => {
    console.log("Server is listening on port 5001")
})