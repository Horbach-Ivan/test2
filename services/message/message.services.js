const fs = require('fs');
class MessageServices{
    getMessageWhenAuthorized() {
            return new Promise((res, rej) => {
                fs.readFile('data.json', 'utf8', (err, data) => {
                    if (err) throw err;
                    res(JSON.parse(data).messages);
                });
            });
        }}
    

module.exports = new MessageServices();