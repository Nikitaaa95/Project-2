const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preptime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cooktime: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    step1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    step2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    step3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    step4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    step5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    step6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;
