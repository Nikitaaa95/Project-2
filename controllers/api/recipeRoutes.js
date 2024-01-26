// Imports and initializes express router 
const router = require('express').Router();
const { Recipe, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Post route for creating a new recipe 
router.post('/', async (req, res) => {
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

// 
router.get('/', (req, res) => {
  // Finds all the recipes  
  Recipe.findAll( {
    // include: [Recipe]
  }).then((recipeData) => {
    res.json(recipeData);
  });
});

  // Updates the recipe post using a get route (generates the html for recipe page)
router.get('/:id', async (req, res) => {
try {
  const recipeData = await Recipe.findByPk(req.params.id, {
  include: [
    ],
  });

  const recipe = recipeData.get({ plain: true });
  console.log("Post: " + JSON.stringify(post))
  res.render('profile', {
    ...recipe,
    logged_in: req.session.logged_in
  });
} catch (err) {
  res.status(500).json(err);
}
});

    //Get all the existing blog posts to show on recipes page  
router.get('/', async (req, res) => {
  try {
    // Finds every single post in the post table 
    const recipeData = await Recipe.findAll({
      attributes: { exclude: ['password'] },
      include: [{ model: User}],
    });
    
    const recipes = recipeData.map((post) => recipe.get({ plain: true }));
    console.log('posts' + JSON.stringify(posts))

    res.render('recipe', {
      recipes,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

    module.exports = router;

  