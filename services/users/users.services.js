const fs = require('fs');

class UsersServices {
    getUsers(){
        return new Promise ((res, rej) => {
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) throw err;
                res(JSON.parse(data).users);
            });
        });
    }
}

module.exports = new UsersServices