// Imports and initializes express router 
const router = require('express').Router();
const { Recipe, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Post route for creating a new recipe 
router.post('/', async (req, res) => {
  // try {
    console.log("session: " + JSON.stringify(req.session))
    console.log('hi ' + JSON.stringify(req.body))
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(newRecipe);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
});

// Renders the recipe submission page***  
router.get('/', withAuth, async (req, res) => {

    // Get the user first using the user's id and then getting all the Recipes associated with the User's id
    const recipeData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe}],
    });
    
    const user = recipeData.get({ plain: true });
  
    console.log("user: " + JSON.stringify(user))
    
    // Renders recipe.handlebars
    res.render('recipe',   { ...user,
      logged_in: true });
    });

    module.exports = router;

    router.get('/', (req, res) => {
      // Finds all the posts and includes its associated Posts 
      Post.findAll( {
        // include: [Post]
      }).then((postData) => {
        res.json(postData);
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
      res.render('recipe', {
        ...recipe,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });