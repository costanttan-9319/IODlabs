"use strict";
let Models = require("../models");

const createPost = (req, res) => {
    // Extracting data from the request body
    const data = req.body;

    new Models.Post(data).save()
        .then(savedData => {
            res.status(201).send({ result: 201, data: savedData });
        })
        .catch(err => {
            console.error("Error creating post:", err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const getPosts = (req, res) => {
    // .populate('userId') grabs the user's details instead of just showing the ID
    Models.Post.find({})
        .populate({ path: 'userId' })
        .then(data => {
            res.status(200).send({ result: 200, data: data });
        })
        .catch(err => {
            console.error("Error fetching posts:", err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
    createPost,
    getPosts
};