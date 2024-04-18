const axios = require("axios")

const eventHandler = async( req, res) => {
    console.log(req.body)

    const {type , data} = req.body

    switch (type) {
        case "CommentCreated":
            const status = data.content.includes('orange') ? 'rejected' : 'approved'
            const payload = {
                type : "CommentModerated",
                data : {
                    id : data.id,
                    postID : data.postID,
                    status : status,
                    content : data.content
                }
            }
            await axios.post('http://event-srv:6000/event-bus', payload)           
            
            break;
    
        default:
            break;
    }


    res.status(200).send({ data : req.body})
}

module.exports = {
    eventHandler
}