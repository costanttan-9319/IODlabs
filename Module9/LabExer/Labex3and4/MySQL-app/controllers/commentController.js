"use strict";
const Models = require("../models");

// Retrieves all comments, including information about the Author and the Post
const getComments = (res) => {
    Models.Comment.findAll({ include: [Models.User, Models.Post] }).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

// Creates a comment (requires userId and postId in the request body)
const createComment = (data, res) => {
    Models.Comment.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

module.exports = {
    getComments, createComment
};