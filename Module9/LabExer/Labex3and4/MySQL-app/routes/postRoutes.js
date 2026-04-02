const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Matches GET requests to /api/posts
router.get('/', (req, res) => {
    Controllers.postController.getPosts(res);
});

// Matches POST requests to /api/posts/create
router.post('/create', (req, res) => {
    Controllers.postController.createPost(req.body, res);
});

module.exports = router;