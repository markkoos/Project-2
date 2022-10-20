// use sequelize model and datatype
const{ Model, DataTypes } = require('sequelize');

// allows the form model to connect to the server
const sequelize = require('../config/connection');

class Form extends Model {};

Form.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true, 
        },
        aboutme:{
            type: DataTypes.STRING,
            allowNull: true, 
        },
        steamUsername:{
            type: DataTypes.STRING,
            allowNull: true, 
        },
        twitchUsername:{
            type: DataTypes.STRING,
            allowNull: true, 
        },
        gameGenre:{
            type: DataTypes.STRING,
            allowNull: true, 
        },
        favoriteGame:{
            type: DataTypes.STRING,
            allowNull: true, 
        },
        favoriteConsole:{
            type: DataTypes.STRING,
            allowNull: true, 
        },
        avatar:{
            type: DataTypes.STRING,
            allowNull: true,
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'form',
    }
);

// not sure why it only works with brackets
module.exports = {Form};