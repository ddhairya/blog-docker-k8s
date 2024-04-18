const express = require('express')
const router = express.Router()
const moderationRoute = require('./moderation.route')

const defaultRoutes = [
    { path : "" , route : moderationRoute}
]

defaultRoutes.forEach( route => {
    router.use(route.path , route.route)
})

module.exports = router