// use sequelize model and datatype
const{ Model, DataTypes } = require('sequelize');

// allows the form model to connect to the server
const sequelize = require('../config/connection');

class Form extends Model{};

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
            allowNull: false, 
        },
        aboutme:{
            type: DataTypes.STRING,
            allowNull: true, 
        },
        steamUsername:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        twitchUsername:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        gameGenre:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        favoriteGame:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        favoriteConsole:{
            type: DataTypes.STRING,
            allowNull: false, 
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

module.exports = Form;