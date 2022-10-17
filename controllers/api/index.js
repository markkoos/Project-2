const router = require('express').Router();
const modelRoutes = require('./model-routes');
const formRoutes = require('./form-routes');
const loginRoutes = require('./login-routes')
const profileRoutes = require(`./profile-routes`);

// router.use('/tests', modelRoutes);
router.use('/form', formRoutes);
router.use('/login', loginRoutes);
router.use(`/myprofile`, profileRoutes)

module.exports = router;
