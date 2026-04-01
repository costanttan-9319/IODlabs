"use strict";
let Models = require("../models");

const createLike = (req, res) => {
    const { postId, commentId, userId } = req.body;

    // 1. Validation Logic
    if (!userId) {
        return res.status(400).send({ result: 400, error: "userId is required." });
    }

    if (!postId && !commentId) {
        return res.status(400).send({ result: 400, error: "Must provide postId or commentId." });
    }

    if (postId && commentId) {
        return res.status(400).send({ result: 400, error: "Provide only one: postId OR commentId." });
    }

    // 2. Create the Like
    new Models.Like({
        postId: postId || null,
        commentId: commentId || null,
        userId: userId
    }).save()
        .then(data => {
            res.status(201).send({ result: 201, data: data });
        })
        .catch(err => {
            console.error("Like Controller Error:", err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
    createLike
};