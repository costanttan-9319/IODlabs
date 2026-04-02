const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.likeController.getLikes(res);
});

// One endpoint to rule them all
router.post('/toggle', (req, res) => {
    Controllers.likeController.toggleLike(req.body, res);
});

module.exports = router;