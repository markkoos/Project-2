const router = require(`express`).Router();
const { Form } = require(`../../models/form`);
const { Feed } = require(`../../models/feed`);
const axios = require(`axios`);



router.get(`/`, async (req, res) => {
  try {
  const options = {
      method: 'GET',
      url: 'https://video-game-news.p.rapidapi.com/all',
      headers: {
          'X-RapidAPI-Key': '570565d3dbmshaa50c044e67a7c3p147829jsn2a024d94fd11',
          'X-RapidAPI-Host': 'video-game-news.p.rapidapi.com'
      }
  };

  axios.request(options).then(function (response) {
      console.log(response.data);
      const resp = response.data;

      const apiData = [];

      apiData.push(response.data);

      res.render(`Feed`, apiData);

      console.log(url)
      }).catch(function (error) {
      console.error(error);
      });
  } catch (err) {
      res.status(500).json(err)
  }
});

  module.exports = router;





// router.get(`/`, async (req, res) => {

//     try {
// 		res.render(`feed`);

//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

// axios.get(options)
//   .then(function (response) {
//     console.log(response);

//     const options = {
//     method: 'GET',
//     url: 'https://video-game-news.p.rapidapi.com/all',
//     headers: {
//     'X-RapidAPI-Key': '570565d3dbmshaa50c044e67a7c3p147829jsn2a024d94fd11',
//     'X-RapidAPI-Host': 'video-game-news.p.rapidapi.com'
//   }
// };
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function (){

//   })



