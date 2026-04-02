'use strict'
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Like = require('./like');

async function init() {
    // Associations with Cascading Deletes
    User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
    Post.belongsTo(User, { foreignKey: 'userId' });

    User.hasMany(Comment, { foreignKey: 'userId', onDelete: 'CASCADE' });
    Comment.belongsTo(User, { foreignKey: 'userId' });

    User.hasMany(Like, { foreignKey: 'userId', onDelete: 'CASCADE' });
    Like.belongsTo(User, { foreignKey: 'userId' });

    Post.hasMany(Comment, { foreignKey: 'postId', onDelete: 'CASCADE' });
    Comment.belongsTo(Post, { foreignKey: 'postId' });

    Post.hasMany(Like, { foreignKey: 'postId', onDelete: 'CASCADE' });
    Like.belongsTo(Post, { foreignKey: 'postId' });

    Comment.hasMany(Like, { foreignKey: 'commentId', onDelete: 'CASCADE' });
    Like.belongsTo(Comment, { foreignKey: 'commentId' });

    // Syncing logic
    await User.sync();
    await Post.sync();
    await Comment.sync();
    await Like.sync();
};

init();

module.exports = { User, Post, Comment, Like };