const express = require('express')
const router = express.Router()
const { commentController } = require('../../controllers')

router.route('/posts/:id/comments')
    .get( commentController.getAllComment )
    .post( commentController.createComment)

router.route('/events')
    .post(commentController.eventHandler)

module.exports = router