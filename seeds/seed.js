const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const recipeData = require('./recipeData.json');

const seedDatabase = async () => {

  for (const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
