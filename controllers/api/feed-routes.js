const router = require(`express`).Router();
const { Form } = require(`../../models/form`);
const { Feed } = require(`../../models/feed`);
const axios = require(`axios`);
require('dotenv').config();


router.get(`/`, async (req, res) => {
  try {
  const options = {
      method: 'GET',
      url: 'https://video-game-news.p.rapidapi.com/all',
      headers: {
          'X-RapidAPI-Key': process.env.API_KEY,
          'X-RapidAPI-Host': 'video-game-news.p.rapidapi.com'
      }
  };

  axios.request(options).then(async function (response) {
    //   console.log(response.data);
      const resp = await response.data[1];

      const apiData = [];

      await apiData.push(resp);

      await console.log(apiData[0].text);

      await res.render(`feed`, apiData[0]);

    //   console.log(url)
      }).catch(function (error) {
      console.error(error);
      });

    // res.render(`feed`);
  } catch (err) {
      res.status(500).json(err)
  }
});

  module.exports = router;




