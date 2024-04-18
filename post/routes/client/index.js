const express = require('express')
const router = express.Router()
const  postRouter = require('./post.route')

const defaultRoutes = [
    { path : '' , route : postRouter}
]

defaultRoutes.forEach( route => {
    router.use( route.path , route.route)
})

module.exports = router