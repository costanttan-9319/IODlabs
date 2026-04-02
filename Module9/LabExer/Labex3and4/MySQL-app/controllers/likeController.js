"use strict";
const Models = require("../models");

const getLikes = (res) => {
    Models.Like.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const toggleLike = (data, res) => {
    // 1. We look for a record that matches the userId and the postId (or commentId)
    Models.Like.findOne({ where: data }).then(like => {
        if (like) {
            // 2. If it already exists, the user clicked "Like" again, so we DELETE it (Unlike)
            return like.destroy().then(() => {
                res.send({ result: 200, message: "Unliked successfully" });
            });
        } else {
            // 3. If it doesn't exist, this is a new interaction, so we CREATE it (Like)
            return Models.Like.create(data).then(newLike => {
                res.send({ result: 200, message: "Liked successfully", data: newLike });
            });
        }
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

module.exports = {
    getLikes, toggleLike
};