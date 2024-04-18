const posts = {}

const handleEvent = ( type, data) => {
    switch(type){
        case "PostCreated" : {
            console.log('POST Created')
            const { id , title} = data
            posts[id] = { id , title, comments : []}
            break;
        }
        case "CommentCreated" : {
            console.log("Comment Created")
            const { id , content , postID, status} = data
            const post = posts[postID]
            post.comments.push({ id, content, status})
            break;
        }
        case "CommentUpdated" : {
            console.log("Comment Updated")
            const { id , content , postID, status} = data
            const post = posts[postID]
            const comment = post.comments.find( item => item.id == id)
            comment.status = status
            comment.content = content
            break;
        }
        default :
            break
    }
}

const eventHandler = ( req, res) => {
    const { type ,  data} = req.body   
    handleEvent(type, data)
    
    res.send({data : req.body})
}

const updateEvents = ( events) => {
    events.forEach(element => {
        console.log("Processing Event :", element.type)
        handleEvent(element.type, element.data)
    });
}

const getPosts = async(req, res) => {

    res.status(200).send({ data : posts})
}

module.exports = {
    eventHandler,
    getPosts,
    updateEvents
}