const express = require("express");
const router = express.Router();
const peopleRoutes = require("./people/people.routes")
const messageRoutes = require('../routes/message/message.routes')
router.use("/people", peopleRoutes);
router.use("/message", messageRoutes);

module.exports = router;