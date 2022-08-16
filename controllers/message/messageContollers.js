const MessageServices = require('../../services/message/message.services')
class MessageController {
    async getMessage() {
        let message = await MessageServices.getMessage()
        return message
    }
}
module.exports = new MessageController();