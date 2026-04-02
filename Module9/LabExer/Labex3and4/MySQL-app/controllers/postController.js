"use strict";
const Models = require("../models");

// Retrieves all posts and includes the Author (User) data
const getPosts = (res) => {
    Models.Post.findAll({ include: Models.User }).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

// Creates a post (ensure the request body includes a valid userId)
const createPost = (data, res) => {
    Models.Post.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

module.exports = {
    getPosts, createPost
};