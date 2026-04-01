"use strict";
let Models = require("../models");

const createComment = (req, res) => {
    // We take the data specifically from the request body
    const data = req.body;

    new Models.Comment(data).save()
        .then(savedData => {
            res.status(201).send({ result: 201, data: savedData });
        })
        .catch(err => {
            console.error("Error creating comment:", err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const getCommentsForPost = (req, res) => {
    // Finds all comments linked to a specific Post ID from the URL params
    Models.Comment.find({ postId: req.params.postId })
        .populate({ path: 'userId', select: 'firstName lastName' }) 
        .then(data => {
            res.status(200).send({ result: 200, data: data });
        })
        .catch(err => {
            console.error("Error fetching comments:", err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
    createComment,
    getCommentsForPost
};