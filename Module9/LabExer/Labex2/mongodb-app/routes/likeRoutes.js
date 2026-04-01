// routes/likeRoutes.js
"use strict";

const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// POST request to create a new like (for either a post or a comment)
// We use the aggregated Controllers object for consistency
router.post('/', (req, res) => {
    Controllers.likeController.createLike(req, res);
});

module.exports = router;