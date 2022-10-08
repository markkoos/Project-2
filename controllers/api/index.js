const router = require('express').Router();
const modelRoutes = require('./model-routes');

router.use('/model', modelRoutes);

module.exports = router;
