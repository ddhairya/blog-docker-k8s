const express = require('express')
const router = express.Router()
const clientRouter = require('./client')

const defaultRoutes = [
    { path : '', route : clientRouter}
]

defaultRoutes.forEach( route => {
    router.use(route.path, route.route)
})

module.exports = router