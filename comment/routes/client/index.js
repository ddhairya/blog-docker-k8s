const express = require('express')
const router = express.Router()
const commentRouter = require('./comment.route')

const defaultRoutes = [
    { path : '', route : commentRouter}
]

defaultRoutes.forEach( route => {
    router.use( route.path, route.route)
})

module.exports = router