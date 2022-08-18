const express = require("express");
const router = express.Router();
const UsersController = require("../../controllers/users/users.controllers")
const bodyParser = require('body-parser')
const authenticatToken = require('../../middleware/auth')


/**
 * @swagger
 * /users:
 *  get:
 *      summary: Получить список пользователей
 *      tags:
 *          - Users
 *      responses:
 *          '200':
 *              description: Успешный ответ
 */ 

router.get('/',authenticatToken , async (req, res) =>{
    try {
        const user  = await UsersController.getUsers();
        res.send(user)
    } catch(e){
        console.log(e)
    }
});

module.exports = router