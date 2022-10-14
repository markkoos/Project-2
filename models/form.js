// use sequelize model and datatype
const{Model, DataTypes} = require('sequelize');

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
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'form',
    }
)