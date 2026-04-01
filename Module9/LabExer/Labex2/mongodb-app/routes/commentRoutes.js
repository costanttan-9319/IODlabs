// routes/commentRoutes.js
"use strict";

let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// We pass (req, res) directly. This is the cleanest way.
router.post('/create', (req, res) => {
    Controllers.commentController.createComment(req, res);
});

// Using :postId as a parameter to find comments for a specific post
router.get('/:postId', (req, res) => {
    Controllers.commentController.getCommentsForPost(req, res);
});

module.exports = router;