const sequelize = require('../config/connection');
<<<<<<< HEAD
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
=======
const { User, Project } = require('../models');

const recipeData = require('./recipeData.json');

const seedDatabase = async () => {

  for (const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
>>>>>>> 545ca7d09d22ac25b0eff3ad7abf7ae39847d1b3

  process.exit(0);
};

seedDatabase();
