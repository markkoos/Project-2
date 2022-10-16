const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile('login.html', {root: 'public'})
})


module.exports = router;