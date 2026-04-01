// models/like.js

const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post" 
    },
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("like", likeSchema);