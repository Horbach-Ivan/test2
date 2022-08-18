const express = require("express");
const router = express.Router();
const peopleRoutes = require("./people/people.routes")
const messageRoutes = require('../routes/message/message.routes')
const usersRoutes = require('../routes/users/users.routes')
router.use("/people", peopleRoutes);
router.use("/message", messageRoutes);
router.use("/users", usersRoutes)


module.exports = router;