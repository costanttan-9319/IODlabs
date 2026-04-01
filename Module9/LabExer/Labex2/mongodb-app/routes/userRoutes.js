"use strict";

let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// GET all users: http://localhost:8080/api/users
router.get('/', (req, res) => {
    Controllers.userController.getUsers(req, res);
});

// CREATE a user: http://localhost:8080/api/users/create
router.post('/create', (req, res) => {
    Controllers.userController.createUser(req, res);
});

module.exports = router;