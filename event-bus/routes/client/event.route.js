const express = require('express')
const router = express.Router()
const {eventController} = require('../../controllers')

router.route('/event-bus')
    .post( eventController.eventBusHandler)

router.route('/events')
    .post(eventController.eventHandler)
    .get(eventController.getAllEvents)


module.exports = router