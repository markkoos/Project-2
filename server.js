const express = require('express');
const exphbs = require(`express-handlebars`);
const routes = require('./controllers');

// import sequelize connection
const sequelize = require(`./config/connection`);
// creating template engine
const hbs = exphbs.create({});



const app = express();
const PORT = process.env.PORT || 3001;

// set handlebars as template engine 
app.engine(`handlebars`, hbs.engine);
app.set(`view engine`, `handlebars`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(routes);

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `/public/assets/index.html`))
})

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `/public/assets/index.html`))
})


// sync sequelize models to the database, then turn on the server
sequelize.sync({force: true}).then (() => {app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`))
});