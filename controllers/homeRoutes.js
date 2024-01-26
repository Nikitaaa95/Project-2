const router = require('express').Router();
const { Recipe } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

//Get the login/signup page to render 
router.get('/', async (req, res) => {
  console.log('getroute')
  try {
    res.render('login', {
    });
    console.log("rendered login")
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Get the profile page to render 
// router.get('/profile', async (req, res) => {
//   console.log('getroute')
//   try {
//     res.render('profile', {
//     });
//     console.log("rendered login")
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Gets one recipe by the id and posts it to the recipe page 
router.get('/recipe/:id', async (req, res) => {
  try {
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

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });

    console.log("profile handlebars: " + JSON.stringify({
      ...user,
      logged_in: true
    }))

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
