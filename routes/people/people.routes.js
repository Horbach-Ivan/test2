const express = require("express");
const router = express.Router();
const PeopleController = require("../../controllers/people/peopleContollers")

router.get('/', async (req, res) =>{
    try {
        const people  = await PeopleController.getPeople();
        res.send(people)
    } catch(e){
        console.log(e)
    }
})

module.exports = router;