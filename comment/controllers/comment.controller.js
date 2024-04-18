const { randomBytes} = require('crypto')
const axios = require('axios')

const commentsByPostID = {}

const getAllComment = async(req, res) => {
    const postID = req.params.id
    res.status(200).send({ data : commentsByPostID[postID] || []})
}

const createComment = async(req, res) => {
    const postID = req.params.id
    const id = randomBytes(4).toString('hex')
    const { content } = req.body
    const comments = commentsByPostID[postID] || []
    comments.push( { id, content, status: "pending"})
    commentsByPostID[postID] = comments
    const payload = {
        type : "CommentCreated",
        data : { id , content, postID, status: "pending"}
    }
    await axios.post('http://event-srv:6000/event-bus', payload)
    res.status(201).send({ data : commentsByPostID[postID]})
}

const eventHandler = async(req, res) => {
    console.log(" Received Event : ", req.body)

    const { type, data } = req.body

    switch (type) {
        case 'CommentModerated':
            const { id, postID, status, content} = data
            const comments = commentsByPostID[postID]
            const comment = comments.map( item => item.id == id)
            comment.status = status

            const payload = {
                type : "CommentUpdated",
                data : { id , content, postID, status }
            }
            await axios.post('http://event-srv:6000/event-bus', payload)
            
            break;
    
        default:
            break;
    }

    res.status(200).send({data : req.body})
}

module.exports = {

    getAllComment,
    createComment,
    eventHandler
}