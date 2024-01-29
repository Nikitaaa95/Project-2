// Imports and initializes express router 
const router = require('express').Router();
const { Recipe, User } = require('../../models');
const { Op } = require ('sequelize');
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

router.post('/search', async (req, res) => {
  try {
    const keyword = req.body.search || '';
    console.log(keyword);

    const userData = await User.findAll({
      attributes: ['id'],
      where: {
        name: {
          [Op.like]: `%${keyword}%`
        }
      }
    });

    const userId = userData.map(user => user.id);

    const recipeData = await Recipe.findAll({
      attributes:['title','difficulty'],
      where: {
      [Op.or]: [
        {
        title: {
          [Op.like]: `%${keyword}%`
        }
      },
      {
        ingredients: {
          [Op.like]: `%${keyword}%`
        }
      },
      {
        difficulty: {
          [Op.like]: `%${keyword}%`
        }
      },
      {
        user_id:{
          [Op.in]: userId
        }
      }]
      }
    });
      console.log(recipeData);
      res.json(recipeData);
    }
    catch (err) {
      res.status(500).json(err);
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
router.get('/', withAuth, (req, res) => {
  // Finds all the recipes  
  Recipe.findAll( {
    // include: [Recipe]
  }).then((recipeData) => {
    res.json(recipeData);
  });
});

//   // Updates the recipe post using a get route (generates the html for recipe page)
// router.get('/:id', async (req, res) => {
// try {
//   const recipeData = await Recipe.findByPk(req.params.id, {
//   include: [
//     ],
//   });

//   const recipe = recipeData.get({ plain: true });
//   console.log("Post: " + JSON.stringify(post))
//   res.render('recipe', {
//     ...recipe,
//     logged_in: req.session.logged_in
//   });
// } catch (err) {
//   res.status(500).json(err);
// }
// });

    //Get all the existing blog posts to show on recipes page  
router.get('/', async (req, res) => {
  try {
    // Finds every single post in the post table 
    const recipeData = await Recipe.findAll({
      attributes: { exclude: ['password'] },
      include: [{ model: User}],
    });
    
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
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