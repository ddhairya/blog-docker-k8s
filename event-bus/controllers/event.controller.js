const axiso = require('axios')
const events = []
const eventBusHandler = (req, res) => {
    const event = req.body
    events.push(event)

    console.log("Event Bus Receives an event ->",event)

    axiso.post('http://post-ipsrv:5000/events', event)
    axiso.post('http://comment-srv:5001/events', event)
    axiso.post('http://query-srv:5050/events', event)
    axiso.post('http://moderaion-srv:5051/events', event)

    res.status(200).send({data : "OK"})
}

const eventHandler = ( req, res) => {
    console.log("Event received",req.body)

    res.send({data : req.body})
}

const getAllEvents = async(req, res) => {
    res.status(200).send({data : events})
}


module.exports = {
    eventBusHandler,
    eventHandler,
    getAllEvents
}