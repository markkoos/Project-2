const express = require('express');
const routes = require('./controllers');
const sequelize = require(`./config/connection`);
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `/public/assets/index.html`))
})

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `/public/assets/index.html`))
})

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then (() => {app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`))
});
