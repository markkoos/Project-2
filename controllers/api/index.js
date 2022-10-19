const router = require('express').Router();
const formRoutes = require('./form-routes');
const loginRoutes = require('./login-routes')
const profileRoutes = require(`./profile-routes`);
const feedRoutes = require(`./feed-routes`);

// router.use('/tests', modelRoutes);
router.use('/form', formRoutes);
router.use('/login', loginRoutes);
router.use(`/myprofile`, profileRoutes)
router.use(`/feed`, feedRoutes);

module.exports = router;
