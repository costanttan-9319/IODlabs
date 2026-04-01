"use strict";
let Models = require("../models");

const getUsers = (req, res) => {
    Models.User.find({})
        .then(data => {
            res.status(200).send({ result: 200, data: data });
        })
        .catch(err => {
            console.error("Error fetching users:", err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const createUser = (req, res) => {
    // Extract data from the request body
    const data = req.body;

    new Models.User(data).save()
        .then(savedData => {
            res.status(201).send({ result: 201, data: savedData });
        })
        .catch(err => {
            console.error("Error creating user:", err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
    getUsers,
    createUser
};