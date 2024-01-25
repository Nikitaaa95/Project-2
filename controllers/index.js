const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
// router.use('/', )
module.exports = router;
