const fs = require('fs')
let user1 = {
    id:1,
    name:'Ivan',
    age:25,
    isMan:true,
    country:'Belarus',
    email: 'minsk17sanyo@gmail.com'
};

let user2 = {
    id:2,
    name:'Ilona',
    age:27,
    isMan:false,
    country:'Belarus',
    email: 'ilonochka@gmail.com'
};
let user3 = {
    id:3,
    name:'Mitya',
    age:22,
    isMan:true,
    country:'Belarus',
    email: 'mityalox@gmail.com'
}
let users = [ user1, user2, user3 ]

let data = JSON.stringify(users, null, 2)
fs.writeFile('users.json', data, (err)=> {
    if (err) throw err;
    
});
fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    let ivan = JSON.parse(data)
    console.log(ivan);
})
class PeopleServices{
    getPeople(){
        return new Promise ((res, rej)=> {
            res(users)
        });
    }

}
module.exports = new PeopleServices();
