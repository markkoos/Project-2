const router = require(`express`).Router();
const { Form } = require(`../../models/form`);

// const user = [
//     {
//         username: `Markkoos`,
//         aboutme: `gamertime, baby`,
//         steam_username: `markkoos`,
//         twitch_username: `markkoos`,
//         game_genre: `A`,
//         favorite_game: `Undertale`,
//         favorite_console: `A`,
//     },
// ]

// Get route to user-profile page
router.get(`/`, async (req, res) => {

    // rendering the user-profile page
     res.render(`profile`);
 
});

router.get(`/:id`, async (req, res) => {
    try {
        const userData = await Form.findByPk(req.params.id)

        const user = userData.get({ plain: true});

        res.render(`profile`, user)
    } catch (err) {
        res.status(500).json(err)
    }
    // return res.render(`profile`, user[0])
})

module.exports = router;