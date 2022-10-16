const router = require('express').Router();
const modelRoutes = require('./model-routes');
const formRoutes = require('./form-routes');
const loginRoutes = require('./login-routes')

// router.use('/tests', modelRoutes);
router.use('/form', formRoutes);
router.use('/login', loginRoutes);

module.exports = router;
