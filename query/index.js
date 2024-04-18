const express = require('express')
const app = express()
const route = require('./routes')
const cors = require('cors')
const axios = require('axios')
const {queryController} = require('./controllers')

app.use(express.json())
app.use(cors())

app.use("/query", route)

app.listen(5050, async()=>{
    console.log("Server is listening on port 5050")

    const res = await axios.get('http://event-srv:6000/events')
    // console.log(res.data.data)
    queryController.updateEvents(res.data.data)
})