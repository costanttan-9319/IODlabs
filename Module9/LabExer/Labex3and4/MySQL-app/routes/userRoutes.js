const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Matches GET requests to /api/users
router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
});

// Matches POST requests to /api/users/create
router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res);
});

// Matches PUT requests to /api/users/:id
router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res);
});

// Matches DELETE requests to /api/users/:id
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res);
});

module.exports = router;