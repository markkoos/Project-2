const router = require(`express`).Router();
const { Form } = require(`../../models/form`);

// get route to the feed-page
router.post(`/`, async (req, res) => {
    const name = req.body.username
    try {
        const userData = await Form.findOne({
            where:{
                username: name,
            }
        })
        const user = userData.get({ plain: true});
        res.render(`feed`, user);

    } catch (err) {
        res.status(500).json(err)
    }
});


// id create a check with username to pick

router.get(`/:id`, async (req, res) => {
    try {
        const userData = await Form.findOne({ where: { id: req.params.id} });

        const user = userData.get({ plain: true});

        res.render(`feed`, user);

    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;

