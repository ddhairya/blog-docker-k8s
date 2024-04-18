const express = require('express')
const router = express.Router()
const {queryController} = require('../../controllers')

router.route('/events')
    .post(queryController.eventHandler)

router.route('/posts')
    .get( queryController.getPosts)


module.exports = router