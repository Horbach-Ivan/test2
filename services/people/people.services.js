const fs = require('fs');
class PeopleServices{
    getPeople(){
        return new Promise((res, rej) => {
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) throw err;
                res(JSON.parse(data).people);
            });
        });
    }

    
    addPeople(body){
        return new Promise((res, rej)=>{
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) throw err;
                let fileData = JSON.parse(data);
                let people = fileData.people;
                people.push(body);

                fs.writeFile('data.json', JSON.stringify(fileData, null, 4 ), (err) =>{
                    if (err) throw err; 
                }); 

                res('Person Added')

            });
        })
    }
    changePeopleName(body){
        return new Promise((res, rej)=>{
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) throw err;
                let fileData = JSON.parse(data);
                let people = fileData.people;
               let one = people.filter((item)=> item.id == body.id)
               one[0].name = body.name
               

                fs.writeFile('data.json', JSON.stringify(fileData, null, 4 ), (err) =>{
                    if (err) throw err; 
                }); 

                res('Person name changed')

            });
        })
    }
    deletePeople(body){
        return new Promise((res, rej)=>{
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) throw err;
                let fileData = JSON.parse(data);
                let people = fileData.people;
                people.forEach((item, index) => {
                    if (body.id == item.id){
                        people.splice(index, 1);
                    };
                });
          
               

                fs.writeFile('data.json', JSON.stringify(fileData, null, 4 ), (err) =>{
                    if (err) throw err; 
                }); 

                res('People with ' + body.id + ' id is deleted')

            });
        })
    }
}

module.exports = new PeopleServices();

