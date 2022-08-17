const MessageServices = require('../../services/message/message.services')
class MessageController {
    async getMessage() {
        let message = await MessageServices.getMessageWhenAuthorized()
        return message
    }
}
module.exports = new MessageController();