const router = require('express').Router();
const formRoute = require('./form-routes')


router.use('/form', formRoute);


module.exports = router;