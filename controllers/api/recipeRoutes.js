// Imports and initializes express router 
const router = require('express').Router();
const { Recipe, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Post route for creating a new recipe 
router.post('/', async (req, res) => {
  console.log('post')
  try {
    console.log('hi ' + JSON.stringify(req.body))
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Gets one recipe and posts it to the recipe page 
router.get('/:id', async (req, res) => {
  console.log('get route')
  try {
    console.log('get route2')
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const recipes = recipeData.get({ plain: true });
    res.render('recipe', {
      ...recipes,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 
router.get('/', (req, res) => {
  // Finds all the recipes  
  Recipe.findAll( {
    // include: [Recipe]
  }).then((recipeData) => {
    res.json(recipeData);
  });
});

    module.exports = router;