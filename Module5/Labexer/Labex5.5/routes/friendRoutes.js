const express = require('express');
const router = express.Router();
const friendController = require('../controllers/friendController');

// All logic is now handled in the controller file

router.get('/', (req, res) => {
    friendController.getAllFriends(req, res);
});

router.get('/filter', (req, res) => {
    friendController.filterFriends(req, res);
});

router.get('/info', (req, res) => {
    friendController.getRequestInfo(req, res);
});

router.get('/:id', (req, res) => {
    friendController.getFriendById(req, res);
});

router.post('/', (req, res) => {
    friendController.addFriend(req, res);
});

router.put('/:id', (req, res) => {
    friendController.updateFriend(req, res);
});

module.exports = router;