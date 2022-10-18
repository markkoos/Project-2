const router = require(`express`).Router();
const { Form } = require(`../../models/form`);

// get route to the feed-page
router.get(`/`, async (req, res) => {
    try {
    
        res.render(`feed`);

    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;