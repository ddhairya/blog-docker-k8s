const express = require('express')
const router = express.Router()
const {postController} = require('../../controllers')

router.route('/')
    .get(postController.getAllPost)
    .post(postController.createPost)

router.route('/events')
    .post( postController.eventHandler)

module.exports = router