"use strict";

let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Passing (req, res) directly for consistency
router.get('/', (req, res) => {
    Controllers.postController.getPosts(req, res);
});

router.post('/create', (req, res) => {
    Controllers.postController.createPost(req, res);
});

module.exports = router;