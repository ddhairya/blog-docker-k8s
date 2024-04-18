const express = require('express')
const router = express.Router()
const {moderationController} = require('../../controllers')

router.route('/events')
    .post(moderationController.eventHandler)

module.exports = router