const fs = require('fs');
class PeopleServices{
    getPeople(){
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) throw err;
                res(JSON.parse(data).people);
            });
        });
    }}


module.exports = new PeopleServices();

