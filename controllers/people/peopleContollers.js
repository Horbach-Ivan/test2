const PeopleServices = require('../../services/people/people.services')
class PeopleController {
    async getPeople(){
        let people = await PeopleServices.getPeople();
        return people
    }
    async addNewPeople(body) {
        let people = await PeopleServices.addPeople(body);
        return people
    }
    async changePeopleName(body) {
        let people = await PeopleServices.changePeopleName(body);
        return people
    }
    async deletePeople(body) {
        let people = await PeopleServices.deletePeople(body);
        return people
    }
}


module.exports = new PeopleController();