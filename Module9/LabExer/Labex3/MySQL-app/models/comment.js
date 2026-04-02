const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model { }

Comment.init({
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true 
    },
    content: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    }
}, {
    sequelize: sequelizeInstance,
    modelName: 'comments',
    timestamps: true,
    freezeTableName: true
});

module.exports = Comment;