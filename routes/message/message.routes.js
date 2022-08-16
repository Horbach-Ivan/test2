const express = require("express");
const router = express.Router();
const MessageController = require("../../controllers/message/messageContollers")

router.get('/', async (req, res) =>{
    try {
        const message  = await MessageController.getMessage()
        res.send(message)
    } catch(e){
        console.log(e)
    }
})

module.exports = router;