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

// Get the recipe submission page to render 
router.get('/profile', async (req, res) => {
  console.log('getroute')
  try {
    res.render('profile', {
    });
    console.log("rendered login")
  } catch (err) {
    res.status(500).json(err);
  }
});
  

// .recipeData.json 

// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const recipeData = await Recipe.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       recipes, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// // Renders the dashboard 
// router.get('/dashboard', withAuth, async (req, res) => {

//   // Get the user first using the user's id and then getting all the Posts associated with the User's id
//   const recipeData = await User.findByPk(req.session.user_id, {
//     attributes: { exclude: ['password'] },
//     include: [{ model: Post}],
//   });

//   const user = recipeData.get({ plain: true });

//   console.log("user: " + JSON.stringify(user))

//   // Renders dashboard.handlebars
//   res.render('dashboard',   { ...user,
//     logged_in: true });
//   });

// router.get('/', async (req, res) => {
//   return res.render('login');
// });

module.exports = router;
