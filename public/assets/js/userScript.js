const router = require('express').Router();

let username;
let userDescription;
let userInfo;
let steamUsername;
let twitchUsername;
let gameGenre;
let favoriteGame;
let favoriteConsole;

if (window.location.pathname === '/userStories') {
    username = document.querySelector('.username');
    userDescription = document.querySelector('.userDescription');
    userInfo = document.querySelector('.userInfo');
    steamUsername = document.querySelector('.steamUsername');
    twitchUsername = document.querySelectorAll('.twitchUsername');
    gameGenre = document.querySelector('.gameGenre');
    favoriteGame = document.querySelector('.favoriteGame');
    favoriteConsole = document.querySelectorAll('.favoriteConsole');
  }
  
  const show = (elem) => {
    elem.style.display = 'inline';
  };
  
  const hide = (elem) => {
    elem.style.display = 'none';
  };

let activeUserStories = {};

const getUserStories = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });


// grabs data from HTML form and posts/stores it
router.get('/data', async(req, res) =>{
    const userData = req.body;
        try{
            res.getUserStories('form.html', {root:'public'});
        }catch(err){
            res.status(500).json(err);
        }
    console.log(userData); 
})

render.activeUserStories();

module.exports = router;


        // <div> 
        //         <h2 class="username"> User Name: </h2>
        //         <h2 class="userDescription"> User Description: </h2>
        //         <h2 class="userInfo"> User Info: </h2>
        //         <h2 class="steamUsername"> Steam Username: </h2>
        //         <h2 class="twitchUsername"> Twitch Username: </h2>
        //         <h2 class="gameGenre"> Game Genre: </h2>
        //         <h2 class="favoriteGame"> Favorite Game: </h2>
        //         <h2 class="favoriteConsole"> Favorite Console: </h2>
        //         </div>