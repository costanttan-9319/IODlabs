"use strict";
const { DataTypes, Model, Op } = require("sequelize"); // Added Op here
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}

Like.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    sequelize: sequelizeInstance,
    modelName: 'likes',
    timestamps: true,
    indexes: [
        {
            // Prevents a user from liking the same post twice
            unique: true,
            fields: ['userId', 'postId'],
            where: {
                postId: {
                    [Op.ne]: null // Correctly using Op.ne (not equal)
                }
            }
        },
        {
            // Prevents a user from liking the same comment twice
            unique: true,
            fields: ['userId', 'commentId'],
            where: {
                commentId: {
                    [Op.ne]: null
                }
            }
        }
    ]
});

module.exports = Like;