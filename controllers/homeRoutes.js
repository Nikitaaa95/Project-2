const router = require('express').Router();
router.get('/', async (req, res) => {
  return res.render('profile');
});

module.exports = router;
