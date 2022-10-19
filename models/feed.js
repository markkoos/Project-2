const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Feed extends Model {}

Feed.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    source: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    publication: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'feed',
  }
);

module.exports = Feed;