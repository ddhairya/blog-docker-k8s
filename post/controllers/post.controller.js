const { randomBytes } = require('crypto')
const axios = require('axios')

const posts = {}

const getAllPost = async(req, res) => {
    res.send( {data : posts})
}

const createPost = async(req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body

    posts[id] = {
        id, title
    }
    let payload = {
        type : "PostCreated",
        data : posts[id]
    }
    await axios.post('http://event-srv:6000/event-bus', payload )

    res.status(201).send(posts[id])
}

const eventHandler = async ( req, res) => {
    console.log( "Received Event : ",req.body)

    res.status(200).send({ data : req.body})
}

module.exports = {
    getAllPost,
    createPost,
    eventHandler
}