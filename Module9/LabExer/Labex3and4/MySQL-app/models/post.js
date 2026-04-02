const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model { }

Post.init({
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true 
    },
    title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    description: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    image: { 
        type: DataTypes.STRING, 
        allowNull: true 
    }
}, {
    sequelize: sequelizeInstance,
    modelName: 'posts',
    timestamps: true,
    freezeTableName: true
});

module.exports = Post;