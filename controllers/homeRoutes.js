const router = require('express').Router();
const { Recipe, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

//Get the login/signup page to render
router.get('/', async (req, res) => {
  try {
    res.render('login', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

// renders the current recipes on profile page
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const recipeData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe}],
    });
    const recipe = recipeData.get({ plain: true });

    res.render('profile', {
      ...recipe,
      logged_in: true,
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
