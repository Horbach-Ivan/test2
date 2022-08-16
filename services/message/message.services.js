let messageWhenAuthorized = 'вы авторизованы успешно'
class MessageServices{
    getMessageWhenAuthorized() {
        return new Promise((res, rej) =>{
            res(messageWhenAuthorized)
        })
    }

}
module.exports = new MessageServices();