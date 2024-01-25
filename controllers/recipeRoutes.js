// Imports and initializes express router 
const router = require('express').Router();
const { Recipe, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Post route for creating a new recipe 
router.post('/', async (req, res) => {
  try {
    console.log("session: " + JSON.stringify(req.session))
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Renders the recipe submission page***  
router.get('/', withAuth, async (req, res) => {

    // Get the user first using the user's id and then getting all the Posts associated with the User's id
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post}],
    });
    
    const user = userData.get({ plain: true });
  
    console.log("user: " + JSON.stringify(user))
    
    // Renders recipe.handlebars
    res.render('recipe',   { ...user,
      logged_in: true });
    });