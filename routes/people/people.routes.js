const express = require("express");
const router = express.Router();
const PeopleController = require("../../controllers/people/peopleContollers")
const bodyParser = require('body-parser')
const authenticatToken = require('../../middleware/auth')
/**
 * @swagger
 * /people:
 *  get:
 *      summary: Получить список людей
 *      tags:
 *          - People
 *      responses:
 *          '200':
 *              description: Успешный ответ
 */ 

router.get('/',authenticatToken , async (req, res) =>{
    try {
        const people  = await PeopleController.getPeople();
        res.send(people)
    } catch(e){
        console.log(e)
    }
});

/**
 * @swagger
 * /people/addPeople:
 *  post:
 *      summary: Добавить человека в список
 *      tags:
 *        - People
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Person
 *          required: true
 *          description: Добавить объект со свойствами
 *          schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          '200':
 *              description: Успешный ответ
 * definitions:
 *  Person:
 *      type: object
 *      required:
 *          - id
 *          - name
 *          - age
 *          - country
 *          - gender
 *      properties:
 *          id: 
 *              type: integer
 *          name: 
 *              type: string
 *          age: 
 *              type: integer
 *          country:
 *              type: string
 *          gender:
 *              type: string
 */ 
router.post('/addPeople', authenticatToken , async (req, res) =>{
    try {
        const people = await PeopleController.addNewPeople(req.body);
        res.send(people);
    } catch(e) {
        console.log(e) 
    }
});

/**
 * @swagger
 * /people/changeName/{id}:
 *  put:
 *      summary: Заменить имя человека в списке по его id
 *      tags:
 *        - People
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Указать id который нужно заменить
 *          type: integer
 *        - in: body
 *          name: Person
 *          required: true
 *          description: Объект для замены  
 *          schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          '200':
 *              description: Успешный ответ
 * definitions:
 *  Person:
 *      type: object
 *      required:
 *          - id
 *          - name
 *          - age
 *          - country
 *          - gender
 *      properties:
 *          id: 
 *              type: integer
 *          name: 
 *              type: string
 *          age: 
 *              type: integer
 *          country:
 *              type: string
 *          gender:
 *              type: string
 */ 

router.put('/changeName', authenticatToken , async (req, res) =>{
    try {
        const people = await PeopleController.changePeopleNam(req.body);
        res.send(people);
    } catch(e) {
        console.log(e) 
    }
});

/**
 * @swagger
 * /people/deleteId:
 *  delete:
 *      summary: Удалить человека из списка
 *      tags:
 *        - People
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Указать id который нужно удалить
 *          type: integer
 *      responses:
 *          '200':
 *              description: Успешный ответ
 */ 
router.delete('/deleteId', authenticatToken , async (req, res) =>{
    try {
        const people = await PeopleController.deletePeople(req.body);
        res.send(people);
    } catch(e) {
        console.log(e) 
    }
});


module.exports = router;