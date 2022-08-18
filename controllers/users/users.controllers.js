const UsersServices = require('../../services/users/users.services')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRound = 10;

class UserControllers{
    async getUsers() {
        let users = await UsersServices.getUsers();
        return users;
    }
}
module.exports = new UserControllers