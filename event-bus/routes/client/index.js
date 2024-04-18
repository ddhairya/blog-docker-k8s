const express = require('express')
const router = express.Router()
const eventRouter = require('./event.route')


const defaultRoutes = [
    { path : '' , route : eventRouter}
]

defaultRoutes.forEach( route => {
    router.use(route.path, route.route)
})

module.exports = router
