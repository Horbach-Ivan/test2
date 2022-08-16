const PeopleServices = require('../../services/people/people.services')
class PeopleController {
    async getPeople(){
        let people = await PeopleServices.getPeople();
        return people
    }
}

module.exports = new PeopleController();