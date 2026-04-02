const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Matches GET requests to /api/comments
router.get('/', (req, res) => {
    Controllers.commentController.getComments(res);
});

// Matches POST requests to /api/comments/create
router.post('/create', (req, res) => {
    Controllers.commentController.createComment(req.body, res);
});

module.exports = router;